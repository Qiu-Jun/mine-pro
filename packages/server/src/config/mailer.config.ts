import { ConfigType, registerAs } from '@nestjs/config'

import { envString, envNumber } from '@/global/env'

export const mailerRegToken = 'mailer'

export const MailerConfig = registerAs(mailerRegToken, () => ({
  host: envString('SMTP_HOST'),
  port: envNumber('SMTP_PORT'),
  ignoreTLS: true,
  secure: true,
  auth: {
    user: envString('SMTP_USER'),
    pass: envString('SMTP_PASS')
  }
}))

export type IMailerConfig = ConfigType<typeof MailerConfig>
