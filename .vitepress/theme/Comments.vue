<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div :key="title" class="giscus">
    <component
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="wechat-article/docs"
        data-repo-id="R_kgDONr5AgA"
        data-category="Announcements"
        data-category-id="DIC_kwDONr5AgM4CnUxn"
        data-mapping="pathname"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async
    />
  </div>
</template>

<style scoped>
.giscus {
  margin-top: 5rem;
}
</style>
