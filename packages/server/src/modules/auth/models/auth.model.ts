/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 10:45:46
 * @LastEditTime: 2024-06-15 10:45:52
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\auth\models\auth.model.ts
 */
import { ApiProperty } from '@nestjs/swagger'

export class ImageCaptcha {
  @ApiProperty({ description: 'base64格式的svg图片' })
  img: string

  @ApiProperty({ description: '验证码对应的唯一ID' })
  id: string
}

export class LoginToken {
  @ApiProperty({ description: 'JWT身份Token' })
  token: string
}
