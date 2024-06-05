/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 10:32:02
 * @LastEditTime: 2024-06-05 10:33:46
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\src\config\oss.config.ts
 */
import { ConfigType, registerAs } from '@nestjs/config'
import * as qiniu from 'qiniu'
import { envString } from '@/global/env'

function parseZone(zone: string) {
  switch (zone) {
    case 'Zone_as0':
      return qiniu.zone.Zone_as0
    case 'Zone_na0':
      return qiniu.zone.Zone_na0
    case 'Zone_z0':
      return qiniu.zone.Zone_z0
    case 'Zone_z1':
      return qiniu.zone.Zone_z1
    case 'Zone_z2':
      return qiniu.zone.Zone_z2
  }
}

export const ossRegToken = 'oss'

export const OssConfig = registerAs(ossRegToken, () => ({
  accessKey: envString('OSS_ACCESSKEY'),
  secretKey: envString('OSS_SECRETKEY'),
  domain: envString('OSS_DOMAIN'),
  bucket: envString('OSS_BUCKET'),
  zone: parseZone(envString('OSS_ZONE') || 'Zone_z2'),
  access: (envString('OSS_ACCESS_TYPE') as any) || 'public'
}))

export type IOssConfig = ConfigType<typeof OssConfig>
