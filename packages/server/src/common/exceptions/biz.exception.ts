/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 17:10:56
 * @LastEditTime: 2024-06-14 11:39:48
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\common\exceptions\biz.exception.ts
 */
import { HttpException, HttpStatus } from '@nestjs/common'

import { ErrorEnum } from '@/constants/error-code.constant'
import { RESPONSE_SUCCESS_CODE } from '@/constants/response.constant'

export class BusinessException extends HttpException {
  private errorCode: number

  constructor(error: ErrorEnum | string) {
    // 如果是非 ErrorEnum
    if (!error.includes(':')) {
      super(
        HttpException.createBody({
          code: RESPONSE_SUCCESS_CODE,
          message: error
        }),
        HttpStatus.OK
      )
      this.errorCode = RESPONSE_SUCCESS_CODE
      return
    }

    const [code, message] = error.split(':')
    super(
      HttpException.createBody({
        code,
        message
      }),
      HttpStatus.OK
    )

    this.errorCode = Number(code)
  }

  getErrorCode(): number {
    return this.errorCode
  }
}

export { BusinessException as BizException }
