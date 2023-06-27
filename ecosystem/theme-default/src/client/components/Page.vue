<script setup lang="ts">
import Gitalk from 'gitalk'
import { onMounted, computed, ref } from 'vue'
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import RightMenu from '@theme/RightMenu.vue'
import { usePageData } from '@vuepress/client'
import VueWaterMarker from 'vue-watermarker'
import '../styles/gitalk.scss'

defineSlots<{
  'top'?: (props: Record<never, never>) => any
  'bottom'?: (props: Record<never, never>) => any
  'content-top'?: (props: Record<never, never>) => any
  'content-bottom'?: (props: Record<never, never>) => any
}>()

const page = usePageData()

const language = computed(() => {
  if (page.value.lang == '中文简体') {
    return 'zh-CN'
  }
  if (page.value.lang == 'en-US') {
    return 'en-US'
  }
  return 'zh-CN'
})

const gitalk = new Gitalk({
  clientID: 'cea01f89df518b8563d1',
  clientSecret: '5eaba65e3604b2d0b018f974b987b78a1084c919',
  repo: '100askTeam/Allwinner-Docs',
  owner: 'codebug8',
  admin: ['codebug'],
  id: location.pathname,
  distractionFreeMode: false,
  language: language.value
})

onMounted(() => {
  gitalk.render('gitalk-container')
})

</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <RightMenu />
      <slot name="content-top" />

      <Content class="content-custom" />

      <slot name="content-bottom" />
    </div>
    <VueWaterMarker width="250" :content="['100askTeam For Linux Training', '百问网专注于Linux/RTOS教育培训']" />
    <PageMeta />

    <PageNav />
    <div id="gitalk-container" class="theme-default-content"></div>
    <slot name="bottom" />
  </main>
</template>
<style lang="scss" scoped>
.page {
  .test {
    height: 100px;
  }
  #gitalk-container {
    padding-top: 50px;
  }
}
@media only screen and (min-width: 1000px) {
  .page {
    width: 650px;
  }
  .theme-default-content {
    width: 600px;
  }
}
@media only screen and (min-width: 1200px) {
  .theme-default-content {
    width: 700px;
  }
}
@media only screen and (min-width: 1400px) {
  .page {
    width: 900px;
  }
  .theme-default-content {
    width: 800px;
  }
}
@media only screen and (min-width: 1600px) {
  .page {
    width: 950px;
  }
  .theme-default-content {
    width: 800px;
  }
}
@media only screen and (min-width: 1800px) {
  .page {
    width: 1200px;
  }
  .theme-default-content {
    width: 800px;
  }
}
</style>
