# 使用ssh传输文件

**PC主机端要求：**

- 显卡，显存4GB以上（无显卡，纯CPU训练较慢）
- 内存4GB以上
- 硬盘10GB以上（建议100GB以上）
- 系统：Windows10/11系统

**开发板端侧硬件要求：**

- DongshanPI-Vision开发板（搭载嘉楠K510芯片）
- Type-C数据线 x2 /电池供电

**软件要求：**

- MobaXterm终端工具：[https://mobaxterm.mobatek.net/](https://mobaxterm.mobatek.net/)



开始前请确认以下两点：

- 您的开发板中烧写的系统中支持ssh，可以查看`/etc/`目录下是否存在`ssh`文件夹，如果不存在请重新获取镜像烧写，镜像地址为：[DongshanPI-Vision-emmc-image-v1.0](https://dongshanpi.cowtransfer.com/s/5eebd3648bdd48 ) 

- 您的开发板已经安装[《开发板配网》](https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/03-BoardNetwork.html)中成功连接互联网。

## 1.修改ssh配置文件

​	启动前请先按[《快速启动》](https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/02-QuickStart.html)中将拨码开关拨至EMMC启动，使用两条Type-C数据线连接开发板端和电脑端的USB3.0口后，可看到开发板端正常启动。

​	使用Mobaxterm终端工具访问开发板的串口控制台，等待系统启动后，进入`/etc/ssh`目录下

```
[root@canaan ~ ]$ cd /etc/ssh/
[root@canaan /etc/ssh ]$ ls
moduli       ssh_config   sshd_config
```

进入ssh目录可以看到有三个文件，您需要修改`sshd_config`，使用vi命令进行修改

```
[root@canaan /etc/ssh ]$ vi sshd_config
```

输入后，进入vi编辑器，修改下图中红框处的两项。

![image-20230803091725219](http://photos.100ask.net/canaan-docs/image-20230803091725219.png)

将红框处两项取消注释，并将参数设置为`yes`

```
PermitRootLogin yes
PermitEmptyPasswords yes
```

修改完成后如下所示：

![image-20230803092024236](http://photos.100ask.net/canaan-docs/image-20230803092024236.png)

修改完成后，按下`esc`，输入`:wq`，保存并退出编辑器。

​	在串口终端输入`sync`,同步文件后重启开发板

```
[root@canaan /etc/ssh ]$ sync
[root@canaan /etc/ssh ]$ reboot
```





## 2.启动ssh

​	当您重启开发板后，需要手动重启ssh，在终端输入`/etc/init.d/S50sshd restart`。

```
[root@canaan ~ ]$ /etc/init.d/S50sshd restart
Stopping sshd: killall: sshd: no process killed
OK
Starting sshd: OK
```

输入完成后，ssh会重新启动。



## 3.连接ssh

> 开始前请注意：
>
> - 您的PC电脑需要和开发板连接**同一个WIFI**。

​	在开发板串口终端输入`udhcpc -i wlan0`，获取您的开发板连接WIFI的IP地址

```
[root@canaan ~ ]$ udhcpc -i wlan0
udhcpc: started, v1.31.1
udhcpc: sending discover
udhcpc: sending select for 192.168.0.154
udhcpc: lease of 192.168.0.154 obtained, lease time 122
deleting routers
adding dns 192.168.0.1
adding dns 192.168.0.1
```

获取完成后，输入`ifconfig wlan0` ，查看开发板所连接WIFI的IP地址

```
[root@canaan ~ ]$ ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr 8C:F7:10:47:9B:6E
          inet addr:192.168.0.154  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::8ef7:10ff:fe47:9b6e/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:438 errors:0 dropped:2 overruns:0 frame:0
          TX packets:21 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:34571 (33.7 KiB)  TX bytes:2446 (2.3 KiB)
```

可以看到wlan0选项中的IP地址为：192.168.0.154 



使用MobaXterm终端工具，点击会话`Session`，如下图中红框所示

![image-20230803093352909](http://photos.100ask.net/canaan-docs/image-20230803093352909.png)

点击完成后会弹出以下界面，点击使用`SSH`，如下图红框所示：

![image-20230803093503585](http://photos.100ask.net/canaan-docs/image-20230803093503585.png)

进入`ssh`配置界面后，远程主机`Remote host`的框输入开发板的IP地址，勾选指定用户名`Specify username`前的框，在后面填写开发板的用户名`root`，填写完成后，点击OK即可。如下图所示

![image-20230803100558415](http://photos.100ask.net/canaan-docs/image-20230803100558415.png)

点击完成后就会打开一个新的终端，如下图所示：

![image-20230803101119979](http://photos.100ask.net/canaan-docs/image-20230803101119979.png)

## 4.传输文件

您可以看到这里也可以访问开发的串口终端。您可以看到左边选项卡中的开发板对应的文件系统，例如`data/emmc`，您在选项卡中可以对文件夹中内容进行下载或者上传。如下图所示，这里我进入`/root/emmc/p3/app/ai/exe/`目录中，选择`face_detect`文件，单击右键后弹出选项栏，选择Download即可开始下载该文件。

![image-20230803101546390](http://photos.100ask.net/canaan-docs/image-20230803101546390.png)

如果您想上传文件到当前目录，在左侧选项卡的空白处，点击右键，选择`Upload to current folder`上传到当前文件夹即可。

![image-20230803101745265](http://photos.100ask.net/canaan-docs/image-20230803101745265.png)