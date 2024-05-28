/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-27 16:25:58
 * @LastEditTime: 2024-05-28 10:07:24
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\vite.config.ts
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: './src/dts/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    uni(),
    Unocss()
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname)}/`
    }
  },
  build: {
    // uno报错处理
    watch: {
      exclude: ['node_modules/**', '/__uno.css']
    }
  }
})
