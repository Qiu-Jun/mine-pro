/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 10:36:43
 * @LastEditors: June
 * @LastEditTime: 2024-06-15 17:24:12
 */
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { useContainer } from 'class-validator'
import { HttpStatus, Logger, UnprocessableEntityException, ValidationPipe } from '@nestjs/common'
import { join } from 'path'
import HttpFilter from '@/common/errorHandle'
import { setupSwagger } from './app.swagger'
import { isDev } from './global/env'
import { LoggerService } from './shared/logger/logger.service'
import { fastifyApp } from '@/common/adapters/fastify.adapter'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { RedisIoAdapter } from './common/adapters/socket.adapter'
import type { ConfigKeyPaths } from './config'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyApp,
     {
      bufferLogs: true,
      snapshot: true,
      // forceCloseConnections: true,
    },
  )

  const configService = app.get(ConfigService<ConfigKeyPaths>)
  const { port, globalPrefix } = configService.get('app', { infer: true })
  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  app.setGlobalPrefix(globalPrefix)
  app.useStaticAssets( {
    // 暂用  后面改回static
    root: join(__dirname, '..', 'uploads'), // 静态资源目录
    prefix: '/uploads/' // 访问静态资源的URL前缀
    // root: join(__dirname, '..', 'static'), // 静态资源目录
    // prefix: '/static' // 访问静态资源的URL前缀
  })
  // 这是express的静态资源配置
  // app.useStaticAssets(join(__dirname, '..', 'static'), {
  //   prefix: '/static'
  // })
  // app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' })
  !isDev && app.enableShutdownHooks()
  isDev && app.useGlobalInterceptors(new LoggingInterceptor())

  app.useGlobalFilters(new HttpFilter())
  app.useWebSocketAdapter(new RedisIoAdapter(app))
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
      // forbidNonWhitelisted: true, // 禁止 无装饰器验证的数据通过
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      stopAtFirstError: true,
      exceptionFactory: errors =>
        new UnprocessableEntityException(
          errors.map((e) => {
            const rule = Object.keys(e.constraints!)[0]
            const msg = e.constraints![rule]
            return msg
          })[0],
        ),
    }),
  )
  setupSwagger(app, configService)
  await app.listen(port, '0.0.0.0', async () => {
    app.useLogger(app.get(LoggerService))
    const url = await app.getUrl()
    const { pid } = process
    const logger = new Logger('NestApplication')
    if (isDev) {
      logger.log(`[${pid}] 接口文档: ${url}/api-docs`)
    }

    if (module?.hot) {
      module.hot.accept()
      module.hot.dispose(() => app.close())
    }
  })
}
bootstrap()
