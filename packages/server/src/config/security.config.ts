/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 10:34:05
 * @LastEditTime: 2024-06-05 10:38:25
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\config\security.config.ts
 */
import { ConfigType, registerAs } from '@nestjs/config'

import { envString, envNumber } from '@/global/env'

export const securityRegToken = 'security'

export const SecurityConfig = registerAs(securityRegToken, () => ({
  jwtSecret: envString('JWT_SECRET'),
  jwtExprire: envNumber('JWT_EXPIRE'),
  refreshSecret: envString('REFRESH_TOKEN_SECRET'),
  refreshExpire: envNumber('REFRESH_TOKEN_EXPIRE')
}))

export type ISecurityConfig = ConfigType<typeof SecurityConfig>
