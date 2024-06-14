/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-14 15:27:10
 * @LastEditTime: 2024-06-14 15:30:04
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\tools\storage\storage.modal.ts
 */
import { ApiProperty } from '@nestjs/swagger'

export class StorageInfo {
  @ApiProperty({ description: '文件ID' })
  id: number

  @ApiProperty({ description: '文件名' })
  name: string

  @ApiProperty({ description: '文件扩展名' })
  extName: string

  @ApiProperty({ description: '文件路径' })
  path: string

  @ApiProperty({ description: '文件类型' })
  type: string

  @ApiProperty({ description: '大小' })
  size: string

  @ApiProperty({ description: '上传时间' })
  createdAt: string

  @ApiProperty({ description: '上传者' })
  username: string
}
