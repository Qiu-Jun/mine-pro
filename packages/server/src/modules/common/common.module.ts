/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-14 15:17:28
 * @LastEditTime: 2024-06-14 16:02:14
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\common\common.module.ts
 */
import { Module } from '@nestjs/common'

import { RouterModule } from '@nestjs/core'

import { StorageModule } from './storage/storage.module'
import { UploadModule } from './upload/upload.module'

const modules = [ StorageModule, UploadModule]

@Module({
  imports: [...modules, RouterModule.register([
    {
      path: 'common',
      module: CommonModule,
      children: [...modules],
    },
  ])],
  exports: [...modules],
})
export class CommonModule {}
