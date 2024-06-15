/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 10:32:03
 * @LastEditTime: 2024-06-15 10:52:12
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\modules\system\log\services\task-log.service.ts
 */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { LessThan, Repository } from 'typeorm'

import { paginate } from '@/helper/paginate'

import { TaskLogQueryDto } from '../dto/log.dto'
import { TaskLogEntity } from '../entities/task-log.entity'

@Injectable()
export class TaskLogService {
  constructor(
    @InjectRepository(TaskLogEntity)
    private taskLogRepository: Repository<TaskLogEntity>,
  ) {}

  async create(
    tid: number,
    status: number,
    time?: number,
    err?: string,
  ): Promise<number> {
    const result = await this.taskLogRepository.save({
      status,
      detail: err,
      time,
      task: { id: tid },
    })
    return result.id
  }

  async list({ page, pageSize }: TaskLogQueryDto) {
    const queryBuilder = await this.taskLogRepository
      .createQueryBuilder('task_log')
      .leftJoinAndSelect('task_log.task', 'task')
      .orderBy('task_log.id', 'DESC')

    return paginate<TaskLogEntity>(queryBuilder, {
      page,
      pageSize,
    })
  }

  async clearLog(): Promise<void> {
    await this.taskLogRepository.clear()
  }

  async clearLogBeforeTime(time: Date): Promise<void> {
    await this.taskLogRepository.delete({ createdAt: LessThan(time) })
  }
}
