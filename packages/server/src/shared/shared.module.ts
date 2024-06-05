/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 11:06:05
 * @LastEditTime: 2024-06-05 11:07:16
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\shared.module.ts
 */
import { Global, Module } from '@nestjs/common'
import { isDev } from '@/global/env'
import { LoggerModule } from './logger/logger.module'

@Global()
@Module({
  imports: [
    // logger
    LoggerModule.forRoot()
  ]
})
export class SharedModule {}
