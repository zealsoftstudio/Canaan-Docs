import{_ as t,r as p,o as i,c,a as n,b as a,d as l,e as s}from"./app-21fd3c9b.js";const o={},d=s(`<h1 id="系统功能体验" tabindex="-1"><a class="header-anchor" href="#系统功能体验" aria-hidden="true">#</a> 系统功能体验</h1><h2 id="_1-1-ai-demo程序" tabindex="-1"><a class="header-anchor" href="#_1-1-ai-demo程序" aria-hidden="true">#</a> 1.1 ai demo程序</h2><h3 id="_1-1-1-说明" tabindex="-1"><a class="header-anchor" href="#_1-1-1-说明" aria-hidden="true">#</a> 1.1.1 说明</h3><p>nncase 的demo程序源码位于SDK目录下的<code>package/ai</code>目录，目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ tree <span class="token parameter variable">-L</span> <span class="token number">2</span> ai
ai
├── ai.hash
├── ai.mk
├── code
│   ├── build.sh
│   ├── cmake
│   ├── CMakeLists.txt
│   ├── common
│   ├── face_alignment
│   ├── face_detect
│   ├── face_expression
│   ├── face_landmarks
│   ├── face_recog
│   ├── hand_image_classify
│   ├── head_pose_estimation
│   ├── imx219_0.conf
│   ├── imx219_1.conf
│   ├── license_plate_recog
│   ├── object_detect
│   ├── object_detect_demo
│   ├── openpose
│   ├── person_detect
│   ├── retinaface_mb_320
│   ├── self_learning
│   ├── shell
│   ├── simple_pose
│   ├── video_192x320.conf
│   ├── video_object_detect_320.conf
│   ├── video_object_detect_320x320.conf
│   ├── video_object_detect_432x368.conf
│   ├── video_object_detect_512.conf
│   ├── video_object_detect_640.conf
│   └── video_object_detect_640x480.conf
└── Config.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以参考retinaface_mb_320的源码和<code>CMakeLists.txt</code>添加新的nncase 的demo程序。</p><p>模型的编译参见<code>nncase_demo.mk</code>里面定义的<em>POST_INSTALL_TARGET_HOOKS</em>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NNCASE_DEMO_DEPENDENCIES += mediactl_lib nncase_linux_runtime opencv4 libdrm
define NNCASE_DEMO_COMPILE_MODEL
    mkdir -p $(TARGET_DIR)/app/ai/kmodel/kmodel_compile/retinaface_mb_320
    cd $(@D) &amp;&amp; /usr/bin/python3 retinaface_mb_320/rf_onnx.py --quant_type uint8 --model ai_kmodel_data/model_file/retinaface/retinaface_mobile0.25_320.onnx
    cp $(@D)/rf.kmodel $(TARGET_DIR)/app/ai/kmodel/kmodel_compile/retinaface_mb_320/rf_uint8.kmodel
    cd $(@D) &amp;&amp; /usr/bin/python3 retinaface_mb_320/rf_onnx.py --quant_type bf16 --model ai_kmodel_data/model_file/retinaface/retinaface_mobile0.25_320.onnx
    cp $(@D)/rf.kmodel $(TARGET_DIR)/app/ai/kmodel/kmodel_compile/retinaface_mb_320/rf_bf16.kmodel

NNCASE_DEMO_POST_INSTALL_TARGET_HOOKS += NNCASE_DEMO_COMPILE_MODEL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型的编译需要nncase环境，关于nncase环境的搭建，参考k510_nncase_Developer_Guides.md。以后nncase有更新，buildroot sdk会同步更新到nncase。</p><h3 id="_1-1-2-retinaface" tabindex="-1"><a class="header-anchor" href="#_1-1-2-retinaface" aria-hidden="true">#</a> 1.1.2 retinaface</h3><p>功能：人脸检测，人脸特征点检测</p><p>程序路径： <code>/app/ai/shell</code> 运行： 执行非量化模型，<code>./retinaface_mb_320_bf16.sh</code> 执行uint8量化模型，<code>./retinaface_mb_320_uint8.sh</code></p><p>脚本里面有关于QOS的设置，下面的两个demo的设置一样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#devmem phyaddr width value</span>
devmem 0x970E00fc <span class="token number">32</span> 0x0fffff00
devmem 0x970E0100 <span class="token number">32</span> 0x000000ff
devmem 0x970E00f4 <span class="token number">32</span> 0x00550000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跑demo时，需要优先保证屏幕显示正常，即调整显示相关的QoS为高优先级。 QOS_CTRL0.ax25mp write QoS = 5 QOS_CTRL0.ax25mp read QoS = 5 QOS_CTRL2.ispf2k write QoS = 0xf QOS_CTRL2.ispf2k read QoS = 0xf QOS_CTRL2.ispr2k write QoS = 0xf QOS_CTRL2.ispr2k read QoS = 0xf QOS_CTRL2.isp3dtof write QoS = 0xf QOS_CTRL3.display read QoS = 0xf QOS_CTRL3.display write QoS = 0xf</p><p>QOS 控制寄存器0(QOS_CTRL0) offset[0x00f4] <img src="http://photos.100ask.net/canaan-docs//demo_nncase_qos_ctrl0.png" alt="qos ctrl0"></p><p>QOS 控制寄存器1(QOS_CTRL1) offset[0x00f8] <img src="http://photos.100ask.net/canaan-docs//demo_nncase_qos_ctrl1.png" alt="qos ctrl1"></p><p>QOS 控制寄存器2(QOS_CTRL2) offset[0x00fc] <img src="http://photos.100ask.net/canaan-docs//demo_nncase_qos_ctrl2.png" alt="qos ctrl2"></p><p>QOS 控制寄存器3(QOS_CTRL3) offset[0x0100] <img src="http://photos.100ask.net/canaan-docs//demo_nncase_qos_ctrl3.png" alt="qos ctrl3"></p><p>模型的编译安装详见文件package/ai/ai.mk：</p><p>编译脚本路径： package/ai/code/retinaface_mb_320/rf_onnx.py</p><h3 id="_1-1-3-object-detect" tabindex="-1"><a class="header-anchor" href="#_1-1-3-object-detect" aria-hidden="true">#</a> 1.1.3 object_detect</h3><p>功能：物体分类检测，80分类</p><p>程序路径： <code>/app/ai/shell</code></p><p>运行： 执行非量化模型，<code>./object_detect_demo_bf16.sh</code> 执行uint8量化模型，<code>./object_detect_demo_uint8.sh</code></p><p>模型的编译安装详见文件package/ai/ai.mk</p><p>编译脚本路径： package/ai/code/object_detect_demo/od_onnx.py</p><h2 id="_1-2-ffmpeg" tabindex="-1"><a class="header-anchor" href="#_1-2-ffmpeg" aria-hidden="true">#</a> 1.2 ffmpeg</h2><p><code>ffmpeg</code>在<code>ffmpeg-4.4</code>开源代码上进行移植，<code>0001-buildroot-ffmpeg-0.1.patch</code>为补丁包，增加了</p><ul><li><code>ff_k510_video_demuxer</code>：控制isp输入，引用了<code>libvideo.so</code></li><li><code>ff_libk510_h264_encoder</code>：控制h264硬件编码，引用了<code>libvenc.so</code></li></ul><p>可以通过help指令查看可配置参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-h</span> <span class="token assign-left variable">encoder</span><span class="token operator">=</span>libk510_h264 <span class="token comment">#查看k510编码器的参数</span>
ffmpeg <span class="token parameter variable">-h</span> <span class="token assign-left variable">demuxer</span><span class="token operator">=</span>libk510_video <span class="token comment">#查看demuxer的配置参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>详细运行说明参考K510_Multimedia_Developer_Guides.md</p><h2 id="_1-3-alsa-demo" tabindex="-1"><a class="header-anchor" href="#_1-3-alsa-demo" aria-hidden="true">#</a> 1.3 alsa_demo</h2><p>alsa demo程序放在<code>/app/alsa_demo</code>目录下：</p><p>运行准备:</p><ol><li>插上耳机</li></ol><p>使用ALSA UTILS测试。</p><h2 id="_1-4-twod-demo" tabindex="-1"><a class="header-anchor" href="#_1-4-twod-demo" aria-hidden="true">#</a> 1.4 TWOD demo</h2><p>运行 rotation 使用方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/twod_app
./twod-rotation-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将ouput.yuv 拷到yuv显示器上设置尺寸1080 x 1920，显示格式nv12，结果如下 <img src="http://photos.100ask.net/canaan-docs//driver-twod-output-1080x1920.jpg" alt="output.yuv"></p><p>scaler 使用方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/twod_app
./twod-scaler-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将ouput.yuv 拷到yuv显示器上设置尺寸640x480，显示格式nv12，结果如下 <img src="http://photos.100ask.net/canaan-docs//driver-twod-output-640x480.jpg" alt="ouput.yuv"></p><p>运行 rgb2yuv 使用方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/twod_app
./twod-osd2yuv-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将ouput.yuv 拷到yuv 显示器上设置尺寸320x240,显示格式nv12，结果如下 <img src="http://photos.100ask.net/canaan-docs//twod-osd2yuv-app.jpg" alt="ouput.yuv"></p><p>运行 yuv2rgb 使用方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/twod_app
./twod-scaler-output-rgb888-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将ouput.yuv 拷到rgb888显示器上设置尺寸640x480，显示格式rgb24，结果如下 <img src="http://photos.100ask.net/canaan-docs//driver-twod-output-640x480-1689991268851-8.jpg" alt="ouput.yuv"></p><p>运行 输出yuv上叠加osd 使用方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/twod_app
./twod-scaler-overlay-osd-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将ouput.yuv 拷到显示器上设置尺寸640x480，显示格式nv12，结果如下 <img src="http://photos.100ask.net/canaan-docs//twod-scaler-overlay-osd-app.jpg" alt="ouput.yuv"></p><p>API:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* 创建内存 */</span>
<span class="token function">twod_create_fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 配置原图片参数 */</span>   
<span class="token function">twod_set_src_picture</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 配置输出图片参数 */</span> 
<span class="token function">twod_set_des_picture</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 设置 scaler */</span>     
<span class="token function">twod_set_scaler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 等待操作完成 */</span>     
<span class="token function">twod_wait_vsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* Invali cache */</span>   
<span class="token function">twod_InvalidateCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* flash cache */</span>     
<span class="token function">twod_flashdateCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 释放内存*/</span>     
<span class="token function">twod_free_mem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 设置旋转 */</span>  
<span class="token function">twod_set_rot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-rtc-demo" tabindex="-1"><a class="header-anchor" href="#_1-5-rtc-demo" aria-hidden="true">#</a> 1.5 RTC demo</h2><p>RTC驱动会注册生成/dev/rtc0设备节点。</p><p>应用层遵循Linux系统中的标准RTC编程方法调用驱动，在运行参考例程之前，建议通过shell 控制台关闭内核信息打印。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token number">0</span> <span class="token operator">&gt;</span> /proc/sys/kernel/printk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入/app/rtc目录，输入如下命令启动rtc应用程序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/rtc
./rtc <span class="token number">2021</span>-11-3 <span class="token number">21</span>:10:59
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序的执行结果为：</p><p><img src="http://photos.100ask.net/canaan-docs//image-rtc.png" alt=""></p><p>RTC demo程序的主要代码片段如下，详细请参考package/rtc 文件夹下的代码。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*解析参数，获取当前年月日、时分秒*/</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>argc <span class="token operator">!=</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span> <span class="token string">&quot;useage:\\t ./rtc year-month-day hour:minute:second\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span> <span class="token string">&quot;example: ./rtc 2021-10-11 19:54:30\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sscanf</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;%d-%d-%d&quot;</span><span class="token punctuation">,</span>  <span class="token operator">&amp;</span>year<span class="token punctuation">,</span> <span class="token operator">&amp;</span>month<span class="token punctuation">,</span> <span class="token operator">&amp;</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sscanf</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;%d:%d:%d&quot;</span><span class="token punctuation">,</span>  <span class="token operator">&amp;</span>hour<span class="token punctuation">,</span> <span class="token operator">&amp;</span>minute<span class="token punctuation">,</span> <span class="token operator">&amp;</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*打开RTC设备，设备节点是：/dev/rtc0 */</span>
fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/dev/rtc0&quot;</span><span class="token punctuation">,</span> O_RDONLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>fd <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;/dev/rtc0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 设置RTC时间。*/</span>
retval <span class="token operator">=</span> <span class="token function">ioctl</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> RTC_SET_TIME<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rtc_tm<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>retval <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;ioctl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 休眠 2秒。 */</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 读取RTC当前时间。*/</span>
retval <span class="token operator">=</span> <span class="token function">ioctl</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> RTC_RD_TIME<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rtc_tm<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>retval <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;ioctl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 打印 RTC当前时间。*/</span>
<span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span> <span class="token string">&quot;\\nRTC date/time: %d/%d/%d %02d:%02d:%02d\\n&quot;</span><span class="token punctuation">,</span>
        rtc_tm<span class="token punctuation">.</span>tm_mday<span class="token punctuation">,</span> rtc_tm<span class="token punctuation">.</span>tm_mon <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rtc_tm<span class="token punctuation">.</span>tm_year <span class="token operator">+</span> <span class="token number">1900</span><span class="token punctuation">,</span>
        rtc_tm<span class="token punctuation">.</span>tm_hour<span class="token punctuation">,</span> rtc_tm<span class="token punctuation">.</span>tm_min<span class="token punctuation">,</span> rtc_tm<span class="token punctuation">.</span>tm_sec<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6-wdt-demo" tabindex="-1"><a class="header-anchor" href="#_1-6-wdt-demo" aria-hidden="true">#</a> 1.6 WDT demo</h2><p>K510一共有三个看门狗，WDT驱动会注册生成/dev/watchdog0、/dev/watchdog1、/dev/watchdog2 设备节点。</p><p>应用层遵循 Linux系统中的标准WDT编程方法调用驱动，wathdog应用程序第一个参数可为0、1，分别代表watchdog0、watchdog1，第二个参数表示可设置的超时时间（单位秒），例如如下命令表示启动watchdog0，watchdog0溢出时间40秒。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/watchdog
./watchdog <span class="token number">0</span> <span class="token number">40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序启动后将每间隔1秒喂一次看门狗，当shell终端中输入stop字符后，应用程序停止喂狗，看门狗将在设置超时时间溢出后复位设备重启，详细请参考package/watchdog文件夹下的代码。</p><p>程序的执行结果为：</p><p><img src="http://photos.100ask.net/canaan-docs//image-watchdog.png" alt=""></p><p><strong>注意</strong>：当前k510看门狗模块的工作时钟频率为757575Hz，以秒为单位的超时时间需要转换成看门狗实际的工作时钟频率的超时时间，计算公式是2^n/757575，因此实际的超时时间会大于等于输入的超时时间。</p><p>实际超时时间的计算过程是：</p><ol><li><p>输入40，2^25/757575=44 &gt; 40，2^24/757575=22 &lt; 40，因此设置为44秒；</p></li><li><p>输入155，2^27/757575=177 &gt; 155，因此设置为177秒；</p></li><li><p>输入2000，2^31/757575=2834 &gt; 2000，因此设置为2834秒；</p></li></ol><h2 id="_1-7-uart-demo" tabindex="-1"><a class="header-anchor" href="#_1-7-uart-demo" aria-hidden="true">#</a> 1.7 UART demo</h2><p>K510一共有4个串口，当前驱动中串口2、3没有使能，串口0驱动会注册生成/dev/ttyS0设备节点。</p><p>应用层遵循Linux系统中的标准UART编程方法调用驱动。uart应用程序第一个参数可为0、1，分别代表uart0、uart1。</p><p>将开发板使用有线网连接到路由器，使得开发板和调试PC在一个网络中，当开发板上电后将自动获取IP，在开发板的shell串口终端中输入ifconfig命令获取IP地址，调试PC利用此IP通过telent连接开发板打开一个telent窗口。例如调试PC通过MobaXterm使用telent连接开发板的操作如下图。</p><p><img src="http://photos.100ask.net/canaan-docs//image-uart-mobaxterm.png" alt=""></p><p>telent终端窗口中输入如下命令启动串口0工作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/uart
./uart <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在telent窗口中输入要发送的内容，可以在shell串口终端窗口看到接收到的数据，详细请参考package/crb_demo/uart文件夹下的代码。 例如，telent窗口的输入：</p><p><img src="http://photos.100ask.net/canaan-docs//image-uart-telent.png" alt=""></p><p>对应的Shell串口终端窗口显示：</p><p><img src="http://photos.100ask.net/canaan-docs//image-uart-shell.png" alt=""></p><h2 id="_1-8-eth-demo" tabindex="-1"><a class="header-anchor" href="#_1-8-eth-demo" aria-hidden="true">#</a> 1.8 ETH demo</h2><p>应用层遵循Linux系统中的标准ETH编程方法调用驱动。</p><h3 id="_1-8-1-client" tabindex="-1"><a class="header-anchor" href="#_1-8-1-client" aria-hidden="true">#</a> 1.8.1 Client</h3><p>设备作为client端，进入/app/client目录，输入如下命令启动client应用程序，ETH应用程序第一个参数表示要建立TCP链接的服务器ip地址，例如输入如下命令表示启动ETH程序与10.20.1.13的server建立通信。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/client
./client <span class="token number">10.20</span>.1.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过tcp协议连接server进行通信，在另一台ubuntu机器上运行server程序，详细代码请参考package/app/client文件夹下内容。</p><p>设备端显示日志：</p><p><img src="http://photos.100ask.net/canaan-docs//image-client.png" alt=""></p><h3 id="_1-8-2-server" tabindex="-1"><a class="header-anchor" href="#_1-8-2-server" aria-hidden="true">#</a> 1.8.2 Server</h3><p>设备作为server端，进入/app/server目录，例如输入如下命令表示启动server程序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/server
./server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在另一台ubuntu机器上运行client程序，通过tcp协议连接server进行通信，详细代码请参考package/crb_demo/server文件夹下内容。</p><p>设备端显示日志：</p><p><img src="http://photos.100ask.net/canaan-docs//image-server.png" alt=""></p><h2 id="_1-9-sdmmc-demo" tabindex="-1"><a class="header-anchor" href="#_1-9-sdmmc-demo" aria-hidden="true">#</a> 1.9 SDMMC demo</h2><p>K510一共有3个SDMMC主控制器，开发板上SDMMC0用于接eMMC，SDMMC1用于WIFI模块，SDMMC2控制器用于接sdcard。</p><p>SDMMC驱动会注册生成/dev/mmcblk0，EMMC驱动会注册成/dev/mmcblk1设备节点。</p><p>SD卡在系统启动后会自动挂载到/root/data ，进入/app/write_read_file目录，SDMMC应用程序第一个参数表示要进行读写操作的文件，如SD卡挂载到/root/data，可对/root/data/目录下的文件进行读写操作，先写后读，输入如下命令启动SDMMC应用程序对SD卡进行读和写的操作并计算读写速度（单位m/s）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/write_read_file
./write_read_file /root/data/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>开启对SD卡进行1G数据的读写，代码请参考package/app/write_read_file文件夹下的内容。</p><p><img src="http://photos.100ask.net/canaan-docs//image-sdmmc.png" alt=""></p><h2 id="_1-10-sha-aes-demo" tabindex="-1"><a class="header-anchor" href="#_1-10-sha-aes-demo" aria-hidden="true">#</a> 1.10 SHA/AES demo</h2>`,109),r={href:"https://www.kernel.org/doc/html/latest/crypto/userspace-if.html",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>参数： -h 打印帮助信息 -t 算法类型：hash、skcipher -n 算法名称：sha256、ecb(aes)、cbc(aes) -x 解密操作 -k AES KEY(16进制字符串) -v AES IV(16进制字符串)</p><p><img src="http://photos.100ask.net/canaan-docs//image_crypto_help.png" alt=""></p><p>sha256 test：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/crypto
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;This is a test file, hello world&quot;</span> <span class="token operator">&gt;</span> plain.txt
./crypto <span class="token parameter variable">-t</span> <span class="token builtin class-name">hash</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;sha256&quot;</span> plain.txt sha256.txt
xxd <span class="token parameter variable">-p</span> <span class="token parameter variable">-c</span> <span class="token number">32</span> sha256.txt
sha256sum plain.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs//image_crypto_sha256.png" alt=""></p><p>ecb(aes) 128 test：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/crypto
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;This is a test file, hello world&quot;</span> <span class="token operator">&gt;</span> plain.txt
./crypto <span class="token parameter variable">-t</span> skcipher <span class="token parameter variable">-n</span> <span class="token string">&quot;ecb(aes)&quot;</span> <span class="token parameter variable">-k</span> 00112233445566778899aabbccddeeff plain.txt ecb_aes_en.bin
./crypto <span class="token parameter variable">-t</span> skcipher <span class="token parameter variable">-n</span> <span class="token string">&quot;ecb(aes)&quot;</span> <span class="token parameter variable">-k</span> 00112233445566778899aabbccddeeff  <span class="token parameter variable">-x</span> ecb_aes_en.bin ecb_aes_de.bin
<span class="token function">cmp</span> ecb_aes_de.bin plain.txt
<span class="token function">cat</span> ecb_aes_de.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs//image_crypto_ecb.png" alt=""></p><p>cbc(aes) 128 test</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/crypto
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;This is a test file, hello world&quot;</span> <span class="token operator">&gt;</span> plain.txt
./crypto <span class="token parameter variable">-t</span> skcipher <span class="token parameter variable">-n</span> <span class="token string">&quot;cbc(aes)&quot;</span> <span class="token parameter variable">-k</span> 00112233445566778899aabbccddeeff <span class="token parameter variable">-v</span> 00112233445566778899aabbccddeeff plain.txt cbc_aes_en.bin
./crypto <span class="token parameter variable">-t</span> skcipher <span class="token parameter variable">-n</span> <span class="token string">&quot;cbc(aes)&quot;</span> <span class="token parameter variable">-k</span> 00112233445566778899aabbccddeeff <span class="token parameter variable">-v</span> 00112233445566778899aabbccddeeff <span class="token parameter variable">-x</span> cbc_aes_en.bin cbc_aes_de.bin
<span class="token function">cmp</span> cbc_aes_de.bin plain.txt
<span class="token function">cat</span> cbc_aes_de.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs//image_crypto_cbc.png" alt=""></p><p>aes-ecb-128和aes-cbc-128加密时要求明文要16字节对齐，不足会自动补0。</p><h2 id="_1-11-trng-demo" tabindex="-1"><a class="header-anchor" href="#_1-11-trng-demo" aria-hidden="true">#</a> 1.11 TRNG demo</h2><p>TRNG demo通过读取/dev/hwrng字符设备产生指定长度的随机数，按16进制字符串输出。</p><p>./trng的输入参数含义：</p><p>-h 打印帮助信息</p><p>-b 指定输出随机数长度，单位byte</p><p><img src="http://photos.100ask.net/canaan-docs//image_trng.png" alt=""></p><h2 id="_1-12-drm-demo" tabindex="-1"><a class="header-anchor" href="#_1-12-drm-demo" aria-hidden="true">#</a> 1.12 DRM demo</h2><p>drm demo展示了VO硬件多图层功能。</p><p>VO共有8个layer：</p><ol><li><p>背景层，可配置背景色。</p></li><li><p>layer0是video层，支持YUV422和YUV420，支持NV12和NV21格式，大小端可配，支持硬件scaling up和scaling down。</p></li><li><p>layer1-layer3是video层，支持YUV422和YUV420，支持NV12和NV21格式，大小端可配。</p></li><li><p>layer4-layer6是OSD层，支持多种ARGB格式。</p></li></ol><p>开发板启动后进入/app/drm_demo目录，输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/drm_demo
./drm_demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-13-v4l2-drm-demo" tabindex="-1"><a class="header-anchor" href="#_1-13-v4l2-drm-demo" aria-hidden="true">#</a> 1.13 V4L2_DRM demo</h2><p>v4l2_drm demo展示了摄像头输入和显示的功能。</p><p>开发板启动后进入/app/mediactl_lib目录，输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/mediactl_lib
./v4l2_drm.out <span class="token parameter variable">-f</span> video_drm_1080x1920.conf
或者
./v4l2_drm.out <span class="token parameter variable">-f</span> video_drm_1920x1080.conf
或者
./v4l2_drm.out <span class="token parameter variable">-f</span> imx385_video_1920x1080.conf  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>imx385 demo ： 这个需要修改配置，具体参照 K510_V4l2_Developer_Guides.md，运行命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./v4l2_drm.out <span class="token parameter variable">-f</span> imx385_video_1920x1080.conf  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动v4l2_drm.out应用程序，v4l2_drm.out显示效果：</p><p><img src="http://photos.100ask.net/canaan-docs//image_v4l2_drm_demo.png" alt=""></p><h2 id="_1-14-lvgl-demo" tabindex="-1"><a class="header-anchor" href="#_1-14-lvgl-demo" aria-hidden="true">#</a> 1.14 LVGL demo</h2><p>进入/app/lvgl,运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/lvgl
./lvgl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果如下： <img src="http://photos.100ask.net/canaan-docs//image_lvgl.png" alt=""></p><h2 id="_1-15-pwm-demo" tabindex="-1"><a class="header-anchor" href="#_1-15-pwm-demo" aria-hidden="true">#</a> 1.15 PWM demo</h2><p>PWM驱动会注册生成/sys/class/pwm/pwmchip0和/sys/class/pwm/pwmchip3设备节点。</p><p>本例程可分别对pwm0和pwm1进行配置和使能，进入/app/pwm目录，pwm应用程序第一个参数表示设置pwm的周期，单位为ns，第二个参数设置pwm一个周期中“ON”的时间，单位为ns，第三个参数可以为0、1，分别代表pwm0和pwm1，例如输入如下命令表示使能pwm0，周期为1s，占空比为1000000000/500000000*100% = 50%，详细代码请参考package/app/pwm文件夹下的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/pwm
./pwm <span class="token number">1000000000</span> <span class="token number">500000000</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序的执行结果为：</p><p><img src="http://photos.100ask.net/canaan-docs//image-pwm.png" alt=""></p><p>通过示波器连接K510 CRB1.2开发板J15的28号引脚，可以示波器上观察到一个周期为1秒，占空比为50%的波形图。</p><h2 id="_1-16-wifi-demo" tabindex="-1"><a class="header-anchor" href="#_1-16-wifi-demo" aria-hidden="true">#</a> 1.16 WIFI demo</h2><p>WiFi模块驱动加载后会生成无线网卡wlan0，遵循标准网口驱动，正常参考TCP/IP socket编程。</p><ol><li><p>在笔记本打开“移动热点”，然后设置热点的名称和密码</p></li><li><p>在笔记本上启动NetAssist，配置协议类型、本地主机IP、本地主机端口、接收设置、发送设置及需要发送的数据，如下图：</p><p><img src="http://photos.100ask.net/canaan-docs//image_wifi_1.png" alt=""></p></li><li><p>wifi测试程序的参数格式为：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./wifi <span class="token operator">&lt;</span>AP name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>local ip<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>server ip<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如进入/app/wifi目录，输入启动wifi测试程序命令，程序的执行结果如下图：</p><p><img src="http://photos.100ask.net/canaan-docs//image_wifi_2.png" alt=""></p><h2 id="_1-17-gpio-keys-demo" tabindex="-1"><a class="header-anchor" href="#_1-17-gpio-keys-demo" aria-hidden="true">#</a> 1.17 GPIO_KEYS demo</h2><p>按键驱动使用linux kernel自身集成的基于input子系统的通用gpio-keys驱动，驱动加载后在/dev/input目录下生成事件监控节点eventX，X为事件节点序号，可以通过cat /proc/bus/input/devices查看</p><p>gpio-keys例程阻塞式读取按键上报事件并打印事件信息，其信息包括按键编码和按键动作，按键编码标识按键身份，按键动作分为pressed和released，在按键release时例程会计算按键按下的持续时间</p><p>程序执行结果如下图所示: <img src="http://photos.100ask.net/canaan-docs//image-gpio-keys.png" alt=""></p>`,53);function m(v,b){const e=p("ExternalLinkIcon");return i(),c("div",null,[d,n("p",null,[a("SHA/AES demo 使用Linux 内核导出 AF_ALG 类型的 Netlink 接口，在用户空间使用内核加密 API。详细信息请参考"),n("a",r,[a("https://www.kernel.org/doc/html/latest/crypto/userspace-if.html"),l(e)]),a("。")]),u])}const h=t(o,[["render",m],["__file","06-App_Development_Guide.html.vue"]]);export{h as default};
