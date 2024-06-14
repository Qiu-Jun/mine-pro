/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 08:50:10
 * @LastEditTime: 2024-06-14 11:42:11
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\common\model\response.model.ts
 */
import { ApiProperty } from '@nestjs/swagger'

import {
  RESPONSE_SUCCESS_CODE,
  RESPONSE_SUCCESS_MSG
} from '@/constants/response.constant'

export class ResOp<T = any> {
  @ApiProperty({ type: 'object' })
  data?: T

  @ApiProperty({ type: 'number', default: RESPONSE_SUCCESS_CODE })
  code: number

  @ApiProperty({ type: 'string', default: RESPONSE_SUCCESS_MSG })
  message: string

  constructor(code: number, data: T, message = RESPONSE_SUCCESS_MSG) {
    this.code = code
    this.data = data
    this.message = message
  }

  static success<T>(data?: T, message?: string) {
    return new ResOp(RESPONSE_SUCCESS_CODE, data, message)
  }

  static error(code: number, message) {
    return new ResOp(code, null, message)
  }
}

export class TreeResult<T> {
  @ApiProperty()
  id: number

  @ApiProperty()
  parentId: number

  @ApiProperty()
  children?: TreeResult<T>[]
}
