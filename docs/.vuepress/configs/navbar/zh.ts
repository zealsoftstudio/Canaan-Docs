import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '嵌入式基础',
    link: '/'
  },
  {
    text: 'AI应用开发',
    link: '/Application/'
  },
  {
    text: '组件库开发',
    link: '/Devicedriver/'
  },
  {
    text: '系统开发',
    link: '/System/'
  },
  {
    text: '专题应用',
    link: '/Special/'
  },
  {
    text: `嘉楠系列`,
    children: [
      {
        text: 'DongshanPI-Vision开发板',
        link: '/advanced/cookbook/',
      },
      {
        text: '100ask_Canaan-k510_Devkit',
        link: '/advanced/cookbook/',
      },
      {
        text: 'R818开发板',
        link: '/advanced/cookbook/',
      },
    ],
  },
]
