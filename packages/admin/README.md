<!--
 * @Author: June
 * @Description:
 * @Date: 2024-05-27 16:25:57
 * @LastEditTime: 2024-06-15 15:22:28
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\admin\README.md
-->

# vue3-antdv-admin

基于 vite5.x + vue3.x + antd-design-vue4.x + typescript5.x 的后台管理系统

- 账号：admin，密码：a123456
- [在线预览](http://buqiyuan.gitee.io/vue3-antdv-admin/)
- [项目文档](https://buqiyuan.github.io/vue3-antdv-admin-docs/)
- [swagger 文档](https://nest-api.buqiyuan.site/api-docs/)
- [后端仓库地址](https://github.com/buqiyuan/nest-admin)
- [gitee 地址](https://gitee.com/buqiyuan/vue3-antdv-admin)
- 根据 JSON 生成 typescript 的工具：[http://json2ts.com/](http://json2ts.com/)

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/buqiyuan/vue3-antdv-admin
```

```ts
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

```

- 安装依赖

```bash
cd vue3-antdv-admin

pnpm install

```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```
