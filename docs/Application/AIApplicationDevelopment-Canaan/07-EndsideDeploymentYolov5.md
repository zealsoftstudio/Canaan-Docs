# YOLOV5端侧部署

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



上一章节我们搭建好了yolov5的本地环境，这章将演示如何将默认默认模型导出并端侧部署到DongshanPI-Vision开发板上。

> 开始请先**备份YOLOV5-V6.0项目源码**，由于经过本章修改源码后，本章修改后的源码仅做模型导出功能，没有训练功能，需要在初始源码中进行训练，所以建议阅读本篇文章的客户提前备份好YOLOV5-V6.0项目源码。



## 1.修改YOLOV5-V6.0源码

​	推荐客户阅读或修改YOLOV5-V6.0源码使用PyCharm，下面使用PyCharm打开YOLOV5-V6.0源码，进入源码目录，右键

![image-20230728142031850](http://photos.100ask.net/canaan-docs/image-20230728142031850.png)

打开后会进入Pycharm IDE中，客户可以根据自己的需求阅读或修改源码。

![image-20230728143509666](http://photos.100ask.net/canaan-docs/image-20230728143509666.png)



在项目选项卡中打开`models/yolo.py`源码，如下图所示，打开`model`文件夹后，双击打开`yolo.py`程序

![image-20230728143702804](http://photos.100ask.net/canaan-docs/image-20230728143702804.png)

在yolo.py中定义了我们使用模型时的初始化、前向传播、图像绘制等内容，这里暂时不展开讨论，后续我们出对应的主流模型讲解。

在yolo.py中找到Detect类中的forward函数。

![image-20230728145917250](http://photos.100ask.net/canaan-docs/image-20230728145917250.png)

下面展示forward函数修改前后对比：

**修改前：**

```
    def forward(self, x):
        z = []  # inference output
        for i in range(self.nl):
            x[i] = self.m[i](x[i])  # conv
            bs, _, ny, nx = x[i].shape  # x(bs,255,20,20) to x(bs,3,20,20,85)
            x[i] = x[i].view(bs, self.na, self.no, ny, nx).permute(0, 1, 3, 4, 2).contiguous()

            if not self.training:  # inference
                if self.grid[i].shape[2:4] != x[i].shape[2:4] or self.onnx_dynamic:
                    self.grid[i], self.anchor_grid[i] = self._make_grid(nx, ny, i)

                y = x[i].sigmoid()
                if self.inplace:
                    y[..., 0:2] = (y[..., 0:2] * 2. - 0.5 + self.grid[i]) * self.stride[i]  # xy
                    y[..., 2:4] = (y[..., 2:4] * 2) ** 2 * self.anchor_grid[i]  # wh
                else:  # for YOLOv5 on AWS Inferentia https://github.com/ultralytics/yolov5/pull/2953
                    xy = (y[..., 0:2] * 2. - 0.5 + self.grid[i]) * self.stride[i]  # xy
                    wh = (y[..., 2:4] * 2) ** 2 * self.anchor_grid[i]  # wh
                    y = torch.cat((xy, wh, y[..., 4:]), -1)
                z.append(y.view(bs, -1, self.no))

        return x if self.training else (torch.cat(z, 1), x)
```

**修改后：**

```
    def forward(self, x):
        z = []  # inference output
        for i in range(self.nl):
            x[i] = self.m[i](x[i])  # conv
            x[i] = x[i].sigmoid()

        return x
```

修改完成后，我们不能再使用YOLOV5-V6.0源码进行训练模型了，仅用于导出优化后的onnx模型。



## 2.导出ONNX模型

​	这里我会先以导出默认的yolov5s.pt模型为例，对于自定义训练模型会在下一章进行讲解。打开Conda终端，激活配置好的yolov5环境，进入修改源码后的YOLOV5项目目录中。如下所示：

```
(base) C:\Users\100askTeam>conda activate py37_yolov5

(py37_yolov5) C:\Users\100askTeam>D:

(py37_yolov5) D:\>cd D:\Programmers\ModelDeployment\2.yolov5\yolov5-6.0

(py37_yolov5) D:\Programmers\ModelDeployment\2.yolov5\yolov5-6.0>
```

执行export.py函数导出yolov5的onnx格式动态模型，在conda终端输入

```
python export.py --weights yolov5s.pt --include onnx --dynamic
```

![image-20230619164049085](http://photos.100ask.net/canaan-docs/image-20230619164049085.png)

执行完成后会在yolov5项目目录中生成一个名称为`yolov5s.onnx`的文件，如下图所示：

![image-20230619164141069](http://photos.100ask.net/canaan-docs/image-20230619164141069-1690529854302-2.png)

## 3.简化模型

​	由于转换的模型是动态 Shape 的，不限制输入图片的大小，对于 K510芯片内置的KPU 来说会增加处理工序，所以这里我们需要转换为静态 Shape 的模型。 由于默认程序支持`320*320`和`640*640`，这里我将输入图像大小设置为320*320.

​	在conda终端输入以下命令：

```
python -m onnxsim yolov5s.onnx yolov5s-sim.onnx --overwrite-input-shape 1,3,320,320
```

如下图所示：

```
(py37_yolov5) D:\Programmers\ModelDeployment\2.yolov5\yolov5-6.0>python -m onnxsim yolov5s.onnx yolov5s-sim.onnx --overwrite-input-shape 1,3,320,320
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

执行完成后可以在YOLOV5-V6.0源码目录下看到名称为`yolov5s-sim.onnx`文件，请保存好该文件，后续我们可以使用该文件转换为K510芯片内置的KPU的kmodel文件。



## 4.查看模型

使用[netron](https://netron.app/)工具查看网络模型，该工具是一个在线的深度学习模型可视化工具，我们可以使用该工具查看神经网络模型。这里简单演示如何查看我们刚刚生成的模型。使用浏览器打开[https://netron.app/](https://netron.app/)网站，打开后出现如下界面，点击红框处的`Opne Model`打开需要查看的模型文件。

![image-20230728162924747](http://photos.100ask.net/canaan-docs/image-20230728162924747.png)

点击`Open Model`之后会弹出文件管理器，我们需要进入YOLOV5-V6.0源码目录下选中刚刚我们简化后的`yolov5s-sim.onnx`模型文件后，点击打开即可。

![image-20230728163724615](http://photos.100ask.net/canaan-docs/image-20230728163724615.png)

选择刚刚生成的模型文件后，网站会帮我们自动加载模型文件，加载完成后如下图所示：

![image-20230728163832832](http://photos.100ask.net/canaan-docs/image-20230728163832832.png)

我们点击`image`可以看到网络的输入输出情况。

![image-20230728163924869](http://photos.100ask.net/canaan-docs/image-20230728163924869.png)



## 5.模型转换

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



将您的`yolov5s-sim.onnx`模型文件传入虚拟机中的`yolov5s-modelTransformation`目录下，如下所示：

```
ubuntu@ubuntu2004:~/yolov5s-modelTransformation$ ls
gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py
requirements.txt
yolov5s-sim.onnx
```



执行`gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py`程序，将onnx模型文件转换为kmodel模型文件

```
python gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py --target k510   --dump_dir ./tmp --onnx ./yolov5s-sim.onnx --kmodel ./yolov5s-sim.kmodel
```

注意上述命令中

- --target：目标板子芯片，我们使用的K510，需要填K510。
- --onnx：为输入模型的路径，可自定义名称，文件格式为onnx。
- --dump_dir：临时文件存放位置，会自动在当前目录创建。
- ./yolov5s-sim.kmodel：为输出模型的路径，可自定义名称，文件格式为kmodel。

![image-20230801143758595](http://photos.100ask.net/canaan-docs/image-20230801143758595.png)

转换完成后会在当前目录下生成对应kmodel模型文件，输入`ls`查看：

```
ubuntu@ubuntu2004:~/yolov5s-modelTransformation$ ls
gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py
requirements.txt
yolov5s-sim.kmodel
yolov5s-sim.onnx
```

将`yolov5s-sim.kmodel`拷贝到TF卡中备用，后续用于开发板端的模型部署。



## 6.端侧部署

### 6.1 启动开发板

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

### 6.2 模型准备

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
System Volume Information
yolov5s-sim.kmodel
```

​	将`yolov5s-sim.kmodel`模型文件拷贝到`/app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/`目录下，输入

```
cp yolov5s-sim.kmodel /app/ai/kmodel/kmodel_release/object_detect/yolov5s_320/
```

### 6.3 修改程序脚本文件

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

cd ../exe && ./object_detect ../kmodel/kmodel_release/object_detect/yolov5s_320/yolov5s-sim.kmodel 320 240 320 0.5 0.45 ./video_object_detect_320.conf  1 0 None
# cd ../exe && ./object_detect ../kmodel/kmodel_release/object_detect/yolov5s_320/yolov5s_320_sigmoid_bf16_with_preprocess_output_nhwc.kmodel 320 240 320 0.5 0.45 ./video_object_detect_320.conf  1 0 None
# cd ../exe && ./object_detect ../kmodel/kmodel_release/object_detect/yolov5s_640/yolov5s_640_sigmoid_bf16_with_preprocess_output_nhwc.kmodel 640 480 640 0.5 0.45 ./video_object_detect_640.conf  1 0 None
```

![image-20230801155849638](http://photos.100ask.net/canaan-docs/image-20230801155849638.png)

修改完成后，按下esc后，输入`:wq`。保存并退出vi编辑器。

### 6.4 运行yolov5目标检测

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

执行完成后，可以正常在显示屏上实时预览yolov5目标检测。

