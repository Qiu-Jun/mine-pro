/**
 * 基础类型接口
 */
export type BaseType = boolean | number | string | undefined | null

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
  const value: string | undefined = process.env[key]
  if (typeof value === 'undefined') return defaultValue

  if (!callback) return value as unknown as T

  return callback(value)
}

const {
  SERVER_PORT,
  WS_PORT,
  WS_PATH,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_ROOT_PASSWORD,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
  REDIS_DB
} = process.env

// 服务配置
export const serverConfig = {
  port: SERVER_PORT,
  ws_port: WS_PORT,
  ws_path: WS_PATH
}

// mysql 配置
export const mysqlConfig = {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  root_password: MYSQL_ROOT_PASSWORD
}

// redis 配置
export const redisConfig = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
  db: REDIS_DB
}

/**
 * 检查是否是dev环境
 * @returns boolean true is dev
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function envString(key: string, defaultValue: string = '') {
  return fromatValue(key, defaultValue)
}

export function envNumber(key: string, defaultValue: number = 0) {
  return fromatValue(key, defaultValue, (value) => {
    try {
      return Number(value)
    } catch {
      throw new Error(`${key} environment variable is not a number`)
    }
  })
}

export function envBoolean(key: string, defaultValue: boolean = false) {
  return fromatValue(key, defaultValue, (value) => {
    try {
      return Boolean(JSON.parse(value))
    } catch {
      throw new Error(`${key} environment variable is not a boolean`)
    }
  })
}
