# 开发板支持录音和播放音频

## 0.前言

​	本章主要讲述如何使用板载的MIC拾音咪头录音并使用喇叭播放音频。

​	音频_开发指南：https://tina.100ask.net/SdkModule/Linux_AudioFrequency_DevelopmentGuide-02/#220-v853

​	全志官方音频介绍：https://v853.docs.aw-ol.com/soft/tina_audio/#audio_1

## 1.硬件介绍

​	V853 芯片提供了 AudioCodec（芯片内置音频接口） x1、I2S/PCM（数字音频接口） x2、DMIC（外置数字 MIC 接口） x1，可以满足各类音频需求。100ASK_V853-PRO开发板板载两个MIC拾音咪头和喇叭接口。如下图所示：

![image-20230505163212847](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230505163212847.png)

如果您想要使用喇叭接口播放声音，需要外接一个喇叭

![image-20230506110123930](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230506110123930.png)

## 2.音频驱动框架使用

在 Tina Linux 中使用的是标准的 ALSA API，所以使用音频的功能可以使用标准的 `alsa-utils`。它提供了 `amixer`、`aplay`、`arecord` 等工具。在Tina根目录下输入`make menuconfig`

```
book@100ask:~/workspaces/tina-v853-open$ make menuconfig
```

进入Tina配置界面后，进入如下目录

```
 > Sound
 	<*> alsa-utils............ ALSA (Advanced Linux Sound Architecture) utilities
```

如下图所示：

![image-20230506100011757](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230506100011757.png)

选中完成后会启用`amixer`、`aplay`、`arecord`功能，重新编译打包更新系统即可体验。

### 2.1 驱动调控：amixer

amixer是命令行的 ALSA 声卡驱动调节工具，用于启用、关闭各声卡，设置各声卡的音量。使用 `amixer` 命令列出当前注册的音频设备。

```c
amixer
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-29-52-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-29-52-image.png)

- 常用选项

```
选项             功能
-D,--device    指定声卡设备,默认使用default
```

- 常用命令

```
命令            功能
controls       列出指定声卡的所有控件
contents       列出指定声卡的所有控件的具体信息
cget           获取指定控件的信息
cset           设定指定控件的值
```

选择 MIC1 输入

```shell
amixer -D hw:audiocodec cset name='MIC1 Input Select' 0
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-37-11-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-37-11-image.png)

选择 MIC2 输入

```shell
amixer -D hw:audiocodec cset name='MIC2 Input Select' 0
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-37-40-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-37-40-image.png)

开启 MIC1

```shell
amixer -D hw:audiocodec cset name='MIC1 Switch' 1
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-38-18-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-38-18-image.png)

开启 MIC2

```shell
amixer -D hw:audiocodec cset name='MIC2 Switch' 1
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-38-45-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-38-45-image.png)

设置 MIC1 音量

```shell
amixer -D hw:audiocodec cset name='MIC1 gain volume' 30
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-39-04-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-39-04-image.png)

设置 MIC2 音量

```shell
amixer -D hw:audiocodec cset name='MIC2 gain volume' 30
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-39-28-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-39-28-image.png)

开启 LINEOUT 输出功能

```shell
amixer -D hw:audiocodec cset name='LINEOUT Output Select' 1
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-30-36-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-30-36-image.png)

开启 LINEOUT 通路

```
amixer -D hw:audiocodec cset name='LINEOUT Switch' 1
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-31-00-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-31-00-image.png)

设置输出音量

```
amixer -D hw:audiocodec cset name='LINEOUT volume' 25
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-31-36-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-31-36-image.png)

### 2.2 录音工具：arecord

arecord 是命令行的 ALSA 声卡驱动的录音工具，用于录音功能。

```
选项                功能
-D,--device       指定声卡设备,默认使用default
-l,--list-device` 列出当前所有声卡
-t,--file-type    指定播放文件的格式,如voc,wav,raw,不指定的情况下会去读取文件头部作识别
-c,--channels     指定通道数
-f,--format       指定采样格式
-r,--rate         采样率
-d,--duration     指定播放的时间
--period-size     指定period size
--buffer-siz`     指定buffer size
```

**查看录音设备**

可以使用 `arecord -l` 命令查看开发板提供的录音设备。

```shell
arecord -l
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-36-45-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-11-36-45-image.png)

**麦克风录音**

在录音之前，首先需要使用 amixer 打开音频通路，配置内部 MIC1，MIC2 录制双通道音频。

```shell
amixer -D hw:audiocodec cset name='MIC1 Input Select' 0 && \
    amixer -D hw:audiocodec cset name='MIC2 Input Select' 0 && \
    amixer -D hw:audiocodec cset name='MIC1 Switch' 1 && \
    amixer -D hw:audiocodec cset name='MIC2 Switch' 1 && \
    amixer -D hw:audiocodec cset name='MIC1 gain volume' 30 && \
    amixer -D hw:audiocodec cset name='MIC2 gain volume' 30
