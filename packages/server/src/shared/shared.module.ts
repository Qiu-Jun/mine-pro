/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-05 11:06:05
 * @LastEditTime: 2024-06-13 15:35:15
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\shared.module.ts
 */
import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'
import { ThrottlerModule } from '@nestjs/throttler'

import { isDev } from '@/global/env'

// import { HelperModule } from './helper/helper.module'
import { LoggerModule } from './logger/logger.module'
// import { MailerModule } from './mailer/mailer.module'

import { RedisModule } from './redis/redis.module'

@Global()
@Module({
  imports: [
    // logger
    LoggerModule.forRoot(),
    // http
    HttpModule,
    // schedule
    ScheduleModule.forRoot(),
    // rate limit
    ThrottlerModule.forRoot([
      {
        limit: 3,
        ttl: 60000,
      },
    ]),
    EventEmitterModule.forRoot({
      wildcard: true,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 20,
      verboseMemoryLeak: isDev,
      ignoreErrors: false,
    }),
    // redis
    RedisModule,
    // mailer
    // MailerModule,
    // helper
    // HelperModule,
  ],

  // MailerModule, HelperModule
  exports: [HttpModule,  RedisModule],
})
export class SharedModule {}
