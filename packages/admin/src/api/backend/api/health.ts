// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 此处后端没有提供注释 GET /health/database */
export async function healthCheckDatabase(options?: RequestOptions) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/health/database', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /health/disk */
export async function healthCheckDisk(options?: RequestOptions) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/health/disk', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /health/memory-heap */
export async function healthCheckMemoryHeap(options?: RequestOptions) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/health/memory-heap', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /health/memory-rss */
export async function healthCheckMemoryRss(options?: RequestOptions) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/health/memory-rss', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /health/network */
export async function healthCheckNetwork(options?: RequestOptions) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/health/network', {
    method: 'GET',
    ...(options || {}),
  });
}