```

使用 `arecord` 命令，使用板载的两个麦克风进行录音。

```shell
arecord -D hw:audiocodec -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-33-24-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-33-24-image.png)

### 2.3 播放工具：aplay

aplay 是命令行的 ALSA 声卡驱动的播放工具，用于播放功能。

```
选项                功能
-D,--device       指定声卡设备,默认使用default
-l,--list-devices 列出当前所有声卡
-t,--file-type    指定播放文件的格式,如voc,wav,raw,不指定的情况下会去读取文件头部作识别
-c,--channels     指定通道数
-f,--format       指定采样格式
-r,--rate         采样率
-d,--duration     指定播放的时间
--period-size     指定period size
--buffer-size     指定buffer size
```

**查看播放设备**

使用 `aplay -l` 查看播放设备

```shell
aplay -l
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-33-48-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-33-48-image.png)

**扬声器播放音频**

在播放之前，首先需要打开音频通路，配置扬声器播放音频，具体可以参照 amixer 配置。

```shell
amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT volume' 25
```

使用 `aplay` 通过外接扬声器播放刚才录制的音频。

```shell
aplay -D hw:audiocodec t.wav
```

[![img](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-34-30-image.png)](https://v853.docs.aw-ol.com/assets/img/tina_audio/2022-07-26-13-34-30-image.png)

## 3.测试录音功能

​	启动开发板后，在串口终端输入如下命令：

```
amixer -D hw:audiocodec cset name='MIC1 Input Select' 0 && \
   	amixer -D hw:audiocodec cset name='MIC2 Input Select' 0 && \
    amixer -D hw:audiocodec cset name='MIC1 Switch' 1 && \
    amixer -D hw:audiocodec cset name='MIC2 Switch' 1 && \
    amixer -D hw:audiocodec cset name='MIC1 gain volume' 30 && \
    amixer -D hw:audiocodec cset name='MIC2 gain volume' 30 && \
    arecord -D hw:audiocodec -f S16_LE -t wav -c2 -r 16000 -d 3 test.wav
```

例如：

```
root@TinaLinux:/# [   67.295067] random: crng init done
[   67.298885] random: 4 urandom warning(s) missed due to ratelimiting

root@TinaLinux:/# 
root@TinaLinux:/# 
root@TinaLinux:/# amixer -D hw:audiocodec cset name='MIC1 Input Select' 0 && \
>    amixer -D hw:audiocodec cset name='MIC2 Input Select' 0 && \
>     amixer -D hw:audiocodec cset name='MIC1 Switch' 1 && \
>     amixer -D hw:audiocodec cset name='MIC2 Switch' 1 && \
>     amixer -D hw:audiocodec cset name='MIC1 gain volume' 30 && \
>     amixer -D hw:audiocodec cset name='MIC2 gain volume' 30 && \
>     arecord -D hw:audiocodec -f S16_LE -t wav -c2 -r 16000 -d 3 test.wav
numid=23,iface=MIXER,name='MIC1 Input Select'
  ; type=ENUMERATED,access=rw------,values=1,items=2
  ; Item #0 'differ'
  ; Item #1 'single'
  : values=0
numid=24,iface=MIXER,name='MIC2 Input Select'
  ; type=ENUMERATED,access=rw------,values=1,items=2
  ; Item #0 'differ'
  ; Item #1 'single'
  : values=0
numid=17,iface=MIXER,name='MIC1 Switch'
  ; type=BOOLEAN,access=rw------,values=1
  : values=on
numid=18,iface=MIXER,name='MIC2 Switch'
  ; type=BOOLEAN,access=rw------,values=1
  : values=on
numid=12,iface=MIXER,name='MIC1 gain volume'
  ; type=INTEGER,access=rw---R--,values=1,min=0,max=31,step=0
  : values=30
  | dBscale-min=0.00dB,step=1.00dB,mute=0
numid=13,iface=MIXER,name='MIC2 gain volume'
  ; type=INTEGER,access=rw---R--,values=1,min=0,max=31,step=0
  : values=30
  | dBscale-min=0.00dB,step=1.00dB,mute=0
Recording WAVE 'test.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
```

程序会自动录音并保存文件到当前目录下，查看当前目录可以看到保存的文件`test.wav`

```
root@TinaLinux:/# ls
bin       etc       lib       rdinit    run       sys       usr
data      home      mnt       rom       sbin      test.wav  var
dev       init      proc      root      squashfs  tmp       www
```

## 4.播放音频

在串口终端下，输入以下命令，可以播放刚刚我们录制的音频

```
amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT volume' 31 && \
    aplay -D hw:audiocodec test.wav
