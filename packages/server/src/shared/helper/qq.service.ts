/*
 * @Author: June
 * @Description: 
 * @Date: 2024-06-15 17:09:14
 * @LastEditTime: 2024-06-15 17:09:21
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\shared\helper\qq.service.ts
 */
import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class QQService {
  constructor(private readonly http: HttpService) {}

  async getNickname(qq: string | number) {
    const { data } = await this.http.axiosRef.get(
      `https://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins=${qq}`,
    )
    return data
  }

  async getAvater(qq: string | number) {
    // https://thirdqq.qlogo.cn/headimg_dl?dst_uin=1743369777&spec=640&img_type=jpg
    return `https://thirdqq.qlogo.cn/g?b=qq&s=100&nk=${qq}`
  }
}
