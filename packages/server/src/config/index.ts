/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 09:01:38
 * @LastEditTime: 2024-06-05 10:39:37
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\config\index.ts
 */

import { AppConfig, IAppConfig, appRegToken } from './app.config'
import {
  ISwaggerConfig,
  SwaggerConfig,
  swaggerRegToken
} from './swagger.config'
import { DatabaseConfig, IDatabaseConfig, dbRegToken } from './database.config'
import { IMailerConfig, MailerConfig, mailerRegToken } from './mailer.config'
import { IOssConfig, OssConfig, ossRegToken } from './oss.config'
import { IRedisConfig, RedisConfig, redisRegToken } from './redis.config'
import {
  ISecurityConfig,
  SecurityConfig,
  securityRegToken
} from './security.config'

export * from './app.config'
export * from './database.config'
export * from './redis.config'
export * from './mailer.config'
export * from './oss.config'
export * from './security.config'
export * from './swagger.config'

export interface AllConfigType {
  [appRegToken]: IAppConfig
  [swaggerRegToken]: ISwaggerConfig
  [dbRegToken]: IDatabaseConfig
  [mailerRegToken]: IMailerConfig
  [redisRegToken]: IRedisConfig
  [securityRegToken]: ISecurityConfig
  [ossRegToken]: IOssConfig
}
export type ConfigKeyPaths = RecordNamePaths<AllConfigType>

export default {
  AppConfig,
  SwaggerConfig,
  DatabaseConfig,
  MailerConfig,
  OssConfig,
  RedisConfig,
  SecurityConfig
}
