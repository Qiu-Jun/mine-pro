<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-27 16:25:57
 * @LastEditTime: 2024-06-17 09:06:00
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\admin\src\views\account\about.vue
-->
<template>
  <div>

    <Card class="mt-3">
      <Descriptions title="项目信息" :column="2" bordered>
        <Descriptions.Item label="版本">
          <Tag color="processing">{{ pkg.version }}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="最后编译时间">
          <Tag color="processing">{{ lastBuildTime }}</Tag>
        </Descriptions.Item>
      </Descriptions>
    </Card>
    <Card class="mt-3">
      <Descriptions title="生产环境依赖" bordered>
        <template v-for="(value, key) in pkg.dependencies" :key="key">
          <Descriptions.Item :label="key">
            <BlankLink :url="key" :text="value" />
          </Descriptions.Item>
        </template>
      </Descriptions>
    </Card>
    <Card class="mt-3">
      <Descriptions title="开发环境依赖" bordered>
        <template v-for="(value, key) in pkg.devDependencies" :key="key">
          <Descriptions.Item :label="key">
            <BlankLink :url="key" :text="value" />
          </Descriptions.Item>
        </template>
      </Descriptions>
    </Card>
  </div>
</template>

<script setup lang="tsx">
import { Descriptions, Card, Tag } from 'ant-design-vue';

defineOptions({
  name: 'About',
});

const { pkg, lastBuildTime } = __APP_INFO__;

const BlankLink = ({ url = '', text }) => {
  const target = /^http(s)?:/.test(url) ? url : `https://www.npmjs.com/package/${url}`;
  return (
    <a href={target} target="_blank">
      {text}
    </a>
  );
};
</script>
