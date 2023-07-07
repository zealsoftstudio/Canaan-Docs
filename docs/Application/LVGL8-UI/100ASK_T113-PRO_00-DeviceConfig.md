# T113-PRO LVGL环境配置

简介： 为了方便大家使用100ASK_T113-PRO开发板学习LVGL-UI开发，我们专门优化学习步骤，简化流程 提供一套 非常简单的快速上手教程，可以很方便快速开展 LVGL-UI相关的开发学习，无需再 折腾 环境搭建 SDK编译等复杂问题，传输文件只需一根 TypeC数据线 就可以搞定，使用起来非常简单。

系统镜像支持：

* alsa-utils工具集
*  blue-z工具集
*  dbus工具集
* tplayerdemo视频播放
*  tslib库
* valgrind调试工具
* gdbserver调试

工具链支持：

* GCC G++ LD AR AS GDB等
* 标准C库头文件，包含stdio.h 等等
* 包含系统镜像配套的 sysroot环境，用于交叉编译开发 对应的 应用程序。 如 alsa/ 头文件包含。

## 准备工作

### 准备硬件

1. 100ASK_T113-PRO开发板 x1 可以正常工作，正常运行。
2. （7寸RGB 1024x600显示屏 双面下接）接到开发板上。
3. 一台可以运行 ubuntu 18虚拟机的 系统。



### 获取专用镜像

