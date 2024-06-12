/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 10:36:43
 * @LastEditors: June
 * @LastEditTime: 2024-06-12 11:54:48
 */
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { VersioningType, Logger } from '@nestjs/common'
import { join } from 'path'
import HttpFilter from './commom/errorHandle'
import { setupSwagger } from './app.swagger'
import { isDev } from './global/env'
import { LoggerService } from './shared/logger/logger.service'
import fastifyStatic from '@fastify/static'
import type { ConfigKeyPaths } from './config'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )

  const configService = app.get(ConfigService<ConfigKeyPaths>)
  const { port, globalPrefix } = configService.get('app', { infer: true })

  app.enableVersioning({
    type: VersioningType.URI
  })

  app.register(fastifyStatic, {
    // 暂用  后面改回static
    root: join(__dirname, '..', 'uploads'), // 静态资源目录
    prefix: '/uploads' // 访问静态资源的URL前缀
    // root: join(__dirname, '..', 'static'), // 静态资源目录
    // prefix: '/static' // 访问静态资源的URL前缀
  })

  // 这是express的静态资源配置
  // app.useStaticAssets(join(__dirname, '..', 'static'), {
  //   prefix: '/static'
  // })
  // app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' })
  app.useGlobalFilters(new HttpFilter())

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
