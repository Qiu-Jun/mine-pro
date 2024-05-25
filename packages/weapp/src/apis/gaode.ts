import { request } from '@/lib/service'
import { gaodeConfig } from '@/constants/app'

// 根据ip获取省市区定位
export function parseIP2City() {
  return request({
    url: '/v3/ip',
    params: gaodeConfig
  })
}
