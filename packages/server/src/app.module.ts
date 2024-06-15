/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 10:36:43
 * @LastEditors: June
 * @LastEditTime: 2024-06-15 14:33:29
 * @FilePath: \mine-pro\packages\server\src\app.module.ts
 */
import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerGuard, ThrottlerModule, seconds } from '@nestjs/throttler'
import config from '@/config'
import { join } from 'path'

import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard'

import { DatabaseModule } from '@/shared/database/database.module'
import { SystemModule } from '@/modules/system/system.module'
import { HealthModule } from '@/modules/health/health.module'
import { CommonModule } from '@/modules/common/common.module'
import { AuthModule } from '@/modules/auth/auth.module'
import { NetdiskModule } from '@/modules/netdisk/netdisk.module'
import { SharedModule } from '@/shared/shared.module'

const rootPath = process.cwd()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      // 指定多个 env 文件时，第一个优先级最高
      envFilePath: [
        join(rootPath, `.env.${process.env.NODE_ENV}`),
        join(rootPath, '.env')
      ],
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
    DatabaseModule,
    
    AuthModule,
    HealthModule,
    SystemModule,
    CommonModule,
    NetdiskModule
  ],

  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },

    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ]
})
export class AppModule {}
