/*
 * @Author: June
 * @Description:
 * @Date: 2023-11-06 11:19:58
 * @LastEditors: June
 * @LastEditTime: 2023-11-07 01:49:21
 */
import { Controller, Get, Param, Request, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@Controller({
  path: 'user',
  version: '1',
})
@ApiTags('用户相关接口') // 分组
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '获取用户分页', description: '用户' })
  @ApiQuery({
    name: 'pageNo',
    description: '分页信息',
    required: true,
    type: String,
  })
  @ApiQuery({
    name: 'pageSize',
    description: '分页信息',
    required: true,
    type: String,
  })
  @ApiResponse({ status: 200, description: '成功' })
  findAll(@Request() res) {
    return {
      code: 200,
      data: res.query.name,
    };
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: '获取某个用户by id',
    required: true,
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: '创建用户', description: '用户' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
