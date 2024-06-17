// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 复制文件或文件夹，支持批量 POST /netdisk/manage/copy */
export async function netDiskManageCopy(body: API.FileOpDto, options?: RequestOptions) {
  return request<any>('/netdisk/manage/copy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 剪切文件或文件夹，支持批量 POST /netdisk/manage/cut */
export async function netDiskManageCut(body: API.FileOpDto, options?: RequestOptions) {
  return request<any>('/netdisk/manage/cut', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文件或文件夹 POST /netdisk/manage/delete */
export async function netDiskManageDelete(body: API.DeleteDto, options?: RequestOptions) {
  return request<any>('/netdisk/manage/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 获取下载链接，不支持下载文件夹 GET /netdisk/manage/download */
export async function netDiskManageDownload(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.NetDiskManageDownloadParams,
  options?: RequestOptions,
) {
  return request<string>('/netdisk/manage/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取文件详细信息 GET /netdisk/manage/info */
export async function netDiskManageInfo(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.NetDiskManageInfoParams,
  options?: RequestOptions,
) {
  return request<API.SFileInfoDetail>('/netdisk/manage/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取文件列表 GET /netdisk/manage/list */
export async function netDiskManageList(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.NetDiskManageListParams,
  options?: RequestOptions,
) {
  return request<API.SFileList>('/netdisk/manage/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加文件备注 POST /netdisk/manage/mark */
export async function netDiskManageMark(body: API.MarkFileDto, options?: RequestOptions) {
  return request<any>('/netdisk/manage/mark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建文件夹，支持多级 POST /netdisk/manage/mkdir */
export async function netDiskManageMkdir(body: API.MKDirDto, options?: RequestOptions) {
  return request<any>('/netdisk/manage/mkdir', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 重命名文件或文件夹 POST /netdisk/manage/rename */
export async function netDiskManageRename(body: API.RenameDto, options?: RequestOptions) {
  return request<any>('/netdisk/manage/rename', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取上传Token，无Token前端无法上传 GET /netdisk/manage/token */
export async function netDiskManageToken(options?: RequestOptions) {
  return request<API.UploadToken>('/netdisk/manage/token', {
    method: 'GET',
    ...(options || {}),
  });
}
