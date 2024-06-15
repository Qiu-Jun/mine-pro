/*
 * @Author: June
 * @Description: 
 * @Date: 2024-05-27 16:25:57
 * @LastEditTime: 2024-06-15 15:21:23
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\admin\src\router\routes\modules\externa-link.ts
 */
import { RouterView, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'https://github.com/Qiu-Jun/mine-pro.git',
    name: 'https://github.com/Qiu-Jun/mine-pro.git',
    component: RouterView,
    meta: {
      title: '后台代码仓库',
      icon: 'ant-design:link-outlined',
      isExt: true,
      extOpenMode: 1,
    },
  },
];

export default routes;
