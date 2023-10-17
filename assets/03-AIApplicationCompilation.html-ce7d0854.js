import{_ as a,r as l,o as c,c as t,a as e,b as i,d,e as s}from"./app-21fd3c9b.js";const o={},r=s('<h1 id="ai应用程序编译" tabindex="-1"><a class="header-anchor" href="#ai应用程序编译" aria-hidden="true">#</a> AI应用程序编译</h1><p><strong>PC主机端要求：</strong></p><ul><li>显卡，显存4GB以上（无显卡，纯CPU训练较慢）</li><li>内存4GB以上</li><li>硬盘100GB以上（建议200GB以上）</li><li>系统：Windows10/11系统</li></ul><p><strong>开发板端侧硬件要求：</strong></p><ul><li>DongshanPI-Vision开发板（搭载嘉楠K510芯片）</li><li>MIPI摄像头 x2</li><li>MIPI显示屏</li><li>Type-C数据线 x2 /电池供电</li></ul><p>软件要求：</p>',6),u=e("li",null,"VMware虚拟机工具",-1),v=e("li",null,"Ubuntu20.04系统",-1),m={href:"https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git",target:"_blank",rel:"noopener noreferrer"},b={href:"https://dongshanpi.cowtransfer.com/s/55562905c0e245",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"开始前请确保您已经阅读《开发环境搭建》，已经下载并成功启动Ubuntu系统，如果您没有阅读，您可以无法正常进行下面的操作。",-1),_=e("h2",{id:"_1-获取ai应用源码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-获取ai应用源码","aria-hidden":"true"},"#"),i(" 1.获取AI应用源码")],-1),g={href:"https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git",target:"_blank",rel:"noopener noreferrer"},h=s(`<p>在您的用户目录下在克隆下载AI应用源码，输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ git clone https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git
Cloning into &#39;100ask_base-aiApplication-demo&#39;...
remote: Enumerating objects: 679, done.
remote: Counting objects: 100% (679/679), done.
remote: Compressing objects: 100% (231/231), done.
remote: Total 679 (delta 423), reused 676 (delta 423), pack-reused 0
Receiving objects: 100% (679/679), 5.79 MiB | 10.43 MiB/s, done.
Resolving deltas: 100% (423/423), done.
Updating files: 100% (700/700), done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完成后可以在当前目录下查看到<code>100ask_base-aiApplication-demo</code>文件夹，进入该文件夹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ cd 100ask_base-aiApplication-demo/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ ls
code  README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>code</code>文件夹下包含有AI应用源码。</p><h2 id="_2-获取交叉编译工具链" tabindex="-1"><a class="header-anchor" href="#_2-获取交叉编译工具链" aria-hidden="true">#</a> 2.获取交叉编译工具链</h2>`,8),x={href:"https://dongshanpi.cowtransfer.com/s/55562905c0e245",target:"_blank",rel:"noopener noreferrer"},f={href:"https://dongshanpi.cowtransfer.com/s/55562905c0e245",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>下载完成后将交叉编译工具链压缩包传入虚拟机Ubuntu系统中的<code>100ask_base-aiApplication-demo</code>目录下，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ ls
code  README.md  riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将交叉编译工具链压缩包，解压到<code>100ask_base-aiApplication-demo</code>目录下，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xzvf riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压完成后，可以看到有<code>riscv64-buildroot-linux-gnu_sdk-buildroot</code>文件夹，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ ls
code       riscv64-buildroot-linux-gnu_sdk-buildroot
README.md  riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-编译ai应用程序" tabindex="-1"><a class="header-anchor" href="#_3-编译ai应用程序" aria-hidden="true">#</a> 3.编译AI应用程序</h2><p>​ 进入源码目录<code>100ask_base-aiApplication-demo/code</code>目录下，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo$ cd code/
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在编译前需要先配置环境变量，我们已经提前编写好了配置脚本<code>build.sh</code>，您只需要手动激活环境变量输入<code>source build.sh</code>，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ source build.sh 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后，在终端输入<code>make</code>，开始编译应用程序，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>buntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ make
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等待编译完成。。。</p><p>编译完成还需要输入<code>make install</code>，将编译完成的应用程序和执行脚本保存在<code>tmp/</code>目录下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ make install 
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
-- Install configuration: &quot;Release&quot;
-- Installing: /home/ubuntu/100ask_base-aiApplication-demo/code/tmp/app/ai/exe/imx219_1080x1920_0.conf
-- Installing: /home/ubuntu/100ask_base-aiApplication-demo/code/tmp/app/ai/exe/imx219_0.conf
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完成后，可以进入tmp目录下查看生成的应用程序。如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ cd tmp/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp$ ls
app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到生成有app目录，进入<code>app</code>，有我们刚刚编译的ai应用程序目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp$ cd app/
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp/app$ ls
ai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入ai应用目录查看文件，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp/app/ai$ cd
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code/tmp/app/ai$ tree
.
├── exe
│   ├── face_alignment
│   ├── face_detect
│   ├── face_expression
│   ├── face_landmarks
│   ├── face_recog
│   ├── hand_image_classify
│   ├── head_pose_estimation
│   ├── imx219_0.conf
│   ├── imx219_1080x1920_0.conf
│   ├── imx219_1.conf
│   ├── license_plate_recog
│   ├── object_detect
│   ├── object_detect_demo
│   ├── openpose
│   ├── person_detect
│   ├── retinaface_mb_320
│   ├── self_learning
│   ├── simple_pose
│   ├── video_192x320.conf
│   ├── video_object_detect_320.conf
│   ├── video_object_detect_320x320.conf
│   ├── video_object_detect_432x368.conf
│   ├── video_object_detect_480x640.conf
│   ├── video_object_detect_512.conf
│   ├── video_object_detect_640.conf
│   └── video_object_detect_640x480.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>exe</code>文件夹中存放着刚刚编译出来的ai应用程序，<code>shell</code>文件夹中存放着对应ai应用程序的脚本文件。</p><h2 id="_4-运行ai应用" tabindex="-1"><a class="header-anchor" href="#_4-运行ai应用" aria-hidden="true">#</a> 4.运行AI应用</h2><p>​ 上一小节我们已经成功编译出ai应用程序，将编译出来的应用程序拷贝到TF卡中，用于将应用程序传输到开发板端。</p><p>这里以yolov5目标检测应用程序为例，将<code>exe/</code>目录下的<code>object_detect</code>应用程序拷贝到TF卡中。</p>`,26),C={href:"https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/02-QuickStart.html",target:"_blank",rel:"noopener noreferrer"},j=s(`<blockquote><p>您也可以使用电池接口进行供电</p></blockquote><p>等待启动完成成后，系统会自动运行摄像头实时预览程序，如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230801154016298.png" alt="image-20230801154016298"></p><p>手动结束摄像头实时预览程序，输入<code>ps</code>，查看进程及进程号。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假设查看的进程号如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>190 root      0:02 ./v4l2_drm.out -f video_drm_1920x1080.conf -e 1 -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入以下命令结束进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 190
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结束进程后，显示屏会变为白屏，刷新屏幕的摄像头数据。</p><p>进入TF卡目录中，查看ai应用程序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ cd sd/p1/
[root@canaan ~/sd/p1 ]$ ls
System Volume Information
object_detect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拷贝TF卡中的ai应用程序到<code>/app/ai/exe</code>目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~/sd/p1 ]$ cp object_detect /app/ai/exe/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入ai应用脚本目录下，执行目标检测程序脚本，启动目标检测AI应用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~/sd/p1 ]$ cd /app/ai/shell/
[root@canaan ~ ]$ cd /app/ai/shell/
[root@canaan /app/ai/shell ]$ ./object_detect.sh
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：如果您修改了应用程序的名称，请务必修改shell脚本，将脚本文件中的应用名称修改为您的应用程序名称。</p></blockquote>`,17);function A(B,I){const n=l("ExternalLinkIcon");return c(),t("div",null,[r,e("ul",null,[u,v,e("li",null,[i("AI应用程序源码："),e("a",m,[i("https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git"),d(n)])]),e("li",null,[i("交叉编译工具链："),e("a",b,[i("https://dongshanpi.cowtransfer.com/s/55562905c0e245"),d(n)])])]),p,_,e("p",null,[i("DongshanPI-Vision的AI应用源码："),e("a",g,[i("https://e.coding.net/weidongshan/dongsahnpi-vision/100ask_base-aiApplication-demo.git"),d(n)])]),h,e("p",null,[i("DongshanPI-Vision的交叉编译工具链："),e("a",x,[i("riscv64-buildroot-linux-gnu_sdk-buildroot.tar.gz"),d(n)])]),e("p",null,[i("您需要通过上述链接下载我们提供的"),e("a",f,[i("交叉编译工具链"),d(n)]),i("，该压缩包文件包含riscv的sysroot工具链、依赖库等文件。")]),k,e("p",null,[i("​ 启动前请先按"),e("a",C,[i("《快速启动》"),d(n)]),i("中连接好两个MIPI摄像头、MIPI显示屏后，将TF卡插入开发板端。将拨码开关拨至EMMC启动，使用两条Type-C数据线连接开发板端和电脑端的USB3.0口后，可看到开发板端正常启动。")]),j])}const M=a(o,[["render",A],["__file","03-AIApplicationCompilation.html.vue"]]);export{M as default};
