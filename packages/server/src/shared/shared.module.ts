/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 11:06:05
 * @LastEditTime: 2024-06-05 11:53:57
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\shared.module.ts
 */
import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { ThrottlerModule } from '@nestjs/throttler'
import { isDev } from '@/global/env'
import { LoggerModule } from './logger/logger.module'

@Global()
@Module({
  imports: [
    // logger
    LoggerModule.forRoot(),
    // http
    HttpModule,
    ScheduleModule.forRoot(),
    // rate limit
    ThrottlerModule.forRoot([
      {
        limit: 3,
        ttl: 60000
      }
    ])
  ]
})
export class SharedModule {}
