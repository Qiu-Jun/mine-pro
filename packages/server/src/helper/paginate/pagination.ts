/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 09:20:29
 * @LastEditTime: 2024-06-05 09:20:46
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\helper\paginate\pagination.ts
 */
import { ObjectLiteral } from 'typeorm'

import { IPaginationMeta } from './interface'

export class Pagination<
  PaginationObject,
  T extends ObjectLiteral = IPaginationMeta
> {
  constructor(
    public readonly items: PaginationObject[],

    public readonly meta: T
  ) {}
}
