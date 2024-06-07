/*
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 15:17:14
 * @LastEditTime: 2024-06-05 15:56:08
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\scripts\genEnvTypes.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'

const directoryPath = path.resolve(__dirname, '..')

const targets = ['.env', `.env.${process.env.NODE_ENV || 'development'}`]

const envObj = targets.reduce((prev, file) => {
  const result = dotenv.parse(fs.readFileSync(path.join(directoryPath, file)))
  return { ...prev, ...result }
}, {})

const envType = Object.entries<string>(envObj)
  .reduce((prev, [key, value]) => {
    return `${prev}
      ${key}: '${value}';`
  }, '')
  .trim()

fs.writeFile(
  path.join(directoryPath, 'types/env.d.ts'),
  `
// generate by ./scripts/generateEnvTypes.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ${envType}
    }
  }
}
export {};
  `,
  (err) => {
    // if (err) console.log('生成 env.d.ts 文件失败')
    // else console.log('成功生成 env.d.ts 文件')
  }
)

// console.log('envObj:', envObj)
