/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 16:26:39
 * @LastEditTime: 2024-06-05 17:08:45
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\user\user.module.ts
 */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { MenuModule } from '../system/menu/menu.module'
// import { ParamConfigModule } from '../system/param-config/param-config.module'

// import { RoleModule } from '../system/role/role.module'

import { UserController } from './user.controller'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'

const providers = [UserService]

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
    // RoleModule,
    // MenuModule,
    // ParamConfigModule
  ],
  controllers: [UserController],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers]
})
export class UserModule {}
