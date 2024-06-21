/*
 * @Author: June
 * @Description: ai 模块
 * @Date: 2024-06-21 13:32:25
 * @LastEditTime: 2024-06-21 13:56:55
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\ai\ai.module.ts
 */
import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { MattingImgModule } from './mattingImg/mattingImg.module'

const modules = [MattingImgModule]

@Module({
    imports: [
        ...modules,
        RouterModule.register([
            {
                path: 'ai',
                module: AiModule,
                children: [...modules]
            }
        ])
    ],
    exports: [...modules]
})

export class AiModule {}