import { ConfigType, registerAs } from '@nestjs/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { envString, envBoolean, envNumber } from '@/global/env'

// 当前通过 npm scripts 执行的命令
const currentScript = process.env.npm_lifecycle_event

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: envString('MYSQL_HOST', '127.0.0.1'),
  port: envNumber('MYSQL_PORT', 3306),
  username: envString('MYSQL_USERNAME'),
  password: envString('MYSQL_PASSWORD'),
  database: envString('MYSQL_DATABASE'),
  synchronize: envBoolean('MYSQL_SYNCHRONIZE', false),
  // 解决通过 pnpm migration:run 初始化数据时，遇到的 SET FOREIGN_KEY_CHECKS = 0; 等语句报错问题, 仅在执行数据迁移操作时设为 true
  multipleStatements: currentScript === 'typeorm',
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  subscribers: ['dist/modules/**/*.subscriber{.ts,.js}']
}

export const dbRegToken = 'database'

export const DatabaseConfig = registerAs(
  dbRegToken,
  (): DataSourceOptions => dataSourceOptions
)

export type IDatabaseConfig = ConfigType<typeof DatabaseConfig>

const dataSource = new DataSource(dataSourceOptions)

export default dataSource
