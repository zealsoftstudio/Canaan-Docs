# 常见网络性能分析数据

## 1 前言

### 1.1 读者对象

本文档（本指南）主要适用于以下人员：

• 技术支持工程师

• 软件开发工程师

• AI 应用案客户



## 2 正文

### 2.1 NPU 开发简介

• 支持int8/uint8/int16 量化精度，运算性能可达1TOPS.

• 相较于GPU 作为AI 运算单元的大型芯片方案，功耗不到GPU 所需要的1%.

• 可直接导入Caffe, TensorFlow, Onnx, TFLite，Keras, Darknet, pyTorch 等模型格式.

• 提供AI 开发工具：支持模型快速转换、支持开发板端侧转换API、支持TensorFlow, TF Lite, Caffe, ONNX, Darknet, pyTorch 等模型.

• 提供AI 应用开发接口：提供NPU 跨平台API.

### 2.2 开发流程

NPU 开发完整的流程如下图所示：

![image-20221208105235547](http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20221208105235547.png)

<center>图2-1: npu_1.png</center>

### 2.3 常见网络benchmark

![image-20221208105336553](http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20221208105336553.png)

<center>图2-2: NPU benchmark</center>

以上数据是裸机程序跑网络的数据，并未考虑到方案中的其它应用。

### 2.4 内存分析数据

方案应用场景中的内存消耗数据分析.

代码和数据部分的占用，包括KMD 和UMD 本身占用的空间大小, 大约180k.

<center>表2-1: code 占用大小</center>

|        | text                     | data             | bss            | 总计   |
| :----: | ------------------------ | ---------------- | -------------- | ------ |
| 内核态 | 55164                    | 920              | 388            | 56472  |
| 用户态 | 99739+22656              | 604+484          | 388+72         | 123943 |
|  总计  | 99739+22656+55164=177559 | 608+484+920=2008 | 388+72+388=848 | 180415 |



Yolov3 模型的内存数据统计，运行时消耗约48M 内存。

<center>表2-2: yolov3 内存统计</center>

|      | total video memory | total system memory | viplite driver code size |  total   |
| :--: | :----------------: | :-----------------: | :----------------------: | :------: |
| 大小 |      48460032      |        81500        |          180415          | 48721947 |
| 占比 |       99.46%       |        0.17%        |          0.37%           |   100%   |



yolov3-tiny 模型的内存数据统计，运行时消耗月6.8M 内存。

<center>表2-3: yolov3-tiny 内存统计</center>

|      | total viedo memory | total system memory | viplite driver code size |  total  |
| :--: | :----------------: | :-----------------: | :----------------------: | :-----: |
| 大小 |      6710784       |        20596        |          180415          | 6911795 |
| 占比 |      97.092%       |       0.307%        |          2.61%           |  100%   |

帧率，带宽等数据待补充.