* T113-LVGL8 课程专用镜像：
  *  [ 100ask_t113-pro_tinasdkv2.0_lvgl8_rgb-7inch1024x600_v1.0.img](https://dongshanpi.cowtransfer.com/s/52a7cbadeb6e4a)

​		获取完成后，**解压**镜像压缩包，可以看到两个文件,分别是镜像文件和READM.md。其中镜像文件可以使用开发板对应的烧写工具进行烧录；README.md文件里面包含镜像MD5校验码和版本说明，客户可以通过校验码确认文件的完整性和镜像版本的功能说明。

注意：解压缩 后需要使用的 镜像文件为  .img 

### 获取Toolchain工具链

​	我们为客户提供有针对LVGL编译开发所使用的工具链文件，可以通过以下链接进行下载：

* T113-LVGL8系统配套工具链：
  * [ gcc-6.4-2017.11-x86_64_arm-openwrt-linux-eabi-musl.tar.gz ](https://dongshanpi.cowtransfer.com/s/21041b2a2e4642)


* T113-LVGL8系统专用sysroot：
  *  [ 100ask_t113-pro_arm-openwrt-linux-eabi-glibc_sysroot_v1.0.tar.gz ](https://dongshanpi.cowtransfer.com/s/92581a330ce14d )


​	获取完成后，**解压**两个文件的压缩包，可以看到README.md文件和对应的文件。README.md文件里面包含镜像MD5校验码和版本说明，客户可以通过校验码确认文件的完整性和镜像版本的功能说明。

注意：解压缩 后需要使用的 文件 后缀 为 .tar.gz 

### 获取LVGL源码

​	我们为客户提供有基本的LVGL示例程序，该示例程序可以帮助客户了解LVGL应用开发流程，可以通过以下链接进行下载：

- LVGL示例源码：[allwinner-tinasdk_lvgl8_demo_V1.0.zip 点击下载](https://dongshanpi.cowtransfer.com/s/4b36b0b0a03349)

  压缩包名称为：

​	获取完成后，解压源码压缩包，可以看到README.md文件和对应的源码文件。README.md文件里面包含镜像MD5校验码和版本说明，客户可以通过校验码确认文件的完整性和镜像版本的功能说明。



## 开始使用

### 运行Ubuntu镜像

​	这里假设提供两种方法供大家选择。

​	方式一：如果您之前已经按照页面[《**eLinux应用开发环境**》---> 《**开发环境配置**》]( http://allwinner-docs.100ask.org/Application/LinuxEnvironmentonfiguration/01-EnvironmentalConfiguration.html) 配置好了虚拟机，那您可直接阅读本章下一小节的《配置系统开发环境》



​	方式二：如果您没有虚拟机，也不想重新配置，可以下载使用我们已经配置好的虚拟机[Allwinner-TinaSDK_100ASK_T113-PRO_LVGLDemo_Ubuntu-18.04_VM_V1.0.zip ](https://dongshanpi.cowtransfer.com/s/7feb221321384a) 。（注意配置好的虚拟机占用的内存相对较大，下载会比较慢）下载链接：https://dongshanpi.cowtransfer.com/s/7feb221321384a  

![100ask-VMware-lvgl](http://photos.100ask.net/allwinner-docs/lvgl8-ui/100ask-VMware-lvgl.gif)

注意：虚拟机的用户名为 **ubuntu**  密码为：**ubuntu**  **如果您使用我们提供的虚拟机镜像。里面已经包含工具链和LVGL DEMO示例。**



### 配置系统开发环境

注意： **如果您使用 方式二 我们提供的虚拟机镜像。里面已经配置好了如下环境依赖。**

如果您是使用自己的Ubuntu系统则需要安装系统编译所需依赖环境。

``` shell
sudo apt install open-vm-tools-desktop 
sudo apt-get install -y  sed make binutils build-essential  gcc g++ bash patch gzip bzip2 perl  tar cpio unzip rsync file  bc wget python  cvs git mercurial rsync  subversion android-tools-mkbootimg vim  libssl-dev  android-tools-fastboot
sudo apt-get install -y  libncurses5-dev   u-boot-tools 
```



### 更新开发板系统镜像

因为此章节页面需要特定的镜像和环境才能开发，所以您需要更新开发板内的默认系统镜像，烧写系统 参考 文章 [烧录开发板系统](http://allwinner-docs.100ask.org/Basic/100ASK_T113-PRO/03-1_FlashSystem.html) 里面进行烧录，但是需要注意 烧写的镜像 文件 为 此章节 前面 《获取专用镜像》 里面的 `100ask_t113-pro_tinasdkv2.0_lvgl8_rgb-7inch1024x600_v1.0.img` 进行烧录更新，烧录完成后，镜像内就会包含 LVGL-UI开发课程 所需的 依赖 以及测试示例程序 lv_example 



## 运行LVGL示例

### 启动开发板

​	按要求接入电源或Type-c数据线，拨动拨码开关，将开发板上电，如果您是第一次使用开发板 请查看文章 100ASK_T113-PRO开发板使用 内 [快速开始使用](http://allwinner-docs.100ask.org/Basic/100ASK_T113-PRO/03-QuickStart.html)


### 运行LVGL示例

​	打开串口终端软件，这里我使用MobaXterm软件演示，选择开发板的串口终端号，可以在设备管理中查看

![image-20230707143104904](http://photos.100ask.net/allwinner-docs/lvgl8-ui/image-20230707143104904.png)

这里我的串口设备号为`COM15`，所以在串口终端软件中也应该使用`COM15`，波特率为115200。操作步骤如下所示：

![100ask-lvgl-serial-demo](http://photos.100ask.net/allwinner-docs/lvgl8-ui/100ask-lvgl-serial-demo.gif)

上面操作以7寸RGB屏作为演示硬件测试指令，输入：

```
root@TinaLinux:/# lv_examples 0
wh=1024x600, vwh=1024x1200, bpp=32, rotated=0
Turn on double buffering.
```

输入后，显示屏上会显示如下如所示的LVGL示例：

![](http://photos.100ask.net/allwinner-docs/lvgl8-ui/LVGL-Widgets-Demo.gif)

注意：LVGL示例会自动适配屏幕，可能和上面展示的比例不一致。

​	系统中内置有5个LVGL演示应用，如下所示：

```
lv_examples 0, is lv_demo_widgets
lv_examples 1, is lv_demo_music
lv_examples 2, is lv_demo_benchmark
lv_examples 3, is lv_demo_keypad_encoder
lv_examples 4, is lv_demo_stress
```



## 开发LVGL程序

### 配置编译lvgl环境

**注意：**如果您使用的是前文 `开始使用-->运行虚拟机  方式二`  中 我们提供好的虚拟机，可直接跳过此章节，进入下一小节《编译LVGL源码》；如果您是自己配置的虚拟机，请认准阅读并按此章节进行操作。

​	假设将下载的工具链和源码tar.gz格式的压缩包文件传入虚拟机的任意目录中，这里我新建一个lvgl工作目录存储三个压缩包。输入：

```
ubuntu@ubuntu1804ubuntu@ubuntu1804:~$ mkdir lvgl-work
ubuntu@ubuntu1804:~$ cd lvgl-work
```

将`allwinner-tinasdk_lvgl8_demo_V1.0.tar.gz`文件传入`lvgl-work`目录中，如下所示：

```
ubuntu@ubuntu1804:~/lvgl-works$ ls
allwinner-tinasdk_lvgl8_demo_V1.0.tar.gz
```

新建`toolchain`文件夹用于存储`sysroot`和`gcc`文件夹

```
ubuntu@ubuntu1804ubuntu@ubuntu1804:~$ mkdir toolchain
ubuntu@ubuntu1804:~$ cd toolchain
```

传入压缩包后，如下所示：

```
ubuntu@ubuntu1804:~/lvgl_work/toolchain$ ls
100ask_t113-pro_arm-openwrt-linux-eabi-glibc_sysroot_v1.0.tar.gz 
gcc-6.4-2017.11-x86_64_arm-openwrt-linux-eabi-musl.tar.gz
```

在toolchain目录中解压gcc工具链压缩包和sysroot依赖压缩包，输入：

```
tar -xzvf gcc-6.4-2017.11-x86_64_arm-openwrt-linux-eabi-musl.tar.gz
```

```
tar -xzvf 100ask_t113-pro_arm-openwrt-linux-eabi-glibc_sysroot_v1.0.tar.gz 
```

解压完成后返回上一级lv_work目录中输入：

```
ubuntu@ubuntu1804:~/lvgl_work/toolchain$ cd ../
ubuntu@ubuntu1804:~/lvgl_work$
```

解压lvgl demo源码压缩包

```
tar -xzvf allwinner-tinasdk_lvgl8_demo_V1.0.tar.gz 
```

解压完成后的目录如下所示：

```
ubuntu@ubuntu1804:~/lvgl_work$ tree -L 2
.
├── allwinner-tinasdk_lvgl8_demo_V1.0.tar.gz
├── lv_port_linux_frame_buffer
│   ├── CMakeLists.txt
│   ├── LICENSE
│   ├── lv_conf.h
│   ├── lv_drivers
│   ├── lv_drv_conf.h
│   ├── lvgl
│   ├── main.c
│   ├── Makefile
│   ├── mouse_cursor_icon.c
│   └── README.md
└── toolchain
    ├── 100ask_t113-pro_arm-openwrt-linux-eabi-glibc_sysroot_v1.0.tar.gz 
    ├── arm-openwrt-linux-eabi-musl
    ├── gcc-6.4-2017.11-x86_64_arm-openwrt-linux-eabi-musl.tar.gz
    ├── sysroot
    └── toolchain

7 directories, 11 files
```

其中`lv_port_linux_frame_buffer`为LVGL Demo示例源码；`toolchain`中包含gcc交叉编译工具链和sysroot依赖文件。



下面开始修改源码中的Makefile文件，使lvgl源码使用下载的工具链进行编译。

进入gcc工具链文件目录的bin目录中查看交叉编译工具链是否存在

```
ubuntu@ubuntu1804:~/lvgl_work/toolchain/arm-openwrt-linux-muslgnueabi/bin$ ls arm-openwrt-linux-muslgnueabi-gcc
arm-openwrt-linux-muslgnueabi-gcc
ubuntu@ubuntu1804:~/lvgl_work/toolchain/arm-openwrt-linux-muslgnueabi/bin$ pwd
/home/ubuntu/lvgl_work/toolchain/arm-openwrt-linux-muslgnueabi/bin
```

`arm-openwrt-linux-muslgnueabi-gcc`交叉编译工具链绝对路径为：

```
/home/ubuntu/lvgl_work/toolchain/arm-openwrt-linux-muslgnueabi/bin/arm-openwrt-linux-muslgnueabi-gcc
```



进入LVGL源码目录中，查看源码文件。

```
ubuntu@ubuntu1804:~/lvgl_work$ cd lv_port_linux_frame_buffer/
ubuntu@ubuntu1804:~/lvgl_work/lv_port_linux_frame_buffer$ ls
CMakeLists.txt  LICENSE  lv_conf.h  lv_drivers  lv_drv_conf.h  lvgl  main.c  Makefile  mouse_cursor_icon.c  README.md
```

修改Makfiel文件

```
vi Makefile
```

修改Makefile文件中`CC`为刚刚前面确认的交叉编译工具链路径，例如我刚刚确认的gcc交叉编译工具链绝对路径为：

```
/home/ubuntu/lvgl_work/toolchain/arm-openwrt-linux-muslgnueabi/bin/arm-openwrt-linux-muslgnueabi-gcc
```

那么修改Makfile文件中的`CC`修改为gcc交叉编译工具链绝对路径。

![image-20230707173444918](http://photos.100ask.net/allwinner-docs/lvgl8-ui/image-20230707173444918.png)

修改步骤如下所示：

![100ask-lvgl-modifyMafile](http://photos.100ask.net/allwinner-docs/lvgl8-ui/100ask-lvgl-modifyMafile.gif)

修改完成后，保存退出编辑界面。

### 编译LVGL源码

此时还需要指定存放交叉编译需要使用的工具链、库文件、头文件的文件夹。在终端输入

```
export ARCH=arm
export CROSS_COMPILE=arm-openwrt-linux-muslgnueabi-
export PATH=$PATH:/home/ubuntu/lvgl_work/toolchain/arm-openwrt-linux-eabi-musl/bin/
export SYSROOT_DIR=/home/ubuntu/lvgl_work/toolchain/sysroot/
export STAGING_DIR=/home/ubuntu/lvgl_work/toolchain/arm-openwrt-linux-muslgnueabi/
```

注意：如果您是自己配置的虚拟机的请修改为对应的路径,，如果使用我们提供的方式二  直接 复制 粘贴到  ubuntu18.04终端执行即可。



编译过程如下所示：

![100ask-lvgl-makeAndBuild](http://photos.100ask.net/allwinner-docs/lvgl8-ui/100ask-lvgl-makeAndBuild.gif)

等待编译完成后，会在当前目录下生成名称为`demo`的应用程序。

```
book@100ask:~/lvgl-work/lv_port_linux_frame_buffer$ ls demo 
demo
```

### 上传至开发板运行

注意： 默认情况下 上述的 ubuntu系统配置环境 以及我们制作的虚拟机镜像已经配置好 adb环境，大家只需要 参考 文章 [3-通过adb传输文件](http://allwinner-docs.100ask.org/Basic/100ASK_V853-PRO/03-StartFirstExperience.html#_3-%E9%80%9A%E8%BF%87adb%E4%BC%A0%E8%BE%93%E6%96%87%E4%BB%B6) 讲您的开发板 挂载至 ubuntu系统上 即可操作如下步骤 开始进行上传操作。

在ubuntu系统下使用ADB功能将生成`demo`应用程序传输到开发板中运行，将ADB设备连接到虚拟机端中。查看ADB设备的设备号

```
abd devices
```

传输LVGL示例程序进开发板端的root目录下

```
adb push demo /mnt/UDISK
```

操作过程如下所示：

![100ask-lvgl-adbPush](http://photos.100ask.net/allwinner-docs/lvgl8-ui/100ask-lvgl-adbPush.gif)



传输完成后，切换到开发板串口终端软件，进入终端，输入 如下命令： 即可看到屏幕运行 自己编译新的demo程序。

```
root@TinaLinux:/# cd /mnt/UDISK/
root@TinaLinux:~# ./demo 0
wh=480x800, vwh=480x1600, bpp=32, rotated=0
```

输入完成后，即可实现镜像中内置的lvgl demo演示示例。



## 深入课程学习

### LVGL专题课程学习

 LVGL开源GUI零基础入门课程(韦东山·监制) 教程基于lvgl v8.2版本


<iframe src="//player.bilibili.com/player.html?aid=209749730&bvid=BV1Ya411r7K2&cid=458073148&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


### LVGL项目课程学习

* **基于LVGL的温湿度远程监控显示系统** 
   课程目录： [**forums.100ask.net/t/topic/602**](http://forums.100ask.net/t/topic/602)
	* 1. 移植LVGL到Linux开发板
	* 2. 初步移植MQTT到Ubuntu和Linux开发板
	* 3. SquareLine Studio与LVGL模拟器
	* 4. 温湿度监控系统——绘制温湿度折线图
	* 5. 温湿度监控系统——学习paho mqtt的基本操作
	* 6. 温湿度监控系统——多线程与温湿度的获取显示
	* 7. 设计温湿度采集MCU子系统
	* 8. 阿里云物联网平台的简单使用



* 百问网linux桌面GUI，基于LVGL 8.1。 
   * LVGL视频教程： https://www.bilibili.com/video/BV1Ya411r7K2
   * 仓库源码： https://gitee.com/weidongshan/lv_100ask_linux_desktop



* lv_lib_100ask是基于lvgl库的各种开箱即用的方案参考或对lvgl库各种组件的增强接口。 
  * 移植示例视频教程： https://www.bilibili.com/video/BV1Xa41197uh?p=9
  * 仓库源码： https://gitee.com/weidongshan/lv_lib_100ask.git


### 更多示例