/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 10:57:24
 * @LastEditTime: 2024-06-05 10:57:36
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\logger\logger.module.ts
 */
import { Module } from '@nestjs/common'

import { LoggerService } from './logger.service'

@Module({})
export class LoggerModule {
  static forRoot() {
    return {
      global: true,
      module: LoggerModule,
      providers: [LoggerService],
      exports: [LoggerService]
    }
  }
}
