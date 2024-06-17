// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 获取Todo列表 GET /todos */
export async function todoList(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TodoListParams,
  options?: RequestOptions,
) {
  return request<API.TodoEntity[]>('/todos', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建Todo POST /todos */
export async function todoCreate(body: API.TodoDto, options?: RequestOptions) {
  return request<any>('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 获取Todo详情 GET /todos/${param0} */
export async function todoInfo(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TodoInfoParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TodoEntity>(`/todos/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新Todo PUT /todos/${param0} */
export async function todoUpdate(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TodoUpdateParams,
  body: API.TodoUpdateDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/todos/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除Todo DELETE /todos/${param0} */
export async function todoDelete(
 // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TodoDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/todos/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}
