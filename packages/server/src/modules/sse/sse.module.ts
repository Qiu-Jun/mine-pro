/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 14:06:17
 * @LastEditTime: 2024-06-15 14:06:56
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\sse\sse.module.ts
 */
import { Module } from '@nestjs/common'

import { OnlineModule } from '../system/online/online.module'

import { SseController } from './sse.controller'
import { SseService } from './sse.service'

@Module({
  imports: [OnlineModule],
  controllers: [SseController],
  providers: [SseService],
  exports: [SseService],
})
export class SseModule {}
