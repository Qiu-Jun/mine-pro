/*
 * @Author: June
 * @Description: 配置相关
 * @Date: 2024-06-02 10:18:01
 * @LastEditors: June
 * @LastEditTime: 2024-06-02 10:27:09
 * @FilePath: /mine-pro/packages/server/src/config/configuration.ts
 */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

export const getConfiguration = () =>
  ({
    rootRoleId: parseInt(process.env.ROOT_ROLE_ID || '1'),
    // nodemailer config
    mailer: {
      host: 'xxx',
      port: 80,
      auth: {
        user: 'xxx',
        pass: 'xxx'
      },
      secure: false // or true using 443
    },
    // amap config
    amap: {
      key: 'xxx'
    },
    // jwt sign secret
    jwt: {
      secret: process.env.JWT_SECRET || '123456'
    },
    // typeorm config
    database: {
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number.parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USERNAME,
      password:
        process.env.MYSQL_PASSWORD || process.env.MYSQL_ROOT_PASSWORD || '',
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/../**/entities/*.entity.{ts,js}'],
      migrations: ['dist/src/migrations/**/*.js'],
      autoLoadEntities: true,
      /** https://typeorm.io/migrations */
      synchronize: true,
      logging: ['error'],
      timezone: '+08:00', // 东八区
      cli: {
        migrationsDir: 'src/migrations'
      }
    } as MysqlConnectionOptions,
    redis: {
      host: process.env.REDIS_HOST, // default value
      port: parseInt(process.env.REDIS_PORT, 10), // default value
      password: process.env.REDIS_PASSWORD,
      db: process.env.REDIS_DB
    },
    // qiniu config
    // qiniu: {
    //   accessKey: process.env.QINIU_ACCESSKEY,
    //   secretKey: process.env.QINIU_SECRETKEY,
    //   domain: process.env.QINIU_DOMAIN,
    //   bucket: process.env.QINIU_BUCKET,
    //   zone: parseZone(process.env.QINIU_ZONE || 'Zone_z2'),
    //   access: (process.env.QINIU_ACCESS_TYPE as any) || 'public'
    // },
    // logger config
    logger: {
      timestamp: false,
      dir: process.env.LOGGER_DIR,
      maxFileSize: process.env.LOGGER_MAX_SIZE,
      maxFiles: process.env.LOGGER_MAX_FILES,
      errorLogName: process.env.LOGGER_ERROR_FILENAME,
      appLogName: process.env.LOGGER_APP_FILENAME
    },
    // swagger
    swagger: {
      enable: process.env.SWAGGER_ENABLE === 'true',
      path: process.env.SWAGGER_PATH,
      title: process.env.SWAGGER_TITLE,
      desc: process.env.SWAGGER_DESC,
      version: process.env.SWAGGER_VERSION
    }
  }) as const

export type ConfigurationType = ReturnType<typeof getConfiguration>
