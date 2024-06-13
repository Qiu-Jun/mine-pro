/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-13 14:12:54
 * @LastEditTime: 2024-06-13 14:13:01
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\helper\genRedisKey.ts
 */
import { RedisKeys } from '@/constants/cache.constant'

/** 生成验证码 redis key */
export function genCaptchaImgKey(val: string | number) {
  return `${RedisKeys.CAPTCHA_IMG_PREFIX}${String(val)}` as const
}

/** 生成 auth token redis key */
export function genAuthTokenKey(val: string | number) {
  return `${RedisKeys.AUTH_TOKEN_PREFIX}${String(val)}` as const
}
/** 生成 auth permission redis key */
export function genAuthPermKey(val: string | number) {
  return `${RedisKeys.AUTH_PERM_PREFIX}${String(val)}` as const
}
/** 生成 auth passwordVersion redis key */
export function genAuthPVKey(val: string | number) {
  return `${RedisKeys.AUTH_PASSWORD_V_PREFIX}${String(val)}` as const
}
/** 生成 online user redis key */
export function genOnlineUserKey(tokenId: string) {
  return `${RedisKeys.ONLINE_USER_PREFIX}${String(tokenId)}` as const
}
/** 生成 token blacklist redis key */
export function genTokenBlacklistKey(tokenId: string) {
  return `${RedisKeys.TOKEN_BLACKLIST_PREFIX}${String(tokenId)}` as const
}
