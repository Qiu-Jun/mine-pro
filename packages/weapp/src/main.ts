/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-24 11:06:12
 * @LastEditTime: 2024-05-24 11:39:10
 * @LastEditors: June
 * @FilePath: \mine_weapp\src\main.ts
 */
import { createSSRApp } from 'vue'
import App from './App.vue'
import setupStore from './store'
import 'virtual:uno.css'
import '@/styles/index.scss'
export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app
  }
}
