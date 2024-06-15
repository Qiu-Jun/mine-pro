/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 10:59:22
 * @LastEditTime: 2024-06-15 11:03:39
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\common\decorators\http.decorator.ts
 */
import type { ExecutionContext } from '@nestjs/common'

import { createParamDecorator } from '@nestjs/common'
import type { FastifyRequest } from 'fastify'

import { getIp } from '@/utils/ip.util'

/**
 * 快速获取IP
 */
export const Ip = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<FastifyRequest>()
  return getIp(request)
})

/**
 * 快速获取request path，并不包括url params
 */
export const Uri = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<FastifyRequest>()
  return request.routerPath
})
