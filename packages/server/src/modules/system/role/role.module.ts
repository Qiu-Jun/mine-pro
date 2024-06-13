import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { SseService } from '@/modules/sse/sse.service'

import { MenuModule } from '../menu/menu.module'

import { RoleController } from './role.controller'
import { RoleEntity } from './role.entity'
import { RoleService } from './role.service'

// SseService
const providers = [RoleService]

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity]),
    forwardRef(() => MenuModule),
  ],
  controllers: [RoleController],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class RoleModule {}
