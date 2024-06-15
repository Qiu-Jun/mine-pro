/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 14:22:14
 * @LastEditTime: 2024-06-15 14:30:58
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\netdisk\netdisk.module.ts
 */
import { Module } from '@nestjs/common'

import { RouterModule } from '@nestjs/core'

import { UserModule } from '../user/user.module'

import { NetDiskManageController } from './manager/manage.controller'
import { NetDiskManageService } from './manager/manage.service'
import { NetDiskOverviewController } from './overview/overview.controller'
import { NetDiskOverviewService } from './overview/overview.service'

@Module({
  imports: [UserModule, RouterModule.register([
    {
      path: 'netdisk',
      module: NetdiskModule,
    },
  ])],
  controllers: [NetDiskManageController, NetDiskOverviewController],
  providers: [NetDiskManageService, NetDiskOverviewService],
})
export class NetdiskModule {}
