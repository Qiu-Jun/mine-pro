/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 11:29:55
 * @LastEditTime: 2024-06-05 11:30:05
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\commom\decorators\id-param.decorator.ts
 */
import {
  HttpStatus,
  NotAcceptableException,
  Param,
  ParseIntPipe
} from '@nestjs/common'

export function IdParam() {
  return Param(
    'id',
    new ParseIntPipe({
      errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      exceptionFactory: (_error) => {
        throw new NotAcceptableException('id 格式不正确')
      }
    })
  )
}
