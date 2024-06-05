/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 10:33:15
 * @LastEditTime: 2024-06-05 10:33:36
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\config\redis.config.ts
 */
import { ConfigType, registerAs } from '@nestjs/config'
import { envString, envNumber } from '@/global/env'

export const redisRegToken = 'redis'

export const RedisConfig = registerAs(redisRegToken, () => ({
  host: envString('REDIS_HOST', '127.0.0.1'),
  port: envNumber('REDIS_PORT', 6379),
  password: envString('REDIS_PASSWORD'),
  db: envNumber('REDIS_DB')
}))

export type IRedisConfig = ConfigType<typeof RedisConfig>
