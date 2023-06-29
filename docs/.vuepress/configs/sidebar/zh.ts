import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/': [
      {
        text: 'Linux基础命令',
        children: [
          '/Basic/LinuxShell/Filemanagement.md',
          '/Basic/LinuxShell/NetworkManagement.md',
          '/Basic/LinuxShell/SystemManagement.md',
          '/Basic/LinuxShell/DocumentEditing.md',
          '/Basic/LinuxShell/DiskOperation.md',
        ],
      },
      {
        text: 'MakeFile',
        collapsible: true,
        children: [
          '/Basic/MakeFile/01-Introduction.md',
          '/Basic/MakeFile/03-variable.md',
          '/Basic/MakeFile/04-Pattern_rules_pseudo-targets.md',
          '/Basic/MakeFile/05-function.md',
          '/Basic/MakeFile/06-examples.md',
        ],
      },
      {
        text: 'C基础知识',
        collapsible: true,
        children: [
          '/Basic/GCCManual/01-Introduction.md',
        ],
      },
      {
        text: 'GNU工具',
        collapsible: true,
        children: [
          '/Basic/GNU/01-Introduction.md',
        ],
      },
      {
        text: 'T113开发板使用',
        collapsible: true,
        children: [
        '/Basic/100ASK_T113-PRO/01-BoardIntroduction.md',
        '/Basic/100ASK_T113-PRO/02-SupportingResources.md',
        '/Basic/100ASK_T113-PRO/03-QuickStart.md',
        '/Basic/100ASK_T113-PRO/04-StudyPath.md',
        '/Basic/100ASK_T113-PRO/05-1_RunHelloword.md',
        '/Basic/100ASK_T113-PRO/05-2_RunHellowordDriver.md',
        '/Basic/100ASK_T113-PRO/06-ConfigHostEnv.md',
        '/Basic/100ASK_T113-PRO/07-Buildroot-SDK_DevelopmentGuide.md',
        '/Basic/100ASK_T113-PRO/08-BuildBootloader.md',
        '/Basic/100ASK_T113-PRO/09-BuildLinuxKernel.md',
        '/Basic/100ASK_T113-PRO/10-1_BuildrootSupportWifiBluetooth.md',
        '/Basic/100ASK_T113-PRO/10-BuildRootfs.md',
        '/Basic/100ASK_T113-PRO/11-Tina-SDK_DevelopmentGuide.md',
      ],
     },
    ],
    '/Application/': [

      {
        text: '显示开发',
        collapsible: true,
        children: [
          '/Application/GraphicLibrariesAndApplications/01_FramebufferAPP.md',
          '/Application/GraphicLibrariesAndApplications/02_ImageProcess.md',
        ],
      },
      {
        text: '网络开发',
        collapsible: true,
        children: [
          '/Application/06_NetworkProgram.md',
          '/Application/16_MQTT.md',
        ],
      },
      {
        text: '模块开发',
        collapsible: true,
        children: [
          '/Application/09_GPIOProgram.md',
          '/Application/11_PWM.md',
          '/Application/12_IIC.md',
          '/Application/10_RTC.md',
          '/Application/14_Linux_Can.md',
          '/Application/15_StoreDevice.md',
        ],
      },
      {
        text: '音视频开发',
        collapsible: true,
        children: [
          '/Application/08_AudioBoard.md',
          '/Application/07_CameraV4L2.md',
        ],
      },
    ],
    '/System/': [
      {
        text: 'Linux系统组成',
        children: [
          '/System/systemfunction.md',
        ],
      },
      {
        text: 'Tina-SDK使用',
        collapsible: true,
        children: [
          '/System/Linux_SystemSoftware_DevelopmentGuide.md',
        ],
      },
      {
        text: '系统定制化',
        collapsible: true,
        children: [
          '/System/Linux_Packaging_Process_DescriptionGuide.md',
        ],
      },
    ],
    '/Devicedriver/': [
      {
        text: 'GPIO子系统',
        collapsible: true,
        children: [
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-01.md',
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-02.md',
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-03.md',
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-04.md',
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-05.md',
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-06.md',
        ],
      },
      {
        text: '网络子系统',
        collapsible: true,
        children: [
          '/Devicedriver/Linux_GPIO_DevelopmentGuide-06.md',
        ],
      },
      {
        text: '显示子系统',
        collapsible: true,
        children: [
          '/Devicedriver/Linux_Camera_DevelopmentGuide-01.md',
        ],
      },
      {
        text: '多媒体子系统',
        collapsible: true,
        children: [
          '/Devicedriver/Linux_Camera_DevelopmentGuide-01.md',
        ],
      },
      {
        text: '存储设备子系统',
        collapsible: true,
        children: [
          '/Devicedriver/Linux_Camera_DevelopmentGuide-01.md',
        ],
      },
    ],
    '/Special/': [
      {
        text: 'Buildroot-LTS开发',
        collapsible: true,
        children: [
        '/Special/Buildroot_LTS-T113/01-BoardIntroduction.md',
        '/Special/Buildroot_LTS-T113/02-SupportingResources.md',
        '/Special/Buildroot_LTS-T113/03-1_FlashSystemSpiFlash.md',
        '/Special/Buildroot_LTS-T113/03-2_FlashSystemTFCard.md',
        '/Special/Buildroot_LTS-T113/03-QuickStart.md',
        '/Special/Buildroot_LTS-T113/04-StudyPath.md',
        '/Special/Buildroot_LTS-T113/05-1_RunHelloword.md',
        '/Special/Buildroot_LTS-T113/05-2_RunHellowordDriver.md',
        '/Special/Buildroot_LTS-T113/06-ConfigHostEnv.md',
        '/Special/Buildroot_LTS-T113/07-Buildroot-SDK_DevelopmentGuide.md',
        '/Special/Buildroot_LTS-T113/08-BuildBootloader.md',
        '/Special/Buildroot_LTS-T113/09-BuildLinuxKernel.md',
        '/Special/Buildroot_LTS-T113/10-1_BuildrootSupportWifiBluetooth.md',
        '/Special/Buildroot_LTS-T113/10-BuildRootfs.md',
        '/Special/Buildroot_LTS-T113/11-StartProcessAnalysis.md',
        ],
      },
      {
        text: '支持主线Linux',
        collapsible: true,
        children: [
          '/Special/02_ImageProcess.md',
        ],
      },
      {
        text: 'Bootloader开发',
        collapsible: true,
        children: [
          '/Special/Linux_U-boot_DevelopmentGuide-01.md',
          '/Special/Linux_U-boot_DevelopmentGuide-02.md',
          '/Special/Linux_U-boot_DevelopmentGuide-03.md',
          '/Special/Linux_U-boot_DevelopmentGuide-04.md',
          '/Special/Linux_U-boot_DevelopmentGuide-05.md',
          '/Special/Linux_U-boot_DevelopmentGuide-06.md',
        ],
      },
    ],
  }
