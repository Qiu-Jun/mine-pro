/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 10:36:43
 * @LastEditors: June
 * @LastEditTime: 2024-06-02 10:22:52
 * @FilePath: /mine-pro/packages/server/src/app.module.ts
 */
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getConfiguration } from './config/configuration'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { UploadModule } from './upload/upload.module'
import { TestModule } from './test/test.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [getConfiguration],
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env']
    }),
    UserModule,
    UploadModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
