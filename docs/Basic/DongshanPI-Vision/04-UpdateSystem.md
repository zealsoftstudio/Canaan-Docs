# 更新系统

## 1.更新EMMC系统

​	**硬件要求：**

- DongshanPI-Vision开发板
- Type-c数据线 x2

​	**软件要求：**

- DongshanPI-Vision开发板EMMC镜像：[https://dongshanpi.cowtransfer.com/s/5482c150ff6147](https://dongshanpi.cowtransfer.com/s/5482c150ff6147 ) 
- KendryteBurningTool 烧录工具：[https://dongshanpi.cowtransfer.com/s/b3709a719d2342](https://dongshanpi.cowtransfer.com/s/b3709a719d2342)

开始前请下载DongshanPI-Vision开发板[EMMC镜像](https://dongshanpi.cowtransfer.com/s/5482c150ff6147 ) ，并记住它在计算机中保存的位置。

### 1.1 硬件操作

​	将下图中的拨码开关的boot0和boot1都向上拨，使开发板进入下载模式。使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口进行烧录EMMC系统。

![image-20230721110228675](http://photos.100ask.net/canaan-docs/image-20230721110228675.png)

### 1.2 烧录镜像

下载EMMC镜像并记住它在计算机中的位置。打开[KendryteBurningTool](https://dongshanpi.cowtransfer.com/s/b3709a719d2342) 烧录工具，进入`KendryteBurningTool\bin`目录下，双击打开`BurningTool.exe`，如下所示的文件。

> 注意：在使用KendryteBurningTool 烧录工具时需要关闭串口软件和虚拟机，防止串口被占用。

![image-20230721104114404](http://photos.100ask.net/canaan-docs/image-20230721104114404.png)

打开`BurningTool.exe`程序后会进入如下界面：

![image-20230721111848594](http://photos.100ask.net/canaan-docs/image-20230721111848594.png)

点击选择文件，选择下载好的EMMC镜像。选择完成后点击保存，操作步骤如下所示：

![K510-buring-tool-file](http://photos.100ask.net/canaan-docs/K510-buring-tool-file.gif)

保存后需要在串口选择中选择开发板的串口号，当我们将开发板和PC电脑端通过Type-C连接起来后，可以在BurningTool软件中点击红色箭头处查看我开发板的端口号，选择开发板的串口端口号。（我们也可以在设备管理器中确认开发的端口号）

![image-20230721113200863](http://photos.100ask.net/canaan-docs/image-20230721113200863.png)

选择完成后，点击开始烧录烧录。如果您不是第一次进行烧录，此时等待成功烧录完成即可。如果您是第一次进行烧录请继续阅读下面的内容。第一次烧录步骤如下所示：

![K510-buring-tool-Select-Serial](http://photos.100ask.net/canaan-docs/K510-buring-tool-Select-Serial.gif)

当PC电脑首次进行烧录时，第一个进度条结束后，会显示下图中的错误信息。此时需要安装驱动。

![image-20230721115810844](http://photos.100ask.net/canaan-docs/image-20230721115810844.png)

### 1.3 安装烧录驱动

- zadig-2.4烧录驱动安装文件：[https://dongshanpi.cowtransfer.com/s/c627c619059548](https://dongshanpi.cowtransfer.com/s/c627c619059548)

> 安装前说明：每台计算机安装一次即可。

打开`zadig-2.4`软件，进入如下界面

![image-20230721120130024](http://photos.100ask.net/canaan-docs/image-20230721120130024.png)

点击`Option`中的选择`List All Devices`（列出所有设备），具体操作如下所示：

![K510-Zadig-list-devices](http://photos.100ask.net/canaan-docs/K510-Zadig-list-devices.gif)

上述操作完成后，可以看到在虚线框内出现了设备名，我们需要切换设备为 `Mass storage devices`,具体操作如下所示：

![K510-Zadig-change-devices](http://photos.100ask.net/canaan-docs/K510-Zadig-change-devices.gif)

点击`Replace Driver`替换驱动程序，此时会弹出一个确认窗口，点击`是`。

![image-20230831091224026](http://photos.100ask.net/canaan-docs/image-20230831091224026.png)

安装完成后会弹出以下窗口点击`close`

![image-20230721153204888](http://photos.100ask.net/canaan-docs/image-20230721153204888.png)

到此烧录驱动成功安装。

### 1.4 完整烧录镜像

​	安装完成烧录镜像后，再次打开`BurningTool.exe`烧录工具软件，按照1.3章节中的操作进行烧录即可。完整烧录步骤如下所示：

![K510-BurningTool-Complete](http://photos.100ask.net/canaan-docs/K510-BurningTool-Complete.gif)

### 1.5 启动EMMC系统

​		将下图中的拨码开关的boot0和boot1都向下拨，使开发板进入EMMC启动模式。使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口登录开发板控制台。

![image-20230721174905407](http://photos.100ask.net/canaan-docs/image-20230721174905407.png)

使用串口软件查看串口控制台，成功启动后会进入开发板控制台。

![image-20230721175557977](http://photos.100ask.net/canaan-docs/image-20230721175557977.png)

## 2.制作SD卡镜像

硬件要求：

- DongshanPI-Vision开发板
- microSD卡（建议最小8G）
- Type-c数据线 x2

软件要求：

- DongshanPI-Vision开发板SD卡镜像：[https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046](https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046 ) 
- SD卡格式化工具:[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter_4/eula_windows/)
- SD卡刷机工具：[ETCHER](https://www.balena.io/etcher)

开始前请下载DongshanPI-Vision开发板[SD卡镜像](https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046)，并记住它在计算机中保存的位置。

### 2.1 格式化microSD卡

将您的SD卡使用读卡器通过USB口插入您的PC电脑，使用SD卡格式化工具[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter_4/eula_windows/)格式化您的SD卡。点击下图中红框位置，开始格式化内存卡。

![image-20230721165711205](http://photos.100ask.net/canaan-docs/image-20230721165711205.png)

点击完成后会弹出下图所示的提示框，该提示警告我们格式化将清空卡中的所有数据，询问我们是否继续，这里点击`是`

![image-20230721165954580](http://photos.100ask.net/canaan-docs/image-20230721165954580.png)

等待格式化完成后，会弹出以下对话框，提示我们格式化后的文件系统为`FAT32`以及内存大小可用空间，点击确定即可完成SD卡的格式化。

![image-20230721170207480](http://photos.100ask.net/canaan-docs/image-20230721170207480.png)

### 2.2 使用Etcher烧录镜像

​	使用Etcher将DongshanPI-Vision开发板SD卡镜像写入您的microSD卡。

​	下载[Etcher](https://www.balena.io/etcher)烧写工具并安装它。启动Etcher应用程序，启动后界面如下图所示：

![image-20230721170709568](http://photos.100ask.net/canaan-docs/image-20230721170709568.png)

点击`Flash from file`，如下图所示，点击下图红框处。

![image-20230721170746679](http://photos.100ask.net/canaan-docs/image-20230721170746679.png)

此时会弹出文件资源管理器，选择您刚刚下载的DongshanPI-Vision开发板SD卡镜像。

![image-20230721171028315](http://photos.100ask.net/canaan-docs/image-20230721171028315.png)

选择完成后会，显示下面的界面，点击下图中红框处`Select target`，选择要写入的目标microSD卡。

![image-20230721172244447](http://photos.100ask.net/canaan-docs/image-20230721172244447.png)

点击完成后会弹出选择目标，此时选择您通过读卡器插入电脑中的microSD卡。

![image-20230721172220680](http://photos.100ask.net/canaan-docs/image-20230721172220680.png)

选择完成后，会显示以下界面，点击`Flash`后即可开始烧写。

![image-20230721172614694](http://photos.100ask.net/canaan-docs/image-20230721172614694.png)

如下图所示等待烧写完成即可。

![image-20230721172653819](http://photos.100ask.net/canaan-docs/image-20230721172653819.png)

使用Etcher烧写完成后，Windows可能会不知道如何读取您的microSD卡，会弹出如下图所示警告，点击`取消`后拔出microSD卡即可。

![image-20230721172939202](http://photos.100ask.net/canaan-docs/image-20230721172939202.png)

### 2.3 启动SD卡系统

​		将下图中的拨码开关的boot0向下拨和boot1向上拨，使开发板进入SD卡启动模式。将SD卡插入开发板的卡槽中，步骤如下图所示：

![k510-board-Install-sd-card](http://photos.100ask.net/canaan-docs/k510-board-Install-sd-card.png)

使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口登录开发板控制台。

![image-20230721184330238](http://photos.100ask.net/canaan-docs/image-20230721184330238.png)

使用串口软件查看串口控制台，成功启动后会进入开发板控制台。

![image-20230721184905618](http://photos.100ask.net/canaan-docs/image-20230721184905618.png)
