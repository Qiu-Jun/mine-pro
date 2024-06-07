/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 17:06:35
 * @LastEditTime: 2024-06-05 17:06:40
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\auth\auth.constant.ts
 */
export const PUBLIC_KEY = '__public_key__'

export const PERMISSION_KEY = '__permission_key__'

export const RESOURCE_KEY = '__resource_key__'

export const ALLOW_ANON_KEY = '__allow_anon_permission_key__'

export const AuthStrategy = {
  LOCAL: 'local',
  LOCAL_EMAIL: 'local_email',
  LOCAL_PHONE: 'local_phone',

  JWT: 'jwt',

  GITHUB: 'github',
  GOOGLE: 'google'
} as const

export const Roles = {
  ADMIN: 'admin',
  USER: 'user'
  // GUEST: 'guest',
} as const

export type Role = (typeof Roles)[keyof typeof Roles]
