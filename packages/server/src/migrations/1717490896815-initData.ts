/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-04 16:48:16
 * @LastEditTime: 2024-06-12 11:39:08
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\migrations\1717490896815-initData.ts
 */
import { MigrationInterface, QueryRunner } from 'typeorm'
import { readFileSync } from 'fs'
import { join } from 'path'

const sql = readFileSync(
  join(__dirname, '../../deploy/sql/admin_server.sql'),
  'utf8'
)
export class InitData1717490896815 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
