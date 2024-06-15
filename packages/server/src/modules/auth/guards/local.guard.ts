/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 10:59:56
 * @LastEditTime: 2024-06-15 11:00:10
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\auth\guards\local.guardt.ts
 */
import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AuthStrategy } from '../auth.constant'

@Injectable()
export class LocalGuard extends AuthGuard(AuthStrategy.LOCAL) {
  async canActivate(context: ExecutionContext) {
    return true
  }
}
