# 编译helloword应用程序

开始进行交叉编译前，需要先指定存放交叉编译需要使用的库文件头文件的文件夹。

```
export STAGING_DIR=~/tina-v853-open/prebuilt/rootfsbuilt/arm/toolchain-sunxi-musl-gcc-830/toolchain/arm-openwrt-linux-muslgnueabi
```

例如：

```
book@100ask:~/workspaces/helloword$ export STAGING_DIR=~/tina-v853-open/prebuilt/rootfsbuilt/arm/toolchain-sunxi-musl-gcc-830/toolchain/arm-openwrt-linux-muslgnueabi
```

### 1.编写helloword应用程序

helloword.c的源码如下，在确保上一步已经完成source build/envsetup.sh 以后，在终端内 输入 gedit helloword.c 会打开一个 文本编辑器，进入文本编辑器内，将如下代码粘贴进去，粘贴完成后，直接按下 ctrl + s 保存，最后点击 右上角的 x 关闭文本编辑器：

```
#include <stdio.h>
int main (void)
{
    printf("hello word!\n");
    return 0;
}   
```

编写完成后，保存到 helloword.c之后我们执行 如下编译命令进行编译

```
book@100ask:~/workspaces/helloword$ ~/tina-v853-open/prebuilt/rootfsbuilt/arm/toolchain-sunxi-musl-gcc-830/toolchain/bin/arm-openwrt-linux-gcc -o hello helloword.c
```

编译完成后可以执行 file hellword 命令 来查看编译出来的文件类型 是否是 arm 架构类型。

```
book@100ask:~/workspaces/helloword$ file hello
hello: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-musl-armhf.so.1, with debug_info, not stripped
```

### 2.上传程序到开发板上运行

把编译生成的 **hello** 文件通过adb命令拷贝到开发板上运行，命令如下：

```
adb push hello /root/
```

传输完成后在开发板上执行如下操作添加可执行权限，并运行它：

```
chmod +x hello
./helloword
```

![image-20230627141803244](http://photos.100ask.net/allwinner-docs/v853/LinuxEnv/image-20230627141803244.png)