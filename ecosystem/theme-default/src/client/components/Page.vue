<script setup lang="ts">
import Gitalk from 'gitalk'
import { onMounted, ref } from 'vue'
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import RightMenu from '@theme/RightMenu.vue'
import '../styles/gitalk.scss'

defineSlots<{
  'top'?: (props: Record<never, never>) => any
  'bottom'?: (props: Record<never, never>) => any
  'content-top'?: (props: Record<never, never>) => any
  'content-bottom'?: (props: Record<never, never>) => any
}>()

const gitalk = new Gitalk({
  clientID: '',
  clientSecret: '',
  repo: '',
  owner: '',
  admin: [''],
  id: location.pathname,
  distractionFreeMode: false
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

    <PageMeta />

    <PageNav />
    <div id="gitalk-container" class="theme-default-content"></div>
    <slot name="bottom" />
  </main>
</template>
<style lang="scss" scoped>
.page {
  // max-width: 1200px;
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
