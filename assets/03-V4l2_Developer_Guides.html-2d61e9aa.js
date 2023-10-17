import{_ as n,o as e,c as s,e as a}from"./app-21fd3c9b.js";const i={},d=a(`<h1 id="v4l2开发指南" tabindex="-1"><a class="header-anchor" href="#v4l2开发指南" aria-hidden="true">#</a> V4L2开发指南</h1><h2 id="_1-v4l2-mediactl库" tabindex="-1"><a class="header-anchor" href="#_1-v4l2-mediactl库" aria-hidden="true">#</a> 1 V4L2 mediactl库</h2><h3 id="_1-1-头文件说明" tabindex="-1"><a class="header-anchor" href="#_1-1-头文件说明" aria-hidden="true">#</a> 1.1 头文件说明</h3><p>#include “media_ctl.h”</p><h3 id="_1-2-api-函数说明" tabindex="-1"><a class="header-anchor" href="#_1-2-api-函数说明" aria-hidden="true">#</a> 1.2 API 函数说明</h3><h4 id="◆-mediactl-init" tabindex="-1"><a class="header-anchor" href="#◆-mediactl-init" aria-hidden="true">#</a> ◆ mediactl_init</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">video_info</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> video_used<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>video_name<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> enable<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> video_width<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> video_height<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> video_out_format<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">mediactl_init</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>video_cfg_file<span class="token punctuation">,</span><span class="token keyword">struct</span> <span class="token class-name">video_info</span> <span class="token operator">*</span>dev_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化media。</p><h5 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数:
[in]    video_cfg_file: video的配置文件，这个文件的内容只需关心下面解释的内容，具体解释如下。
sensor0_name:只在V4L2驱动中设置的sensor驱动名字。
sensor0_cfg_file:sensor对应的isp参数配置文件名字，如imx219_0.conf。
sensor0_total_width:sensor输出的水平方向的总像素，用来产生VSYNC信号，如3476
sensor0_total_height:sensor输出的总行数，用来产生HSYNC信号，如1166
sensor0_active_width:sensor输出的水平方向的有效像素，如1920,
sensor0_active_height:sensor输出的有效行数，如1080
video2_used:1 -- 使能，0 -- 没有使用。
video2_width:video输出的宽度，如1920。
video2_height:video输出的高度，如1080。
video2_out_format:1--指YUV420,NV21。
video3_used:1 -- 使能，0 -- 没有使用。
video3_width:video输出的宽度，如1080。
video3_height:video输出的高度，如720。
video3_out_format:1--指YUV420,NV21。
video4_used:1 -- 使能，0 -- 没有使用。
video4_width:video输出的宽度，如640。
video4_height:video输出的高度，如480。
video4_out_format:1--指YUV420,NV21。
video5_used:1 -- 使能，0 -- 没有使用。
video5_width:video输出的宽度，如320。
video5_height&quot;:video存储的高度，如320。
video5_height_r:video输出的高度，如240。
video5_out_format:0--指分离RGB，1--指ARGB。
sensor1_name:只在V4L2驱动中设置的sensor驱动名字。
sensor1_cfg_file:sensor对应的isp参数配置文件名字，如imx219_0.conf。
sensor1_total_width:sensor输出的水平方向的总像素，用来产生VSYNC信号，如3476，
sensor1_total_height:sensor输出的总行数，用来产生HSYNC信号，如1166，
sensor1_active_width:sensor输出的水平方向的有效像素，如1920,
sensor1_active_height:sensor输出的有效行数，如1080
video6_used:1 -- 使能，0 -- 没有使用。
video6_width:video输出的宽度，如1920。
video6_height:video输出的高度，如1080。
video6_out_format:1--指YUV420,NV21。
video7_used:1 -- 使能，0 -- 没有使用。
video7_width:video输出的宽度，如1080。
video7_height:video输出的高度，如720.
video7_out_format:1--指YUV420,NV21。
video8_used:1 -- 使能，0 -- 没有使用。
video8_width:video输出的宽度，如640。
video8_height:video输出的高度，如480。
video8_out_format:1--指YUV420,NV21。
video9_used:1 -- 使能，0 -- 没有使用。
video9_width:video输出的宽度，如320。
video9_height:video存储的宽度，如320。
video9_height_r:video输出的高度，如240。
video9_out_format:0--指分离RGB，1--指ARGB。
[out]   dev_info: mediactl_lib返回从video的配置文件得到的video信息，具体的解释如下。
video_used:这里是指ISP的pipeline，如果使用就会返回1，否则0。K510支持ISP_F2K/ISP_R2K这两个pipeline，每个pipeline最多支持4个video输出。
video_name[4]:返回的video的名字。f2k的四个video是video2/video3/video4/video5;r2k的四个video是 video6/video7/video8/video9
enable[4]:返回的每个video是否使能，1 -- 使能，0 -- 没有使用。
video_width[4]:返回的每个video的宽度。
video_height[4]:返回的每个video的高度。
video_out_format[4]:返回的每个video的输出图像格式，具体见《video的配置文件》的解释。
具体使用方法如下:
char *video_cfg_file = &quot;video_cfg&quot;;
struct video_info dev_info[2]
mediactl_init(video_cfg_file,&amp;dev_info)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 成功,  -1 失败.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="◆-mediactl-exit" tabindex="-1"><a class="header-anchor" href="#◆-mediactl-exit" aria-hidden="true">#</a> ◆ mediactl_exit</h4><p>关闭media设备及释放申请的share memory内存。</p><h5 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数:
无
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="◆-adaptive-enable" tabindex="-1"><a class="header-anchor" href="#◆-adaptive-enable" aria-hidden="true">#</a> ◆ adaptive_enable</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">adaptive_enable_select_e</span>
<span class="token punctuation">{</span>
    ADAPTIVE_SELECT_DISABLE<span class="token punctuation">,</span>
    ADAPTIVE_SELECT_ENABLE<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">adaptive_enable</span><span class="token punctuation">(</span><span class="token keyword">int</span> scl<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置ISP自适应功能开关</p><h5 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数
ADAPTIVE_SELECT_DISABLE:关闭libadaptive.so提供的自适应功能计算
ADAPTIVE_SELECT_ENABLE:开启libadaptive.so提供的自适应功能计算（默认）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="◆-ae-select-init" tabindex="-1"><a class="header-anchor" href="#◆-ae-select-init" aria-hidden="true">#</a> ◆ ae_select_init</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">ae_select_e</span>
<span class="token punctuation">{</span>
    AE_SELECT_SW_MODE<span class="token punctuation">,</span>
    AE_SELECT_HW_MODE<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">ae_select_init</span><span class="token punctuation">(</span><span class="token keyword">int</span> scl<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置软硬AE切换</p><h5 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数
AE_SELECT_SW_MODE:开启软件AE，使用lib3actl.so提供的软件AE（默认）
AE_SELECT_HW_MODE:开启硬件AE，使用硬件AE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="◆-anti-flicker-init" tabindex="-1"><a class="header-anchor" href="#◆-anti-flicker-init" aria-hidden="true">#</a> ◆ anti_flicker_init</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">anti_flicker_scl_e</span>
<span class="token punctuation">{</span>
    ANTI_FLICKER_ALL_DSIABLE<span class="token punctuation">,</span>
    ANTI_FLICKER_F2K_ENABLE<span class="token punctuation">,</span>
    ANTI_FLICKER_R2K_ENABLE<span class="token punctuation">,</span>
    ANTI_FLICKER_ALL2K_ENABLE<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">anti_flicker_init</span><span class="token punctuation">(</span><span class="token keyword">int</span> scl<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置antiflicker矫正功能</p><h5 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数
ANTI_FLICKER_ALL_DSIABLE:关闭antiflicker矫正功能
ANTI_FLICKER_F2K_ENABLE:开启F2K antiflicker50Hz矫正功能
ANTI_FLICKER_R2K_ENABLE:开启R2K antiflicker50Hz矫正功能
ANTI_FLICKER_ALL2K_ENABLE:开启F2K和R2K antiflicker50Hz矫正功能（默认）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="◆-mediactl-set-ae" tabindex="-1"><a class="header-anchor" href="#◆-mediactl-set-ae" aria-hidden="true">#</a> ◆ mediactl_set_ae</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">isp_pipeline_e</span> <span class="token punctuation">{</span>
    ISP_F2K_PIPELINE<span class="token punctuation">,</span>
    ISP_R2K_PIPELINE<span class="token punctuation">,</span>
    ISP_TOF_PIPELINE
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">mediactl_disable_ae</span><span class="token punctuation">(</span><span class="token keyword">enum</span> <span class="token class-name">isp_pipeline_e</span> pipeline<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭ISP的AE。</p><h5 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数:
ISP_F2K_PIPELINE:关闭f2k pipeline的AE。
ISP_R2K_PIPELINE:关闭r2k pipeline的AE。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="◆-mediactl-get-isp-modules" tabindex="-1"><a class="header-anchor" href="#◆-mediactl-get-isp-modules" aria-hidden="true">#</a> ◆ mediactl_get_isp_modules</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">isp_modules</span> <span class="token punctuation">{</span>
    ISP_TPG<span class="token punctuation">,</span>
    ISP_BLC<span class="token punctuation">,</span>
    ISP_LSC<span class="token punctuation">,</span>
    ISP_AE<span class="token punctuation">,</span>
    ISP_AWB<span class="token punctuation">,</span>
    ISP_AWB_D65<span class="token punctuation">,</span>
    ISP_AWB_CCM<span class="token punctuation">,</span>
    ISP_WDR<span class="token punctuation">,</span>
    ISP_RGB_GAMMA<span class="token punctuation">,</span>
    ISP_YUV_GAMMA<span class="token punctuation">,</span>
    ISP_ADA<span class="token punctuation">,</span>
    ISP_ADA_SBZ<span class="token punctuation">,</span>
    ISP_ADA_CCR<span class="token punctuation">,</span>
    ISP_RGBIR<span class="token punctuation">,</span>
    ISP_RAW_2DNR<span class="token punctuation">,</span>
    ISP_YUV_Y_2DNR<span class="token punctuation">,</span>
    ISP_YUV_UV_2DNR<span class="token punctuation">,</span>
    ISP_3DNR<span class="token punctuation">,</span>
    ISP_LTM<span class="token punctuation">,</span>
    ISP_SHARP<span class="token punctuation">,</span>
    ISP_CC<span class="token punctuation">,</span>
    ISP_CTRST<span class="token punctuation">,</span>
    ISP_LUMA<span class="token punctuation">,</span>
    ISP_SATURATION<span class="token punctuation">,</span>
    ISP_LDC<span class="token punctuation">,</span>
    ISP_AF<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">unsigned</span> <span class="token keyword">int</span> <span class="token function">mediactl_get_isp_modules</span><span class="token punctuation">(</span><span class="token keyword">enum</span> <span class="token class-name">isp_pipeline_e</span> pipeline<span class="token punctuation">,</span><span class="token keyword">enum</span> <span class="token class-name">isp_modules</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取ISP的各模块的使能状态。</p><h5 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数:
isp_pipeline_e:具体见mediactl_set_ae中的解释。
isp_modules:
  ISP_TPG --  Test Pattern Control模块
  ISP_BLC --  Black Level Correction模块
  ISP_LSC --  Lens Shading Correction模块
  ISP_AE --  AUTO Exposure Gain模块
  ISP_AWB -- AUTO white balance模块
  ISP_AWB_D65 -- AUTO white balance d65模块
  ISP_AWB_CCM -- AUTO white balance ccm模块
  ISP_WDR --  wide dynamic range模块
  ISP_RGB_GAMMA -- rgb gamma模块
  ISP_YUV_GAMMA -- yuv gamma模块
  ISP_ADA --  Adaptive dynamic range adjust模块
  ISP_ADA_SBZ -- Image stabilization模块
  ISP_ADA_CCR -- Color correction模块
  ISP_RGBIR -- rgbir rectify模块
  ISP_RAW_2DNR -- raw域2D降噪模块
  ISP_YUV_Y_2DNR -- yuv域2D Y方向降噪模块
  ISP_YUV_UV_2DNR -- yuv域2D uv方向降噪模块
  ISP_3DNR --  yuv域3D降噪模块
  ISP_LTM --  local tone mapping模块
  ISP_SHARP -- sharpness模块
  ISP_CC --  color correction模块
  ISP_CTRST -- contrast adjust模块
  ISP_LUMA --  luma adjust模块
  ISP_SATURATION -- saturation adjust 模块
  ISP_LDC -- lens Distortion Correction模块
  ISP_AF -- ATUO FOCUS模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 -- 模块没有使能  1 -- 模块使能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-配置imx385-sensor" tabindex="-1"><a class="header-anchor" href="#_2-配置imx385-sensor" aria-hidden="true">#</a> 2 配置imx385 sensor</h2><h3 id="_2-1-修改-设备树" tabindex="-1"><a class="header-anchor" href="#_2-1-修改-设备树" aria-hidden="true">#</a> 2.1 修改 设备树</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改k510_crb_lp3_v1_2.dts 文件，将
#include &quot;k510_common/camera-imx219x2.dtsi&quot; 替换成
#include &quot;k510_common/camera-imx385.dtsi&quot;， 如下图所示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-imx385-dts-1690164749497-2.jpg" alt="image-imx385-dts"></p><h3 id="_2-2-修改内核" tabindex="-1"><a class="header-anchor" href="#_2-2-修改内核" aria-hidden="true">#</a> 2.2 修改内核</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> k510_buildroot/k510_crb_lp3_v1_2_defconfig
<span class="token function">make</span> linux-menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入配置界面后，进入下边路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Device Drivers  ---&gt;
Multimedia support  ---&gt;
Sensors used on soc_camera driver  ---&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入目录后，将Sony IMX385 sensor support 选上，两个219 的不选上，如下如： <img src="http://photos.100ask.net/canaan-docs/image-imx385-kernel-config.jpg" alt="ouput.yuv"></p><h3 id="_2-3-重新编译镜像" tabindex="-1"><a class="header-anchor" href="#_2-3-重新编译镜像" aria-hidden="true">#</a> 2.3 重新编译镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> k510_buildroot/k510_crb_lp3_v1_2_defconfig
<span class="token function">make</span> linux-rebuild
<span class="token function">make</span> riscv-pk-k510-dirclean
<span class="token function">make</span> riscv-pk-k510
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-demo应用" tabindex="-1"><a class="header-anchor" href="#_3-demo应用" aria-hidden="true">#</a> 3 Demo应用</h3><h4 id="_3-1-v4l2-drm" tabindex="-1"><a class="header-anchor" href="#_3-1-v4l2-drm" aria-hidden="true">#</a> 3.1 v4l2_drm</h4><p>程序放在<code>/app/mediactl_lib</code>目录下：</p><ul><li><code>v4l2_drm.out</code>：v4l2和drm联动case，添加了-f 修改输入配置文件的名字。可以使用-h 查看帮助。</li></ul><p>运行v4l2_drm.out</p><ul><li>-e：0 关闭所有ae，1打开 f-2k ae，2打开r-2k ae，3打开所有ae。默认情况下可以不指定-e 就是关闭所有ae。</li><li>-x：0 切换至由lib3actl提供的sw ae，1切换至硬件AE。默认情况下可以不指定-x就是sw ae。</li><li>-a：0 关闭antiflicker矫正功能，1 打开f-2k 50Hz矫正功能，2打开r-2k矫正功能，3打开所有antiflicker 50Hz矫正功能。默认情况下可以不指定-a就是开启所有50Hz矫正功能。</li><li>-l：0 关闭libadaptive.so提供的ISP自适应计算功能，1 libadaptive.so提供的ISP自适应计算功能。默认情况下可以不指定-l就是开启libadaptive.so提供的ISP自适应计算功能。</li><li>该demo 需要video配置文件及对应的sensor配置文件在当前目录下。</li><li>该demo通过更改配置文件，可以演示单双摄。</li><li>该demo演示单摄全屏：./v4l2_drm.out -f video_drm_1080x1920.conf</li><li>该demo演示双摄：./v4l2_drm.out -f video_drm_1920x1080.conf</li><li>该demo必须保证video_drm_1920x1080.conf，imx219_0.conf及imx219_1.conf三个配置文件存在</li><li>imx385 demo：./v4l2_drm.out -e 1 -f imx385_video_1920x1080.conf</li></ul>`,60),l=[d];function t(c,o){return e(),s("div",null,l)}const u=n(i,[["render",t],["__file","03-V4l2_Developer_Guides.html.vue"]]);export{u as default};
