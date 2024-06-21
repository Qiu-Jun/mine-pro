/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-21 13:46:28
 * @LastEditTime: 2024-06-21 13:56:26
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\ai\mattingImg\mattingImg.module.ts
 */
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { MattingImgController } from './mattingImg.controller'

@Module({
    imports: [HttpModule],
    controllers: [MattingImgController]
})

export class MattingImgModule {}

