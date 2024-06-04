/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-04 16:48:16
 * @LastEditTime: 2024-06-04 16:52:47
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\migrations\1717490896815-initData.ts
 */
import { MigrationInterface, QueryRunner } from 'typeorm'
import fs from 'node:fs'
import path from 'node:path'

const sql = fs.readFileSync(
  path.join(__dirname, '../../deploy/sql/test.sql'),
  'utf8'
)
export class InitData1717490896815 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
