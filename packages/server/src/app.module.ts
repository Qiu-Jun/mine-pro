/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 10:36:43
 * @LastEditors: June
 * @LastEditTime: 2024-06-05 11:12:29
 * @FilePath: \mine-pro\packages\server\src\app.module.ts
 */
import { Module } from '@nestjs/common'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerGuard, ThrottlerModule, seconds } from '@nestjs/throttler'
import { UserModule } from './user/user.module'
import { UploadModule } from './upload/upload.module'
import { TestModule } from './test/test.module'
import config from '@/config'
import { SharedModule } from '@/shared/shared.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      // 指定多个 env 文件时，第一个优先级最高
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      load: [...Object.values(config)]
    }),
    // 避免暴力请求，限制同一个接口 10 秒内不能超过 7 次请求
    ThrottlerModule.forRootAsync({
      useFactory: () => ({
        errorMessage: '当前操作过于频繁，请稍后再试！',
        throttlers: [{ ttl: seconds(10), limit: 7 }]
      })
    }),

    SharedModule,

    UserModule,
    UploadModule,
    TestModule
  ],

  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
