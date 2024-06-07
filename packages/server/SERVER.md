<!--
 * @Author: June
 * @Description:
 * @Date: 2024-06-05 08:30:08
 * @LastEditTime: 2024-06-05 16:12:57
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\server\SERVER.md
-->

## Server

#### 数据库迁移

1. 更新数据库(或初始化数据)

```bash
pnpm migration:run
```

2. 生成迁移

```bash
pnpm migration:generate
```

3. 回滚到最后一次更新

```bash
pnpm migration:revert
```

更多细节，请移步至[官方文档](https://typeorm.io/migrations)

> [!TIP]
> 如果你的`实体类`或`数据库配置`有更新，请执行`npm run build`后再进行数据库迁移相关操作。
