/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-13 15:04:37
 * @LastEditTime: 2024-06-14 09:14:06
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\redis\redis.module.ts
 */
import { RedisModule as NestRedisModule } from '@liaoliaots/nestjs-redis'
import { CacheModule } from '@nestjs/cache-manager'
import { Global, Module, Provider } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { redisStore } from 'cache-manager-ioredis-yet'
import { RedisOptions } from 'ioredis'

import { ConfigKeyPaths, IRedisConfig } from '@/config'

import { CacheService } from './cache.service'
import { RedisSubPub } from './redis-subpub'
import { REDIS_PUBSUB } from './redis.constant'
import { RedisPubSubService } from './subpub.service'

const providers: Provider[] = [
  CacheService,
  {
    provide: REDIS_PUBSUB,
    useFactory: (configService: ConfigService<ConfigKeyPaths>) => {
        const redisOptions: RedisOptions = configService.get<IRedisConfig>('redis')
      return new RedisSubPub(redisOptions)
    },
    inject: [ConfigService],
  },
  RedisPubSubService,
]

@Global()
@Module({
  imports: [
    // cache
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService], 
      useFactory: (configService: ConfigService<ConfigKeyPaths>) => {
        const redisOptions: RedisOptions = configService.get<IRedisConfig>('redis')

        return {
          isGlobal: true,
          store: redisStore,
          isCacheableValue: () => true,
          ...redisOptions,
        }
      },
    }),
    // redis
    NestRedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<ConfigKeyPaths>) => ({
          readyLog: true,
          config: configService.get<IRedisConfig>('redis'),
        }),
    }),
  ],
  providers,
  exports: [...providers, CacheModule],
})
export class RedisModule {}
