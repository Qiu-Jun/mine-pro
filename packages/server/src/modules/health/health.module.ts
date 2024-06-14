/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-14 10:36:17
 * @LastEditTime: 2024-06-14 10:48:50
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\health\health.module.ts
 */
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

import { HealthController } from './health.controller'

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
})
export class HealthModule {}