```

例如：

```
root@TinaLinux:/# amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
>     amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
>     amixer -D hw:audiocodec cset name='LINEOUT volume' 31 && \
>     aplay -D hw:audiocodec test.wav
numid=20,iface=MIXER,name='LINEOUT Switch'
  ; type=BOOLEAN,access=rw------,values=1
  : values=on
numid=20,iface=MIXER,name='LINEOUT Switch'
  ; type=BOOLEAN,access=rw------,values=1
  : values=on
numid=16,iface=MIXER,name='LINEOUT volume'
  ; type=INTEGER,access=rw---R--,values=1,min=0,max=31,step=0
  : values=31
  | dBrange-
    rangemin=0,,rangemax=1
      | dBscale-min=0.00dB,step=0.00dB,mute=1
    rangemin=2,,rangemax=31
      | dBscale-min=-43.50dB,step=1.50dB,mute=1

Playing WAVE 'test.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
```

​	此时如果我们接上了喇叭，喇叭就会播放刚刚录制的音频。

​	同样我们也可以将音频文件拷贝到开发板中，使用以下命令

```
amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT volume' 31 && \
    aplay -D hw:audiocodec test.wav
```

其中`test.wav`更换为您想要播放的音频文件的路径名称。

​	

假设提前要播放的音频文件拷贝到TF卡中，插入TF卡后，挂载TF卡

```
root@TinaLinux:/# mount /dev/mmcblk1p1 /mnt/extsd/
```

查看TF卡中`testSound`文件夹下的测试音频文件

```
root@TinaLinux:/# ls /mnt/extsd/testSound/
test100.wav
```

使用如下命令播放测试音频

```
amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
    amixer -D hw:audiocodec cset name='LINEOUT volume' 31 && \
    aplay -D hw:audiocodec /mnt/extsd/testSound/test100.wav
```

例如：

```
root@TinaLinux:/# amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
>     amixer -D hw:audiocodec cset name='LINEOUT Switch' 1 && \
>     amixer -D hw:audiocodec cset name='LINEOUT volume' 31 && \
>     aplay -D hw:audiocodec /mnt/extsd/testSound/test100.wav
numid=20,iface=MIXER,name='LINEOUT Switch'
  ; type=BOOLEAN,access=rw------,values=1
  : values=on
numid=20,iface=MIXER,name='LINEOUT Switch'
  ; type=BOOLEAN,access=rw------,values=1
  : values=on
numid=16,iface=MIXER,name='LINEOUT volume'
  ; type=INTEGER,access=rw---R--,values=1,min=0,max=31,step=0
  : values=31
  | dBrange-
    rangemin=0,,rangemax=1
      | dBscale-min=0.00dB,step=0.00dB,mute=1
    rangemin=2,,rangemax=31
      | dBscale-min=-43.50dB,step=1.50dB,mute=1

Playing WAVE '/mnt/extsd/testSound/test100.wav' : Signed 16 bit Little Endian, Rate 22050 Hz, Stereo
```

此时喇叭就会播放测试音频。



## 5.更换开机音乐

由于100ASK_V853-PRO开发板已经默认启用了开机音乐，自启脚本位于：

```
openwrt/target/v853/v853-vision/busybox-init-base-files/etc/init.d/S03audio
```

我们可以在开发板的串口终端的`/etc/init.d/`目录下找到`S03audio`文件

```
root@TinaLinux:/# cd /etc/init.d/
root@TinaLinux:/etc/init.d# ls
S00mpp               S50telnet            rc.final
S01logging           S50usb               rc.modules
S03audio             S50wifidaemon        rc.preboot
S10udev              S99swupdate_autorun  rcK
S11dev               adbd                 rcS
S20urandom           cron                 sysntpd
S40network           dbus                 wpa_supplicant
S41netparam          dnsmasq
S50dbus              network
```

可以查看相关的脚本源码。



进入`/home/res/audio/`目录下，可以查看两个文件，分别为开机音乐`startup.wav`和关机音乐`shutdown.wav`

```
root@TinaLinux:/etc/init.d# cd /home/res/audio/
root@TinaLinux:/home/res/audio# ls
shutdown.wav  startup.wav
```

我们可以通过更换`startup.wav`文件，来达到更换开机音乐的效果。假设我将TF卡中的`test100.wav`拷贝到`/home/res/audio/`目录下，并更换名称为`startup.wav`

```
root@TinaLinux:/home/res/audio# cp /mnt/extsd/testSound/test100.wav /home/res/au
dio/startup.wav
root@TinaLinux:/home/res/audio# sync
```

输入`reboot`，重启后即可通过喇叭听到更换后的开机音乐。