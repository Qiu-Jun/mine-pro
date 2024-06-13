/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 20:19:17
 * @LastEditors: June
 * @LastEditTime: 2024-06-13 11:28:20
 */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

import { FastifyReply, FastifyRequest } from "fastify";

@Catch(HttpException)
export default class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();

    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse(),
    }); 
  }
}
