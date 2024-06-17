/*
 * @Author: June
 * @Description: 
 * @Date: 2024-05-27 16:25:57
 * @LastEditTime: 2024-06-17 10:07:32
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\admin\src\api\backend\api\account.ts
 */
// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 账户登出 GET /account/logout */
export async function accountLogout(options?: RequestOptions) {
  return request<any>('/account/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取菜单列表 GET /account/menus */
export async function accountMenu(options?: RequestOptions) {
  return request<API.AccountMenus[]>('/account/menus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更改账户密码 POST /account/password */
export async function accountPassword(body: API.PasswordUpdateDto, options?: RequestOptions) {
  return request<any>('/account/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取权限列表 GET /account/permissions */
export async function accountPermissions(options?: RequestOptions) {
  return request<string[]>('/account/permissions', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取账户资料 GET /account/profile */
export async function accountProfile(options?: RequestOptions) {
  return request<API.AccountInfo>('/account/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更改账户资料 PUT /account/update */
export async function accountUpdate(body: API.AccountUpdateDto, options?: RequestOptions) {
  return request<any>('/account/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
