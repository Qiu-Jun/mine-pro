/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-03 13:52:25
 * @LastEditTime: 2024-06-03 13:52:34
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\types\global.d.ts
 */
declare global {
  interface IAuthUser {
    uid: number
    pv: number
    /** 过期时间 */
    exp?: number
    /** 签发时间 */
    iat?: number
    roles?: string[]
  }

  export interface IBaseResponse<T = any> {
    message: string
    code: number
    data?: T
  }

  export interface IListRespData<T = any> {
    items: T[]
  }
}

export {}
