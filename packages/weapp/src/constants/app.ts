/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-24 11:06:12
 * @LastEditTime: 2024-05-24 14:06:27
 * @LastEditors: June
 * @FilePath: \mine_weapp\src\constants\app.ts
 */
const envData = import.meta.env

export const appTitle = envData.VITE_APP_TITLE

export const baseUrl = envData.VITE_APP_API_BASE_URL

export const gaodeConfig = {
  key: 'ad8bb6d95720160279841f45a8e9f0e4'
}
