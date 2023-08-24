# YOLOV5训练自定义模型部署

**PC主机端要求：**

- 显卡，显存4GB以上（无显卡，纯CPU训练较慢）
- 内存16GB以上
- 硬盘100GB以上（建议200GB以上）
- 系统：Windows10/11系统

**开发板端侧硬件要求：**

- DongshanPI-Vision开发板（搭载嘉楠K510芯片）
- MIPI摄像头 x2
- MIPI显示屏 
- Type-C数据线 x2 /电池供电

**软件要求：**

- Anaconda（python 包管理工具）：[https://www.anaconda.com/](https://www.anaconda.com/)
- PyCharm社区版（免费的python IDE）：[https://www.jetbrains.com/pycharm/](https://www.jetbrains.com/pycharm/)
- labelImg数据标注工具：[https://github.com/heartexlabs/labelImg/releases](https://github.com/heartexlabs/labelImg/releases)



开始前请注意：

- 训练自定义模型：需要使用原始的[yolov5-v6.0源码](https://github.com/ultralytics/yolov5/archive/refs/tags/v6.0.zip)进行训练。
- 导出模型：需要修改模型程序文件（修改后可能无法进行训练），修改后源码下载地址：[yolov5-v6.0-K510](https://dongshanpi.cowtransfer.com/s/48f51cc100844b) 。

## 1.训练自定义模型

### 1.1 下载标注工具

​	如果需要训练自定义模型，肯定需要手动去标注图像，获取图像中对应的label位置信息。这里我们使用LabelImg，它是用Python编写的，图形界面使用QT，是灵活的开源数据标注工具。数据标注工具下载地址：[LabelImg-windows_v1.8.1.zip](https://github.com/tzutalin/labelImg/files/2638199/windows_v1.8.1.zip)

下载完成后解压压缩包，进入`windows_v1.8.1`文件夹下双击打开`labelImg.exe`文件。

![image-20230628104508751](http://photos.100ask.net/canaan-docs/image-20230628104508751.png)

打开后等待运行，运行完成后会进入如下标注工作界面。

![image-20230628104644114](http://photos.100ask.net/canaan-docs/image-20230628104644114.png)

关于LabelImg更多的使用方法，请访问：https://github.com/heartexlabs/labelImg



**注意**：由于LabelImg会预先提供一些类供您使用，需要手动删除这些类，使得您可以标注自己的数据集。步骤如下所示：

在`windows_v1.8.1`文件夹进入data目录中，可以看到有一个名为`predefined_classes.txt`文件，里面预先定义了一些类，如果里面定义的类您不需要可将该文件里的全部类删除，操作过程如下所示：

![delete-labelImg-predefind](http://photos.100ask.net/canaan-docs/delete-labelImg-predefind.gif)

### 1.2 创建数据集目录

在任意工作目录中创建`images`文件夹和`labels`文件夹分别存放图像数据集和标注信息。这里我演示仅使用少量图像样本进行标注，在实际项目中需要采集足够的图像进行标注才拿满足模型的准确率和精度。

例如我在`100ask-yolov5-image`目录中创建有`images`文件夹和`labels`文件夹，如下所示，创建images文件，存放图像数据集，创建labels文件夹，该文件夹用于后续存放标注数据。

![DataSetworkingDirectory](http://photos.100ask.net/canaan-docs/DataSetworkingDirectory.gif)

### 1.3 标注图像

打开LabelImg软件后，使用软件打开数据集图像文件夹，如下所示：

![LabelImg-OpenDataSetDirectory](http://photos.100ask.net/canaan-docs/LabelImg-OpenDataSetDirectory.gif)

打开后，修改输出label的文件夹为我们创建的数据集目录下的`labels`文件夹

![LabelImg-changelabelDir](http://photos.100ask.net/canaan-docs/LabelImg-changelabelDir.gif)

下面我演示标注过程，以百问网的开发板为例，标注三块开发板

![LabelImg-LabelingProcess](http://photos.100ask.net/canaan-docs/LabelImg-LabelingProcess.gif)

当你点击Save后即表示标注完成，标注完成后后会在`labels`目录下生成`classes.txt`（类别）和图像中标注的类别即位置信息。



下面为LabelImg[快捷键目录](https://github.com/heartexlabs/labelImg)：

| Ctrl + u         | Load all of the images from a directory  |
| ---------------- | ---------------------------------------- |
| Ctrl + r         | Change the default annotation target dir |
| Ctrl + s         | Save                                     |
| Ctrl + d         | Copy the current label and rect box      |
| Ctrl + Shift + d | Delete the current image                 |
| Space            | Flag the current image as verified       |
| w                | Create a rect box                        |
| d                | Next image                               |
| a                | Previous image                           |
| del              | Delete the selected rect box             |
| Ctrl++           | Zoom in                                  |



经过标注大量的图像后，`labels`文件夹如下图所示

![LabelImg-LabelsDir](http://photos.100ask.net/canaan-docs/LabelImg-LabelsDir.gif)

### 1.4 划分训练集和验证集

​	在训练前，我们上一章节备份了一份源码，我们需要在没有修改原始网络的源码里进行训练，否则您可以遇到不可预知的错误。如果您没有进行备份也可重新下载：[https://dongshanpi.cowtransfer.com/s/a8d5f9b4faec4c](https://dongshanpi.cowtransfer.com/s/a8d5f9b4faec4c ) 

​	在模型训练中，需要有训练集和验证集。可以简单理解为网络使用训练集去训练，训练出来的网络使用验证集验证。在总数据集中训练集通常应占80%，验证集应占20%。所以将我们标注的数据集按比例进行分配。

​	在yolov5-6.0项目目录下创建100ask文件夹（该文件夹名可自定义），在100ask文件夹中创建train文件夹（存放训练集）和创建val文件夹（存放验证集）

![100ask-trainVal-Img](http://photos.100ask.net/canaan-docs/100ask-trainVal-Img.gif)

​	在train文件夹中创建images文件夹和labels文件夹。其中images文件夹存放总数据集的80%的图像文件，labels文件夹存放与images中的文件对应的标注文件。

![100ask-trainDir-ImgLab](http://photos.100ask.net/canaan-docs/100ask-trainDir-ImgLab.gif)

​	在val文件夹中创建images文件夹和labels文件夹。其中images文件夹存放总数据集的20%的图像文件，labels文件夹存放与images中的文件对应的标注文件。

![100ask-trainVal-Img](http://photos.100ask.net/canaan-docs/100ask-trainVal-Img.gif)

### 1.5 创建数据集配置文件

进入yolov5-6.0\data目录下，创建`data.yaml`，文件内容如下所示：

```
train: 100ask\train\images  # train images 
val: 100ask\val\images  # val images

nc: 3  # number of classes
names: ['T113', 'K510', 'V853']  # class names
```

![100ask-dataYaml-Config](http://photos.100ask.net/canaan-docs/100ask-dataYaml-Config.gif)



### 1.6 创建模型配置文件

进入models目录下，拷贝yolov5s.yaml文件，粘贴并models目录下重命名为100ask_my-model.yaml，例如：

![100ask-modelYaml-Config](http://photos.100ask.net/canaan-docs/100ask-modelYaml-Config.gif)

修改100ask_my-model.yaml中类的数目为自己训练模型的类数目。

### 1.6 修改训练函数

打开yolov5-6.0项目文件夹中的train.py，修改数据配置文件路径，如下图红框所示：

```
parser.add_argument('--cfg', type=str, default='models/100ask_my-model.yaml', help='model.yaml path')
parser.add_argument('--data', type=str, default=ROOT / 'data/data.yaml', help='dataset.yaml path')
```



### 1.7 训练模型

在conda终端的激活yolov5环境，激活后进入yolov5-6.0项目文件夹。执行`python train.py`，如下图所示：

![image-20230628174332495](http://photos.100ask.net/canaan-docs/image-20230628174332495.png)

程序默认迭代300次，等待训练完成...

![image-20230628182753106](http://photos.100ask.net/canaan-docs/image-20230628182753106.png)

训练完成后结果会保存在`runs\train\`目录下最新一次的训练结果，如上图所示，此次训练的最好模型和最后训练的模型保存在以下目录中

```
runs\train\exp7\weights
```

### 1.8 验证模型

修改val.py函数，修改如下

```
    parser.add_argument('--data', type=str, default=ROOT / 'data/data.yaml', help='dataset.yaml path')
    parser.add_argument('--weights', nargs='+', type=str, default=ROOT / 'runs/train/exp7/weights/best.pt', help='model.pt path(s)')
```

![image-20230628183910971](http://photos.100ask.net/canaan-docs/image-20230628183910971.png)

修改models文件夹下的yolo.py

```
class Model(nn.Module):
    def __init__(self, cfg='100ask_my-model.yaml', ch=3, nc=None, anchors=None):  # model, input channels, number of classes
```

![image-20230628185921751](http://photos.100ask.net/canaan-docs/image-20230628185921751.png)



打开conda终端输入`python val.py`

![image-20230628190017879](http://photos.100ask.net/canaan-docs/image-20230628190017879.png)

执行完成后的结果保存在`runs\val\exp`文件下。

![100ask-valRun](http://photos.100ask.net/canaan-docs/100ask-valRun.gif)

### 1.9 预测图像

在data目录中新建`100ask-images`文件夹存放待检测的图像和视频文件。



修改detect.py函数中，模型的路径与检测图像路径。

```
parser.add_argument('--weights', nargs='+', type=str, default=ROOT / 'runs/train/exp7/weights/best.pt', help='model path(s)')
parser.add_argument('--source', type=str, default=ROOT / 'data/100ask-images', help='file/dir/URL/glob, 0 for webcam')
```

![image-20230629103359183](http://photos.100ask.net/canaan-docs/image-20230629103359183.png)

检测效果如下图所示：

![yolov5-detect](http://photos.100ask.net/canaan-docs/yolov5-detect.jpg)

## 2.导出和转换模型

​	导出模型需要使用上一小节修改后的yolov5-v6.0源码，如果您不想进行修改，可直接使用我们提供的修改好的源码，下载地址：[yolov5-v6.0-K510](https://dongshanpi.cowtransfer.com/s/48f51cc100844b) 。



修改export.py函数

```
parser.add_argument('--data', type=str, default=ROOT / 'data/data.yaml', help='dataset.yaml path')
parser.add_argument('--weights', type=str, default=ROOT / 'runs/train/exp7/weights/best.pt', help='weights path')
```

![image-20230629103642324](http://photos.100ask.net/canaan-docs/image-20230629103642324.png)



打开Conda终端，激活yolov5环境配置后，进入源码目录，如下所示：

```
(base) C:\Users\100askTeam>conda activate py37_yolov5

(py37_yolov5) C:\Users\100askTeam>D:

(py37_yolov5) D:\>cd D:\Programmers\ModelDeployment\2.yolov5\yolov5-6.0

(py37_yolov5) D:\Programmers\ModelDeployment\2.yolov5\yolov5-6.0>
```



在conda终端输入：

```
python export.py --include onnx --dynamic
```

![image-20230629104014942](http://photos.100ask.net/canaan-docs/image-20230629104014942.png)

导出的模型会与输入的模型位于同一路径下，假设我输入的模型位于：`runs\train\exp7\weights`

![image-20230629104123779](http://photos.100ask.net/canaan-docs/image-20230629104123779.png)

### 2.1 简化模型

简化命令如下：

```
python -m onnxsim <输入模型> <输出模型> --input-shape <输入图像尺寸>
```

例如：

输入模型路径为runs/train/exp7/weights/best.onnx，输出模型路径为runs/train/exp7/weights/best-sim.onnx

输入图像尺寸固定为320x320。

​	在conda终端输入以下命令：

```
python -m onnxsim runs/train/exp7/weights/best.onnx runs/train/exp7/weights/best-sim.onnx --overwrite-input-shape 1,3,320,320
```

执行结果如下图所示：

```
(py37_yolov5) D:\Programmers\ModelDeployment\2.yolov5\yolov5-6.0>python -m onnxsim runs/train/exp7/weights/best.onnx runs/train/exp7/weights/best-sim.onnx --overwrite-input-shape 1,3,320,320
Simplifying...
Finish! Here is the difference:
┌────────────┬────────────────┬──────────────────┐
│            │ Original Model │ Simplified Model │
├────────────┼────────────────┼──────────────────┤
│ Add        │ 7              │ 7                │
│ Concat     │ 13             │ 13               │
│ Conv       │ 60             │ 60               │
│ MaxPool    │ 3              │ 3                │
│ Mul        │ 57             │ 57               │
│ Resize     │ 2              │ 2                │
│ Sigmoid    │ 60             │ 60               │
│ Model Size │ 27.6MiB        │ 27.6MiB          │
└────────────┴────────────────┴──────────────────┘
```

执行完成后可以在YOLOV5-V6.0源码目录下看到名称为`best-sim.onnx`文件，请保存好该文件，后续我们可以使用该文件转换为K510芯片内置的KPU的kmodel文件。

### 2.2 查看模型

使用[netron](https://netron.app/)工具查看网络模型，该工具是一个在线的深度学习模型可视化工具，我们可以使用该工具查看神经网络模型。这里简单演示如何查看我们刚刚生成的模型。使用浏览器打开[https://netron.app/](https://netron.app/)网站，打开后出现如下界面，点击红框处的`Opne Model`打开需要查看的模型文件。

![image-20230728162924747](http://photos.100ask.net/canaan-docs/image-20230728162924747.png)

点击`Open Model`之后会弹出文件管理器，我们需要进入YOLOV5-V6.0源码目录下选中刚刚我们简化后的`best-sim.onnx`模型文件后，点击打开即可。



选择刚刚生成的模型文件后，网站会帮我们自动加载模型文件，加载完成后如下图所示：

![image-20230728163832832](http://photos.100ask.net/canaan-docs/image-20230728163832832.png)

我们点击`image`可以看到网络的输入输出情况。

![image-20230728163924869](http://photos.100ask.net/canaan-docs/image-20230728163924869.png)



### 2.3 模型转换

​	模型转换这里使用需要使用到您搭建好的虚拟机环境，进入Ubuntu20.04系统中，在Home目录中打开终端，输入`ls`

```
ubuntu@ubuntu2004:~$ ls
Desktop    Downloads  Pictures  Templates  x86_64
Documents  Music      Public    Videos     yolov5s-modelTransformation
```

可以看到`yolov5s-modelTransformation`文件夹，该文件夹是我们给您提供的yolov5转换模型示例。进入该文件夹

```
ubuntu@ubuntu2004:~$ cd yolov5s-modelTransformation/
```



将您的`best-sim.onnx`模型文件传入虚拟机中的`yolov5s-modelTransformation`目录下，如下所示：

```
ubuntu@ubuntu2004:~/yolov5s-modelTransformation$ ls
gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py
requirements.txt
yolov5s-sim.onnx
best-sim.onnx
```



执行`gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py`程序，将onnx模型文件转换为kmodel模型文件

```
python gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py --target k510   --dump_dir ./tmp --onnx ./best-sim.onnx --kmodel ./best-sim.kmodel
```

注意上述命令中

- --target：目标板子芯片，我们使用的K510，需要填K510。
- --onnx：为输入模型的路径，可自定义名称，文件格式为onnx。
- --dump_dir：临时文件存放位置，会自动在当前目录创建。
- ./yolov5s-sim.kmodel：为输出模型的路径，可自定义名称，文件格式为kmodel。



转换完成后会在当前目录下生成对应kmodel模型文件，输入`ls`查看：

```
best-sim.onnxubuntu@ubuntu2004:~/yolov5s-modelTransformation$ ls
gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py
requirements.txt
yolov5s-sim.kmodel
yolov5s-sim.onnx
best-sim.onnx
best-sim.kmodel
```

将`best-sim.kmodel`拷贝到TF卡中备用，后续用于开发板端的模型部署。



## 3.修改和编译AI应用程序

> 开始前请确保您已经阅读《AI应用程序编译》，并搭建好了虚拟机和获取AI应用源码以及工具链。

​	启动您配置好环境和AI应用开发的虚拟机Ubuntu20.04，启动完成后打开串口终端，进入AI应用程序源码目录

```
ubuntu@ubuntu2004:~$ cd DongshanPI-Vision_AI-APP/code/
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ ls
build.sh             common           gc2053.conf              imx219_1.conf         Makefile            self_learning                 video_object_detect_320x320.conf
cmake                face_alignment   gc2093.conf              imx385_2frame.conf    object_detect       shell                         video_object_detect_432x368.conf
CMakeCache.txt       face_detect      hand_image_classify      imx385_3frame.conf    object_detect_demo  simple_pose                   video_object_detect_480x640.conf
CMakeFiles           face_expression  head_pose_estimation     imx385_normal.conf    openpose            tmp                           video_object_detect_512.conf
cmake_install.cmake  face_landmarks   imx219_0.conf            install_manifest.txt  person_detect       video_192x320.conf            video_object_detect_640.conf
CMakeLists.txt       face_recog       imx219_1080x1920_0.conf  license_plate_recog   retinaface_mb_320   video_object_detect_320.conf  video_object_detect_640x480.conf
```



### 3.1 修改目标检测源码

​	yolov5目标检测源码目录中

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ cd object_detect
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code/object_detect$ ls
CMakeFiles           cv2_utils.cc  Makefile          object_detect.h
cmake_install.cmake  cv2_utils.h   object_detect     README.md
CMakeLists.txt       main.cc       object_detect.cc
```

​	使用vi编辑器，修改`object_detect.h`头文件。

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code/object_detect$ vi object_detect.h
```

打开程序后需要修改以下三个地方:

- 类别数
- 标签名
- 先验框

#### 3.1.1 修改类别数

​	在`object_detect.h`头文件程序中，找到宏定义`CLASS_NUM`，原本yolov5的目标检测类别数为80，宏定义如下所示：

```
#define CLASS_NUM                   80
```

![image-20230803110011035](http://photos.100ask.net/canaan-docs/image-20230803110011035.png)

我们需要将参数80，修改为您自己训练模型的类别数。您可以查看YOLOV5-V6.0源码中的定义，这里以我之前训练的源码为例，打开源码目录下的data文件夹下的data.yaml文件，如下图所示：

![image-20230803105332567](http://photos.100ask.net/canaan-docs/image-20230803105332567.png)

可以查看data.yaml文件中的`nc`类别数为3。可能您训练的模型类别数不一样，请以您实际的为准。

![image-20230803105539182](http://photos.100ask.net/canaan-docs/image-20230803105539182.png)

我们获得模型的训练类别数后，将该参数传入宏定义`#define CLASS_NUM   `中

```
#define CLASS_NUM                   3
```

![image-20230803105932531](http://photos.100ask.net/canaan-docs/image-20230803105932531.png)

#### 3.1.2 修改标签名

​	在`object_detect.h`头文件程序中，找到`objectDetectvector`类中容器`std::vector<std::string> labels`，vector容器定义如下所示：

```
std::vector<std::string> labels
    {
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
    };
```

![image-20230803110429680](http://photos.100ask.net/canaan-docs/image-20230803110429680.png)

可以看到这里总共有80个标签名，需要将容器中的标签名修改为您之前自定义训练模型的中的标签名。这里以我之前训练的为例。查看yolov5项目源码目录中data目录下的data.yaml文件。

![image-20230803110745496](http://photos.100ask.net/canaan-docs/image-20230803110745496.png)

可以从上图中找到names中的标签名，我们需要将这里定义的标签名顺序，填写到`std::vector<std::string> labels`容器中，如下所示：

```
std::vector<std::string> labels
    {
        "T113", "K510", "V853"
    };
```

![image-20230803111221682](http://photos.100ask.net/canaan-docs/image-20230803111221682.png)

> 注意：这里的标签名需要和您实际训练的名称一致，且顺序也需要保持一致。



#### 3.1.3 修改Anchor先验框

​	在`object_detect.h`头文件程序中，找到宏定义`ANCHOR_NUM`和`anchors_0`/`anchors_1`/`anchors_2`，

```
#define ANCHOR_NUM                  3
```

```
float anchors_0[ANCHOR_NUM][2] = { { 10, 13 }, { 16, 30 }, { 33, 23 } };
float anchors_1[ANCHOR_NUM][2] = { { 30, 61 }, { 62, 45 }, { 59, 119 } };
float anchors_2[ANCHOR_NUM][2] = { { 116, 90 }, { 156, 198 }, { 373, 326 } };
```

在目标检测源码中会把先验框分为三层，这些参数可以从您的模型配置文件中获得。这里以我之前训练的模型为例，我没有对anchors进行修改，但有些客户会对anchor进行修改。

![image-20230803111954955](http://photos.100ask.net/canaan-docs/image-20230803111954955.png)

可以看到上图红框中的anchors有3层，分别为：

```
  - [10,13, 16,30, 33,23]  # P3/8
  - [30,61, 62,45, 59,119]  # P4/16
  - [116,90, 156,198, 373,326]  # P5/32
```

我们需要将上述参数填入宏定义`ANCHOR_NUM`和`anchors_0`/`anchors_1`/`anchors_2`中。

```
#define ANCHOR_NUM                  3
```

```
float anchors_0[ANCHOR_NUM][2] = { { 10, 13 }, { 16, 30 }, { 33, 23 } };
float anchors_1[ANCHOR_NUM][2] = { { 30, 61 }, { 62, 45 }, { 59, 119 } };
float anchors_2[ANCHOR_NUM][2] = { { 116, 90 }, { 156, 198 }, { 373, 326 } };
```

![image-20230803112458451](http://photos.100ask.net/canaan-docs/image-20230803112458451.png)

![image-20230803112522122](http://photos.100ask.net/canaan-docs/image-20230803112522122.png)

> 注意：填入的anchors参数请确保与您自定义模型的配置参数一致。



### 3.2 编译AI应用程序

​	编译前需要先配置环境变量，请进入`DongshanPI-Vision_AI-APP/code`目录下

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code/object_detect$ cd ../
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ ls
build.sh             common           gc2053.conf              imx219_1.conf         Makefile            self_learning                 video_object_detect_320x320.conf
cmake                face_alignment   gc2093.conf              imx385_2frame.conf    object_detect       shell                         video_object_detect_432x368.conf
CMakeCache.txt       face_detect      hand_image_classify      imx385_3frame.conf    object_detect_demo  simple_pose                   video_object_detect_480x640.conf
CMakeFiles           face_expression  head_pose_estimation     imx385_normal.conf    openpose            tmp                           video_object_detect_512.conf
cmake_install.cmake  face_landmarks   imx219_0.conf            install_manifest.txt  person_detect       video_192x320.conf            video_object_detect_640.conf
CMakeLists.txt       face_recog       imx219_1080x1920_0.conf  license_plate_recog   retinaface_mb_320   video_object_detect_320.conf  video_object_detect_640x480.conf
```

激活`build.sh`环境脚本程序，输入`source build.sh` ，如下所示：

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ source build.sh 
-- Configuring done
-- Generating done
-- Build files have been written to: /home/ubuntu/DongshanPI-Vision_AI-APP/code
```

输入`make clean`，清理一下之前编译的应用程序

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ make clean
```

编译应用程序，输入`make`

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ make -j32
[  1%] Building CXX object face_detect/CMakeFiles/face_detect.dir/main.cc.o
[  2%] Building CXX object face_detect/CMakeFiles/face_detect.dir/cv2_utils.cc.o
[  2%] Building CXX object face_detect/CMakeFiles/face_detect.dir/anchors_320.cc.o
[  3%] Building CXX object face_detect/CMakeFiles/face_detect.dir/anchors_640.cc.o
[  5%] Building C object face_detect/CMakeFiles/face_detect.dir/__/common/k510_drm.c.o
[  4%] Building CXX object face_detect/CMakeFiles/face_detect.dir/retinaface.cc.o
[  6%] Building C object face_detect/CMakeFiles/face_detect.dir/__/common/v4l2.c.o
[  7%] Building CXX object face_detect/CMakeFiles/face_detect.dir/__/common/buf_mgt.cc.o
[  5%] Building CXX object face_landmarks/CMakeFiles/face_landmarks.dir/main.cc.o
[  8%] Building CXX object face_landmarks/CMakeFiles/face_landmarks.dir/anchors_320.cc.o
[  8%] Building CXX object face_landmarks/CMakeFiles/face_landmarks.dir/cv2_utils.cc.o
[  9%] Building CXX object object_detect/CMakeFiles/object_detect.dir/main.cc.o
[ 10%] Building CXX object object_detect/CMakeFiles/object_detect.dir/cv2_utils.cc.o
[ 12%] Building CXX object face_landmarks/CMakeFiles/face_landmarks.dir/anchors_640.cc.o
[ 12%] Building CXX object object_detect/CMakeFiles/object_detect.dir/object_detect.cc.o
[ 12%] Building C object object_detect/CMakeFiles/object_detect.dir/__/common/k510_drm.c.o
...
```

等待编译完成后，安装应用程序到tmp目录下，输入`make install`

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ make install
[  7%] Built target face_detect
[ 14%] Built target face_landmarks
[ 19%] Built target object_detect
...
```

等待安装完成后，进入`tmp/app/ai/exe/`目录下可以看到新编译出来的`object_detect`

```
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code$ cd tmp/app/ai/exe/
ubuntu@ubuntu2004:~/DongshanPI-Vision_AI-APP/code/tmp/app/ai/exe$ ls
face_alignment   face_recog            imx219_1080x1920_0.conf  object_detect_demo  self_learning                 video_object_detect_320x320.conf  video_object_detect_640.conf
face_detect      hand_image_classify   imx219_1.conf            openpose            simple_pose                   video_object_detect_432x368.conf  video_object_detect_640x480.conf
face_expression  head_pose_estimation  license_plate_recog      person_detect       video_192x320.conf            video_object_detect_480x640.conf
face_landmarks   imx219_0.conf         object_detect            retinaface_mb_320   video_object_detect_320.conf  video_object_detect_512.conf
```



将新编译出来的`object_detect`拷贝到TF卡中备用。



## 4.运行自定义模型目标检测

​	启动前请先按[《快速启动》](https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/02-QuickStart.html)中连接好两个MIPI摄像头、MIPI显示屏后，将TF卡插入开发板端。将拨码开关拨至EMMC启动，使用两条Type-C数据线连接开发板端和电脑端的USB3.0口后，可看到开发板端正常启动。

等待启动完成成后，系统会自动运行摄像头实时预览程序，如下所示：

![image-20230801154016298](http://photos.100ask.net/canaan-docs/image-20230801154016298.png)

手动结束摄像头实时预览程序，输入`ps`，查看进程及进程号。

```
[root@canaan ~ ]$ ps
```

假设查看的进程号如下所示：

```
190 root      0:02 ./v4l2_drm.out -f video_drm_1920x1080.conf -e 1 -s
```

输入以下命令结束进程

```
kill -9 190
```

结束进程后，显示屏会变为白屏，刷新屏幕的摄像头数据。

### 4.1 模型准备

​	将从虚拟机拷贝出来的kmodel模型文件从TF卡中拷贝到系统的`/app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/`目录下，这个目录是用于存放yolov5的输入分辨率为320*320的模型文件。

​	输入`ls`，查看该路径下的模型文件。

```
[root@canaan ~ ]$ ls /app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/
yolov5s_320_sigmoid_bf16_with_preprocess_output_nhwc.kmodel
```

​	进入sd卡目录中，输入`cd sd/p1/`。

```
[root@canaan ~ ]$ cd sd/p1/
[root@canaan ~/sd/p1 ]$ ls
System Volume Information object_detect
best-sim.kmodel
```

​	将`best-sim.kmodel`模型文件拷贝到`/app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/`目录下，输入

```
cp best-sim.kmodel /app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/
```

查看该路径下的模型文件为：

```
[root@canaan ~/sd/p1 ]$ ls /app/ai/kmodel/kmodel_release/object_detect/yolov5s_3
20/
best-sim.kmodel
yolov5s_320_sigmoid_bf16_with_preprocess_output_nhwc.kmodel
```

### 4.2 应用程序准备

​	将从虚拟机拷贝出来的ai应用程序文件从TF卡中拷贝到系统的`/app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/`目录下，将`object_detect`模型文件拷贝到`/app/ai/exe/`目录下，输入

```
[root@canaan ~/sd/p1 ]$ cp object_detect /app/ai/exe/
```

### 4.3 修改程序脚本文件

​	拷贝完成后，进入/app/ai/shell/目录下，可以看到`object_detect.sh`脚本文件。

```
[root@canaan ~/sd/p1 ]$ cd /app/ai/shell/
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

​	修改`object_detect.sh`脚本文件，该脚本用于执行yolov5目标检测程序，输入`vi object_detect.sh`，使用vi编辑器修改。

```
[root@canaan /app/ai/shell ]$ vi object_detect.sh
```

输入后进入vi编辑器，输入i进行文本的编辑,将原本使用的模型修改为您新拷贝到开发板端的模型文件。修改后的内容如下所示：

```
#!/bin/sh

devmem 0x970E00fc 32 0x0fffff00
devmem 0x970E0100 32 0x000000ff
devmem 0x970E00f4 32 0x00550000

cd ../exe && ./object_detect ../kmodel/kmodel_release/object_detect/yolov5s_320/best-sim.kmodel 320 240 320 0.5 0.45 ./video_object_detect_320.conf  1 0 None
# cd ../exe && ./object_detect ../kmodel/kmodel_release/object_detect/yolov5s_320/yolov5s_320_sigmoid_bf16_with_preprocess_output_nhwc.kmodel 320 240 320 0.5 0.45 ./video_object_detect_320.conf  1 0 None
# cd ../exe && ./object_detect ../kmodel/kmodel_release/object_detect/yolov5s_640/yolov5s_640_sigmoid_bf16_with_preprocess_output_nhwc.kmodel 640 480 640 0.5 0.45 ./video_object_detect_640.conf  1 0 None
```

![image-20230803115315488](http://photos.100ask.net/canaan-docs/image-20230803115315488.png)

修改完成后，按下esc后，输入`:wq`。保存并退出vi编辑器。

### 4.4 运行yolov5目标检测

​	当您进行完成上述操作后，在`/app/ai/shell/`目录下执行`./object_detect.sh`

```
[root@canaan /app/ai/shell ]$ ./object_detect.sh
[root@canaan /app/ai/shell ]$ ./object_detect.sh
case ./object_detect build May 31 2023 02:18:22
drm: Found plane_id: 50 connector_id: 49 crtc_id: 57
drm: 1080x1920 (68mm X 121mm) pixel format NV12
screen resolution: 1080x1920
drm: Found plane_id: 50 connector_id: 49 crtc_id: 57
drm: 1080x1920 (68mm X 121mm) pixel format NV12
----------------drm_setup_buffers ---------------------------------
mediactl_init:auto.conf
dofile_video_cfg:auto.conf
doit_video_cfg:start
doit_video_cfg:video5_pitch 0x10a980
...
============> interp_od.load_model finished!
[   38.590373] Isp2K YUV Gamma TABLE config done!
[   38.594855] k510-isp 92600000.isp1: k510isp_pipeline_enable:end
[   38.716646] k510-isp 92600000.isp1: k510isp_video_streamon:start
[   38.722881] k510-isp 92600000.isp1: k510isp_video_check_format:start
[   38.729261] k510-isp 92600000.isp1: k510isp_video_get_graph_data:start
[   38.736361] k510-isp 92600000.isp1: k510isp_video_check_external_subdevs:start
[   38.743930] k510-isp 92600000.isp1: k510isp_pipeline_set_stream:state(1)
[   38.751276] k510-isp 92600000.isp1: k510isp_pipeline_enable:i(0)ret(0)
[   38.757831] k510-isp 92600000.isp1: k510isp_pipeline_enable:f2k cur_video(0000000074d67c92) f2k_used[0] (1)
[   38.767999] k510-isp 92600000.isp1: k510isp_pipeline_enable:i(0) f2k_used[0] (1)f2k multivideo!
[   38.776942] k510-isp 92600000.isp1: k510isp_pipeline_enable:end
total took 178.541 ms
total took 66.8472 ms
total took 66.6512 ms
total took 68.8224 ms
total took 67.9712 ms
total took 68.0848 ms
```

执行完成后，可以正常在显示屏上实时预览yolov5自定义模型目标检测。
