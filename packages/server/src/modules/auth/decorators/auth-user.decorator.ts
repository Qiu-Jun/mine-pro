/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 10:19:53
 * @LastEditTime: 2024-06-15 10:20:03
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\auth\decorators\auth-user.decorator.ts
 */
import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { FastifyRequest } from 'fastify'

type Payload = keyof IAuthUser

/**
 * @description 获取当前登录用户信息, 并挂载到request上
 */
export const AuthUser = createParamDecorator(
  (data: Payload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<FastifyRequest>()
    // auth guard will mount this
    const user = request.user as IAuthUser

    return data ? user?.[data] : user
  },
)
