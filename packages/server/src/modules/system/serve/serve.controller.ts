/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-14 10:13:35
 * @LastEditTime: 2024-06-14 10:15:03
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\serve\serve.controller.ts
 */
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager'
import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiResult } from '@/common/decorators/api-result.decorator'

import { ApiSecurityAuth } from '@/common/decorators/swagger.decorator'

import { AllowAnon } from '@/modules/auth/decorators/allow-anon.decorator'

import { ServeStatInfo } from './serve.model'
import { ServeService } from './serve.service'

@ApiTags('System - 服务监控')
@ApiSecurityAuth()
@ApiExtraModels(ServeStatInfo)
@Controller('serve')
@UseInterceptors(CacheInterceptor)
@CacheKey('serve_stat')
@CacheTTL(10000)
export class ServeController {
  constructor(private serveService: ServeService) {}

  @Get('stat')
  @ApiOperation({ summary: '获取服务器运行信息' })
  @ApiResult({ type: ServeStatInfo })
  @AllowAnon()
  async stat(): Promise<ServeStatInfo> {
    return this.serveService.getServeStat()
  }
}
