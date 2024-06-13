/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-13 14:42:09
 * @LastEditTime: 2024-06-13 14:44:32
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\param-config\param-config.module.ts
 */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ParamConfigController } from './param-config.controller'
import { ParamConfigEntity } from './param-config.entity'
import { ParamConfigService } from './param-config.service'

const services = [ParamConfigService]

@Module({
  imports: [TypeOrmModule.forFeature([ParamConfigEntity])],
  controllers: [ParamConfigController],
  providers: [...services],
  exports: [TypeOrmModule, ...services],
})
export class ParamConfigModule {}
