/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 16:56:14
 * @LastEditTime: 2024-06-15 17:00:51
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\common\email\email.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

/**
 * 发送邮件
 */
export class EmailSendDto {
    @ApiProperty({ description: '收件人邮箱' })
    @IsEmail()
    to: string

    @ApiProperty({ description: '标题' })
    @IsString()
    subject: string

    @ApiProperty({ description: '正文' })
    @IsString()
    content: string
}