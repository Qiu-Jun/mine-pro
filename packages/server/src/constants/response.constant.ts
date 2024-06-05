/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 08:53:26
 * @LastEditTime: 2024-06-05 08:54:54
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\constants\response.constant.ts
 */
export const RESPONSE_SUCCESS_CODE = 200

export const RESPONSE_SUCCESS_MSG = 'success'

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
