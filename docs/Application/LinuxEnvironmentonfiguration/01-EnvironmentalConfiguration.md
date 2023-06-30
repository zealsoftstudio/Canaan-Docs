# V853-PRO开发环境配置

## 1.安装虚拟化工具

### 1.1 安装VMware

Windows下有很多虚拟机软件，目前市面上流行的有VMware和VirtualBox。VMware分为收费专业版Workstation Pro和非商用免费版Workstation Player，推荐使用Workstation Player。

使用浏览器从VMware官网（ www.vmware.com）下载Workstation Player最新安装包，或者使用我们提供的安装包，如果您已经安装过VMware 并且版本是 VMware 15.x以上，就不需要执行如下安装操作步骤，直接进入到下一章 下载打开虚拟机即可。

使用浏览器打开网址 https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html 参考下图箭头所示，点击下载安装 Windows版本的VMware Workstation ，点击 DOWNLOAD NOW 即可开始下载。

![image-20230627110605251](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110605251.png)

下载完成后，即可执行如下命令开始安装，也可以从我们网盘 03_Tools/VMware-workstation-full-16.2.3-19376536.zip 获取 。

第1步：以管理员身份运行安装软件

![image-20230627110623544](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110623544.png)

第2步：点击“下一步”

![image-20230627110635984](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110635984.png)

第3步：勾选“我接受”点击“下一步”

![image-20230627110645626](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110645626.png)

第4步：指定安装目录后点击“下一步”

![image-20230627110656711](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110656711.png)

第5步：设置用户体验后点击“下一步”

![image-20230627110706913](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110706913.png)

第6步：设置快捷方式后点击“下一步”

![image-20230627110716560](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110716560.png)

第7步：点击“安装”开始安装

![image-20230627110734954](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110734954.png)

第8步：等待安装完成

![image-20230627110740785](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110740785.png)

第9步：完成安装

![image-20230627110808704](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110808704.png)

VMWare安装完成后，有两个软件，它们都可以使用，建议使用第2个：

① Vmware Workstation Pro：这是收费的，可以试用30天。

② Vmware Workstation 16 Player：这是免费的。

注意：本文是在Windows 10上安装VMware Workstation, 我们不提供激活许可证，如有需要请自行百度 vmware激活密钥。



### 1.2 使用VMware打开Ubuntu

获取虚拟机，我们提供两种方式，你可以直接从 vmwareimages 官网下载，也可以从我们的百度网盘 03_Tools/Ubuntu_18.04.6_VM.7z 获取，我们推荐从官方下载，这样可以熟悉一下完整的操作步骤。

使用浏览器打开 https://www.linuxvmimages.com/images/ubuntu-1804/ 找到如下箭头所示位置，点击 VMware Image  下载。

![image-20230627110946576](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110946576.png)

下载后会得到一个 Ubuntu_18.04.6_VM.7z 这么一个虚拟机镜像压缩包，使用解压缩工具进行解压缩。

![image-20230627110957687](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627110957687.png)

解压缩后会得到如下两个文件，其中vmx文件是我们需要的vmware配置文件，另外需要保证您存放当前虚拟机的磁盘至少有 200G的空间，用于后续做实验。

![image-20230627111008000](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111008000.png)

​		有同学会问，为什么需要200G的空间，主要是因为编译构建 嵌入式Linux是一个很庞大的工程，对于电脑的性能 读写要求都很高，所以尽可能地准备足够多的空间使用。



### 1.3 在BIOS上启动虚拟化(virtualization)

大部分电脑的BIOS已经启动了虚拟化，可以打开设备管理器确认这点，如图 三.1和图 三.2所示：

![image-20230627111052357](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111052357.png)

图 三.1 Win10下打开任务管理器

![image-20230627111107499](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111107499.png)

图 三.2 查看虚拟化是否开启

如果上图中虚拟化没有显示为“已启动”，需要重启电脑进入BIOS启动虚拟化。各个电脑的BIOS设置界面可能不一样，下面的步骤只是示例：

第1步：进入BIOS

开机或重启电脑过程中，在自检画面处反复按F2键（注：部分机型使用Fn+F2）进入BIOS Setup设置界面。

