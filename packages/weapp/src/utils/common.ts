/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-28 10:45:04
 * @LastEditTime: 2024-05-28 13:45:45
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\utils\common.ts
 */
/**
 * @desc 将对象转换成地址栏的参数格式
 * @param { Object } obj
 * @returns { String }
 */
export function obj2qs(obj: Glo.AnyObject) {
  if (!obj && !Object.keys(obj).length) {
    return ''
  } else {
    const arr = []
    for (const key in obj) {
      arr.push(key + '=' + obj[key])
    }
    return arr.join('&')
  }
}

/**
 * 获取地址中的参数
 * @param { String } url
 * @returns { Object }
 */
export function queryParse(url?: string) {
  const _url = url || window.location.href
  if (!_url) return null
  const querys = _url.split('?')
  const params = querys[1] ? querys[1].split('&') : []
  const obj: Record<string, any> = {}
  for (let i = 0; i < params.length; i++) {
    const param = params[i] || ''
    const index = param.indexOf('=')
    obj[param.substring(0, index)] = decodeURI(param.substring(index + 1))
  }
  return obj
}
