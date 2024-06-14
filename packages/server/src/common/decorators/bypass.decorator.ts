/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-14 10:54:11
 * @LastEditTime: 2024-06-14 10:54:20
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\common\decorators\bypass.decorator.ts
 */
import { SetMetadata } from '@nestjs/common'

export const BYPASS_KEY = '__bypass_key__'

/**
 * 当不需要转换成基础返回格式时添加该装饰器
 */
export function Bypass() {
  return SetMetadata(BYPASS_KEY, true)
}
