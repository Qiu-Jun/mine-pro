<!--
 * @Description: md
 * @Author: June
 * @Date: 2024-04-24 09:32:13
 * @FilePath: \mine-pro\README.md
 * @LastEditTime: 2024-05-25 16:03:17
 * @LastEditors: June
-->

## mini-pro

#### 目录说梦

- packages
  - admin 后台
  - weapp 移动端
  - server 服务端

#### 使用

```bash
# 如果没有pnpm 项目使用pnpm，commit自动校验都是用pnpm,请使用pnpm启动项目
npm install pnpm -g

pnpm install

# 启动uniapp
pnpm dev:weapp

# 提交代码
git add . # 添加需要提交的文件
pnpm commit # 使用此命令编写commit
```

#### 使用说明

- 已集成AutoImport, 对于vue的组合api无需手动import
- 环境变量目前只有dev和pro，可以手动添加处理

#### vscode setting

> 正常情况会根据.vscode下的extendsions提示安装插件,没有的话重新打开项目或手动安装配置

- vscode 插件
  - Prettier - Code formatter
  - eslint
  - volar

```json
{
  // 开启自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  },
  // 保存的时候自动格式化
  "editor.formatOnSave": true,
  // 默认格式化工具选择prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

#### 自动注释说明

> 使用的是korofileheader
> .vscode/settings.json

```json
"fileheader.customMade": {
  "Description": "", //文件内容描述
  "Author": "Your Name", //编辑人
  "Date": "Do not edit", //时间
  "FilePath": "", // 设置后，默认生成文件相对于项目的路径
  "LastEditTime": "Do not edit",
  "LastEditors": "Your Name"
},
```
