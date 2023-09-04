# 开发环境搭建

**硬件要求：**

- 一台PC电脑：
  - 显卡，显存4GB以上
  - 内存16GB以上
  - 硬盘100GB以上（建议200GB以上）
  - 系统：Windows10/11系统

**软件要求：**

- VMware虚拟机工具：[VMware下载中心](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

- Ubuntu镜像，可通过以下两种方法获取：
  - 奶牛快传：[DongshanPI-Vision虚拟机-Ubuntu20.04.zip](https://dongshanpi.cowtransfer.com/s/386fc0c0310946) 
  - 百度网盘：[DongshanPI-Vision虚拟机-Ubuntu20.04.zip](https://pan.baidu.com/s/1LbkblZvlbsXiJWH-mzFsWw?pwd=blgh)




开始前请点击上面的VMware下载中心**下载**好**VMware虚拟机工具**，并安装到您的PC电脑中，请记住您安装的位置。
开始前请先**下载**好我们帮您配置好环境的**Ubuntu镜像**，并解压到您的PC电脑中，请记住您Ubuntu镜像保存的位置。



## 1.快速启动Ubuntu

​	打开VMware虚拟机工具，打开后进入如下界面：

![image-20230801103400736](http://photos.100ask.net/canaan-docs/image-20230801103400736.png)

我们需要使用VMware打开我们下载好并解压完成的Ubuntu虚拟机镜像。点击**文件**，选择**打开**。

![image-20230801104047685](http://photos.100ask.net/canaan-docs/image-20230801104047685.png)

此时会弹出文件资源管理器的窗口，我们需要找到我们下载并解压完成的Ubuntu镜像。假设我的虚拟机文件放在`E:/K510-aiAPP`中，那么我应该进入`Ubuntu_20.04.4_VM`文件夹中，选中`Ubuntu_20.04.4_VM_LinuxVMImages.COM.vmx`。

![image-20230801104852495](http://photos.100ask.net/canaan-docs/image-20230801104852495.png)

打开完成后，会在主页中出现名为K510-aiAPP-Ubuntu20.04的虚拟机，点击**开启此虚拟机**

![image-20230801113006467](http://photos.100ask.net/canaan-docs/image-20230801113006467.png)

打开后，等待虚拟机运行，运行前会询问您以下提示框，点击**我已复制该虚拟机**

![image-20230801105332891](http://photos.100ask.net/canaan-docs/image-20230801105332891.png)

此时等待虚拟机运行即可，运行成功后进入登入界面。点击`Ubuntu`账户，输入密码为`Ubuntu`

![image-20230801105546859](http://photos.100ask.net/canaan-docs/image-20230801105546859.png)

输入密码后会自动进入系统。



## 2.查看配置环境

​	由于您使用的是我们提供的虚拟机文件，我们已经默认帮您配置好了环境，您可以进入文件管理器中Home目录，单击右键后选择`Open in Terminal`，如下图所示。

![image-20230801115537523](http://photos.100ask.net/canaan-docs/image-20230801115537523.png)

打开终端后，在终端输入`pip show nncase`，查看是否存在nncase包。

```
pip show nncase
```

![image-20230801115854261](http://photos.100ask.net/canaan-docs/image-20230801115854261.png)

输入`pip show nncase`，查看是否存在nncase-k510包

```
pip show nncase
```

![image-20230801120104029](http://photos.100ask.net/canaan-docs/image-20230801120104029.png)

## 3.测试环境

​	虚拟机中内置有[模型转换程序](https://dongshanpi.cowtransfer.com/s/b70eced85b0d46)，这里我们使用该程序测试Ubuntu的环境是否配置完成。该程序位于`/home/ubuntu/yolov5s-modelTransformation`目录下。在终端中输入以下命令进入该目录：

```
cd /home/ubuntu/yolov5s-modelTransformation
```

查看该目录下的文件

```
buntu@ubuntu2004:~/yolov5s-modelTransformation$ ls
gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py
requirements.txt
yolov5s-sim.kmodel
yolov5s-sim.onnx
```

这里对目录下的四个文件进行解释：

- gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py：是yolov5s模型转换程序，可将onnx模型格式转换为kmodel模型格式，其中kmodel模型格式为DongshanPI-Vision开发板使用的模型模型格式。
- requirements.txt ：依赖包版本，客户您作为参考。
- yolov5s-sim.kmodel：转换后的模型文件，可用于部署到开发板端。
- yolov5s-sim.onnx：由yolov5源码输出得到的onnx模型格式。



在终端输入以下命令，将onnx格式的模型转换为kmodel格式的模型文件

```
python gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py --target k510   --dump_dir ./tmp --onnx ./yolov5s-sim.onnx --kmodel ./yolov5s-sim.kmodel
```

![image-20230801141437118](http://photos.100ask.net/canaan-docs/image-20230801141437118.png)

转换成功后会生成对应的kmodel文件，查看kmodel的修改时间。

```
ubuntu@ubuntu2004:~/yolov5s-modelTransformation$ ll yolov5s-sim.kmodel 
-rw-rw-r-- 1 ubuntu ubuntu 14602936 Aug  1 02:13 yolov5s-sim.kmodel
```



到此成功验证Ubuntu已经成功搭建好环境。