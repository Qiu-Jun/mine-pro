// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 删除文件 POST /common/storage/delete */
export async function storageDelete(body: API.StorageDeleteDto, options?: RequestOptions) {
  return request<any>('/common/storage/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 获取本地存储列表 GET /common/storage/list */
export async function storageList(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StorageListParams,
  options?: RequestOptions,
) {
  return request<{
    items?: API.StorageInfo[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/common/storage/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
