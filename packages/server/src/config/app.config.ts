import { ConfigType, registerAs } from '@nestjs/config'

import { envString, envNumber, envBoolean } from '@/global/env'

export const appRegToken = 'app'

export const AppConfig = registerAs(appRegToken, () => ({
  name: envString('APP_NAME'),
  port: envString('SERVER_PORT'),
  baseUrl: envString('SERVER_PORT'),
  globalPrefix: envString('GLOBAL_PREFIX', 'api'),
  locale: envString('APP_LOCALE', 'zh-CN'),
  /** 是否允许多端登录 */
  multiDeviceLogin: envBoolean('MULTI_DEVICE_LOGIN', true),

  logger: {
    level: envString('LOGGER_LEVEL'),
    maxFiles: envNumber('LOGGER_MAX_FILES')
  }
}))

export type IAppConfig = ConfigType<typeof AppConfig>
