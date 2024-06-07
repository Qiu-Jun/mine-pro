/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 17:17:49
 * @LastEditTime: 2024-06-05 17:18:56
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\auth\dto\account.dto.ts
 */
import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger'
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator'

// import { MenuEntity } from '~/modules/system/menu/menu.entity'

export class AccountUpdateDto {
  @ApiProperty({ description: '用户呢称' })
  @IsString()
  @IsOptional()
  nickname: string

  @ApiProperty({ description: '用户邮箱' })
  @IsEmail()
  email: string

  @ApiProperty({ description: '用户QQ' })
  @IsOptional()
  @IsString()
  @Matches(/^[0-9]+$/)
  @MinLength(5)
  @MaxLength(11)
  qq: string

  @ApiProperty({ description: '用户手机号' })
  @IsOptional()
  @IsString()
  phone: string

  @ApiProperty({ description: '用户头像' })
  @IsOptional()
  @IsString()
  avatar: string

  @ApiProperty({ description: '用户备注' })
  @IsOptional()
  @IsString()
  remark: string
}

export class ResetPasswordDto {
  @ApiProperty({ description: '临时token', example: 'uuid' })
  @IsString()
  accessToken: string

  @ApiProperty({ description: '密码', example: 'a123456' })
  @IsString()
  @Matches(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Za-z])\S*$/)
  @MinLength(6)
  password: string
}

// export class MenuMeta extends PartialType(
//   OmitType(MenuEntity, [
//     'parentId',
//     'createdAt',
//     'updatedAt',
//     'id',
//     'roles',
//     'path',
//     'name'
//   ] as const)
// ) {
//   title: string
// }
// export class AccountMenus extends PickType(MenuEntity, [
//   'id',
//   'path',
//   'name',
//   'component'
// ] as const) {
//   meta: MenuMeta
// }
