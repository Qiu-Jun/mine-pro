/**
 * 基础类型接口
 */
export type BaseType = boolean | number | string | undefined | null

const {
  SERVER_PORT,
  WS_PORT,
  WS_PATH,
  APP_NAME,
  APP_BASE_URL,
  APP_LOCALE,
  PROJECT_DIR,

  MULTI_DEVICE_LOGIN,

  LOGGER_LEVEL,
  LOGGER_MAX_FILES,

  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_ROOT_PASSWORD,
  MYSQL_SYNCHRONIZE,
  MYSQL_LOGGING,

  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
  REDIS_DB,

  JWT_SECRET,
  JWT_EXPIRE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRE,

  SWAGGER_ENABLE,
  SWAGGER_PATH,
  SWAGGER_VERSION,

  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS
} = process.env

const envMap = {
  SERVER_PORT,
  WS_PORT,
  WS_PATH,
  APP_NAME,
  APP_BASE_URL,
  APP_LOCALE,
  PROJECT_DIR,

  MULTI_DEVICE_LOGIN,

  LOGGER_LEVEL,
  LOGGER_MAX_FILES,

  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_ROOT_PASSWORD,
  MYSQL_SYNCHRONIZE,
  MYSQL_LOGGING,

  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
  REDIS_DB,

  JWT_SECRET,
  JWT_EXPIRE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRE,

  SWAGGER_ENABLE,
  SWAGGER_PATH,
  SWAGGER_VERSION,

  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS
}

// 服务配置
export const serverConfig = {
  port: envString('SERVER_PORT'),
  ws_port: envString('WS_PORT'),
  ws_path: envString('WS_PATH'),
  app_name: envString('APP_NAME'),
  app_base_url: envString('APP_BASE_URL'),
  app_locale: envString('APP_LOCALE'),
  project_dir: envString('PROJECT_DIR'),
  multi_device_login: envBoolean('MULTI_DEVICE_LOGIN', true)
}

// logger
export const loggerConfig = {
  logger_lever: envString('LOGGER_LEVEL'),
  logger_max_files: envNumber('LOGGER_MAX_FILES')
}

// mysql 配置
export const mysqlConfig = {
  host: envString('MYSQL_HOST'),
  port: envNumber('MYSQL_PORT', 3306),
  database: envString('MYSQL_DATABASE'),
  username: envString('MYSQL_USERNAME'),
  password: envString('MYSQL_PASSWORD'),
  synchronize: envBoolean('MYSQL_SYNCHRONIZE', false),

  root_password: envString('MYSQL_ROOT_PASSWORD'),
  logging: MYSQL_LOGGING
}

// redis 配置
export const redisConfig = {
  host: envString('REDIS_HOST'),
  port: envNumber('REDIS_PORT', 6379),
  password: envString('REDIS_PASSWORD'),
  db: envNumber('REDIS_DB', 0)
}

// security
export const jwtConfig = {
  secret: envString('JWT_SECRET'),
  expire: envString('JWT_EXPIRE'),
  refresh_token_expire: envNumber('REFRESH_TOKEN_EXPIRE', 2592000),
  refresh_token_secret: envString('REFRESH_TOKEN_SECRET')
}

// swagger
export const swaggerConfig = {
  enable: envBoolean('SWAGGER_ENABLE', true),
  path: envString('SWAGGER_PATH'),
  version: envString('SWAGGER_VERSION')
}

// stmp
export const smtpConfig = {
  host: envString('SMTP_HOST'),
  port: envNumber('SMTP_PORT', 465),
  user: envString('SMTP_USER'),
  pass: envString('SMTP_PASS')
}

/**
 * 检查是否是dev环境
 * @returns boolean true is dev
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}

/**
 * 格式化环境变量
 * @param key 环境变量的键值
 * @param defaultValue 默认值
 * @param callback 格式化函数
 */

function fromatValue<T extends BaseType = string>(
  key: string,
  defaultValue: T,
  callback?: (value: string) => T
): T {
  const value: string | undefined = envMap[key]

  if (typeof value === 'undefined') return defaultValue

  if (!callback) return value as unknown as T

  return callback(value)
}

function envString(key: string, defaultValue: string = '') {
  return fromatValue(key, defaultValue)
}

function envNumber(key: string, defaultValue: number = 0) {
  return fromatValue(key, defaultValue, (value) => {
    try {
      return Number(value)
    } catch {
      throw new Error(`${key} environment variable is not a number`)
    }
  })
}

function envBoolean(key: string, defaultValue: boolean = false) {
  return fromatValue(key, defaultValue, (value) => {
    try {
      return Boolean(JSON.parse(value))
    } catch {
      throw new Error(`${key} environment variable is not a boolean`)
    }
  })
}

console.log('===================================')
console.log(serverConfig)
