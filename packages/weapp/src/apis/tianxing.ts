/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-28 10:29:45
 * @LastEditTime: 2024-05-28 11:16:50
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\apis\tianxing.ts
 */
import { request } from '@/lib/service'

const apiKey = 'bcaddf1605dd53c3115c5a709082ac6f'

// 获取星座运势
export function fortune(name: string) {
  return request({
    url: '/star/index',
    params: {
      key: apiKey,
      astro: name
    }
  })
}

// 星座匹配
export function matchYou({ me, he }: { me: string; he?: string }) {
  return request({
    url: '/xingzuo/index',
    params: {
      key: apiKey,
      me,
      he
    }
  })
}
