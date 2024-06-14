/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-14 15:20:25
 * @LastEditTime: 2024-06-14 16:40:54
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\common\upload\upload.controller.ts
 */
import { BadRequestException, Controller, Post, Req } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiSecurityAuth } from '@/common/decorators/swagger.decorator'
// import { AuthUser } from '@/modules/auth/decorators/auth-user.decorator'

import { Perm, definePermission } from '@/modules/auth/decorators/permission.decorator'

import { FileUploadDto } from './upload.dto'
import { UploadService } from './upload.service'

export const permissions = definePermission('upload', {
  UPLOAD: 'upload',
} as const)

@ApiSecurityAuth()
@ApiTags('common - 上传模块')
@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post()
  @Perm(permissions.UPLOAD)
  @ApiOperation({ summary: '上传' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: FileUploadDto,
  })
    //   @AuthUser() user: IAuthUser
  async upload(@Req() req: FastifyRequest,) {

    if (!req.isMultipart())
      throw new BadRequestException('Request is not multipart')
    const file = await req.file()
    // https://github.com/fastify/fastify-multipart
    // const parts = req.files()
    // for await (const part of parts)
    //   console.log(part.file)

    try {
      // user.uid
      const path = await this.uploadService.saveFile(file, )

      return {
        filename: path,
      }
    }
    catch (error) {
      console.log(error)
      throw new BadRequestException('上传失败')
    }
  }
}