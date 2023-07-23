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
        '/Basic/100ASK_V853-PRO/01-HardwareResources.md',
        '/Basic/100ASK_V853-PRO/02-SoftwareResources.md',
        '/Basic/100ASK_V853-PRO/03-StartFirstExperience.md',
        '/Basic/100ASK_V853-PRO/04-BurningSystem.md',
      ],
    },
  ],
  '/Application/': [
    {
      text: 'AI人工智能应用开发',
      collapsible: true,
      children: [
        '/Application/AIApplicationDevelopment/01-NPUDevelopmentDeployment.md',
        '/Application/AIApplicationDevelopment/02-Face-HumanoidDetection.md',
        '/Application/AIApplicationDevelopment/03-Model-transformation-toolkit.md',
        '/Application/AIApplicationDevelopment/04-yolov3ModelDeployment.md',
        '/Application/AIApplicationDevelopment/05-Lenet-TrainingToDeployment.md',
        '/Application/AIApplicationDevelopment/06-SupportOpencvFFmpeg.md',
        '/Application/AIApplicationDevelopment/07-yolov5ModelDeployment.md',
        '/Application/AIApplicationDevelopment/08-yolov5TrainCustomDatasetModel.md',
        '/Application/AIApplicationDevelopment/09-YolactModelDeploymentActualCombat.md',
        '/Application/AIApplicationDevelopment/10-MixedQuantization.md',
        '/Application/AIApplicationDevelopment/11-VIPLiteAPI-explain.md',
        '/Application/AIApplicationDevelopment/12-CommonNetworkPerformance.md',
      ],
    },
    {
      text: '多媒体框架开发',
      collapsible: true,
      children: [
        '/Application/MPPApplicationDevelopment/01-MediaProcessingPlatformConfig.md',
        '/Application/MPPApplicationDevelopment/02-MPPSampleInstructions.md',
        '/Application/MPPApplicationDevelopment/03-MPPDevelopmentGuide.md',
      ],
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
      children: [
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
