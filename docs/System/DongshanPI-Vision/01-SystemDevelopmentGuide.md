# SDK系统开发指南

**硬件要求：**

- 一台PC电脑：
  - 显卡，显存4GB以上
  - 内存16GB以上
  - 硬盘100GB以上（建议200GB以上）
  - 系统：Windows10/11系统

**软件要求：**

- VMware虚拟机工具：[VMware下载中心](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

- Ubuntu镜像，可通过以下两种方法获取：
  - 奶牛快传：[DongshanPI-Vision虚拟机-Ubuntu20.04.zip](https://dongshanpi.cowtransfer.com/s/386fc0c0310946) 
  - 百度网盘：[DongshanPI-Vision虚拟机-Ubuntu20.04.zip](https://pan.baidu.com/s/1LbkblZvlbsXiJWH-mzFsWw?pwd=blgh)




开始前请确保您已经成功安装VMware虚拟机工具并成功运行我们给您提供的Ubuntu20.04镜像。

## 1.获取系统源码

​	打开VMware虚拟机工具启动Ubuntu20.04系统，启动完成后在用户目录中打开终端，创建`DongshanPI-Vision`文件夹，用于存放系统源码。

```
ubuntu@ubuntu2004:~$ mkdir DongshanPI-Vision
```

进入`DongshanPI-Vision`目录下，拉取系统源码：https://e.coding.net/weidongshan/dongshanpi-vision/br2-canaan-k510.git。

```
ubuntu@ubuntu2004:~$ cd DongshanPI-Vision
ubuntu@ubuntu2004:~/DongshanPI-Vision$ git clone https://e.coding.net/weidongshan/dongshanpi-vision/br2-canaan-k510.git
Cloning into 'br2-canaan-k510'...
remote: Enumerating objects: 3885, done.
remote: Counting objects: 100% (3885/3885), done.
remote: Compressing objects: 100% (1616/1616), done.
remote: Total 3885 (delta 2193), reused 3857 (delta 2177), pack-reused 0
Receiving objects: 100% (3885/3885), 11.68 MiB | 9.10 MiB/s, done.
Resolving deltas: 100% (2193/2193), done.
```

进入`br2-canaan-k510 `目录下，拉取buildroot源码：https://e.coding.net/weidongshan/dongshanpi-vision/buildroot-2020.02.11.git。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision$ cd br2-canaan-k510/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ git clone https://e.coding.net/weidongshan/dongshanpi-vision/buildroot-2020.02.11.git
Cloning into 'buildroot-2020.02.11'...
remote: Enumerating objects: 14715, done.
remote: Counting objects: 100% (14715/14715), done.
remote: Compressing objects: 100% (13741/13741), done.
remote: Total 14715 (delta 724), reused 14682 (delta 709), pack-reused 0
Receiving objects: 100% (14715/14715), 7.92 MiB | 9.77 MiB/s, done.
Resolving deltas: 100% (724/724), done.
Updating files: 100% (11625/11625), done.
```



下载系统拓展压缩包：[dl.tar.gz](https://dongshanpi.cowtransfer.com/s/4d7394cfad3640)。获取拓展压缩包[dl.tar.gz](https://dongshanpi.cowtransfer.com/s/4d7394cfad3640)文件后，需要您手动下载并传入Ubuntu中的`DongshanPI-Vision/br2-canaan-k510/`目录下，如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ ls
board                        external.desc   pkg-download
buildroot-2020.02.11         external.mk     README.md
Config.in                    LICENSE         release_notes.md
configs                      Makefile        toolchain
dl.tar.gz                    mkdtb-local.sh  tools
docs                         package
dongshanpi-vision_defconfig  patches
```

解压压缩包dl.tar.gz文件

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ tar -xzvf dl.tar.gz
```

解压完成后可以在当前文件夹看到多出了一个名为`dl`文件夹

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ ls
board                 dongshanpi-vision_defconfig  patches
buildroot-2020.02.11  external.desc                pkg-download
Config.in             external.mk                  README.md
configs               LICENSE                      release_notes.md
dl                    Makefile                     toolchain
dl.tar.gz             mkdtb-local.sh               tools
docs                  package
```



## 2.获取交叉编译工具链

​	交叉编译工具链下载地址：[https://dongshanpi.cowtransfer.com/s/bc101fb198e746](https://dongshanpi.cowtransfer.com/s/bc101fb198e746)

​	下载交叉编译工具链压缩包[nds64le-elf-mculib-v5d.txz](https://dongshanpi.cowtransfer.com/s/bc101fb198e746)，下载完成后将压缩包传入`DongshanPI-Vision/br2-canaan-k510/toolchain`目录下，如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/toolchain$ ls
nds64le-elf-mculib-v5d.txz
```

解压交叉编译工具链压缩包nds64le-elf-mculib-v5d.txz

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/toolchain$ tar -xvf nds64le-elf-mculib-v5d.txz
```

解压完成后，请返回`DongshanPI-Vision/br2-canaan-k510`目录下

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/toolchain$ cd ../
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ 
```



## 3.编译

### 3.1 指定配置文件并编译系统

在`DongshanPI-Vision/br2-canaan-k510`目录下，执行`make CONF=dongshanpi-vision_defconfig  `，在SDK源码内指定DongshanPI-Vision开发板系统配置文件。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ make CONF=dongshanpi-vision_defconfig
```

![image-20230803161838977](http://photos.100ask.net/canaan-docs/image-20230803161838977.png)

配置完成后会自动编译系统。

编译时间可能会比较长，需要您耐心等待。。。

当系统输出以下内容即代表编译成功。

![image-20230803193255868](http://photos.100ask.net/canaan-docs/image-20230803193255868.png)

编译完成后，会生成`dongshanpi-vision_defconfig`文件夹

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ cd dongshanpi-vision_defconfig/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ ls
build  host  images  Makefile  nand_target  staging  target
```

其中各文件描述如下：

| **文件**    | **内容描述**                                                 |
| ----------- | ------------------------------------------------------------ |
| Makefile    | 编译镜像使用的Makefile。                                     |
| build       | 所有源码包的编译目录。例如linux kernel，u-boot，BBL，busybox等，源码都会解压到build目录下并编译。 |
| host        | 所有host package的安装路径，toolchain也会拷贝至此目录下，用于构建交叉编译环境。 |
| images      | 编译生成的目标文件目录（详见下面的说明）                     |
| nand_target | 根文件系统原始目录（生成NandFlash镜像使用）                  |
| target      | 根文件系统原始目录（生成eMMC和SD卡镜像使用）                 |

dongshanpi-vision_defconfig/images目录下是烧录镜像，其中各个文件的说明如下。

| **文件**                   | **内容描述**                                                 |
| -------------------------- | ------------------------------------------------------------ |
| bootm-bbl.img              | Linux+bbl内核镜像（打包过内核的bbl目标文件，用于uboot引导bbl） |
| k510.dtb                   | 设备树                                                       |
| sysimage-emmc.img          | emmc烧录文件：已整个打包uboot_burn、kernel和bbl              |
| sysImage-sdcard.img        | sdcard烧录文件：已整个打包uboot_burn、kernel和bbl            |
| sysImage-nand.img          | nand烧录文件：已整个打包uboot_burn、kernel和bbl              |
| u-boot.bin                 | uboot 二进制文件                                             |
| u-boot_burn.bin            | uboot 烧录文件                                               |
| uboot-emmc.env             | uboot环境变量：用于emmc启动                                  |
| uboot-sd.env               | uboot环境变量：用于sdcard启动                                |
| uboot-nand.env             | uboot环境变量：用于nand启动                                  |
| vmlinux                    | Linux内核镜像文件（带elf调试信息）                           |
| rootfs.ext2                | buildroot格式rootfs ext2镜像文件                             |
| sysimage-sdcard-debian.img | sdcard烧录文件：卡镜像(debian格式rootfs)                     |

dongshanpi-vision_defconfig/build 目录下是所有被编译对象的源码，其中几个重要的文件说明如下。

| **文件**          | **内容描述**                  |
| ----------------- | ----------------------------- |
| linux-xxx         | 被编译的 Linux kernel源码目录 |
| uboot-xxx         | 被编译的 Uboot 源码目录       |
| riscv-pk-k510-xxx | 被编译的 bbl 源码目录         |
| ...               |                               |

注： xxx是版本号。后面章节引用kernle，bbl和uboot的路径时，xxx均表示版本号。

> **需要特别注意**：当make clean 的时候，dongshanpi-vision_defconfig文件夹下所有内容将被删除。所以，如果需要修改kernel、bbl或者uboot代码，不要直接在build目录下修改，可以参考第4章内容，使用override source的方式。

### 3.2 配置Buildroot

在终端中的`DongshanPI-Vision/br2-canaan-k510`目录下输入配置 buildroot命令`make CONF=dongshanpi-vision_defconfig menuconfig`，如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ make CONF=dongshanpi-vision_defconfig menuconfig
```

![image-20230803201609888](http://photos.100ask.net/canaan-docs/image-20230803201609888.png)

执行完成后会进入buildroot配置界面，

![image-20230803202012123](http://photos.100ask.net/canaan-docs/image-20230803202012123.png)

完成配置后保存并退出，用户可进入`dongshanpi-vision_defconfig`目录下执行`make`编译刚刚配置的文件。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ cd dongshanpi-vision_defconfig/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
```



###  3.3 配置 U-Boot

当用户需要对 uboot配置进行修改，可进入`dongshanpi-vision_defconfig/build/uboot-origin_master`目录， 输入`vi .config`命令，修改U-Boot配置：

```shell
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ cd dongshanpi-vision_defconfig/build/uboot-origin_master
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ vi .config
```

执行结果如下：

![image-20230803203428086](http://photos.100ask.net/canaan-docs/image-20230803203428086.png)

执行完成后会使用vi编辑器进入uboot配置文件，如下所示，按照您的需要修改配置文件。

![image-20230803203755608](http://photos.100ask.net/canaan-docs/image-20230803203755608.png)

修改完成后，按下`esc`后，输入`:wq`，保存并退出uboot配置文件。

​	当您修改完成uboot配置文件后，需要返回到`DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig`目录下执行`make uboot-rebuild`，重新编译uboot。如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build/uboot-origin_master$ cd ../../
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make uboot-rebuild
```

![image-20230803204402130](http://photos.100ask.net/canaan-docs/image-20230803204402130.png)

### 3.4 编译U-boot

dongshanpi-vision_defconfig/build/uboot-xxx 目录下保存有被编译的U-Boot源码，无论是用户对 U-Boot源代码进行了修改，还是对uboot 进行了重新配置，都需要重新编译U-Boot。

进入dongshanpi-vision_defconfig目录，输入如下命令重新编译 U-Boot：

```shell
make uboot-rebuild
```

编译完成后，会在dongshanpi-vision_defconfig/images目录下生成新的 u-boot.bin 文件。

如果要用新u-boot重新生成烧录镜像文件，在`dongshanpi-vision_defconfig`目录下执行`make`，如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
```

编译完成会看到如下镜像文件生成的信息。

![image-20230803205346040](http://photos.100ask.net/canaan-docs/image-20230803205346040.png)

###  3.5 配置 Linux kernel

当用户需要对 kernel 配置进行修改，可进入k510_crb_lp3_v1_2_defconfig目录， 输入`make linux-menuconfig`命令启动 kernel 配置，如下所示。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make linux-menuconfig
```

输入后会进入内核配置界面

![image-20230803205645988](http://photos.100ask.net/canaan-docs/image-20230803205645988.png)

修改配置后退出menuconfig后，在dongshanpi-vision_defconfig目录，输入如下命令启动编译：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make linux-rebuild
```

### 3.6 编译Linux kernel

dongshanpi-vision_defconfig/build/linux-xxx 目录下保存有被编译的linux源码，无论是用户对 linux 源代码进行了修改，还是对linux 进行了重新配置，都需要重新编译linux 。

进入dongshanpi-vision_defconfig目录，输入如下命令重新编译 linux：

```shell
make linux-rebuild
```

执行结果如下：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make linux-rebuild
```

编译完成后会在dongshanpi-vision_defconfig/images目录下生成新的vmlinux。

linux kernel镜像需要用bbl打包，重编linux kernel后，需要重编bbl生成新的bbl/kernel镜像用于u-boot引导，因此输入如下两条命令。

```shell
make riscv-pk-k510-dirclean
make riscv-pk-k510
```

执行结果如下：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make riscv-pk-k510-dirclean
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make riscv-pk-k510
```

![image-20230803210239243](http://photos.100ask.net/canaan-docs/image-20230803210239243.png)

译完成，会在`dongshanpi-vision_defconfig/images`目录下生成新的`bootm-bbl.img`。

最后在`dongshanpi-vision_defconfig`目录下输入`make`，用新的bootm-bbl.img打包生成emmc和sd卡镜像文件。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
```

编译完成会看到如下镜像文件生成的信息。

![image-20230803210645292](http://photos.100ask.net/canaan-docs/image-20230803210645292.png)

### 3.7 编译 dts

设备树文件`dongshanpi-vision.dts`位于`DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build/linux-origin_master/arch/riscv/boot/dts/canaan`目录下

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build/linux-origin_master/arch/riscv/boot/dts/canaan$ ls
dongshanpi-vision.dts  k510_common  k510_crb_lp3_debian_v0_1.dts  k510_crb_lp3_hdmi_v1_2.dts  k510_crb_lp3_v0_1.dts  k510_crb_lp3_v1_2.dts  k510_evb_lp3_v1_1.dts
```



当用户只修改了设备树，可只对设备树进行编译和反编译。

返回`DongshanPI-Vision/br2-canaan-k510`目录编写一个 mkdtb-local.sh 脚本，其中的内容为：

```
# !/bin/sh

set -Eeuo pipefail

export BUILDROOT="$(dirname "$(realpath "$0")")"
export VARIANT="${1:-dongshanpi-vision}"

if [[ "$VARIANT" = *_defconfig ]]; then
        VARIANT="${VARIANT:0:-10}"
fi

export KERNEL_BUILD_DIR="${BUILDROOT}/${VARIANT}_defconfig/build/linux-origin_master"
export BINARIES_DIR="$BUILDROOT/${VARIANT}_defconfig/images"
export PATH="$PATH:${BUILDROOT}/${VARIANT}_defconfig/host/bin"

echo "${BUILDROOT}/${VARIANT}_defconfig/host/bin"

riscv64-linux-cpp  -nostdinc -I "${KERNEL_BUILD_DIR}/include" -I "${KERNEL_BUILD_DIR}/arch" -undef -x assembler-with-cpp "${KERNEL_BUILD_DIR}/arch/riscv/boot/dts/canaan/${VARIANT}.dts" "${BINARIES_DIR}/${VARIANT}.dts.tmp"

"${KERNEL_BUILD_DIR}/scripts/dtc/dtc" -I dts -o "${BINARIES_DIR}/k510.dtb" "${BINARIES_DIR}/${VARIANT}.dts.tmp"
"${KERNEL_BUILD_DIR}/scripts/dtc/dtc" -I dtb -O dts "${BINARIES_DIR}/k510.dtb" -o "${BINARIES_DIR}/all.dts"

echo "DONE"
echo "${BINARIES_DIR}/k510.dtb"
echo "${BINARIES_DIR}/all.dts"
```

使用`touch`命令创建`mkdtb-local.sh`脚本文件，使用vi编辑器将上面的内容填入`mkdtb-local.sh`脚本文件中

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ touch mkdtb-local.sh
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ vi mkdtb-local.sh
```

创建完成后，此时该脚本还不是可执行脚本，需要给脚本文件增加可执行权限，如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ chmod +x mkdtb-local.sh 
```

增加完成后运行编译脚本，运行结果如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ ./mkdtb-local.sh 
/home/ubuntu/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/host/bin
DONE
/home/ubuntu/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/images/k510.dtb
/home/ubuntu/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/images/all.dts
```

编译完成在dongshanpi-vision_defconfig/images目录下的 k510.dtb是新生成的设备树数据库文件，all.dts是反编译后的设备树文件。

### 3.8 编译 app

用户可参考 `package/hello_world` 中Config.in和makefile文件写法，构建自己的应用程序，用户应用程序放置到 DongshanPI-Vision/br2-canaan-k510/package 目录下。

这里以将 hello_world 工程放置到 DongshanPI-Vision/br2-canaan-k510/package 为例，来说明编译应用程序的过程。

在宿主机环境下修改DongshanPI-Vision/br2-canaan-k510目录下的Config.in文件。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ vi Config.in
```

在Config.in 中添加package/hello_world/Config.in所在的路径并保存。

![image-20230804094508906](http://photos.100ask.net/canaan-docs/image-20230804094508906.png)

在DongshanPI-Vision/br2-canaan-k510目录下输入配置 buildroot命令：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ make CONF=dongshanpi-vision_defconfig menuconfig
```

出现buildroot配置页面，进入`External option`选项下，选中其中的hello_world后保存退出。

![image-20230804095038885](http://photos.100ask.net/canaan-docs/image-20230804095038885.png)

保存退出后返回终端，在`DongshanPI-Vision/br2-canaan-k510`目录下，进入dongshanpi-vision_defconfig/目录下

```shell
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ cd dongshanpi-vision_defconfig/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
```

在DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app目录下，可以看到生成的hello应用程序，由此可判断应用程序是否被正确编译。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ cd target/app/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app$ ls
ai            crypto       dsp_log        gpio_keys    mailbox_demo  rtc     twod_app  wifi
aws_iot_test  drm_demo     dsp_scheduler  hello_world  mediactl_lib  server  uart      write_read_file
client        dsp_app_new  encode_app     lvgl         pwm           trng    watchdog
```

可以看到app目录下生成了`hello_world`文件夹，进入该文件夹下可以看到对应的hello可执行程序。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app$ cd hello_world/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app/hello_world$ ls
hello
```



若已经编译过，只是对app进行编译并打包到烧录镜像中，执行步骤如下：

进入到DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig目录下，输入如下命令编译 hello应用程序。

```
make hello_world-rebuild
```

执行结果如下：

![image-20230804120237589](http://photos.100ask.net/canaan-docs/image-20230804120237589.png)

## 4.使用K510 SDK进行开发

### 4.1 linux kernel/BBL/uboot源码

本sdk使用的uboot版本是2020.01，uboot补丁目录是package/patches/uboot，打完补丁后的目录是dongshanpi-vision_defconfig/build/uboot-2020.01。

本sdk使用的kernel版本是4.17，kernel补丁目录是package/patches/linux，打完补丁后的目录是dongshanpi-vision_defconfig/build/linux-4.17。

本sdk的 BBL作为一个target package，放在package/riscv-pk-k510/目录下，riscv-pk-k510.mk中指定了bbl的代码源和版本号：

```text
RISCV_PK_K510_VERSION = d645baf2964c3088f8cb08b4600e8f9f0fdeca4e
RISCV_PK_K510_SITE = https://github.com/kendryte/k510_BBL.git
RISCV_PK_K510_SITE_METHOD = git
```

### 4.2 开发linux kernel/BBL/uboot

Buildroot下编译的每一个pacakge，包括linux kernel/BBL/uboot，都是通过下载tarball，解压，配置，编译，安装等统一的包管理步骤来实现的，因此在DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build目录下虽然可以看到全部的源码，但是都没有版本控制信息，即使代码是从git 仓库下载的。

虽然在dl/目录下可以看到包含了git仓库数据的kernel/BBL/uboot源码，但是buildroot仅仅把dl目录下的源码作为缓存，不建议直接在这个目录的进行开发。

针对开发模式，buildroot提供了OVERRIDE_SRCDIR的方式。

简单来说就是可以在dongshanpi-vision_defconfig目录下添加一个local.mk文件，在里面添加：

```text
<pkg1>_OVERRIDE_SRCDIR = /path/to/pkg1/sources
```

- LINUX 是kernel的package name
- UBOOT 是uboot的PACKAGE name
- RISCV_PK_K510 是bbl的package name

我们以linux kernel为例，介绍如何使用。
假设我已经在/data/yourname/workspace/k510_linux_kernel目录下clone了kernel的代码，并做了修改，想要在buildroot下编译并在DongshanPI-Vision开发板上测试，可以在dongshanpi-vision_defconfig目录下创建一个local.mk并添加如下内容:

```text
LINUX_OVERRIDE_SRCDIR = /data/yourname/workspace/k510_linux_kernel
```

在dongshanpi-vision_defconfig目录下执行

```shell
make linux-rebuild
```

就可以看到build/linux-custom目录下重新编译了kernel，用的就是/data/yourname/workspace/k510_linux_kernel下修改过的代码。
uboot和bbl也类似。这样就可以直接修改内核代码并在buildroot下重编内核，增量编译镜像去测试。

注： override的源码在dongshanpi-vision_defconfig/build目录下的目录名称会加上custom的后缀，来区分buildroot的默认配置中的每个package的代码源的不同。例如上述linux kernel的例子，编译会看到override指定的代码是在dongshanpi-vision_defconfig/build/linux-custom目录下编译，而不是之前我们看到的dongshanpi-vision_defconfig/build/linux-xxx目录。

对于package目录下的其他代码，或者buildroot原生的package，都可以通过这种方式在buildroot的框架下进行开发工作。



## 5.烧录镜像

DongshanPI-Vision开发板支持sdcard和eMMC启动方式，每次编译时在DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/image目录下将同时生成sysimage-sdcard.img和sysimg-emmc.img镜像文件，两份文件可分别烧录到sdcard和eMMC。

DongshanPI-Vision开发板通过 BOOT0 和 BOOT1 两个硬件管脚的状态决定芯片启动方式，具体设置请参考开发板的启动说明章节。

| BOOT1  | BOOT0  | 启动方式      |
| ------ | ------ | ------------- |
| 0(ON)  | 0(ON)  | 串口启动      |
| 0(ON)  | 1(OFF) | SD卡启动      |
| 1(OFF) | 0(ON)  | NANDFLASH启动 |
| 1(OFF) | 1(OFF) | EMMC启动      |

### 5.1 Windows下烧录镜像

对于Windows下如何烧录eMMC镜像和sdcard镜像，请访问[《更新系统》](https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/04-UpdateSystem.html)。

