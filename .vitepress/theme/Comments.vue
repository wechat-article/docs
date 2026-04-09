<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const { frontmatter, title, isDark } = useData()
const route = useRoute()

const giscusTheme = computed(() => isDark.value ? 'dark' : 'light')
const giscusContainer = ref<HTMLElement | null>(null)

function sendGiscusMessage(theme: string) {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  if (iframe?.contentWindow) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app'
    )
  }
}

watch(isDark, () => {
  sendGiscusMessage(giscusTheme.value)
})

function loadGiscus() {
  if (!giscusContainer.value) return
  giscusContainer.value.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'wechat-article/docs')
  script.setAttribute('data-repo-id', 'R_kgDONr5AgA')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDONr5AgM4CnUxn')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '1')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', giscusTheme.value)
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  giscusContainer.value.appendChild(script)
}

onMounted(loadGiscus)

watch(() => route.path, () => {
  nextTick(loadGiscus)
})
</script>

<template>
  <div v-if="frontmatter.comments !== false" ref="giscusContainer" :key="title" class="giscus" />
</template>

<style scoped>
.giscus {
  margin-top: 5rem;
}
</style>
