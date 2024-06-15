/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 16:56:07
 * @LastEditTime: 2024-06-15 17:01:49
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\common\email\email.controller.ts
 */
import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiSecurityAuth } from '@/common/decorators/swagger.decorator'
import { MailerService } from '@/shared/mailer/mailer.service'

import { EmailSendDto } from './email.dto'

@ApiTags('System - 邮箱模块')
@ApiSecurityAuth()
@Controller('email')
export class EmailController {
  constructor(private emailService: MailerService) {}

  @ApiOperation({ summary: '发送邮件' })
  @Post('send')
  async send(@Body() dto: EmailSendDto): Promise<void> {
    const { to, subject, content } = dto
    await this.emailService.send(to, subject, content, 'html')
  }
}
