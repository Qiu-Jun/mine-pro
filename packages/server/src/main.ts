/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 10:36:43
 * @LastEditors: June
 * @LastEditTime: 2023-11-09 14:25:16
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { join } from 'path';
import HttpFilter from './commom/errorHandle';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useStaticAssets(join(__dirname, 'resources'), {
    prefix: '/static',
  });
  app.useGlobalFilters(new HttpFilter());

  const options = new DocumentBuilder()
    .addBearerAuth() // 添加token信息
    .setTitle('接口文档')
    .setDescription('描述信息')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
