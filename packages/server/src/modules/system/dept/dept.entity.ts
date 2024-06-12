/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 16:46:59
 * @LastEditTime: 2024-06-12 10:17:07
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\dept\dept.entity.ts
 */
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import {
  Column,
  Entity,
  OneToMany,
  Relation,
  Tree,
  TreeChildren,
  TreeParent
} from 'typeorm'

import { CommonEntity } from '@/commom/entity/common.entity'

import { UserEntity } from '../../user/user.entity'

@Entity({ name: 'sys_dept' })
@Tree('materialized-path')
export class DeptEntity extends CommonEntity {
  @Column()
  @ApiProperty({ description: '部门名称' })
  name: string

  @Column({ nullable: true, default: 0 })
  @ApiProperty({ description: '排序' })
  orderNo: number

  @TreeChildren({ cascade: true })
  children: DeptEntity[]

  @TreeParent({ onDelete: 'SET NULL' })
  parent?: DeptEntity

  // @ApiHideProperty()
  // @OneToMany(() => UserEntity, (user) => user.dept)
  // users: Relation<UserEntity[]>
}
