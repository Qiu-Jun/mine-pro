/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 15:35:30
 * @LastEditTime: 2024-06-15 15:46:07
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\dept\dept.module.ts
 */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from '../../user/user.module'
import { RoleModule } from '../role/role.module'

import { DeptController } from './dept.controller'
import { DeptEntity } from './dept.entity'
import { DeptService } from './dept.service'

const services = [DeptService]

@Module({
  imports: [TypeOrmModule.forFeature([DeptEntity]), UserModule, RoleModule],
  controllers: [DeptController],
  providers: [...services],
  exports: [TypeOrmModule, ...services],
})
export class DeptModule {}
