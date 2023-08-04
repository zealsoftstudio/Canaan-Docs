# 硬件资源简介

​	DongshanPI-Vision开发板是百问网针对AI应用开发设计出来的一个RSIC-V架构的AI开发板，主要用于学习使用嘉楠的K510芯片进行Linux项目开发和嵌入式AI应用开发等用途。DongshanPI-Vision开发板采用嘉楠公司出品的勘智K510芯片，该芯片是一款全开源的高精度AI推理芯片，双核RSIC-V 64位CPU，最高800MHz，完整支持Linux和RSIC-V扩展。拥有2.5TFLOPS算力，支持INT8和BF16双数据类型，高精度推理计算。



## 详细介绍

DongshanPI-Vision开发板是围绕着嘉楠 勘智K510芯片构建的，采用64位双核RISC-V架构 ，主频为：800MHz，支持双精度FPU扩展。采用64位DSP扩展，主频为：800MHz。芯片内置通用神经网络引擎KPU，拥有2.5TFLOPS BF16/2.5TOPS INT8算力，支持TensorFlow、PyTorch、ONNX等多种框架的算子库。

| 特征       | 描述                                                        |
| ---------- | ----------------------------------------------------------- |
| 处理器     | 嘉楠 勘智K510                                               |
| 内存       | 512MB LPDDR3                                                |
| 存储       | 4GB EMMC                                                    |
| WIFI/蓝牙  | 天线：2.4GHz                                                |
| 视频输出   | MIPI显示(MIPI DSI)/HDMI显示(HDMI)/SPI显示（SPI DSI）        |
| 视频输入   | 两路MIPI摄像头(MIPI CSI *2)/DVP摄像头(DVP Canera)           |
| 音频输入   | MIC咪头                                                     |
| 音频输出   | 扬声器/耳机                                                 |
| 其他连接器 | ·TF卡槽<br />·2个USB连接器<br />· JTAG调试口<br />·电池接口 |



### 开发板组成位置

​	本章节介绍开发板中关键的元器件及位置功能介绍如下所示，各个标号对应的硬件在板子上都写有名字。

**开发板正面图：**

![boardfrontView-01](http://photos.100ask.net/canaan-docs/boardfrontView-01.png)

![boardfrontView-02](http://photos.100ask.net/canaan-docs/boardfrontView-02.png)

**开发板背面图：**

![boardrearView-01](http://photos.100ask.net/canaan-docs/boardrearView-01.png)