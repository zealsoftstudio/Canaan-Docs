# ISP调参优化工具

## 1.ISP调优工具框架介绍

本节介绍ISP调优工具和数据流的说明，这些框架和数据流是为上层处理器提供的，用于控制整个ISP图像优化。

```text
+----------------------------------------------------+
|                                                    |
|                      K510                          |
|                                                    |
|    +-------+        +--------------------------+   |
|    |       |        |                          |   |
|    |  ISP  +------> |        v4l2_drm.out      |   |
|    |       |        |                          |   |
|    +-------+        +-------------+------------+   |
|                                   |                |
|                                   |                |
|    +-----------------+            |                |
|    |                 |            |                |
|    |   isp-tuningd   | <----------+                |
|    |                 |                             |
|    +^-+--------------+                             |
|     | |                                            |
|     | |                                            |
+----------------------------------------------------+
      | |
      | |
+-------------------------------+
|     | |                       |
|     | |       PC              |
|     | |                       |
|    ++-v------------------+    |
|    |                     |    |
|    |  ISP Tuning Tool    |    |
|    |                     |    |
|    +---------------------+    |
|                               |
+-------------------------------+
```

## 2.调优工具数据流

通信协议参见客户端代码仓库里的说明文档，工具包含两部分，一部分是在PC上运行的客户端isp-tuningd，程序位于/app/mediactl_lib/isp-tuningd，另一部分是在K510上运行的服务端。通信默认使用TCP的9982端口。

### 3.客户端

ISP Tuning Tool是在PC上运行的应用程序。除了能设置寄存器外还支持进行AWB校准和CCM校准。

### 4.服务端

isp-tuningd会从标准输入接收yuv图像（NV12）并广播给所有客户端，我们可以使用v4l2_drm.out，他会自动启动isp-tuningd并送入图像数据。我们可以用如下命令运行

```shell
cd /app/mediactl_lib
# 使用camera 0
./images/v4l2_drm.out -t 1 -f video_drm_1080x1920.conf

# 使用camera 1
./images/v4l2_drm.out -t 1 -f video_drm_1080x1920_r2k.conf
```

如果不需要使用预览，则直接启动isp-tuningd即可。

```shell
/app/mediactl_lib/isp-tuningd
```

## 3.ISP调优选项

K510 ISP中提供了许多寄存器和表以进行控制和调优。ISP硬件寄存器的设置对图像质量非常重要。目前K510平台，图像调优过程只通过TCP Socket实现。

## 4.调优工具主窗口

本节介绍调优窗口上这些面板的功能。

图3-1显示了调优窗口上的整个操作面板

- 面板1是**菜单**，它可以选择加载配置好的ISP文件或进行校准。
- 面板2是**连接控制面板**，填入开发板的IP地址和端口号（默认9982端口）后点击绿色的连接按钮即可连接。
- 面板3是**寄存器面板**，如果你需要设置或读取的寄存器并不在这里面则可以使用这个面板进行设置和读取。
- 面板4是**ISP选择面板**，可以指定ISP F2K或ISP R2K。
- 面板5是调优**参数选择面板**，用户可以根据面板提示文本选择各种参数或参数组，这些选择的寄存器将显示在面板5上。
- 面板6是**调优参数设置面板**，它用于设置或从调优服务器获取参数值。

![图3-1 调优工具主窗口](http://photos.100ask.net/canaan-docs/clip_image033.png)

ISP Tuning Tool在连接后**不会**自动获取所有寄存器值，如果需要获取所有的寄存器值可以点击**连接控制面板**右侧的读取按钮，即可拉取当前的所有寄存器值。

## 标定 & 校准

本节介绍使用ISP调优工具进行标定和校准的说明，包括自动白平衡（AWB）、颜色校正矩阵（CCM）、Gamma和镜头阴影（LSC）。

### AWB

#### 准备工作

1. 标准灯箱，有标准D65光源
2. 标准24色卡，目前仅支持X-RITE色卡
3. 准备标定的相机，能输出sensor原始图像或处理后的图像
4. ISP也仅打开黑电平矫正与去马赛克算法模块，CSC等格式转换模块一定要注意对称性（矩阵是逆矩阵），另外降噪、锐化等模块影响不大，不过也尽量关闭，非线性模块与颜色处理模块（GAMMA，宽动态，AWB，CCM，饱和度调整等）必须关闭

#### 获取图像

1. 相机对准24色卡，确保24色卡撑满整个画面，然后抓取图像，未保证准确可以点击暂停播放，如下图所示

    ![图4-1 拍摄24色卡](http://photos.100ask.net/canaan-docs/clip_image014.jpg)

2. 抓取的图像注意亮暗适中，太亮太暗都影响标定

#### 标定

点击菜单栏的“Calibration”，选择“AWB”即可执行标定，程序会自动框选色卡

![图4-2 自动框选色卡](http://photos.100ask.net/canaan-docs/clip_image016.jpg)

此时按下任意键继续，弹出完成白平衡后的图像

![图4-3 完成AWB标定](http://photos.100ask.net/canaan-docs/clip_image018.jpg)

如果没问题，则继续按下任意键，工具会弹出对话框询问参数是否合理，是则会将其填入主界面相关寄存器，否则放弃标定结果，如果是则工具会继续询问是否写入设备寄存器。

### CCM

与AWB标定一致，不再赘述。

### Gamma

标准的gamma曲线的公式为
$$
Y=aX^b
$$
其中$b$即为Gamma系数，在成像端一般小于1，在显示端一般大于1。$a$的值可以根据$b$的值算出来

$$
a=\frac{256}{256^b}
$$
该公式的原理是输入是256，做完Gamma矫正后仍为256。

Gamma系数b为0.5时，曲线如下图所示

![](http://photos.100ask.net/canaan-docs/clip_image025.png)

### LSC

#### 准备工作

- 一张镜头拍摄获得的RAW格式照片

#### 原理

因镜头的中心与四周通光量不一致，造成图像亮度不均匀，因此通过曲线拟合生成一个矫正曲面来弥补该问题。

矫正前如下图所示

![校正前](http://photos.100ask.net/canaan-docs/clip_image029.png)

矫正后如下图所示

![校正后](http://photos.100ask.net/canaan-docs/clip_image031.png)