第2步：找到虚拟化菜单

用键盘的右方向键选中 “Configuration”菜单，然后使用下方向键选中“Intel Virtual Technology”选项并回车，如图 三.3所示：

![image-20230627111121301](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111121301.png)

图 三.3 BIOS找到虚拟化

第3步：使能虚拟化

在弹出的菜单中，选择“Enable”并回车，如图 三.4所示：

![image-20230627111130934](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111130934.png)

图 三.4 Enable虚拟化

第4步：保存

最后按键盘的F10热键（注：部分机型需要配合Fn+F10）调出保存对话框，选择“Yes”保存退出并自动重启电脑，如图 三.5所示：

![image-20230627111142338](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111142338.png)

图 三.5 退出BIOS且保存

 

### 1.4 使用VMware运行Ubuntu

第1步：打开已经安装好的 vmware workstation 软件 点击左上角的 文件 → 打开 找到上面的 Ubuntu_18.04.6_VM_LinuxVMImages.COM.vmx 文件，之后会弹出新的虚拟机对话框页面。

![image-20230627111151531](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111151531.png)

第2步：配置虚拟机。

如下图所示为 为我们已经虚拟机的配置界面，那面我们可以 点击 红框 2 编辑虚拟机设置 里面 去调正 我们虚拟机的 内存 大小 和处理器个数，建议 最好 内存为 4GB 及以上，处理器至少4 个。 调整好以后，就可以 点击 开启此虚拟机 来运行此虚拟机了

![image-20230627111209633](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111209633.png)

第一次打开会提示 一个 虚拟机已经复制的 对话框，我们这时，只需要 点击 我已复制虚拟机 就可以继续启动虚拟机系统了。

![image-20230627111219906](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111219906.png)

等待数秒，系统就会自动启动了，启动以后 鼠标点击 Ubuntu 字样，就可以进入登录对话框，输入 密码 ubuntu 即可登录进入ubuntu系统内。

注意：

Ubuntu默认的用户名密码分别为 ubuntu ubuntu

Ubuntu默认的用户名密码分别为 ubuntu ubuntu

Ubuntu默认的用户名密码分别为 ubuntu ubuntu

ubuntu默认需要联网，如果你的 Windows电脑已经可以访问Internet 互联网，ubuntu系统后就会自动共享 Windows电脑的网络 进行连接internet 网络。

 

注意：

虚拟机默认没有开启小键盘，如果使用小键盘输入，请先开启小键盘。如**错误!未找到引用源。**所示：

![image-20230627111235019](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111235019.png)

注意：我们的ubuntu系统镜像，默认登录用户名是 ubuntu 密码是 ubuntu

注意：我们的ubuntu系统镜像，默认登录用户名是 ubuntu 密码是 ubuntu

注意：我们的ubuntu系统镜像，默认登录用户名是 ubuntu 密码是 ubuntu



## 2.配置ubuntu 依赖

安装必要软件包, 鼠标点击进入 ubuntu界面内，键盘同时 按下 ctrl + alt + t 三个按键会快速唤起，终端界面，唤起成功后，在终端里面执行如下命令进行安装必要依赖包。

```
sudo apt-get install -y  sed make binutils build-essential  gcc g++ bash patch gzip bzip2 perl  tar cpio unzip rsync file  bc wget python  cvs git mercurial rsync  subversion android-tools-mkbootimg vim  libssl-dev  android-tools-fastboot
```

![image-20230627111330777](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111330777.png)

如果你发现你的ubuntu虚拟机 第一次启动 无法 通过 windows下复制 命令 粘贴到 ubuntu内，则需要先手敲 执行如下命令 安装一个 用于 虚拟机和 windows共享剪切板的工具包。

![image-20230627111339680](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627111339680.png)

安装完成后，点击右上角的 电源按钮，重启ubuntu系统，或者 直接输入 sudo reboot 命令进行重启。这时就可以 通过windows端向ubuntu内粘贴文件，或者拷贝拷出文件了。

做完这一步以后，就可以继续往下，获取源码 开始100ASK_V853-Pro开发板的开发之旅了。