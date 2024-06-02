/*
 * @Author: June
 * @Description: env
 * @Date: 2024-06-02 10:18:06
 * @LastEditors: June
 * @LastEditTime: 2024-06-02 10:18:32
 * @FilePath: /mine-pro/packages/server/src/config/env.ts
 */
/**
 * 检查是否是dev环境
 * @returns boolean true is dev
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}
