# 演示AI应用指南

​	开发板系统中内置了丰富的AI应用示例程序，对每个示例程序我们都提供有对应的脚本文件，脚本文件中已经设置需要运行AI应用程序和对应的参数。

​	在开始演示AI应用指南前，需要确保您已经正确连接摄像头和显示屏并正常上电启动开发板。启动开发板后可以发现会自动运行摄像头获取图像并在显示屏上实时预览程序，需要手动结束该应用程序。使用方法如下：

- 输入`ps`查看应用程序查看进程号，例如实时预览程序进程端口号为189。

  ```
  189 root      0:01 ./v4l2_drm.out -f video_drm_1920x1080.conf -e 1 -s
  ```

- 输入`kill -9 <进程号>`，结束实时预览程序进程，例如我查看的端口号为189，则应该输入

  ```
  kill -9 189
  ```

  结束实时预览程序后，显示屏会显示白屏，即代表成功结束摄像头获取图像并在显示屏上实时预览程序。

​	

本章节介绍开发板内置的AI应用程序运行脚本都位于`/app/ai/shell/`目录中。进入该目录，查看是否有对应脚本文件。

```
[root@canaan ~ ]$ cd /app/ai/shell/
[root@canaan /app/ai/shell ]$ ls
face_alignment.sh            object_detect_demo_bf16.sh
face_detect.sh               object_detect_demo_uint8.sh
face_expression.sh           open_pose.sh
face_landmarks.sh            person_detect.sh
face_recog.sh                retinaface_mb_320_bf16.sh
hand_image_classify.sh       retinaface_mb_320_uint8.sh
head_pose_estimation.sh      self_learning.sh
license_recog.sh             simple_pose.sh
object_detect.sh
```

下面介绍每个脚本对应的AI应用程序的运行指南，在进行以下演示时需要确保您的串口终端控制台已进入`/app/ai/shell/`目录下。

## 人脸对齐

人脸对齐，可得到图像或视频中的每个人脸估计出来的depth或者pncc信息。其中pncc信息为三维人脸形状上的顶点，不仅包含这一点的三维坐标信息，还包含此处的RGB取值。

论文链接：https://sci-hub.et-fine.com/10.1109/TPAMI.2017.2778152

将3D平均人脸的顶点坐标和RGB取值进行归一化操作，即NCC操作。如下图所示，下图取自论文中的截图。

