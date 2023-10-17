import{_ as n,o as s,c as a,e}from"./app-21fd3c9b.js";const p={},t=e(`<h1 id="isp自适应调节参数说明文档" tabindex="-1"><a class="header-anchor" href="#isp自适应调节参数说明文档" aria-hidden="true">#</a> ISP自适应调节参数说明文档</h1><h2 id="_1-添加调试参数" tabindex="-1"><a class="header-anchor" href="#_1-添加调试参数" aria-hidden="true">#</a> 1 添加调试参数</h2><h3 id="_1-1-调试参数说明" tabindex="-1"><a class="header-anchor" href="#_1-1-调试参数说明" aria-hidden="true">#</a> 1.1 调试参数说明</h3><p><code>#include &quot;sensor_params/imx219/adaptive_imx219_f2k.h&quot;</code></p><h4 id="◆-adap-imx219-f2k" tabindex="-1"><a class="header-anchor" href="#◆-adap-imx219-f2k" aria-hidden="true">#</a> ◆ adap_imx219_f2k</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">float</span> nFps<span class="token punctuation">;</span>
    ADAPTIVE_ISP_AE_PARAM_T tAeParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_AE_GAIN_PARAM_T tAeGainParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_BLC_PARAM_T tBlcParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_LSC_PARAM_T tLscParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_SHARPNESS_PARAM_T tSharpnessParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_LTM_PARAM_T tLtm_param<span class="token punctuation">;</span>
    ADAPTIVE_ISP_2D_DENOISE_PARAM_T tNr2dParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_3D_DENOISE_PARAM_T tNr3dParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_WDR_PARAM_T tWdrParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_CCM_PARAM_T tCcmParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_AWB_PARAM_T tAwbParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_GAMMA_PARAM_T tGammaParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_IR_CUT_PARAM_T tIrCutParam<span class="token punctuation">;</span> <span class="token comment">// TBD</span>
    ADAPTIVE_ISP_POST_SATURATION_PARAM_T tSaturationParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_COLOR_GREY_SWITCH_PARAM_T tColorGreySwitchParam<span class="token punctuation">;</span>
    ADAPTIVE_ISP_ADA_PARAM_T tAdaParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_PIPELINE_PARAM_T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####### 成员</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">float</span> nFps<span class="token operator">:</span> 当前设备使用的帧率
ADAPTIVE_ISP_AE_PARAM_T tAeParam<span class="token operator">:</span> AE曝光时间范围、目标值和调整分段
ADAPTIVE_ISP_AE_GAIN_PARAM_T tAeGainParam<span class="token operator">:</span> AE增益调整范围和调整分段
ADAPTIVE_ISP_BLC_PARAM_T tBlcParam<span class="token operator">:</span> 多组黑电平参数，对应AE增益分段
ADAPTIVE_ISP_LSC_PARAM_T tLscParam<span class="token operator">:</span> 多组镜头渐晕矫正参数，对应AE增益分段
ADAPTIVE_ISP_SHARPNESS_PARAM_T tSharpnessParam<span class="token operator">:</span> 多组锐度参数，对应AE增益分段
ADAPTIVE_ISP_LTM_PARAM_T tLtm_param<span class="token operator">:</span> 多组局部色调映射参数，对应AE增益分段
ADAPTIVE_ISP_2D_DENOISE_PARAM_T tNr2dParam<span class="token operator">:</span> 多组<span class="token number">2</span>d降噪参数，对应AE增益分段
ADAPTIVE_ISP_3D_DENOISE_PARAM_T tNr3dParam<span class="token operator">:</span> 多组<span class="token number">3</span>dnr降噪参数，对应AE增益分段
ADAPTIVE_ISP_WDR_PARAM_T tWdrParam<span class="token operator">:</span> 多组硬件WDR参数，对应AE增益分段，目前不可用
ADAPTIVE_ISP_CCM_PARAM_T tCcmParam<span class="token operator">:</span> 多组CCM矩阵，对应不同的标定色温
ADAPTIVE_ISP_AWB_PARAM_T tAwbParam<span class="token operator">:</span> 多组AWB范围限制参数，对应AE增益分段
ADAPTIVE_ISP_GAMMA_PARAM_T tGammaParam<span class="token operator">:</span> 白天和夜晚共两组gamma曲线，对应不同的曝光量，
ADAPTIVE_ISP_IR_CUT_PARAM_T tIrCutParam<span class="token operator">:</span> 控制IR CUT切换，对应曝光量切换日片和夜片
ADAPTIVE_ISP_POST_SATURATION_PARAM_T tSaturationParam<span class="token operator">:</span> 多组饱和度参数，对应AE增益分段
ADAPTIVE_ISP_COLOR_GREY_SWITCH_PARAM_T tColorGreySwitchParam<span class="token operator">:</span> 彩色模式和黑白模式，对应不同的曝光量，默认关闭
ADAPTIVE_ISP_ADA_PARAM_T tAdaParam<span class="token operator">:</span> 多组ada参数，在曝光量达到AE增益和曝光时间上限后，根据target的下降进行分段控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="taeparam" tabindex="-1"><a class="header-anchor" href="#taeparam" aria-hidden="true">#</a> tAeParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nAeYTarget<span class="token punctuation">;</span>
    <span class="token keyword">int</span> nAeYTargetRange<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _AE_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nExposureTime<span class="token punctuation">;</span>      <span class="token comment">/* 0 - 40000 us */</span>
    <span class="token keyword">int</span> nExposureGain<span class="token punctuation">;</span>      <span class="token comment">/* 256 - 8192; 1x is 256 */</span>
    _AE_CTL_PARAM_T tAeCtlParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ISP_AE_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    <span class="token keyword">int</span> nAntiFlickerSelect<span class="token punctuation">;</span> <span class="token comment">/* 0: Anti_Flicker_None; 1: Anti_Flicker_50Hz; 2: Anti_Flicker_60Hz */</span>
    ISP_AE_PARAM_T tAeParam<span class="token punctuation">[</span>ADAPTIVE_AE_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_AE_PARAM_T<span class="token punctuation">;</span>

nAdaptiveEnable<span class="token operator">:</span> <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nAntiFlickerSelect<span class="token operator">:</span> 此功能已经由sw ae接管，此处控制无效
nExposureTime<span class="token operator">:</span> 微秒， 当前一组参数的曝光时间
nExposureGain<span class="token operator">:</span> 倍数x256，<span class="token number">256</span><span class="token operator">-</span><span class="token number">4095</span>（<span class="token number">1</span><span class="token operator">*</span><span class="token number">256</span><span class="token operator">-</span><span class="token number">16</span><span class="token operator">*</span><span class="token number">256</span>） 当前一组参数的增益
nAeYTarget<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>， 当前一组参数对应需要控制的亮度目标值
nAeYTargetRange<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>， 当前一组参数对应需要控制的亮度目标误差
tAeParam<span class="token punctuation">[</span>ADAPTIVE_AE_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 五组曝光参数，当实际曝光参数达到其中某一组的nExposureTime和nExposureGain时，将使用该组的tAeCtlParam进行ISP控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="taegainparam" tabindex="-1"><a class="header-anchor" href="#taegainparam" aria-hidden="true">#</a> tAeGainParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* Gain Range */</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nGain<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_AE_GAIN_PARAM_T<span class="token punctuation">;</span>

nGain<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">5</span>组AE增益值，其他依赖AE增益模块的分段将根据此结构体选择，实际增益达到某一个gain值的时候，会控制其他模块使用该索引对应的控制参数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tblcparam" tabindex="-1"><a class="header-anchor" href="#tblcparam" aria-hidden="true">#</a> tBlcParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* BLC
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nOffset<span class="token punctuation">;</span>            <span class="token comment">/* default 220 */</span>
<span class="token punctuation">}</span> _BLC_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _BLC_CTL_PARAM_T tBlcCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_BLC_PARAM_T<span class="token punctuation">;</span>

控制不同曝光增益下黑电平值
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nOffset<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">4095</span>， 黑电平值，用于写寄存器
tBlcCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tlscparam" tabindex="-1"><a class="header-anchor" href="#tlscparam" aria-hidden="true">#</a> tLscParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* LSC
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nLscRedRatio<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nLscGreenRatio<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nLscBlueRatio<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _LSC_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _LSC_CTL_PARAM_T tLscCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_LSC_PARAM_T<span class="token punctuation">;</span>

控制不同曝光增益下镜头渐晕的效果
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nLscRedRatio、nLscGreenRatio、nLscBlueRatio<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">511</span>，一组控制参数，三通道的增益
tLscCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tsharpnessparam" tabindex="-1"><a class="header-anchor" href="#tsharpnessparam" aria-hidden="true">#</a> tSharpnessParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* SHARPNESS
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nSharpnessCore<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nSharpnessThres<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* [0]: threshold0 [1]: threshold1 */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nSharpnessGain<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _SHARPNESS_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _SHARPNESS_CTL_PARAM_T tSharpnessCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_SHARPNESS_PARAM_T<span class="token punctuation">;</span>

控制不同曝光增益下锐化强度
nSharpnessCore<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nSharpnessThres<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">4095</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>必须小于<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
nSharpnessGain<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
tSharpnessCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tltm-param" tabindex="-1"><a class="header-anchor" href="#tltm-param" aria-hidden="true">#</a> tLtm_param</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* LTM
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nLtmGain<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nLtmThres<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _LTM_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _LTM_CTL_PARAM_T tLtmCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_LTM_PARAM_T<span class="token punctuation">;</span>

控制不同曝光增益下局部色调映射的值
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nLtmGain<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nLtmThres<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
tLtmCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tnr2dparam" tabindex="-1"><a class="header-anchor" href="#tnr2dparam" aria-hidden="true">#</a> tNr2dParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* 2D NR
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nRawDomainIntensity<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> n2dAdjacentPixIntensity<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> n2dEdgeIntensity<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> n2dLumaIntensit<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> n2dChromaIntensity<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _2D_DENOISE_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _2D_DENOISE_CTL_PARAM_T t2dNoiseCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_2D_DENOISE_PARAM_T<span class="token punctuation">;</span>

控制不同曝光增益下<span class="token number">2</span>d降噪强度
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nRawDomainIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
n2dAdjacentPixIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">511</span>
n2dEdgeIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">1023</span>
n2dLumaIntensit<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
n2dChromaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
t2dNoiseCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tnr3dparam" tabindex="-1"><a class="header-anchor" href="#tnr3dparam" aria-hidden="true">#</a> tNr3dParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* 3D NR
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nPre3dLumaThres<span class="token punctuation">;</span>   <span class="token comment">/* dp thy */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nPre3dLumaIntensity<span class="token punctuation">;</span>     <span class="token comment">/* dp thyp */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nPre3dChromaIntensity<span class="token punctuation">;</span>    <span class="token comment">/* dp thcp */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dMiddleFilterThres<span class="token punctuation">;</span> <span class="token comment">/*  */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dPrevFrameMidFilter<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dCurFrameMidFilterThres<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dLowPassFilterVal<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dLumaThres<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dMinimumVal<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dLumaIntensity<span class="token punctuation">;</span> <span class="token comment">/* dm thyp */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nMain3dChromaIntensity<span class="token punctuation">;</span> <span class="token comment">/* dm thcp */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nPost3dEdgeThreshold<span class="token punctuation">;</span> <span class="token comment">/* db theg */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nPost3dLumaIntensity<span class="token punctuation">;</span> <span class="token comment">/* db thyp */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nPost3dChromaIntensity<span class="token punctuation">;</span> <span class="token comment">/* db thcp */</span>
<span class="token punctuation">}</span> _3D_DENOISE_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _3D_DENOISE_CTL_PARAM_T t3dNoiseCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_3D_DENOISE_PARAM_T<span class="token punctuation">;</span>

控制不同曝光增益下<span class="token number">3</span>d降噪强度
nPre3dLumaThres<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nPre3dLumaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nPre3dChromaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dMiddleFilterThres<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dPrevFrameMidFilter<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dCurFrameMidFilterThres<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dLowPassFilterVal<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dLumaThres<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dMinimumVal<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dLumaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nMain3dChromaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nPost3dEdgeThreshold<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nPost3dLumaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nPost3dChromaIntensity<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">255</span>
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
t2dNoiseCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="twdrparam" tabindex="-1"><a class="header-anchor" href="#twdrparam" aria-hidden="true">#</a> tWdrParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* WDR
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nLghtTh<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* Threshold of overexposure ratio [0] used for 3 frames mode; [1] used for 2 frames mode */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nFsTh<span class="token punctuation">;</span> <span class="token comment">/* threshold of WDR fusion */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nFsK<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* WDR image fusion handle value; [0] used for 3 frames mode; [1] used for 2 frames mode */</span>
<span class="token punctuation">}</span> _WDR_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _WDR_CTL_PARAM_T tWdrCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_WDR_PARAM_T<span class="token punctuation">;</span>

该模块暂时无效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tccmparam" tabindex="-1"><a class="header-anchor" href="#tccmparam" aria-hidden="true">#</a> tCcmParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* CCM
* follow awb gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nCtCcm<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* [0][0]: Rr [0][1]: Rg [0][2]: Rb; [1][0]: Gr [1][1]: Gg [1][2]: Gb; [2][0]: Br [2][0]: Bg [2][0]: Bb*/</span>
<span class="token punctuation">}</span> _CCM_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nRGain<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nBGain<span class="token punctuation">;</span>
    _CCM_CTL_PARAM_T tCcmCtlParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ISP_CCM_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    ISP_CCM_PARAM_T tCcmParam<span class="token punctuation">[</span>ADAPTIVE_CCM_TEMPERATURE_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_CCM_PARAM_T<span class="token punctuation">;</span>

不同色温下切换CCM
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nCtCcm<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">511</span>
nRGain、nBGain<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">1023</span><span class="token punctuation">,</span> 该组参数对应的wb rgain和bgain，
tCcmParam<span class="token punctuation">[</span>ADAPTIVE_CCM_TEMPERATURE_NUM<span class="token punctuation">]</span><span class="token operator">:</span> 当实际rgain和bgain的距离该组值最近时，对应的控制参数控制ISP，下发该组CCM矩阵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tawbparam" tabindex="-1"><a class="header-anchor" href="#tawbparam" aria-hidden="true">#</a> tAwbParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* AWB
* follow ae
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nRGain<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* [0]: Min; [1]: Max */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nBGain<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* [0]: Min; [1]: Max */</span>
<span class="token punctuation">}</span> _AWB_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _AWB_CTL_PARAM_T tAwbCtlParam<span class="token punctuation">[</span>ADAPTIVE_AE_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_AWB_PARAM_T<span class="token punctuation">;</span>

限制不同环境光下的AWB范围，避免颜色不准确或者较大偏差
nAdaptiveEnable： <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nRGain<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">1023</span>，控制参数，<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> rgain min， <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> rgain max
nBGain<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">1023</span>，控制参数，<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> bgain min， <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> bgain max
tAwbCtlParam<span class="token punctuation">[</span>ADAPTIVE_AE_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 五组参数，当实际曝光量达到某一区间时，使用AE曝光时间的索引对应的该组控制参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tgammaparam" tabindex="-1"><a class="header-anchor" href="#tgammaparam" aria-hidden="true">#</a> tGammaParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* GAMMA
* follow ae gain &amp; exposure
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nGammaCurve<span class="token punctuation">[</span>ADAPTIVE_GAMMA_CURVE_INDEX_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> _GAMMA_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nEtGamma<span class="token punctuation">;</span>
    <span class="token keyword">int</span> nGainGamma<span class="token punctuation">;</span>
    _GAMMA_CTL_PARAM_T tGammaCtlParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ISP_GAMMA_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    ISP_GAMMA_PARAM_T tGammaParam<span class="token punctuation">[</span>ADAPTIVE_GAMMA_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_GAMMA_PARAM_T<span class="token punctuation">;</span>

控制白天和夜晚的gamma曲线
nAdaptiveEnable<span class="token operator">:</span> <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nEtGamma、nGainGamma<span class="token operator">:</span> 需要达到该组控制条件的曝光时间（行数）和曝光增益，内部使用两个值的乘积
tGammaParam<span class="token punctuation">[</span>ADAPTIVE_GAMMA_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 两组控制参数，当曝光量小于第一组的et和gain的乘积时，将启用第一组，大于第二组的et和gain的乘积时将启用第二组控制
nGammaCurve<span class="token punctuation">[</span>ADAPTIVE_GAMMA_CURVE_INDEX_NUM<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">256</span>点gamma曲线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tircutparam" tabindex="-1"><a class="header-anchor" href="#tircutparam" aria-hidden="true">#</a> tIrCutParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* IR CUT
* follow ae gain &amp; exposure
* callback from user
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nHoldTime<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nIrCutMode<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _IR_CUT_CTL_PARAM<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nExposureTime<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nGain<span class="token punctuation">;</span>
    _IR_CUT_CTL_PARAM tIrCutCtlParam<span class="token punctuation">;</span>
    <span class="token keyword">int</span> nIrCutCtlMode<span class="token punctuation">;</span> <span class="token comment">// ir cut auto/manual ctl mode 0 / 1</span>
<span class="token punctuation">}</span> ISP_IR_CUT_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAutoSwitchEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    ISP_IR_CUT_PARAM_T tIrCutParam<span class="token punctuation">[</span>ADAPTIVE_IR_CUT_MODE_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_IR_CUT_PARAM_T<span class="token punctuation">;</span>

IR CUT切换模式控制
nAutoSwitchEnable<span class="token operator">:</span> <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nExposureTime、nGain<span class="token operator">:</span> 达到切换条件的曝光时间和增益，内部使用两个值的乘积
nIrCutCtlMode<span class="token operator">:</span> 控制IRCUT自动<span class="token operator">/</span>手动切换，<span class="token number">0</span> 手动模式， <span class="token number">1</span> 自动模式
nHoldTime<span class="token operator">:</span> 曝光量达某一组值的持续时间（帧数），超过该时间才被判定需要切换
nIrCutMode<span class="token operator">:</span> <span class="token number">0</span> 夜片， <span class="token number">1</span> 日片
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tsaturationparam" tabindex="-1"><a class="header-anchor" href="#tsaturationparam" aria-hidden="true">#</a> tSaturationParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* POST SATURATION
* follow ae gain
* need calc real saturation
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nSaturationCoeff<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _POST_SATURATION_CTL_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: enable */</span>
    _POST_SATURATION_CTL_PARAM_T tPostSaturationCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_POST_SATURATION_PARAM_T<span class="token punctuation">;</span>

饱和度升降控制
nAdaptiveEnable<span class="token operator">:</span> <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nSaturationCoeff<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">-</span><span class="token number">100</span>（<span class="token number">0</span><span class="token operator">%</span><span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span>），饱和度倍数系数，将按照默认最大饱和度进行百分比进行设置，<span class="token number">100</span>则饱和度为最大值，<span class="token number">50</span>则饱和度为最大值的一半
tPostSaturationCtlParam<span class="token punctuation">[</span>ADAPTIVE_GAIN_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 共五组，通过AE增益提供的索引，取对应的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tcolorgreyswitchparam" tabindex="-1"><a class="header-anchor" href="#tcolorgreyswitchparam" aria-hidden="true">#</a> tColorGreySwitchParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* COLOR BLACK WHITE MODE
* follow ae gain
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nSaturation<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _COLOR_GREY_CTL_PARAM<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> nExposureTime<span class="token punctuation">;</span>
    <span class="token keyword">int</span> nGain<span class="token punctuation">;</span>
    _COLOR_GREY_CTL_PARAM tColorGreyCsmCtlParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ISP_COLOR_GREY_SWITCH_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAutoSwitchEnable<span class="token punctuation">;</span>    <span class="token comment">/* 0: disable 1: saturation convert mode */</span>
    ISP_COLOR_GREY_SWITCH_PARAM_T tColorGreySwitchParam<span class="token punctuation">[</span>ADAPTIVE_COLOR_GREY_SWITCH_MODE_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_COLOR_GREY_SWITCH_PARAM_T<span class="token punctuation">;</span>

控制彩色黑白转换模式
nAutoSwitchEnable<span class="token operator">:</span> <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制，不需要切黑白模式时，默认置为<span class="token number">0</span>
nExposureTime、nGain<span class="token operator">:</span> 该组的曝光时间和增益条件，内部使用两值的乘积
tColorGreySwitchParam<span class="token punctuation">[</span>ADAPTIVE_COLOR_GREY_SWITCH_MODE_NUM<span class="token punctuation">]</span><span class="token operator">:</span> 两组参数，<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>为黑白模式参数，<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>为彩色模式参数，彩色模式已经由饱和度控制模块代替。当曝光量大于第一组参数的曝光乘积时，将使用第一组的控制参数控制ISP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tadaparam" tabindex="-1"><a class="header-anchor" href="#tadaparam" aria-hidden="true">#</a> tAdaParam</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
* ADA
* follow ae TO_CPU_Y_AV(gain &amp; et max ae lock)
*/</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaHistMax<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaTtlMax<span class="token punctuation">;</span>
<span class="token punctuation">}</span> _ADA_CTL_PARAM<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAeYEverage<span class="token punctuation">;</span>
    _ADA_CTL_PARAM tAdaCtlParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ISP_ADA_PARAM_T<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">short</span> nAdaptiveEnable<span class="token punctuation">;</span>
    ISP_ADA_PARAM_T tAdaParam<span class="token punctuation">[</span>ADAPTIVE_ADA_ROUTE_STEPS<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_ISP_ADA_PARAM_T<span class="token punctuation">;</span>

控制提升暗光环境下的亮度和对比度
nAdaptiveEnable<span class="token operator">:</span> <span class="token number">0</span> disable， <span class="token number">1</span> enable，控制此模块是否参与adaptive的控制
nAeYEverage<span class="token operator">:</span> 环境亮度条件值，当曝光量大等于tAeCtlParam最后一组曝光时间与gain的乘积后，该值生效
tAdaParam<span class="token punctuation">[</span>ADAPTIVE_ADA_ROUTE_STEPS<span class="token punctuation">]</span><span class="token operator">:</span> 五组参数，曝光达到最后一档，根据环境亮度条件，下发ada控制参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="示例imx219-f2k参数" tabindex="-1"><a class="header-anchor" href="#示例imx219-f2k参数" aria-hidden="true">#</a> 示例imx219 f2k参数</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> ADAPTIVE_ISP_PIPELINE_PARAM_T adap_imx219_f2k <span class="token operator">=</span>

<span class="token punctuation">{</span>
    <span class="token comment">/* fps */</span>
    <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    <span class="token comment">/* AE Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_AE_PARAM_T ae_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* nAntiFlickerSelect */</span>
        <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//0: disable 1: 50Hz 2: 60Hz</span>
        <span class="token comment">/* tAeParam */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">280</span><span class="token punctuation">,</span> <span class="token comment">// 6000lux</span>
                <span class="token comment">/* nExposureGain */</span>
                <span class="token number">512</span><span class="token punctuation">,</span>
                <span class="token comment">/* ae ctl */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAeYTarget */</span>
                    <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAeYTargetRange */</span>
                    <span class="token number">14</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">2630</span><span class="token punctuation">,</span> <span class="token comment">// 2500lux</span>
                <span class="token comment">/* nExposureGain */</span>
                <span class="token number">512</span><span class="token punctuation">,</span>
                <span class="token comment">/* ae ctl */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAeYTarget */</span>
                    <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAeYTargetRange */</span>
                    <span class="token number">14</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">12108</span><span class="token punctuation">,</span> <span class="token comment">// 400lux</span>
                <span class="token comment">/* nExposureGain */</span>
                <span class="token number">512</span><span class="token punctuation">,</span>
                <span class="token comment">/* ae ctl */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAeYTarget */</span>
                    <span class="token number">90</span><span class="token punctuation">,</span>
                    <span class="token comment">/* AE_YTarget_Range */</span>
                    <span class="token number">13</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">33333</span><span class="token punctuation">,</span> <span class="token comment">// 100lux</span>
                <span class="token comment">/* nExposureGain */</span>
                <span class="token number">1024</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAeYTarget */</span>
                    <span class="token number">80</span><span class="token punctuation">,</span>
                    <span class="token comment">/* AE_YTarget_Range */</span>
                    <span class="token number">11</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">33333</span><span class="token punctuation">,</span>
                <span class="token comment">/* nExposureGain */</span>
                <span class="token number">4095</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAeYTarget */</span>
                    <span class="token number">72</span><span class="token punctuation">,</span>
                    <span class="token comment">/* AE_YTarget_Range */</span>
                    <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">/* AE gain */</span>

    <span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">768</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">2048</span><span class="token punctuation">,</span> <span class="token number">4095</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* BLC Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_BLC_PARAM_T blc_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* blc param */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span><span class="token number">240</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span><span class="token number">240</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span><span class="token number">224</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span><span class="token number">224</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span><span class="token number">224</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* LSC Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_LSC_PARAM_T lsc_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* lsc param */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLscRedRatio */</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscGreenRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscBlueRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLscRedRatio */</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscGreenRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscBlueRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLscRedRatio */</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscGreenRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscBlueRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLscRedRatio */</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscGreenRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscBlueRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLscRedRatio */</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscGreenRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLscBlueRatio */</span>
                <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* SHARPNESS Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_SHARPNESS_PARAM_T sharpness_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* sharpness param */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nSharpnessCore */</span>
                <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessThres[2]; [0]: thres1 [1]: thres2 */</span>
                <span class="token punctuation">{</span><span class="token number">3840</span><span class="token punctuation">,</span> <span class="token number">4095</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessGain */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nSharpnessCore */</span>
                <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessThres[2]; [0]: thres1 [1]: thres2 */</span>
                <span class="token punctuation">{</span><span class="token number">3840</span><span class="token punctuation">,</span> <span class="token number">4095</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessGain */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nSharpnessCore */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessThres[2]; [0]: thres1 [1]: thres2 */</span>
                <span class="token punctuation">{</span><span class="token number">3840</span><span class="token punctuation">,</span> <span class="token number">4095</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessGain */</span>
                <span class="token number">56</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nSharpnessCore */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessThres[2]; [0]: thres1 [1]: thres2 */</span>
                <span class="token punctuation">{</span><span class="token number">3840</span><span class="token punctuation">,</span> <span class="token number">4095</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessGain */</span>
                <span class="token number">48</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nSharpnessCore */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessThres[2]; [0]: thres1 [1]: thres2 */</span>
                <span class="token punctuation">{</span><span class="token number">3840</span><span class="token punctuation">,</span> <span class="token number">4095</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nSharpnessGain */</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* LTM Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_LTM_PARAM_T ltm_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLtmGain */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLtmThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLtmGain */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLtmThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLtmGain */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLtmThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLtmGain */</span>
                <span class="token number">100</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLtmThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLtmGain */</span>
                <span class="token number">80</span><span class="token punctuation">,</span>
                <span class="token comment">/* nLtmThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* 2D NR Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_2D_DENOISE_PARAM_T nr2d_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* 2dnr */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRawDomainIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dAdjacentPixIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dEdgeIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dLumaIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dChromaIntensity */</span>
                <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRawDomainIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dAdjacentPixIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dEdgeIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dLumaIntensit */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dChromaIntensity */</span>
                <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRawDomainIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dAdjacentPixIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dEdgeIntensity */</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dLumaIntensit */</span>
                <span class="token number">48</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dChromaIntensity */</span>
                <span class="token number">160</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRawDomainIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dAdjacentPixIntensity */</span>
                <span class="token number">511</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dEdgeIntensity */</span>
                <span class="token number">48</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dLumaIntensit */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dChromaIntensity */</span>
                <span class="token number">255</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRawDomainIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dAdjacentPixIntensity */</span>
                <span class="token number">511</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dEdgeIntensity */</span>
                <span class="token number">48</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dLumaIntensit */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* n2dChromaIntensity */</span>
                <span class="token number">255</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* 3D NR Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_3D_DENOISE_PARAM_T nr3d_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* 3dnr */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nPre3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dChromaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMiddleFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dPrevFrameMidFilter */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dCurFrameMidFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLowPassFilterVal */</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMinimumVal */</span>
                <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dChromaIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dEdgeThreshold */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dChromaIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nPre3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dChromaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMiddleFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dPrevFrameMidFilter */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dCurFrameMidFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLowPassFilterVal */</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMinimumVal */</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dChromaIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dEdgeThreshold */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dChromaIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nPre3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dChromaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMiddleFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dPrevFrameMidFilter */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dCurFrameMidFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLowPassFilterVal */</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMinimumVal */</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dChromaIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dEdgeThreshold */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dChromaIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nPre3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dChromaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMiddleFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dPrevFrameMidFilter */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dCurFrameMidFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLowPassFilterVal */</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMinimumVal */</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dChromaIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dEdgeThreshold */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dChromaIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nPre3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPre3dChromaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMiddleFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dPrevFrameMidFilter */</span>
                <span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dCurFrameMidFilterThres */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLowPassFilterVal */</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaThres */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dMinimumVal */</span>
                <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dLumaIntensity */</span>
                <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token comment">/* nMain3dChromaIntensity */</span>
                <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dEdgeThreshold */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dLumaIntensity */</span>
                <span class="token number">64</span><span class="token punctuation">,</span>
                <span class="token comment">/* nPost3dChromaIntensity */</span>
                <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* WDR Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_WDR_PARAM_T wdr_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">/* wdr param */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLghtTh[2] */</span>
                <span class="token punctuation">{</span><span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsTh */</span>
                <span class="token number">192</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsK */</span>
                <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLghtTh[2] */</span>
                <span class="token punctuation">{</span><span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsTh */</span>
                <span class="token number">192</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsK */</span>
                <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLghtTh[2] */</span>
                <span class="token punctuation">{</span><span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsTh */</span>
                <span class="token number">192</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsK */</span>
                <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLghtTh[2] */</span>
                <span class="token punctuation">{</span><span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsTh */</span>
                <span class="token number">192</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsK */</span>
                <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nLghtTh[2] */</span>
                <span class="token punctuation">{</span><span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsTh */</span>
                <span class="token number">192</span><span class="token punctuation">,</span>
                <span class="token comment">/* nFsK */</span>
                <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* CCM Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_CCM_PARAM_T ccm_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* tCcmParam */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* A */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRGain */</span>
                <span class="token number">162</span><span class="token punctuation">,</span>
                <span class="token comment">/* nBGain */</span>
                <span class="token number">449</span><span class="token punctuation">,</span>
                <span class="token comment">/* tCcmCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nCtCcm[3][3] */</span>
                    <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span><span class="token number">311</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">62</span><span class="token punctuation">,</span> <span class="token number">343</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">142</span><span class="token punctuation">,</span> <span class="token number">414</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* U30 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRGain */</span>
                <span class="token number">156</span><span class="token punctuation">,</span>
                <span class="token comment">/* nBGain */</span>
                <span class="token number">458</span><span class="token punctuation">,</span>
                <span class="token comment">/* tCcmCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nCtCcm[3][3] */</span>
                    <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span><span class="token number">299</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">336</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">126</span><span class="token punctuation">,</span> <span class="token number">395</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* U35 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRGain */</span>
                <span class="token number">176</span><span class="token punctuation">,</span>
                <span class="token comment">/* nBGain */</span>
                <span class="token number">402</span><span class="token punctuation">,</span>
                <span class="token comment">/* tCcmCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nCtCcm[3][3] */</span>
                    <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span><span class="token number">287</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">328</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">376</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* TL84 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRGain */</span>
                <span class="token number">194</span><span class="token punctuation">,</span>
                <span class="token comment">/* nBGain */</span>
                <span class="token number">360</span><span class="token punctuation">,</span>
                <span class="token comment">/* tCcmCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nCtCcm[3][3] */</span>
                    <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span><span class="token number">259</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">332</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* D50 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRGain */</span>
                <span class="token number">234</span><span class="token punctuation">,</span>
                <span class="token comment">/* nBGain */</span>
                <span class="token number">299</span><span class="token punctuation">,</span>
                <span class="token comment">/* tCcmCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nCtCcm[3][3] */</span>
                    <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span><span class="token number">277</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">322</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* D65 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nRGain */</span>
                <span class="token number">257</span><span class="token punctuation">,</span>
                <span class="token comment">/* nBGain */</span>
                <span class="token number">269</span><span class="token punctuation">,</span>
                <span class="token comment">/* tCcmCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nCtCcm[3][3] */</span>
                    <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span><span class="token number">259</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">332</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* AWB */</span>

    <span class="token comment">// static ADAPTIVE_ISP_AWB_PARAM_T awb_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* awb param */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
            <span class="token comment">/* nRGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">194</span><span class="token punctuation">,</span> <span class="token number">247</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* nBGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">275</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
            <span class="token comment">/* nRGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">194</span><span class="token punctuation">,</span> <span class="token number">257</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* nBGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">269</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
            <span class="token comment">/* nRGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">162</span><span class="token punctuation">,</span> <span class="token number">257</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* nBGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">269</span><span class="token punctuation">,</span> <span class="token number">449</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
            <span class="token comment">/* nRGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">194</span><span class="token punctuation">,</span> <span class="token number">257</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* nBGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">269</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
            <span class="token comment">/* nRGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">194</span><span class="token punctuation">,</span> <span class="token number">257</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* nBGain[2]; [0]: Min [1]: Max */</span>
            <span class="token punctuation">{</span><span class="token number">269</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>

    <span class="token comment">/* GAMMA Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_GAMMA_PARAM_T gamma_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// if 1 affect ae stablization</span>
        <span class="token comment">/* tGammaParam */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* Day */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nEtGamma */</span>
                <span class="token number">33333</span><span class="token punctuation">,</span>
                <span class="token comment">/* nGainGamma */</span>
                <span class="token number">512</span><span class="token punctuation">,</span>
                <span class="token comment">/* tGammaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nGammaCurve */</span>
                    <span class="token punctuation">{</span>
                        <span class="token number">0x000</span><span class="token punctuation">,</span> <span class="token number">0xC05</span><span class="token punctuation">,</span> <span class="token number">0x80B</span><span class="token punctuation">,</span> <span class="token number">0x411</span><span class="token punctuation">,</span> <span class="token number">0xC16</span><span class="token punctuation">,</span> <span class="token number">0x01C</span><span class="token punctuation">,</span> <span class="token number">0x421</span><span class="token punctuation">,</span> <span class="token number">0x426</span><span class="token punctuation">,</span> <span class="token number">0x02B</span><span class="token punctuation">,</span> <span class="token number">0x82F</span><span class="token punctuation">,</span> <span class="token number">0xC33</span><span class="token punctuation">,</span> <span class="token number">0xC37</span><span class="token punctuation">,</span> <span class="token number">0x83B</span><span class="token punctuation">,</span> <span class="token number">0x03F</span><span class="token punctuation">,</span> <span class="token number">0x442</span><span class="token punctuation">,</span> <span class="token number">0x445</span><span class="token punctuation">,</span>
                        <span class="token number">0x048</span><span class="token punctuation">,</span> <span class="token number">0xC4A</span><span class="token punctuation">,</span> <span class="token number">0x44D</span><span class="token punctuation">,</span> <span class="token number">0xC4F</span><span class="token punctuation">,</span> <span class="token number">0x052</span><span class="token punctuation">,</span> <span class="token number">0x454</span><span class="token punctuation">,</span> <span class="token number">0x856</span><span class="token punctuation">,</span> <span class="token number">0x858</span><span class="token punctuation">,</span> <span class="token number">0x85A</span><span class="token punctuation">,</span> <span class="token number">0x85C</span><span class="token punctuation">,</span> <span class="token number">0x85E</span><span class="token punctuation">,</span> <span class="token number">0x860</span><span class="token punctuation">,</span> <span class="token number">0x862</span><span class="token punctuation">,</span> <span class="token number">0x864</span><span class="token punctuation">,</span> <span class="token number">0x466</span><span class="token punctuation">,</span> <span class="token number">0x068</span><span class="token punctuation">,</span>
                        <span class="token number">0xC69</span><span class="token punctuation">,</span> <span class="token number">0x86B</span><span class="token punctuation">,</span> <span class="token number">0x46D</span><span class="token punctuation">,</span> <span class="token number">0x06F</span><span class="token punctuation">,</span> <span class="token number">0xC70</span><span class="token punctuation">,</span> <span class="token number">0x872</span><span class="token punctuation">,</span> <span class="token number">0x074</span><span class="token punctuation">,</span> <span class="token number">0x875</span><span class="token punctuation">,</span> <span class="token number">0x077</span><span class="token punctuation">,</span> <span class="token number">0x878</span><span class="token punctuation">,</span> <span class="token number">0x07A</span><span class="token punctuation">,</span> <span class="token number">0x87B</span><span class="token punctuation">,</span> <span class="token number">0x07D</span><span class="token punctuation">,</span> <span class="token number">0x87E</span><span class="token punctuation">,</span> <span class="token number">0xC7F</span><span class="token punctuation">,</span> <span class="token number">0x081</span><span class="token punctuation">,</span>
                        <span class="token number">0x482</span><span class="token punctuation">,</span> <span class="token number">0x883</span><span class="token punctuation">,</span> <span class="token number">0xC84</span><span class="token punctuation">,</span> <span class="token number">0x086</span><span class="token punctuation">,</span> <span class="token number">0x487</span><span class="token punctuation">,</span> <span class="token number">0x888</span><span class="token punctuation">,</span> <span class="token number">0xC89</span><span class="token punctuation">,</span> <span class="token number">0x08B</span><span class="token punctuation">,</span> <span class="token number">0x48C</span><span class="token punctuation">,</span> <span class="token number">0x88D</span><span class="token punctuation">,</span> <span class="token number">0x88E</span><span class="token punctuation">,</span> <span class="token number">0x88F</span><span class="token punctuation">,</span> <span class="token number">0x890</span><span class="token punctuation">,</span> <span class="token number">0x891</span><span class="token punctuation">,</span> <span class="token number">0x892</span><span class="token punctuation">,</span> <span class="token number">0x893</span><span class="token punctuation">,</span>
                        <span class="token number">0x894</span><span class="token punctuation">,</span> <span class="token number">0x895</span><span class="token punctuation">,</span> <span class="token number">0x896</span><span class="token punctuation">,</span> <span class="token number">0x897</span><span class="token punctuation">,</span> <span class="token number">0x898</span><span class="token punctuation">,</span> <span class="token number">0x899</span><span class="token punctuation">,</span> <span class="token number">0x89A</span><span class="token punctuation">,</span> <span class="token number">0x89B</span><span class="token punctuation">,</span> <span class="token number">0x89C</span><span class="token punctuation">,</span> <span class="token number">0x89D</span><span class="token punctuation">,</span> <span class="token number">0x89E</span><span class="token punctuation">,</span> <span class="token number">0x49F</span><span class="token punctuation">,</span> <span class="token number">0x0A0</span><span class="token punctuation">,</span> <span class="token number">0xCA0</span><span class="token punctuation">,</span> <span class="token number">0x8A1</span><span class="token punctuation">,</span> <span class="token number">0x4A2</span><span class="token punctuation">,</span>
                        <span class="token number">0x0A3</span><span class="token punctuation">,</span> <span class="token number">0xCA3</span><span class="token punctuation">,</span> <span class="token number">0x8A4</span><span class="token punctuation">,</span> <span class="token number">0x4A5</span><span class="token punctuation">,</span> <span class="token number">0x0A6</span><span class="token punctuation">,</span> <span class="token number">0xCA6</span><span class="token punctuation">,</span> <span class="token number">0x8A7</span><span class="token punctuation">,</span> <span class="token number">0x4A8</span><span class="token punctuation">,</span> <span class="token number">0x0A9</span><span class="token punctuation">,</span> <span class="token number">0xCA9</span><span class="token punctuation">,</span> <span class="token number">0x8AA</span><span class="token punctuation">,</span> <span class="token number">0x4AB</span><span class="token punctuation">,</span> <span class="token number">0x0AC</span><span class="token punctuation">,</span> <span class="token number">0xCAC</span><span class="token punctuation">,</span> <span class="token number">0x8AD</span><span class="token punctuation">,</span> <span class="token number">0x4AE</span><span class="token punctuation">,</span>
                        <span class="token number">0x0AF</span><span class="token punctuation">,</span> <span class="token number">0xCAF</span><span class="token punctuation">,</span> <span class="token number">0x8B0</span><span class="token punctuation">,</span> <span class="token number">0x4B1</span><span class="token punctuation">,</span> <span class="token number">0x0B2</span><span class="token punctuation">,</span> <span class="token number">0xCB2</span><span class="token punctuation">,</span> <span class="token number">0x8B3</span><span class="token punctuation">,</span> <span class="token number">0x4B4</span><span class="token punctuation">,</span> <span class="token number">0x0B5</span><span class="token punctuation">,</span> <span class="token number">0xCB5</span><span class="token punctuation">,</span> <span class="token number">0x4B6</span><span class="token punctuation">,</span> <span class="token number">0xCB6</span><span class="token punctuation">,</span> <span class="token number">0x4B7</span><span class="token punctuation">,</span> <span class="token number">0xCB7</span><span class="token punctuation">,</span> <span class="token number">0x4B8</span><span class="token punctuation">,</span> <span class="token number">0xCB8</span><span class="token punctuation">,</span>
                        <span class="token number">0x4B9</span><span class="token punctuation">,</span> <span class="token number">0xCB9</span><span class="token punctuation">,</span> <span class="token number">0x4BA</span><span class="token punctuation">,</span> <span class="token number">0xCBA</span><span class="token punctuation">,</span> <span class="token number">0x4BB</span><span class="token punctuation">,</span> <span class="token number">0xCBB</span><span class="token punctuation">,</span> <span class="token number">0x4BC</span><span class="token punctuation">,</span> <span class="token number">0xCBC</span><span class="token punctuation">,</span> <span class="token number">0x4BD</span><span class="token punctuation">,</span> <span class="token number">0xCBD</span><span class="token punctuation">,</span> <span class="token number">0x4BE</span><span class="token punctuation">,</span> <span class="token number">0xCBE</span><span class="token punctuation">,</span> <span class="token number">0x4BF</span><span class="token punctuation">,</span> <span class="token number">0xCBF</span><span class="token punctuation">,</span> <span class="token number">0x4C0</span><span class="token punctuation">,</span> <span class="token number">0xCC0</span><span class="token punctuation">,</span>
                        <span class="token number">0x4C1</span><span class="token punctuation">,</span> <span class="token number">0xCC1</span><span class="token punctuation">,</span> <span class="token number">0x4C2</span><span class="token punctuation">,</span> <span class="token number">0xCC2</span><span class="token punctuation">,</span> <span class="token number">0x4C3</span><span class="token punctuation">,</span> <span class="token number">0xCC3</span><span class="token punctuation">,</span> <span class="token number">0x4C4</span><span class="token punctuation">,</span> <span class="token number">0xCC4</span><span class="token punctuation">,</span> <span class="token number">0x4C5</span><span class="token punctuation">,</span> <span class="token number">0xCC5</span><span class="token punctuation">,</span> <span class="token number">0x4C6</span><span class="token punctuation">,</span> <span class="token number">0xCC6</span><span class="token punctuation">,</span> <span class="token number">0x4C7</span><span class="token punctuation">,</span> <span class="token number">0xCC7</span><span class="token punctuation">,</span> <span class="token number">0x4C8</span><span class="token punctuation">,</span> <span class="token number">0xCC8</span><span class="token punctuation">,</span>
                        <span class="token number">0x4C9</span><span class="token punctuation">,</span> <span class="token number">0xCC9</span><span class="token punctuation">,</span> <span class="token number">0x4CA</span><span class="token punctuation">,</span> <span class="token number">0xCCA</span><span class="token punctuation">,</span> <span class="token number">0x4CB</span><span class="token punctuation">,</span> <span class="token number">0xCCB</span><span class="token punctuation">,</span> <span class="token number">0x4CC</span><span class="token punctuation">,</span> <span class="token number">0xCCC</span><span class="token punctuation">,</span> <span class="token number">0x4CD</span><span class="token punctuation">,</span> <span class="token number">0xCCD</span><span class="token punctuation">,</span> <span class="token number">0x4CE</span><span class="token punctuation">,</span> <span class="token number">0xCCE</span><span class="token punctuation">,</span> <span class="token number">0x4CF</span><span class="token punctuation">,</span> <span class="token number">0xCCF</span><span class="token punctuation">,</span> <span class="token number">0x4D0</span><span class="token punctuation">,</span> <span class="token number">0xCD0</span><span class="token punctuation">,</span>
                        <span class="token number">0x4D1</span><span class="token punctuation">,</span> <span class="token number">0xCD1</span><span class="token punctuation">,</span> <span class="token number">0x4D2</span><span class="token punctuation">,</span> <span class="token number">0xCD2</span><span class="token punctuation">,</span> <span class="token number">0x4D3</span><span class="token punctuation">,</span> <span class="token number">0xCD3</span><span class="token punctuation">,</span> <span class="token number">0x4D4</span><span class="token punctuation">,</span> <span class="token number">0xCD4</span><span class="token punctuation">,</span> <span class="token number">0x4D5</span><span class="token punctuation">,</span> <span class="token number">0xCD5</span><span class="token punctuation">,</span> <span class="token number">0x4D6</span><span class="token punctuation">,</span> <span class="token number">0xCD6</span><span class="token punctuation">,</span> <span class="token number">0x4D7</span><span class="token punctuation">,</span> <span class="token number">0xCD7</span><span class="token punctuation">,</span> <span class="token number">0x4D8</span><span class="token punctuation">,</span> <span class="token number">0xCD8</span><span class="token punctuation">,</span>
                        <span class="token number">0x4D9</span><span class="token punctuation">,</span> <span class="token number">0xCD9</span><span class="token punctuation">,</span> <span class="token number">0x4DA</span><span class="token punctuation">,</span> <span class="token number">0xCDA</span><span class="token punctuation">,</span> <span class="token number">0x4DB</span><span class="token punctuation">,</span> <span class="token number">0xCDB</span><span class="token punctuation">,</span> <span class="token number">0x4DC</span><span class="token punctuation">,</span> <span class="token number">0xCDC</span><span class="token punctuation">,</span> <span class="token number">0x4DD</span><span class="token punctuation">,</span> <span class="token number">0xCDD</span><span class="token punctuation">,</span> <span class="token number">0x4DE</span><span class="token punctuation">,</span> <span class="token number">0xCDE</span><span class="token punctuation">,</span> <span class="token number">0x4DF</span><span class="token punctuation">,</span> <span class="token number">0xCDF</span><span class="token punctuation">,</span> <span class="token number">0x4E0</span><span class="token punctuation">,</span> <span class="token number">0xCE0</span><span class="token punctuation">,</span>
                        <span class="token number">0x4E1</span><span class="token punctuation">,</span> <span class="token number">0xCE1</span><span class="token punctuation">,</span> <span class="token number">0x4E2</span><span class="token punctuation">,</span> <span class="token number">0xCE2</span><span class="token punctuation">,</span> <span class="token number">0x4E3</span><span class="token punctuation">,</span> <span class="token number">0xCE3</span><span class="token punctuation">,</span> <span class="token number">0x4E4</span><span class="token punctuation">,</span> <span class="token number">0xCE4</span><span class="token punctuation">,</span> <span class="token number">0x4E5</span><span class="token punctuation">,</span> <span class="token number">0xCE5</span><span class="token punctuation">,</span> <span class="token number">0x4E6</span><span class="token punctuation">,</span> <span class="token number">0xCE6</span><span class="token punctuation">,</span> <span class="token number">0x4E7</span><span class="token punctuation">,</span> <span class="token number">0xCE7</span><span class="token punctuation">,</span> <span class="token number">0x4E8</span><span class="token punctuation">,</span> <span class="token number">0xCE8</span><span class="token punctuation">,</span>
                        <span class="token number">0x4E9</span><span class="token punctuation">,</span> <span class="token number">0xCE9</span><span class="token punctuation">,</span> <span class="token number">0x4EA</span><span class="token punctuation">,</span> <span class="token number">0xCEA</span><span class="token punctuation">,</span> <span class="token number">0x4EB</span><span class="token punctuation">,</span> <span class="token number">0xCEB</span><span class="token punctuation">,</span> <span class="token number">0x4EC</span><span class="token punctuation">,</span> <span class="token number">0xCEC</span><span class="token punctuation">,</span> <span class="token number">0x4ED</span><span class="token punctuation">,</span> <span class="token number">0xCED</span><span class="token punctuation">,</span> <span class="token number">0x4EE</span><span class="token punctuation">,</span> <span class="token number">0xCEE</span><span class="token punctuation">,</span> <span class="token number">0x4EF</span><span class="token punctuation">,</span> <span class="token number">0xCEF</span><span class="token punctuation">,</span> <span class="token number">0x4F0</span><span class="token punctuation">,</span> <span class="token number">0xCF0</span><span class="token punctuation">,</span>
                        <span class="token number">0x4F1</span><span class="token punctuation">,</span> <span class="token number">0xCF1</span><span class="token punctuation">,</span> <span class="token number">0x4F2</span><span class="token punctuation">,</span> <span class="token number">0xCF2</span><span class="token punctuation">,</span> <span class="token number">0x4F3</span><span class="token punctuation">,</span> <span class="token number">0xCF3</span><span class="token punctuation">,</span> <span class="token number">0x4F4</span><span class="token punctuation">,</span> <span class="token number">0xCF4</span><span class="token punctuation">,</span> <span class="token number">0x4F5</span><span class="token punctuation">,</span> <span class="token number">0xCF5</span><span class="token punctuation">,</span> <span class="token number">0x4F6</span><span class="token punctuation">,</span> <span class="token number">0xCF6</span><span class="token punctuation">,</span> <span class="token number">0x4F7</span><span class="token punctuation">,</span> <span class="token number">0xCF7</span><span class="token punctuation">,</span> <span class="token number">0x4F8</span><span class="token punctuation">,</span> <span class="token number">0xCF8</span><span class="token punctuation">,</span>
                        <span class="token number">0x4F9</span><span class="token punctuation">,</span> <span class="token number">0xCF9</span><span class="token punctuation">,</span> <span class="token number">0x4FA</span><span class="token punctuation">,</span> <span class="token number">0xCFA</span><span class="token punctuation">,</span> <span class="token number">0x4FB</span><span class="token punctuation">,</span> <span class="token number">0xCFB</span><span class="token punctuation">,</span> <span class="token number">0x4FC</span><span class="token punctuation">,</span> <span class="token number">0xCFC</span><span class="token punctuation">,</span> <span class="token number">0x4FD</span><span class="token punctuation">,</span> <span class="token number">0xCFD</span><span class="token punctuation">,</span> <span class="token number">0x4FE</span><span class="token punctuation">,</span> <span class="token number">0xCFE</span><span class="token punctuation">,</span> <span class="token number">0x0FF</span><span class="token punctuation">,</span> <span class="token number">0x4FF</span><span class="token punctuation">,</span> <span class="token number">0x8FF</span><span class="token punctuation">,</span> <span class="token number">0xCFF</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* Night */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nEtGamma */</span>
                <span class="token number">33333</span><span class="token punctuation">,</span>
                <span class="token comment">/* nGainGamma */</span>
                <span class="token number">3072</span><span class="token punctuation">,</span>
                <span class="token comment">/* tGammaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nGammaCurve */</span>
                    <span class="token punctuation">{</span>
                        <span class="token number">0x001</span><span class="token punctuation">,</span> <span class="token number">0x814</span><span class="token punctuation">,</span> <span class="token number">0x41C</span><span class="token punctuation">,</span> <span class="token number">0x022</span><span class="token punctuation">,</span> <span class="token number">0xC26</span><span class="token punctuation">,</span> <span class="token number">0xC2A</span><span class="token punctuation">,</span> <span class="token number">0x82E</span><span class="token punctuation">,</span> <span class="token number">0xC31</span><span class="token punctuation">,</span> <span class="token number">0x035</span><span class="token punctuation">,</span> <span class="token number">0xC37</span><span class="token punctuation">,</span> <span class="token number">0x83A</span><span class="token punctuation">,</span> <span class="token number">0x43D</span><span class="token punctuation">,</span> <span class="token number">0xC3F</span><span class="token punctuation">,</span> <span class="token number">0x042</span><span class="token punctuation">,</span> <span class="token number">0x444</span><span class="token punctuation">,</span> <span class="token number">0x846</span><span class="token punctuation">,</span>
                        <span class="token number">0x848</span><span class="token punctuation">,</span> <span class="token number">0x84A</span><span class="token punctuation">,</span> <span class="token number">0x84C</span><span class="token punctuation">,</span> <span class="token number">0x84E</span><span class="token punctuation">,</span> <span class="token number">0x450</span><span class="token punctuation">,</span> <span class="token number">0x052</span><span class="token punctuation">,</span> <span class="token number">0xC53</span><span class="token punctuation">,</span> <span class="token number">0x855</span><span class="token punctuation">,</span> <span class="token number">0x457</span><span class="token punctuation">,</span> <span class="token number">0x059</span><span class="token punctuation">,</span> <span class="token number">0x85A</span><span class="token punctuation">,</span> <span class="token number">0x05C</span><span class="token punctuation">,</span> <span class="token number">0x85D</span><span class="token punctuation">,</span> <span class="token number">0x05F</span><span class="token punctuation">,</span> <span class="token number">0x860</span><span class="token punctuation">,</span> <span class="token number">0x062</span><span class="token punctuation">,</span>
                        <span class="token number">0x863</span><span class="token punctuation">,</span> <span class="token number">0x065</span><span class="token punctuation">,</span> <span class="token number">0x866</span><span class="token punctuation">,</span> <span class="token number">0xC67</span><span class="token punctuation">,</span> <span class="token number">0x069</span><span class="token punctuation">,</span> <span class="token number">0x46A</span><span class="token punctuation">,</span> <span class="token number">0x86B</span><span class="token punctuation">,</span> <span class="token number">0xC6C</span><span class="token punctuation">,</span> <span class="token number">0x06E</span><span class="token punctuation">,</span> <span class="token number">0x46F</span><span class="token punctuation">,</span> <span class="token number">0x870</span><span class="token punctuation">,</span> <span class="token number">0xC71</span><span class="token punctuation">,</span> <span class="token number">0x073</span><span class="token punctuation">,</span> <span class="token number">0x474</span><span class="token punctuation">,</span> <span class="token number">0x875</span><span class="token punctuation">,</span> <span class="token number">0xC76</span><span class="token punctuation">,</span>
                        <span class="token number">0x078</span><span class="token punctuation">,</span> <span class="token number">0x479</span><span class="token punctuation">,</span> <span class="token number">0x47A</span><span class="token punctuation">,</span> <span class="token number">0x47B</span><span class="token punctuation">,</span> <span class="token number">0x47C</span><span class="token punctuation">,</span> <span class="token number">0x47D</span><span class="token punctuation">,</span> <span class="token number">0x47E</span><span class="token punctuation">,</span> <span class="token number">0x47F</span><span class="token punctuation">,</span> <span class="token number">0x480</span><span class="token punctuation">,</span> <span class="token number">0x481</span><span class="token punctuation">,</span> <span class="token number">0x482</span><span class="token punctuation">,</span> <span class="token number">0x483</span><span class="token punctuation">,</span> <span class="token number">0x484</span><span class="token punctuation">,</span> <span class="token number">0x485</span><span class="token punctuation">,</span> <span class="token number">0x486</span><span class="token punctuation">,</span> <span class="token number">0x487</span><span class="token punctuation">,</span>
                        <span class="token number">0x488</span><span class="token punctuation">,</span> <span class="token number">0x489</span><span class="token punctuation">,</span> <span class="token number">0x48A</span><span class="token punctuation">,</span> <span class="token number">0x48B</span><span class="token punctuation">,</span> <span class="token number">0x48C</span><span class="token punctuation">,</span> <span class="token number">0x48D</span><span class="token punctuation">,</span> <span class="token number">0x48E</span><span class="token punctuation">,</span> <span class="token number">0x48F</span><span class="token punctuation">,</span> <span class="token number">0x490</span><span class="token punctuation">,</span> <span class="token number">0x491</span><span class="token punctuation">,</span> <span class="token number">0x492</span><span class="token punctuation">,</span> <span class="token number">0x493</span><span class="token punctuation">,</span> <span class="token number">0x494</span><span class="token punctuation">,</span> <span class="token number">0x495</span><span class="token punctuation">,</span> <span class="token number">0x496</span><span class="token punctuation">,</span> <span class="token number">0x497</span><span class="token punctuation">,</span>
                        <span class="token number">0x098</span><span class="token punctuation">,</span> <span class="token number">0xC98</span><span class="token punctuation">,</span> <span class="token number">0x899</span><span class="token punctuation">,</span> <span class="token number">0x49A</span><span class="token punctuation">,</span> <span class="token number">0x09B</span><span class="token punctuation">,</span> <span class="token number">0xC9B</span><span class="token punctuation">,</span> <span class="token number">0x89C</span><span class="token punctuation">,</span> <span class="token number">0x49D</span><span class="token punctuation">,</span> <span class="token number">0x09E</span><span class="token punctuation">,</span> <span class="token number">0xC9E</span><span class="token punctuation">,</span> <span class="token number">0x89F</span><span class="token punctuation">,</span> <span class="token number">0x4A0</span><span class="token punctuation">,</span> <span class="token number">0x0A1</span><span class="token punctuation">,</span> <span class="token number">0xCA1</span><span class="token punctuation">,</span> <span class="token number">0x8A2</span><span class="token punctuation">,</span> <span class="token number">0x4A3</span><span class="token punctuation">,</span>
                        <span class="token number">0x0A4</span><span class="token punctuation">,</span> <span class="token number">0xCA4</span><span class="token punctuation">,</span> <span class="token number">0x8A5</span><span class="token punctuation">,</span> <span class="token number">0x4A6</span><span class="token punctuation">,</span> <span class="token number">0x0A7</span><span class="token punctuation">,</span> <span class="token number">0xCA7</span><span class="token punctuation">,</span> <span class="token number">0x8A8</span><span class="token punctuation">,</span> <span class="token number">0x4A9</span><span class="token punctuation">,</span> <span class="token number">0x0AA</span><span class="token punctuation">,</span> <span class="token number">0xCAA</span><span class="token punctuation">,</span> <span class="token number">0x8AB</span><span class="token punctuation">,</span> <span class="token number">0x4AC</span><span class="token punctuation">,</span> <span class="token number">0x0AD</span><span class="token punctuation">,</span> <span class="token number">0xCAD</span><span class="token punctuation">,</span> <span class="token number">0x8AE</span><span class="token punctuation">,</span> <span class="token number">0x4AF</span><span class="token punctuation">,</span>
                        <span class="token number">0x0B0</span><span class="token punctuation">,</span> <span class="token number">0xCB0</span><span class="token punctuation">,</span> <span class="token number">0x8B1</span><span class="token punctuation">,</span> <span class="token number">0x4B2</span><span class="token punctuation">,</span> <span class="token number">0x0B3</span><span class="token punctuation">,</span> <span class="token number">0xCB3</span><span class="token punctuation">,</span> <span class="token number">0x8B4</span><span class="token punctuation">,</span> <span class="token number">0x4B5</span><span class="token punctuation">,</span> <span class="token number">0x0B6</span><span class="token punctuation">,</span> <span class="token number">0xCB6</span><span class="token punctuation">,</span> <span class="token number">0x8B7</span><span class="token punctuation">,</span> <span class="token number">0x4B8</span><span class="token punctuation">,</span> <span class="token number">0x0B9</span><span class="token punctuation">,</span> <span class="token number">0xCB9</span><span class="token punctuation">,</span> <span class="token number">0x8BA</span><span class="token punctuation">,</span> <span class="token number">0x4BB</span><span class="token punctuation">,</span>
                        <span class="token number">0x0BC</span><span class="token punctuation">,</span> <span class="token number">0xCBC</span><span class="token punctuation">,</span> <span class="token number">0x8BD</span><span class="token punctuation">,</span> <span class="token number">0x4BE</span><span class="token punctuation">,</span> <span class="token number">0x0BF</span><span class="token punctuation">,</span> <span class="token number">0xCBF</span><span class="token punctuation">,</span> <span class="token number">0x8C0</span><span class="token punctuation">,</span> <span class="token number">0x4C1</span><span class="token punctuation">,</span> <span class="token number">0x0C2</span><span class="token punctuation">,</span> <span class="token number">0xCC2</span><span class="token punctuation">,</span> <span class="token number">0x8C3</span><span class="token punctuation">,</span> <span class="token number">0x4C4</span><span class="token punctuation">,</span> <span class="token number">0x0C5</span><span class="token punctuation">,</span> <span class="token number">0xCC5</span><span class="token punctuation">,</span> <span class="token number">0x8C6</span><span class="token punctuation">,</span> <span class="token number">0x4C7</span><span class="token punctuation">,</span>
                        <span class="token number">0x0C8</span><span class="token punctuation">,</span> <span class="token number">0xCC8</span><span class="token punctuation">,</span> <span class="token number">0x8C9</span><span class="token punctuation">,</span> <span class="token number">0x4CA</span><span class="token punctuation">,</span> <span class="token number">0x0CB</span><span class="token punctuation">,</span> <span class="token number">0x8CB</span><span class="token punctuation">,</span> <span class="token number">0x0CC</span><span class="token punctuation">,</span> <span class="token number">0x8CC</span><span class="token punctuation">,</span> <span class="token number">0x0CD</span><span class="token punctuation">,</span> <span class="token number">0x8CD</span><span class="token punctuation">,</span> <span class="token number">0x0CE</span><span class="token punctuation">,</span> <span class="token number">0x8CE</span><span class="token punctuation">,</span> <span class="token number">0x0CF</span><span class="token punctuation">,</span> <span class="token number">0x8CF</span><span class="token punctuation">,</span> <span class="token number">0x0D0</span><span class="token punctuation">,</span> <span class="token number">0x8D0</span><span class="token punctuation">,</span>
                        <span class="token number">0x0D1</span><span class="token punctuation">,</span> <span class="token number">0x8D1</span><span class="token punctuation">,</span> <span class="token number">0x0D2</span><span class="token punctuation">,</span> <span class="token number">0x8D2</span><span class="token punctuation">,</span> <span class="token number">0x0D3</span><span class="token punctuation">,</span> <span class="token number">0x8D3</span><span class="token punctuation">,</span> <span class="token number">0x0D4</span><span class="token punctuation">,</span> <span class="token number">0x8D4</span><span class="token punctuation">,</span> <span class="token number">0x0D5</span><span class="token punctuation">,</span> <span class="token number">0x8D5</span><span class="token punctuation">,</span> <span class="token number">0x0D6</span><span class="token punctuation">,</span> <span class="token number">0x8D6</span><span class="token punctuation">,</span> <span class="token number">0x0D7</span><span class="token punctuation">,</span> <span class="token number">0x8D7</span><span class="token punctuation">,</span> <span class="token number">0x0D8</span><span class="token punctuation">,</span> <span class="token number">0x8D8</span><span class="token punctuation">,</span>
                        <span class="token number">0x0D9</span><span class="token punctuation">,</span> <span class="token number">0x8D9</span><span class="token punctuation">,</span> <span class="token number">0x0DA</span><span class="token punctuation">,</span> <span class="token number">0x8DA</span><span class="token punctuation">,</span> <span class="token number">0x0DB</span><span class="token punctuation">,</span> <span class="token number">0x8DB</span><span class="token punctuation">,</span> <span class="token number">0x0DC</span><span class="token punctuation">,</span> <span class="token number">0x8DC</span><span class="token punctuation">,</span> <span class="token number">0x0DD</span><span class="token punctuation">,</span> <span class="token number">0x8DD</span><span class="token punctuation">,</span> <span class="token number">0x0DE</span><span class="token punctuation">,</span> <span class="token number">0x8DE</span><span class="token punctuation">,</span> <span class="token number">0x0DF</span><span class="token punctuation">,</span> <span class="token number">0x8DF</span><span class="token punctuation">,</span> <span class="token number">0x0E0</span><span class="token punctuation">,</span> <span class="token number">0x8E0</span><span class="token punctuation">,</span>
                        <span class="token number">0x0E1</span><span class="token punctuation">,</span> <span class="token number">0x8E1</span><span class="token punctuation">,</span> <span class="token number">0x0E2</span><span class="token punctuation">,</span> <span class="token number">0x8E2</span><span class="token punctuation">,</span> <span class="token number">0x0E3</span><span class="token punctuation">,</span> <span class="token number">0x8E3</span><span class="token punctuation">,</span> <span class="token number">0x0E4</span><span class="token punctuation">,</span> <span class="token number">0x8E4</span><span class="token punctuation">,</span> <span class="token number">0x0E5</span><span class="token punctuation">,</span> <span class="token number">0x8E5</span><span class="token punctuation">,</span> <span class="token number">0x0E6</span><span class="token punctuation">,</span> <span class="token number">0x8E6</span><span class="token punctuation">,</span> <span class="token number">0x0E7</span><span class="token punctuation">,</span> <span class="token number">0x8E7</span><span class="token punctuation">,</span> <span class="token number">0x0E8</span><span class="token punctuation">,</span> <span class="token number">0x8E8</span><span class="token punctuation">,</span>
                        <span class="token number">0x0E9</span><span class="token punctuation">,</span> <span class="token number">0x8E9</span><span class="token punctuation">,</span> <span class="token number">0x0EA</span><span class="token punctuation">,</span> <span class="token number">0x8EA</span><span class="token punctuation">,</span> <span class="token number">0x0EB</span><span class="token punctuation">,</span> <span class="token number">0x8EB</span><span class="token punctuation">,</span> <span class="token number">0x0EC</span><span class="token punctuation">,</span> <span class="token number">0x8EC</span><span class="token punctuation">,</span> <span class="token number">0x0ED</span><span class="token punctuation">,</span> <span class="token number">0x8ED</span><span class="token punctuation">,</span> <span class="token number">0x0EE</span><span class="token punctuation">,</span> <span class="token number">0x8EE</span><span class="token punctuation">,</span> <span class="token number">0x0EF</span><span class="token punctuation">,</span> <span class="token number">0x8EF</span><span class="token punctuation">,</span> <span class="token number">0x0F0</span><span class="token punctuation">,</span> <span class="token number">0x8F0</span><span class="token punctuation">,</span>
                        <span class="token number">0x0F1</span><span class="token punctuation">,</span> <span class="token number">0x8F1</span><span class="token punctuation">,</span> <span class="token number">0x0F2</span><span class="token punctuation">,</span> <span class="token number">0x8F2</span><span class="token punctuation">,</span> <span class="token number">0x0F3</span><span class="token punctuation">,</span> <span class="token number">0x8F3</span><span class="token punctuation">,</span> <span class="token number">0x0F4</span><span class="token punctuation">,</span> <span class="token number">0x8F4</span><span class="token punctuation">,</span> <span class="token number">0x0F5</span><span class="token punctuation">,</span> <span class="token number">0x8F5</span><span class="token punctuation">,</span> <span class="token number">0x0F6</span><span class="token punctuation">,</span> <span class="token number">0x8F6</span><span class="token punctuation">,</span> <span class="token number">0x0F7</span><span class="token punctuation">,</span> <span class="token number">0x8F7</span><span class="token punctuation">,</span> <span class="token number">0x0F8</span><span class="token punctuation">,</span> <span class="token number">0x8F8</span><span class="token punctuation">,</span>
                        <span class="token number">0x0F9</span><span class="token punctuation">,</span> <span class="token number">0x8F9</span><span class="token punctuation">,</span> <span class="token number">0x0FA</span><span class="token punctuation">,</span> <span class="token number">0x8FA</span><span class="token punctuation">,</span> <span class="token number">0x0FB</span><span class="token punctuation">,</span> <span class="token number">0x8FB</span><span class="token punctuation">,</span> <span class="token number">0x0FC</span><span class="token punctuation">,</span> <span class="token number">0x8FC</span><span class="token punctuation">,</span> <span class="token number">0x0FD</span><span class="token punctuation">,</span> <span class="token number">0x8FD</span><span class="token punctuation">,</span> <span class="token number">0x0FE</span><span class="token punctuation">,</span> <span class="token number">0x8FE</span><span class="token punctuation">,</span> <span class="token number">0x0FF</span><span class="token punctuation">,</span> <span class="token number">0x4FF</span><span class="token punctuation">,</span> <span class="token number">0x8FF</span><span class="token punctuation">,</span> <span class="token number">0xCFF</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">// static ADAPTIVE_ISP_IR_CUT_PARAM_T ir_cut_param = {</span>
        <span class="token comment">/* nAutoSwitchEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* tIrCutParam */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* Day2Night */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">30000</span><span class="token punctuation">,</span>
                <span class="token comment">/* nGain */</span>
                <span class="token number">2048</span><span class="token punctuation">,</span>
                <span class="token comment">/* tIrCutCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nHoldTime */</span>
                    <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nIrCutMode */</span>
                    <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* Night2Day */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">20000</span><span class="token punctuation">,</span>
                <span class="token comment">/* nGain */</span>
                <span class="token number">512</span><span class="token punctuation">,</span>
                <span class="token comment">/* tIrCutCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nHoldTime */</span>
                    <span class="token number">120</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nIrCutMode */</span>
                    <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* POST SATURATION Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_POST_SATURATION_PARAM_T saturation_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">/* post saturation param */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span><span class="token number">90</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* Color Black White Mode Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_COLOR_GREY_SWI2CH_PARAM_T color_grey_switch_param = {</span>
        <span class="token comment">/* nAutoSwitchEnable  */</span>
        <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// use csm mode</span>
        <span class="token comment">/* tColorGreySwitchParam */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* Color2BW */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">33333</span><span class="token punctuation">,</span>
                <span class="token comment">/* nGain */</span>
                <span class="token number">4095</span><span class="token punctuation">,</span>
                <span class="token comment">/* tColorGreyCsmCtlParam*/</span>
                <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* BW2Color */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nExposureTime */</span>
                <span class="token number">33333</span><span class="token punctuation">,</span>
                <span class="token comment">/* nGain */</span>
                <span class="token number">1536</span><span class="token punctuation">,</span>
                <span class="token comment">/* tColorGreyCsmCtlParam*/</span>
                <span class="token punctuation">{</span><span class="token number">255</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
    <span class="token comment">/* ADA Parameters */</span>

    <span class="token comment">// static ADAPTIVE_ISP_ADA_PARAM_T ada_param = {</span>
        <span class="token comment">/* nAdaptiveEnable */</span>
        <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 1: enable, 0: disable</span>
        <span class="token comment">/* tAdaParam */</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* 0 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nAeYEverage */</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token comment">/* tAdaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAdaHistMax */</span>
                    <span class="token number">128</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAdaTtlMax */</span>
                    <span class="token number">255</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 1 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nAeYEverage */</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token comment">/* tAdaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAdaHistMax */</span>
                    <span class="token number">128</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAdaTtlMax */</span>
                    <span class="token number">200</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 2 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nAeYEverage */</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token comment">/* tAdaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAdaHistMax */</span>
                    <span class="token number">128</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAdaTtlMax */</span>
                    <span class="token number">128</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 3 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nAeYEverage */</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token comment">/* tAdaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAdaHistMax */</span>
                    <span class="token number">128</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAdaTtlMax */</span>
                    <span class="token number">100</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">/* 4 */</span>
            <span class="token punctuation">{</span>
                <span class="token comment">/* nAeYEverage */</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token comment">/* tAdaCtlParam */</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">/* nAdaHistMax */</span>
                    <span class="token number">128</span><span class="token punctuation">,</span>
                    <span class="token comment">/* nAdaTtlMax */</span>
                    <span class="token number">90</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// };</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

参数以头文件形式保存在sensor_params<span class="token operator">/</span>imx219<span class="token operator">/</span>adaptive_imx219_f2k<span class="token punctuation">.</span>h中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-加载参数" tabindex="-1"><a class="header-anchor" href="#_1-2-加载参数" aria-hidden="true">#</a> 1.2 加载参数</h3><h4 id="◆-adaptive-sensor-name" tabindex="-1"><a class="header-anchor" href="#◆-adaptive-sensor-name" aria-hidden="true">#</a> ◆ adaptive_sensor_name</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span> cSensor0Name<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span> cSensor1Name<span class="token punctuation">;</span>
    ADAPTIVE_ISP_PIPELINE_PARAM_T <span class="token operator">*</span> tAdapIspParamF2k<span class="token punctuation">;</span>
    ADAPTIVE_ISP_PIPELINE_PARAM_T <span class="token operator">*</span> tAdapIspParamR2k<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ADAPTIVE_SENSOR_NAME_T<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入调试的参数文件，存放路径以IMX219为例，sensor_params/imx219/adaptive_imx219_f2k.h与sensor_params/imx219/adaptive_imx219_r2k.h，按要求赋值给adaptive_sensor_name结构体数组的成员中。</p><h5 id="成员" tabindex="-1"><a class="header-anchor" href="#成员" aria-hidden="true">#</a> 成员</h5><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>cSensor0Name<span class="token operator">:</span> sensor0的设备名称，对应pipeline0
cSensor1Name<span class="token operator">:</span> sensor1的设备名称，对应pipeline1
tAdapIspParamF2k<span class="token operator">:</span> pipeline0使用的adaptive参数
tAdapIspParamR2k<span class="token operator">:</span> pipeline1使用的adaptive参数

具体使用方法如下<span class="token operator">:</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;sensor_params/imx219/adaptive_imx219_f2k.h&quot;</span><span class="token expression">\`</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;sensor_params/imx219/adaptive_imx219_r2k.h&quot;</span><span class="token expression">\`</span></span>
ADAPTIVE_SENSOR_NAME_T adaptive_sensor_name<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span>
<span class="token punctuation">{</span>
    <span class="token comment">// imx219</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">.</span>cSensor0Name <span class="token operator">=</span> <span class="token string">&quot;m00_f_imx219_0 0-0010&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span>cSensor1Name <span class="token operator">=</span> <span class="token string">&quot;m01_f_imx219_1 3-0010&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span>tAdapIspParamF2k <span class="token operator">=</span> <span class="token operator">&amp;</span>adap_imx219_f2k<span class="token punctuation">,</span>
        <span class="token punctuation">.</span>tAdapIspParamR2k <span class="token operator">=</span> <span class="token operator">&amp;</span>adap_imx219_r2k<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// imx385</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">.</span>cSensor0Name <span class="token operator">=</span> <span class="token string">&quot;m00_f_imx385_0 0-0010&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span>cSensor1Name <span class="token operator">=</span> <span class="token string">&quot;m01_f_imx385_1 3-0010&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span>tAdapIspParamF2k <span class="token operator">=</span> <span class="token operator">&amp;</span>adap_imx385_f2k<span class="token punctuation">,</span>
        <span class="token punctuation">.</span>tAdapIspParamR2k <span class="token operator">=</span> <span class="token operator">&amp;</span>adap_imx385_r2k<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
按照定义添加新的数组成员，不同sensor顺序部分先后，没有对应sensor的调试参数时，adaptive将自动关闭功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),c=[t];function i(l,o){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","04-ISP_Adaptive_Tuning_Guides.html.vue"]]);export{d as default};
