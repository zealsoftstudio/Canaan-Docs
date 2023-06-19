import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '应用开发',
    link: '/'
  },
  {
    text: '系统开发',
    link: '/reference/cli.md'
  },
  {
    text: '驱动开发',
    link: '/reference/plugin/back-to-top.md'
  },
  {
    text: '专题应用',
    link: '/advanced/cookbook/'
  },
  {
    text: `全志系列`,
    children: [
      {
        text: '更新日志',
        // link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
        link: '/advanced/cookbook/',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/',
      },
    ],
  },
]
