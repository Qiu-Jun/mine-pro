/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 11:19:58
 * @LastEditors: June
 * @LastEditTime: 2023-11-07 01:46:13
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ name: 'June', type: String })
  name: string;
  @ApiProperty()
  age: number;
}
