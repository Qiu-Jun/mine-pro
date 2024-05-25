/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 19:06:30
 * @LastEditors: June
 * @LastEditTime: 2023-11-07 01:19:02
 */
import {
  Controller,
  Post,
  Get,
  Res,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';

@Controller({
  path: 'file',
  version: '1',
})
@ApiTags('文件相关接口') // 分组
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file);
    return {
      code: 200,
      data: {
        fileName: file.filename,
        imgUrl: `http://127.0.0.1:3000/static/images/${file.filename}`,
        size: file.size,
        type: 'image',
      },
      msg: 'success',
    };
  }

  @Get('download/:fileName')
  downLoad(@Res() res: Response, @Param('fileName') fileName: string) {
    const url = join(__dirname, `../resources/images/${fileName}`);
    res.download(url);
  }
}
