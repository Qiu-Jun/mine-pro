/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 17:09:32
 * @LastEditTime: 2024-06-15 17:10:41
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\helper\helper.module.ts
 */
import { Global, Module, type Provider } from '@nestjs/common'

import { CronService } from './cron.service'
import { QQService } from './qq.service'

const providers: Provider[] = [
    CronService,
    QQService
]

@Global()
@Module({
    imports: [],
    providers,
    exports: providers
})

export class HelperModule {}