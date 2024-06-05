/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 09:02:42
 * @LastEditTime: 2024-06-05 10:20:17
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\config\swagger.config.ts
 */
import { ConfigType, registerAs } from '@nestjs/config'
import { envString, envBoolean } from '@/global/env'

export const swaggerRegToken = 'swagger'

export const SwaggerConfig = registerAs(swaggerRegToken, () => ({
  enable: envBoolean('SWAGGER_ENABLE'),
  path: envString('SWAGGER_PATH')
}))

export type ISwaggerConfig = ConfigType<typeof SwaggerConfig>
