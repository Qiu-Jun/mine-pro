/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 10:57:51
 * @LastEditTime: 2024-06-15 10:58:06
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\auth\decorators\public.decorator.ts
 */
import { SetMetadata } from '@nestjs/common'

import { PUBLIC_KEY } from '../auth.constant'

/**
 * 当接口不需要检测用户登录时添加该装饰器
 */
export const Public = () => SetMetadata(PUBLIC_KEY, true)
