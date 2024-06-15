/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 14:08:57
 * @LastEditTime: 2024-06-15 14:09:59
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\online\online.model.ts
 */
import { ApiProperty, OmitType } from '@nestjs/swagger'

import { LoginLogInfo } from '../log/models/log.model'

export class OnlineUserInfo extends OmitType(LoginLogInfo, ['id'] as const) {
  @ApiProperty({ description: 'tokenId' })
  tokenId: string

  @ApiProperty({ description: '部门名称' })
  deptName: string

  @ApiProperty({ description: '用户ID' })
  uid: number

  @ApiProperty({ description: '是否为当前登录用户' })
  isCurrent?: boolean

  @ApiProperty({ description: '不允许踢当前用户或超级管理员下线' })
  disable?: boolean
}
