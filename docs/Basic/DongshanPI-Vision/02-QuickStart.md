# 快速启动

## 硬件要求

### 盒子里包括的内容

当您购买了一套全新的DongshanPI-Vision时，包装盒内会有：

1. DongshanPI-Vision开发板
2. 两根Type-C数据线
3. 一根2.4GHz天线
4. 一个喇叭



### 盒子中不包含的内容

您还需要额外的：

1. microSD卡(建议最低8GB）
2. 1080p MIPI显示屏或电脑显示器(HDMI）
3. MIPI摄像头 x2

> 注意：使用时还需要一台正常工作且能连接互联网的PC电脑。

## 连接天线

要使用WIFI，您需要连接DongshanPI-Vision盒子中提供的2.4GHz天线，下面是将天线连接到DongshanPI-Vision开发板的指南。

![k510-board-install-aerial](http://photos.100ask.net/canaan-docs/k510-board-install-aerial.png)



## 连接摄像头

要使用摄像头获取图像数据，如果您只单独购买了DongshanPI-Vision开发板，可能还需另外购买MIPI摄像头。下面图片是将MIPI摄像头连接到DongshanPI-Vision开发板的指南。

![K510-install-sensor](http://photos.100ask.net/canaan-docs/K510-install-sensor.png)

## 连接显示屏

要使用显示屏显示摄像头获取的图像，如果您只单独购买了DongshanPI-Vision开发板，可能还需另外购买MIPI显示屏，或者也可直接使用HDMI线连接电脑显示器。下面是将MIPI显示屏连接到DongshanPI-Vision开发板的指南。

![K510-install-MIPI-display](http://photos.100ask.net/canaan-docs/K510-install-MIPI-display.png)

下面是使用HDMI将显示屏连接到DongshanPI-Vision开发板的指南。

![K510-install-HDMI](http://photos.100ask.net/canaan-docs/K510-install-HDMI.png)

## 开发板首次启动

​	通过Type-C线将板连接到PC电脑，您可以使用DongshanPI-Vision盒子中的的两条Type-C线。连接指南如下所示：

![image-20230725095954399](http://photos.100ask.net/canaan-docs/image-20230725095954399.png)

### 第一次开机

一旦开发板套件通电后，核心板上会亮起红灯，红灯位置如下图中蓝色箭头所示：

![image-20230725095439594](http://photos.100ask.net/canaan-docs/image-20230725095439594.png)

### 访问串口调试控制台

​	通过上一步已经将串口连接到您的电脑中，要查看主板的启动日志并访问DongshanPI-Vision的控制台，您可以通过设备管理器确定串口端口号，并使用[MobaXterm](https://mobaxterm.mobatek.net/)串口应用程序访问该端口号。下面是使用串口访问开发板调试控制台的指南。

1.打开**设备管理器**，并展开端口(COM和LPT)列表。

2.请注意USB串行端号的数字，如下图所示，我连接后的端口号为COM37。

![image-20230719152940969](http://photos.100ask.net/canaan-docs/image-20230719152940969.png)

3.使用MobaXterm串口软件访问设备管理器中的端口号。

![k510-MobaXterm-operate](http://photos.100ask.net/canaan-docs/k510-MobaXterm-operate.gif)

4.进入串口调试控制台后，如果开发板正在启动uboot或者kernel则会不断打印输出信息直到系统完全启动，如果开发板已经完全启动则不会打印信息，可直接按下回车键，进入开发板系统控制台。

### 开机自启应用程序

​	当系统启动后，如果您正常连接两个摄像头和显示屏，系统会在uboot系统启动阶段显示canaan官方logo，效果图如下所示：

![image-20230725100826634](http://photos.100ask.net/canaan-docs/image-20230725100826634.png)

当系统完全启动后会自动运行实时预览程序，使用V4L2抓取摄像头图像并实时显示在显示屏上。效果图如下所示：

![image-20230725101123884](http://photos.100ask.net/canaan-docs/image-20230725101123884.png)



如果您想结束掉该进程或者想运行其他需要使用摄像头和显示屏的程序，您可以通过在串口终端控制台输入`ps`查看该进程号，如下所示：

```
188 root      0:00 ./v4l2_drm.out -f video_drm_1920x1080.conf -e 1 -s
```

可以看到最前面的为进程号，可能您的进程号和我不一致，这里我的进程号为188，此时我应该输入：

```
kill -9 188
```

如果您的进程号不是188，需要将188修改为您实际的进程号才能正常结束该应用程序。
