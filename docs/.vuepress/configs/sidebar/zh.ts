import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/': [
    {
      text: 'Linux基础命令',
      collapsible: true,
      children: [
        '/Basic/LinuxShell/Filemanagement.md',
        '/Basic/LinuxShell/NetworkManagement.md',
        '/Basic/LinuxShell/SystemManagement.md',
        '/Basic/LinuxShell/DocumentEditing.md',
        '/Basic/LinuxShell/DiskOperation.md',
      ],
    },
    {
      text: 'MakeFile基础',
      collapsible: true,
      children: [
        '/Basic/MakeFile/01-Introduction.md',
        '/Basic/MakeFile/03-variable.md',
        '/Basic/MakeFile/04-Pattern_rules_pseudo-targets.md',
        '/Basic/MakeFile/05-function.md',
        '/Basic/MakeFile/06-examples.md',
      ],
    },
    {
      text: 'C编程语言基础',
      collapsible: true,
      children: ['/Basic/GCCManual/01-Introduction.md'],
    },
    {
      text: 'GNU工具套件',
      collapsible: true,
      children: ['/Basic/GNU/01-Introduction.md'],
    },
    {
      text: 'DongshanPI-Vision使用',
      collapsible: true,
      children: [
        '/Basic/DongshanPI-Vision/01-BoardIntroduction.md',
        '/Basic/DongshanPI-Vision/02-QuickStart.md',
        '/Basic/DongshanPI-Vision/03-BoardNetwork.md',
        '/Basic/DongshanPI-Vision/04-UpdateSystem.md',
      ],
    },
  ],
  '/Application/': [
    {
      text: 'AI人工智能应用开发',
      collapsible: true,
      children: [
        '/Application/AIApplicationDevelopment-Canaan/01-Demonstrate_AI_APP.md',
        '/Application/AIApplicationDevelopment-Canaan/02-AI_App_Development_Guide.md',
        '/Application/AIApplicationDevelopment-Canaan/03-nncase_Developer_Guides.md',
      ],
    },
    {
      text: '多媒体框架开发',
      collapsible: true,
      children: [
        '/Application/MPPApplicationDevelopment-Canaan/01-Multimedia_Developer_Guides.md',
        '/Application/MPPApplicationDevelopment-Canaan/02-Drm_Developer_Guides.md',
        '/Application/MPPApplicationDevelopment-Canaan/03-ISP_User_Property_Page_Guides.md',
        '/Application/MPPApplicationDevelopment-Canaan/04-ISP_Adaptive_Tuning_Guides.md',
        '/Application/MPPApplicationDevelopment-Canaan/05-ISP_Tuning_Tool_Guides.md',
      ],
    },
    {
      text: '更多应用开发',
      collapsible: true,
      children: ['/Application/OtherAPP-Canaan/01-App_Development_Guide.md'],
    },
  ],
  '/System/': [
    {
      text: '嵌入式Linux系统基本组成',
      collapsible: true,
      children: [
        '/System/eLinuxFramework/buildroot-training-chapter1.md',
        '/System/eLinuxFramework/buildroot-training-chapter2.md',
        '/System/eLinuxFramework/buildroot-training-chapter2-1.md',
        '/System/eLinuxFramework/buildroot-training-chapter3.md',
        '/System/eLinuxFramework/buildroot-training-chapter4.md',
        '/System/eLinuxFramework/buildroot-training-chapter5.md',
        '/System/eLinuxFramework/buildroot-training-chapter6.md',
        '/System/eLinuxFramework/buildroot-training-chapter7.md',
        '/System/eLinuxFramework/buildroot-training-chapter8.md',
        '/System/eLinuxFramework/buildroot-training-chapter9.md',
        '/System/eLinuxFramework/buildroot-training-chapter10.md',
        '/System/eLinuxFramework/buildroot-training-chapter11.md',
      ],
    },
    {
      text: 'Canann-SDK开发',
      collapsible: true,
      children: [
        '/System/DongshanPI-Vision/01-SDK_Build_and_Burn_Guide.md',
        '/System/DongshanPI-Vision/02-Linux_Kernel_Driver_Developer_Guides.md',
        '/System/DongshanPI-Vision/03-V4l2_Developer_Guides.md',
        '/System/DongshanPI-Vision/04-V4l2_Sensor_Developer_Guides.md',
        '/System/DongshanPI-Vision/05-Mailbox_Developer_Guides.md',
        '/System/DongshanPI-Vision/06-U-Boot_Developer_Guides.md',
        '/System/DongshanPI-Vision/07-System_memory_map.md',
        '/System/DongshanPI-Vision/08-SDK_DSP_CORE_Guide.md',
      ],
    },
  ],
  '/Devicedriver/': [
    {
      text: 'LVGL8-UI开发',
      collapsible: true,
      children: [
        '/Application/LVGL8-UI/100ASK_T113-PRO_00-DeviceConfig.md',
        '/Application/LVGL8-UI/100ASK_T113-PRO_01-Introduction.md',
        '/Application/LVGL8-UI/100ASK_V853-PRO_00-DeviceConfig.md',
      ],
    },
    {
      text: 'FB显示开发',
      collapsible: true,
      children: [
        '/Application/GraphicLibrariesAndApplications/01_FramebufferAPP.md',
        '/Application/GraphicLibrariesAndApplications/02_ImageProcess.md',
      ],
    },
    {
      text: '网络设备开发',
      collapsible: true,
      children: [
        '/Application/06_NetworkProgram.md',
        '/Application/16_MQTT.md',
      ],
    },
    {
      text: '模块设备开发',
      collapsible: true,
      children: [
        '/Application/09_GPIOProgram.md',
        '/Application/11_PWM.md',
        '/Application/12_IIC.md',
        '/Application/10_RTC.md',
        '/Application/14_Linux_Can.md',
        '/Application/15_StoreDevice.md',
      ],
    },
    {
      text: '音视频开发',
      collapsible: true,
      children: [
        '/Application/08_AudioBoard.md',
        '/Application/07_CameraV4L2.md',
      ],
    },
  ],
  '/Special/': [
    {
      text: '支持主线Linux',
      collapsible: true,
      children: ['/Special/02_ImageProcess.md'],
    },
    {
      text: 'Bootloader开发',
      collapsible: true,
      children: ['/Special/Linux_U-boot_DevelopmentGuide-01.md'],
    },
  ],
}
