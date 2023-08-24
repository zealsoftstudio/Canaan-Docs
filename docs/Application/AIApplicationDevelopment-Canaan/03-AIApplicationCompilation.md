# AI应用程序编译

**PC主机端要求：**

- 显卡，显存4GB以上（无显卡，纯CPU训练较慢）
- 内存4GB以上
- 硬盘100GB以上（建议200GB以上）
- 系统：Windows10/11系统

**开发板端侧硬件要求：**

- DongshanPI-Vision开发板（搭载嘉楠K510芯片）
- MIPI摄像头 x2
- MIPI显示屏 
- Type-C数据线 x2 /电池供电

软件要求：

- VMware虚拟机工具
- Ubuntu20.04系统
- AI应用程序源码：[https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git](https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git)
- 交叉编译工具链：[https://dongshanpi.cowtransfer.com/s/55562905c0e245](https://dongshanpi.cowtransfer.com/s/55562905c0e245)



开始前请确保您已经阅读《开发环境搭建》，已经下载并成功启动Ubuntu系统，如果您没有阅读，您可以无法正常进行下面的操作。



## 1.获取AI应用源码

DongshanPI-Vision的AI应用源码：[https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git](https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git)

在您的用户目录下在克隆下载AI应用源码，输入：

```
git clone https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git
```

执行结果如下所示：

```
ubuntu@ubuntu2004:~$ git clone https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git
Cloning into '100ask_base-aiApplication-demo'...
remote: Enumerating objects: 679, done.
remote: Counting objects: 100% (679/679), done.
remote: Compressing objects: 100% (231/231), done.
remote: Total 679 (delta 423), reused 676 (delta 423), pack-reused 0
Receiving objects: 100% (679/679), 5.79 MiB | 10.43 MiB/s, done.
Resolving deltas: 100% (423/423), done.
Updating files: 100% (700/700), done.
```

执行完成后可以在当前目录下查看到`100ask_base-aiApplication-demo`文件夹，进入该文件夹

```
ubuntu@ubuntu2004:~$ cd 100ask_base-aiApplication-demo/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ ls
code  README.md
```

其中`code`文件夹下包含有AI应用源码。



## 2.获取交叉编译工具链

DongshanPI-Vision的交叉编译工具链：[riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz](https://dongshanpi.cowtransfer.com/s/55562905c0e245)

您需要通过上述链接下载我们提供的[交叉编译工具链](https://dongshanpi.cowtransfer.com/s/55562905c0e245)，该压缩包文件包含riscv的sysroot工具链、依赖库等文件。

下载完成后将交叉编译工具链压缩包传入虚拟机Ubuntu系统中的`100ask_base-aiApplication-demo`目录下，如下所示：

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ ls
code  README.md  riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```

将交叉编译工具链压缩包，解压到`100ask_base-aiApplication-demo`目录下，输入

```
tar -xzvf riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz 
```

解压完成后，可以看到有`riscv64-buildroot-linux-gnu_sdk-buildroot`文件夹，如下所示：

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ ls
code       riscv64-buildroot-linux-gnu_sdk-buildroot
README.md  riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```



## 3.编译AI应用程序

​	进入源码目录`100ask_base-aiApplication-demo/code`目录下，如下所示：

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ cd code/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ ls
build.sh             head_pose_estimation     person_detect
cmake                imx219_0.conf            retinaface_mb_320
CMakeFiles           imx219_1080x1920_0.conf  self_learning
CMakeLists.txt       imx219_1.conf            shell
common               imx385_2frame.conf       simple_pose
face_alignment       imx385_3frame.conf       video_192x320.conf
face_detect          imx385_normal.conf       video_object_detect_320.conf
face_expression      install_manifest.txt     video_object_detect_320x320.conf
face_landmarks       license_plate_recog      video_object_detect_432x368.conf
face_recog           Makefile                 video_object_detect_480x640.conf
gc2053.conf          object_detect            video_object_detect_512.conf
gc2093.conf          object_detect_demo       video_object_detect_640.conf
hand_image_classify  openpose                 video_object_detect_640x480.conf
```

在编译前需要先配置环境变量，我们已经提前编写好了配置脚本`build.sh`，您只需要手动激活环境变量输入`source build.sh`，如下所示：

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ source build.sh 
-- The C compiler identification is GNU 7.3.0
-- The CXX compiler identification is GNU 7.3.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: /home/ubuntu/100ask_base-aiApplication-demo/riscv64-buildroot-linux-gnu_sdk-buildroot/bin/riscv64-linux-gcc - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /home/ubuntu/100ask_base-aiApplication-demo/riscv64-buildroot-linux-gnu_sdk-buildroot/bin/riscv64-linux-g++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done
-- Generating done
CMake Warning:
  Manually-specified variables were not used by the project:

    BUILD_DOC
    BUILD_DOCS
    BUILD_EXAMPLE
    BUILD_EXAMPLES
    BUILD_SHARED_LIBS
    BUILD_TEST
    BUILD_TESTING
    BUILD_TESTS


-- Build files have been written to: /home/ubuntu/100ask_base-aiApplication-demo/code
```

配置完成后，在终端输入`make`，开始编译应用程序，如下所示：

```
buntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ make
[  0%] Building CXX object face_expression/CMakeFiles/face_expression.dir/main.cc.o
[  0%] Building CXX object openpose/CMakeFiles/openpose.dir/main.cc.o
[ 12%] Building CXX object simple_pose/CMakeFiles/simple_pose.dir/main.cc.o
[  1%] Building CXX object face_detect/CMakeFiles/face_detect.dir/main.cc.o
[  2%] Building CXX object object_detect_demo/CMakeFiles/object_detect_demo.dir/main.cc.o
[  3%] Building CXX object face_expression/CMakeFiles/face_expression.dir/anchors_320.cc.o
[ 14%] Building CXX object object_detect/CMakeFiles/object_detect.dir/main.cc.o
[  4%] Building CXX object object_detect_demo/CMakeFiles/object_detect_demo.dir/cv2_utils.cc.o
[  4%] Building CXX object face_detect/CMakeFiles/face_detect.dir/anchors_320.cc.o
[  5%] Building CXX object face_detect/CMakeFiles/face_detect.dir/anchors_640.cc.o
[  6%] Building CXX object openpose/CMakeFiles/openpose.dir/cv2_utils.cc.o
[  6%] Building CXX object face_expression/CMakeFiles/face_expression.dir/anchors_640.cc.o
[  6%] Building CXX object object_detect_demo/CMakeFiles/object_detect_demo.dir/object_detect.cc.o
...
```

等待编译完成。。。



编译完成还需要输入`make install`，将编译完成的应用程序和执行脚本保存在`tmp/`目录下。

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ make install 
[  7%] Built target face_detect
[ 14%] Built target face_landmarks
[ 19%] Built target object_detect
[ 27%] Built target face_alignment
[ 34%] Built target face_expression
[ 41%] Built target head_pose_estimation
[ 50%] Built target face_recog
[ 56%] Built target simple_pose
[ 61%] Built target openpose
[ 69%] Built target person_detect
[ 76%] Built target hand_image_classify
[ 83%] Built target license_plate_recog
[ 89%] Built target self_learning
[ 94%] Built target object_detect_demo
[100%] Built target retinaface_mb_320
Install the project...
-- Install configuration: "Release"
-- Installing: /home/ubuntu/100ask_base-aiApplication-demo/code/tmp/app/ai/exe/imx219_1080x1920_0.conf
-- Installing: /home/ubuntu/100ask_base-aiApplication-demo/code/tmp/app/ai/exe/imx219_0.conf
...
```



执行完成后，可以进入tmp目录下查看生成的应用程序。如下所示：

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ cd tmp/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp$ ls
app
```

可以看到生成有app目录，进入`app`，有我们刚刚编译的ai应用程序目录

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp$ cd app/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp/app$ ls
ai
```

进入ai应用目录查看文件，如下所示：

```
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp/app/ai$ cd
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp/app/ai$ tree
.
├── exe
│   ├── face_alignment
│   ├── face_detect
│   ├── face_expression
│   ├── face_landmarks
│   ├── face_recog
│   ├── hand_image_classify
│   ├── head_pose_estimation
│   ├── imx219_0.conf
│   ├── imx219_1080x1920_0.conf
│   ├── imx219_1.conf
│   ├── license_plate_recog
│   ├── object_detect
│   ├── object_detect_demo
│   ├── openpose
│   ├── person_detect
│   ├── retinaface_mb_320
│   ├── self_learning
│   ├── simple_pose
│   ├── video_192x320.conf
│   ├── video_object_detect_320.conf
│   ├── video_object_detect_320x320.conf
│   ├── video_object_detect_432x368.conf
│   ├── video_object_detect_480x640.conf
│   ├── video_object_detect_512.conf
│   ├── video_object_detect_640.conf
│   └── video_object_detect_640x480.conf
└── shell
    ├── face_alignment.sh
    ├── face_detect.sh
    ├── face_expression.sh
    ├── face_landmarks.sh
    ├── face_recog.sh
    ├── hand_image_classify.sh
    ├── head_pose_estimation.sh
    ├── license_recog.sh
    ├── object_detect_demo_bf16.sh
    ├── object_detect_demo_uint8.sh
    ├── object_detect.sh
    ├── open_pose.sh
    ├── person_detect.sh
    ├── retinaface_mb_320_bf16.sh
    ├── retinaface_mb_320_uint8.sh
    ├── self_learning.sh
    └── simple_pose.sh

2 directories, 43 files
```

可以看到`exe`文件夹中存放着刚刚编译出来的ai应用程序，`shell`文件夹中存放着对应ai应用程序的脚本文件。



## 4.运行AI应用

​	上一小节我们已经成功编译出ai应用程序，将编译出来的应用程序拷贝到TF卡中，用于将应用程序传输到开发板端。

这里以yolov5目标检测应用程序为例，将`exe/`目录下的`object_detect`应用程序拷贝到TF卡中。



​	启动前请先按[《快速启动》](https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/02-QuickStart.html)中连接好两个MIPI摄像头、MIPI显示屏后，将TF卡插入开发板端。将拨码开关拨至EMMC启动，使用两条Type-C数据线连接开发板端和电脑端的USB3.0口后，可看到开发板端正常启动。

> 您也可以使用电池接口进行供电



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



进入TF卡目录中，查看ai应用程序

```
[root@canaan ~ ]$ cd sd/p1/
[root@canaan ~/sd/p1 ]$ ls
System Volume Information
object_detect
```

拷贝TF卡中的ai应用程序到`/app/ai/exe`目录下

```
[root@canaan ~/sd/p1 ]$ cp object_detect /app/ai/exe/
```



进入ai应用脚本目录下，执行目标检测程序脚本，启动目标检测AI应用

```
[root@canaan ~/sd/p1 ]$ cd /app/ai/shell/
[root@canaan ~ ]$ cd /app/ai/shell/
[root@canaan /app/ai/shell ]$ ./object_detect.sh
...
```

> 注意：如果您修改了应用程序的名称，请务必修改shell脚本，将脚本文件中的应用名称修改为您的应用程序名称。