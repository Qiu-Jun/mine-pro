/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 16:56:33
 * @LastEditTime: 2024-06-15 17:01:26
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\common\email\email.module.ts
 */
import { Module } from '@nestjs/common'

import { EmailController } from './email.controller'

@Module({
  imports: [],
  controllers: [EmailController],
})
export class EmailModule {}
