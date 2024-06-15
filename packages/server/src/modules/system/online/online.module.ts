/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 14:09:05
 * @LastEditTime: 2024-06-15 14:10:09
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\online\online.module.ts
 */
import { Module, forwardRef } from '@nestjs/common'

import { AuthModule } from '@/modules/auth/auth.module'

import { SseModule } from '@/modules/sse/sse.module'

import { UserModule } from '../../user/user.module'

import { OnlineController } from './online.controller'
import { OnlineService } from './online.service'

const providers = [OnlineService]

@Module({
  imports: [
    UserModule,
    AuthModule,
    forwardRef(() => SseModule),
  ],
  controllers: [OnlineController],
  providers,
  exports: [...providers],
})
export class OnlineModule {}
