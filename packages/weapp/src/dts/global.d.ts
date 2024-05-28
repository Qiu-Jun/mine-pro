/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-27 16:25:58
 * @LastEditTime: 2024-05-28 10:46:09
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\dts\global.d.ts
 */
declare namespace Glo {
  type Pagination = {
    pageNo: number
    pageSize: number
    total?: number
  }
  type Function = (...arg: any) => void
  type AnyObject = any
}
