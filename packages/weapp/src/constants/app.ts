/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-24 11:06:12
 * @LastEditTime: 2024-05-28 10:27:08
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\constants\app.ts
 */
const envData = import.meta.env

export const appTitle = envData.VITE_APP_TITLE

export const baseUrl = envData.VITE_APP_API_BASE_URL
