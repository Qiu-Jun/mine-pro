/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-13 15:04:44
 * @LastEditTime: 2024-06-13 15:04:51
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\redis\subpub.service.ts
 */
import { Inject, Injectable } from '@nestjs/common'

import { RedisSubPub } from './redis-subpub'
import { REDIS_PUBSUB } from './redis.constant'

@Injectable()
export class RedisPubSubService {
  constructor(@Inject(REDIS_PUBSUB) private readonly redisSubPub: RedisSubPub) {}

  public async publish(event: string, data: any) {
    return this.redisSubPub.publish(event, data)
  }

  public async subscribe(event: string, callback: (data: any) => void) {
    return this.redisSubPub.subscribe(event, callback)
  }

  public async unsubscribe(event: string, callback: (data: any) => void) {
    return this.redisSubPub.unsubscribe(event, callback)
  }
}