![image-20230720095951394](http://photos.100ask.net/canaan-docs/image-20230720095951394.png)

Face Alignment 人脸对齐任务是基于一定量的训练集，得到一个模型，使得该模型对输入的一张任意姿态下的人脸图像能够进行特征点(landmark)标记。Face Alignment 任务一般的呈现方式是人脸特征点的检测与标记。



运行人脸对齐演示示例，在终端输入:

```
./face_alignment.sh
```

效果图如下所示：

![alignment3](http://photos.100ask.net/canaan-docs/alignment3.png)

## 人脸检测

人脸检测采用了retina-face网络结构，backbone选取0.25-mobilenet。

论文链接：[https://arxiv.org/pdf/1905.00641.pdf](https://arxiv.org/pdf/1905.00641.pdf)

GitHub链接：[https://github.com/deepinsight/insightface](https://github.com/deepinsight/insightface)

下图为单阶段逐像素密集人脸定位方法。

![image-20230720113653152](http://photos.100ask.net/canaan-docs/image-20230720113653152.png)

使用该应用时，可得到图像或视频中的每个人脸检测框以及每个人脸的左眼球/右眼球/鼻尖/左嘴角/右嘴角五个landmark。使用方法如下所示，输入：

```
./face_detect.sh
```



### 人脸检测器-bf16

执行非量化模型。使用方法如下所示，输入：

```
./retinaface_mb_320_bf16.sh
```



### 人脸检测器-uint8

执行uint8量化模型。使用方法如下所示，输入：

```
./retinaface_mb_320_uint8.sh
```



## 人脸表情识别

人脸表情识别中需要用到两个模型一个模型用于检测人脸；一个模型用于进行人脸表情识别。人脸表情识别采用了人脸表情分类的方式，使用该应用可得到图像或视频中的每个人脸属于以下表情的概率。使用方法如下所示，输入：

```
./face_expression.sh
```



## 人脸关键点检测

人脸关键点检测采用了PFLD(practical facial landmarks detection)。

论文链接：[https://arxiv.org/pdf/1902.10859.pdf](https://arxiv.org/pdf/1902.10859.pdf)



使用该应用，可得到图像或视频中的每个人脸轮廓的106个关键点。使用方法如下所示，输入：

```
./face_landmarks.sh
```



## 人脸识别

人脸识别采用了人脸特征提取后比对的方式，相同的人的特征会尽可能的像，而不同的人的特征则会有较大差距，使用该应用可得到图像或视频中的每个人脸与人脸底库中的人脸的相似度，以进行人脸识别任务。使用方法如下所示，输入：

```
./face_recog.sh
```

执行完成后会进入人脸检测模式，当摄像头检测到人脸后会，按下开发板的Key1，位置如下所示：

<img align="center" src="http://photos.100ask.net/canaan-docs/image-20230720160249453.png" width=60% height=60% />



按下之后，可以在串口控制台中看到以下输出信息

```
>>>>> key code: 30, action: pressed <<<<<
total took 55.4448 ms
total took 56.2784 ms
Please Enter Your Name to Register:
>>>>> key code: 30, action: released <<<<<
```

上述输出信息提示您需要在串口终端输入人脸的登记名称，可直接输入录入人脸的信息，输入完成后按下回车即可。注意：目前登记信息仅支持英文输入。假设我这里输入登记名称为A，如下所示：

![K510-face_recog-input](http://photos.100ask.net/canaan-docs/K510-face_recog-input.gif)

输入完成后会继续进入人脸检测模式，此时如果您刚刚登记的人脸再次被检测，则会在检测时标注出该人脸的登记信息。	您可重复进行登记人脸信息，登记后可以在人脸检测模式中进行人脸识别，区分登记不同信息的人脸。但当检测到没有登记的人脸信息则不会在检测时标注出人脸信息。

## 人形检测

使用该应用时，可得到图像或视频中人体的检测框。使用方法如下所示，输入：

```
./person_detect.sh
```





### 人体关键点检测-openpose

人体关键点检测主要有两种检测方式，一个是自上而下，一种是自下而上。本应用采用了自下而上的模型openpose。使用该应用，可得到图像或视频中的每个人体的17个关键点。使用方法如下所示，输入：

```
./open_pose.sh
```



### 人体关键点检测-YOLOV5S

人体关键点检测主要有两种检测方式，一个是自上而下，一种是自下而上。本应用采用了自上而下的模型采用了YOLOV5S进行人体检测，然后使用simplepose进行关键点回归。使用该应用，可得到图像或视频中的每个人体的17个关键点。使用方法如下所示，输入：

```
./simple_pose.sh
```



## 指尖指定区域识别

指尖指定区域识别主要包含3个流程，手掌检测+手掌关键点检测+图像识别。其中，手掌检测使用了512x512分辨率的 tiny-yolov3;手掌关键点检测使用了256x256分辨率的squeezenet1.1;图像识别使用了基于imagenet训练出来的mobilenetv2。通过手部关键点检测，利用两个食指尖，框定待识别区域。利用imagenet分类模型，确定待识别区域。使用方法如下所示，输入：

```
./hand_image_classify.sh
```



## 头部态角估计

头部态角估计，可得到图像或视频中的每个人脸的roll/yaw/pitch。roll代表了人头歪的程度；yaw代表了人头左右旋转的程度；pitch代表了人头低头抬头的程度。使用方法如下所示，输入：

```
./head_pose_estimation.sh
```



## 车牌识别

车牌识别的整体流程实际上包含了车牌检测+车牌识别两个流程。车牌检测采用了retinanet，车牌识别采用了lprnet。使用该应用，可得到图像或视频中的每个车牌的内容。使用方法如下所示，输入：

```
./license_recog.sh
```



## YOLOV5目标检测

目标检测采用了YOLOV5，使用该应用，可得到图像或视频中属于以下标签的目标的检测框。

```
"person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck",
"boat", "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat",
"dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe",
"backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard",
"sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle",
"wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
"sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake",
"chair", "couch", "potted plant", "bed", "dining table", "toilet", "tv", "laptop",
"mouse", "remote", "keyboard", "cell phone", "microwave", "oven", "toaster", "sink",
"refrigerator", "book", "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush"
```

使用方法如下所示，输入：

```
./object_detect.sh
```



### YOLOV5目标检测-bf16

执行非量化模型，使用方法如下所示，输入：

```
./object_detect_demo_bf16.sh
```



### YOLOV5目标检测-uint8

执行uint8量化模型。使用方法如下所示，输入：

```
./object_detect_demo_uint8.sh
```





## 自学习KNN算法

自学习借鉴的是KNN（k-Nearest Neighbors）的思想。该算法的思想是： 一个样本与数据集中的k个样本最相似， 如果这k个样本中的大多数属于某一个类别， 则该样本也属于这个类别。使用方法如下所示，输入：

```
./self_learning.sh
```

执行完成后会在显示屏上出现一个绿色的框。

该AI示例需要用到按键(Key 1)和按键(Key 2)，两个按键的位置如下所示：

<img align="center" src="http://photos.100ask.net/canaan-docs/image-20230720193602069.png" width=50% height=50% />

​	将需要识别的物体放在摄像头范围内，使该物体可以显示在绿色框中的正中间，此时需要手动标记按下Key1开始标记class0，按下Key1时会串口终端会提示以下信息：

```
>>>>> key code: 30, action: pressed <<<<<
Please press UP or DOWN button, UP: confirm, DOWN: switch!
>>>>> key code: 30, action: released <<<<<
```

上述信息为提示您，如果按下Key1则为标注图像，按下Key2则为切换模式。

继续按下Key1可开始自动标记该物体，此时串口终端会输出如下信息：

```
>>>>> key code: 30, action: pressed <<<<<
Pressed UP button!
class_0 : 1
>>>>> key code: 30, action: released <<<<<
```

此时再按下Key1会继续继续让您选择继续标注图像还是切换。

```
>>>>> key code: 30, action: pressed <<<<<
Please press UP or DOWN button, UP: confirm, DOWN: switch!
>>>>> key code: 30, action: released <<<<<
```

如果需要重复标记多次图像，可以继续按下Key1标记该物体。如下所示：

![K510-self_learning-mark](http://photos.100ask.net/canaan-docs/K510-self_learning-mark.gif)

当标注完类别1（class 0）后按下Key2，串口终端会输出以下内容：

```
>>>>> key code: 48, action: released <<<<<
>>>>> key code: 48, action: pressed <<<<<
Pressed DOWN button!
switch to class_1
```

此时会切换标注类别1（class 1）,继续按下Key 1进行标注类别1，选择功能。

```
>>>>> key code: 30, action: pressed <<<<<
Please press UP or DOWN button, UP: confirm, DOWN: switch!
>>>>> key code: 30, action: released <<<<<
```

继续按下Key 1标注类别1物体

```
>>>>> key code: 30, action: pressed <<<<<
Pressed UP button!
class_1 : 1
>>>>> key code: 30, action: released <<<<<
```

如果需要重复标记多次图像，可以继续按下Key1标记该物体，与上面类别0(class 0)标注方法一直。

在标注完成后，在不进入功能选择时，按下key 2结束标注，如下图所示。

```
>>>>> key code: 30, action: pressed <<<<<
Pressed UP button!
class_1 : 8
>>>>> key code: 30, action: released <<<<<
>>>>> key code: 48, action: released <<<<<
>>>>> key code: 48, action: pressed <<<<<
Pressed DOWN button!
Enter recog!
```

将刚才标注过的物体放在绿框内，此时会开发板会在显示屏上自动检测识别的物品，识别到物体时，左上角会显示对应物体的类别以及检测的精准度。
