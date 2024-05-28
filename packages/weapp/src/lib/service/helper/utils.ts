/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-27 16:25:58
 * @LastEditTime: 2024-05-28 10:44:39
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\lib\service\helper\utils.ts
 */
import { baseUrl } from '@/constants/app'
import { useUserStore } from '@/store'
import { obj2qs } from '@/utils/common'
import type { Irequest } from '../types'

const userStore = useUserStore()
export function mergeOps(ops: Irequest) {
  if (!ops || !ops.url) return null
  const configs = {
    url: `${baseUrl + ops.url}`,
    header: {
      'content-type': ops.contentType || 'application/x-www-form-urlencoded',
      token: userStore.token || ''
    },
    data: ops.data || null,
    method: ops.method ? ops.method.toUpperCase() : 'GET',
    showLoading: ops.showLoading || false
  }

  ops.header &&
    (configs.header = {
      ...configs.header,
      ...ops.header
    })
  if (ops.params) {
    const paramsStr = obj2qs(ops.params)
    configs.url += `?${paramsStr}`
  }
  return configs
}
