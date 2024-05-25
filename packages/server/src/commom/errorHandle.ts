/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 20:19:17
 * @LastEditors: June
 * @LastEditTime: 2023-11-10 20:58:45
 */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(HttpException)
export default class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus() || 500;
    response.status(status).json({
      data: exception.message,
      success: false,
      path: request.url,
      status,
    });
  }
}
