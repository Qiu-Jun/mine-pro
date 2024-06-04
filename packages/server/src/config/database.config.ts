/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-04 11:32:19
 * @LastEditTime: 2024-06-04 16:01:24
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\config\database.config.ts
 */
import { ConfigType, registerAs } from '@nestjs/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { mysqlConfig, envBoolean } from '@/global/env'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// 当前通过 npm scripts 执行的命令
const currentScript = process.env.npm_lifecycle_event

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: mysqlConfig.host,
  port: Number(mysqlConfig.port),
  username: mysqlConfig.username,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
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
