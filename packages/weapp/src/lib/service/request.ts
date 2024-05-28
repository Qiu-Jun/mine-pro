/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-27 16:25:58
 * @LastEditTime: 2024-05-28 10:53:53
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\lib\service\request.ts
 */
import { mergeOps } from './helper/utils'
import errTips from '@/constants/httpErrCode'
import { clearStorage } from '../storage'
import type { Irequest } from './types'

export default function request(options: Irequest) {
  const config = mergeOps(options) as Irequest
  return new Promise((resolve, reject) => {
    if (config.showLoading) {
      uni.showLoading({
        title: '加载中...',
        mask: true
      })
    }
    uni.request({
      ...config,
      success: (res) => {
        const { statusCode, data: resData } = res
        if (statusCode === 200) {
          const { result, code, message } = resData as any
          if (code === 200) {
            resolve({ data: result, code, message })
          } else if (code === 150) {
            uni.showToast({
              icon: 'none',
              title: '接口次数上限，请联系管理员'
            })
            reject({ code, message, data: null })
          } else {
            uni.showToast({
              icon: 'none',
              title: message
            })
            reject({ code, message, data: null })
          }
        } else if (statusCode === 401) {
          const pages = getCurrentPages()
          const curPages = pages[pages.length - 1]
          if (curPages && curPages.route === 'pages/login/index') return false
          clearStorage()
        } else {
          uni.showToast({
            icon: 'none',
            title: errTips[statusCode] || '请求失败'
          })
        }
      },
      fail: (err) => {
        console.log(err)
        uni.showToast({
          icon: 'none',
          title: '请求失败，请检查您的网络是否正常'
        })
      },
      complete: () => {
        config.showLoading && uni.hideLoading()
      }
    })
  })
}
