import{_ as t,r as a,o as l,c as d,d as e,w as o,b as n,a as p,e as s}from"./app-21fd3c9b.js";const u={},r=s('<h1 id="dsp核开发指南" tabindex="-1"><a class="header-anchor" href="#dsp核开发指南" aria-hidden="true">#</a> DSP核开发指南</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1 概述</h2><p>K510芯片中一共有三个处理器，其中CPU Dual cores运行Linux，DSP核空闲留待用户开发使用，本文档提供了DSP核作为协处理器运行裸机程序的参考例程。</p><p><img src="http://photos.100ask.net/canaan-docs/image-dsp_1.png" alt=""></p>',4),v=s(`<h2 id="_1-dsp-程序加载" tabindex="-1"><a class="header-anchor" href="#_1-dsp-程序加载" aria-hidden="true">#</a> 1 DSP 程序加载</h2><p>k510_buildroot/package/dsp_app_new 目录下，是加载DSP并使之运行的代码，该代码运行于Linux用户空间。dsp_app_new代码主要实现加载DSP固件到指定位置，并启动DSP开始执行，其主要的代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*将DSP固件从pDspBinmPath路径下加载到DspRestVector位置。*/</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">kendryte_dsp_load_bin</span><span class="token punctuation">(</span>DspRestVector<span class="token punctuation">,</span> pDspBinmPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ERR: Load dsp bin file err\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Load dsp success\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*启动DspRestVector位置处的DSP固件运行。*/</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">kendryte_dsp_boot</span><span class="token punctuation">(</span>DspRestVector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ERR: Boot dsp err\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dsp_app_new编译后的可执行程序将存放在根文件系统/app/dsp_app_new目录下。</p><h2 id="_2-dsp-信息打印" tabindex="-1"><a class="header-anchor" href="#_2-dsp-信息打印" aria-hidden="true">#</a> 2 DSP 信息打印</h2><p>k510_buildroot/package/dsp_log 目录下，是查询是否DSP核是否有Log输出的代码，该代码运行于 Linux用户空间。dsp_log 编译后的可执行程序将存放在根文件系统/app/dsp_log目录下。</p><p>开机后，dsp_log默认将在后台执行，其配置文件在：k510_buildroot/board/canaan/k510/k510_rootfs_skeleton/etc/init.d/rc.sysinit</p><p><img src="http://photos.100ask.net/canaan-docs/image-dsp_log.png" alt=""></p><h2 id="_3-dsp-裸机demo" tabindex="-1"><a class="header-anchor" href="#_3-dsp-裸机demo" aria-hidden="true">#</a> 3 DSP 裸机Demo</h2><h3 id="_3-1-fft" tabindex="-1"><a class="header-anchor" href="#_3-1-fft" aria-hidden="true">#</a> 3.1 fft</h3><p>fft demo 程序位于<code>/app/dsp_app_new/fft.bin</code>。 fft demo 程序源码放在<code>k510_buildroot/package/k510_evb_test/src/test/fft</code>目录下。</p><p>进入 /app/dsp_app_new\`目录下：</p><ul><li><code>dsp_app</code>：加载DSP并使得dsp运行的程序（运行于Linux 用户空间）</li><li><code>fft.bin</code>: DSP 裸机程序</li></ul><p>启动 fft 程序运行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/dsp_app_new
./dsp_app fft.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到如下打印：</p><p><img src="http://photos.100ask.net/canaan-docs/demo_dsp.png" alt="DSP Demo"></p><p>现在dsp上运行的firmware是fft的demo程序。</p><h3 id="_3-2-simd-umul8" tabindex="-1"><a class="header-anchor" href="#_3-2-simd-umul8" aria-hidden="true">#</a> 3.2 simd_umul8</h3><p>simd_umul8 demo 程序位于<code>/app/dsp_app_new/simd_umul8_demo.bin</code>。 simd_umul8 demo 程序源码放在<code>k510_buildroot/package/k510_evb_test/src/test/simd_umul8_demo</code>目录下，所做的主要工作如下：</p><ul><li>在 demo 中让两个 32 位的数据&quot;相乘”，即将每个 32 位的数据分成 4 个 8 位的数据，然后分别对应相乘，得到 4 个 16 位的结果，检查计算结果是否符合预期。例如，0x05050505 与 0x02020202 “相乘”后的结果为 0x000a000a000a000a。</li><li>如果符合预期，打印信息<code>DSP SIMD UMUL8 TEST PASS</code>，否则打印信息<code>DSP SIMD UMUL8 TEST FAIL</code>.</li></ul><p>运行 demo 的方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/dsp_app_new
./dsp_app simd_umul8_demo.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),k={href:"http://www.andestech.com/en/products-solutions/product-documentation/",target:"_blank",rel:"noopener noreferrer"},m=s(`<h3 id="_3-3-dsp-scheduler-api" tabindex="-1"><a class="header-anchor" href="#_3-3-dsp-scheduler-api" aria-hidden="true">#</a> 3.3 DSP Scheduler API</h3><p>当cpu性能不能满足一些应用的时候，可以分割一部分功能运行到DSP上，以减轻cpu负载。DSP上没有操作系统，因此实现了一个任务调度管理器，代码在k510_buildroot/package/dsp_scheduler目录下。在DSP上运行的任务编译成静态库，预先和DSP scheduler静态链接在一起，运行时cpu通过mailbox向dsp发送消息启动相应的任务运行。</p><p>用户在注册任务的时候可以定义优先级，DSP scheduler根据优先级进行任务调度。任务运行接口run函数的返回值决定是RUN_ONCE还是CONTINUE_RUN，这样用户能自己决定任务的执行次数。</p><p>cpu如何通过linux mailbox框架给dsp发消息，请参考文档K510_Mailbox_Developer_Guides里的相应介绍。参考实现在k510_buildroot/package/k510_evb_test/src/test/mailbox_demo/cpu2dsp_task_demo.c</p><h4 id="_3-3-1-头文件说明" tabindex="-1"><a class="header-anchor" href="#_3-3-1-头文件说明" aria-hidden="true">#</a> 3.3.1 头文件说明</h4><ol><li><p>k510_buildroot/package/dsp_scheduler/src/dsp_tasks.h</p><p>cpu上运行的程序需要include此头文件，此头文件里定义了cpu和dsp之间的消息类型和结构，系统消息通信采用一问一答的方式，cpu发完消息后要等到dsp发来的相同消息表明dsp处理完毕。用户消息可以根据需要自行定义机制。消息含义如下：</p><ul><li>DSP_TASK_ENABLE</li></ul><p>相应的任务开始运行，此消息可以跟随一个内存地址，用于dsp上任务打印调试信息</p><ul><li>DSP_TASK_DISABLE</li></ul><p>相应的任务停止运行</p><ul><li>DSP_TASK_PRINT_INFO</li></ul><p>打印所有已经注册的任务信息</p><ul><li>DSP_TASK_USER_MSG</li></ul><p>用户自定义的任务消息，此消息跟随一个内存地址，用户可根据需要自行设计消息队列和消息通信机制</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">enum</span>
<span class="token punctuation">{</span>
    DSP_TASK_ENABLE <span class="token operator">=</span> <span class="token number">0x10000000</span><span class="token punctuation">,</span>
    DSP_TASK_DISABLE<span class="token punctuation">,</span>
    DSP_TASK_PRINT_INFO<span class="token punctuation">,</span>
    DSP_TASK_USER_MSG<span class="token punctuation">,</span>
    MAX_NUM_DSP_TASK_MSG
<span class="token punctuation">}</span> DspTaskMsg<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">tDSP_MESSAGE</span>
<span class="token punctuation">{</span>
    DspTaskMsg      msgId<span class="token punctuation">;</span>         <span class="token comment">/**&lt;Message ID*/</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span>    msg_phyAddr<span class="token punctuation">;</span>   <span class="token comment">/**&lt;Message content, shared memory physical address
                                    when msgId is DSP_TASK_ENABLE, it is
                                    buffer address for print log
                                */</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span>    len<span class="token punctuation">;</span>           <span class="token comment">/**&lt;Length of message*/</span>
<span class="token punctuation">}</span> DSP_MESSAGE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>k510_buildroot/package/dsp_scheduler/src/scheduler.h dsp上运行的程序需要include此头文件</p></li></ol><h4 id="_3-3-2-api函数说明" tabindex="-1"><a class="header-anchor" href="#_3-3-2-api函数说明" aria-hidden="true">#</a> 3.3.2 API函数说明</h4><h5 id="_3-3-2-1-sche-taskregister" tabindex="-1"><a class="header-anchor" href="#_3-3-2-1-sche-taskregister" aria-hidden="true">#</a> 3.3.2.1 SCHE_TaskRegister</h5><p>【描述】</p><p>注册一个任务。DSP上最多能注册8个任务，每个任务通过一个mailbox通道和cpu进行通信。Task 0对应的mailbox通道号是0，DSP_TASK_0_CH对应于cpu mailbox的MBOX_CHAN_0_TX，以此类推。</p><p>实现如下的task结构体</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>DSP_TASK dsp_sample_task <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>name             <span class="token operator">=</span> <span class="token string">&quot;sample task&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>priority         <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>init             <span class="token operator">=</span> sample_task_init<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>deinit           <span class="token operator">=</span> sample_task_deinit<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>run              <span class="token operator">=</span> sample_task_run<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>rev_callback     <span class="token operator">=</span> sample_task_callback<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>ack_callback     <span class="token operator">=</span> sample_ack_callback<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在k510_buildroot/package/dsp_scheduler/alltasks.c里，进行任务注册，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token punctuation">{</span>
    <span class="token keyword">extern</span> DSP_TASK dsp_sample_task<span class="token punctuation">;</span>
    <span class="token function">SCHE_TaskRegister</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>dsp_sample_task<span class="token punctuation">,</span> DSP_TASK_0_CH<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【语法】</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ScheStatus <span class="token function">SCHE_TaskRegister</span><span class="token punctuation">(</span>DSP_TASK <span class="token operator">*</span>task<span class="token punctuation">,</span> DspTaskChannel ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【参数】</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">enum</span>
<span class="token punctuation">{</span>
    DSP_TASK_0_CH <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    DSP_TASK_1_CH<span class="token punctuation">,</span>
    DSP_TASK_2_CH<span class="token punctuation">,</span>
    DSP_TASK_3_CH<span class="token punctuation">,</span>
    DSP_TASK_4_CH<span class="token punctuation">,</span>
    DSP_TASK_5_CH<span class="token punctuation">,</span>
    DSP_TASK_6_CH<span class="token punctuation">,</span>
    DSP_TASK_7_CH<span class="token punctuation">,</span>
    MAX_NUM_DSP_TASKS
<span class="token punctuation">}</span> DspTaskChannel<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">enum</span>
<span class="token punctuation">{</span>
    SCHE_RUN_ONCE <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    SCHE_CONTINUE_RUN <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>ScheRunType<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DSP_TASK</span>
<span class="token punctuation">{</span>
    <span class="token comment">/**task name*/</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>

    <span class="token comment">/**priority 0 to 255, 0 is the highest*/</span>
    <span class="token keyword">int</span> priority<span class="token punctuation">;</span>

    <span class="token comment">/**init function
       return task context pointer
    */</span>
    <span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>init<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**deinit function*/</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>deinit<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**task process function
       return 0 means run once
       return 1 means conitune run
    */</span>
    <span class="token function">ScheRunType</span> <span class="token punctuation">(</span><span class="token operator">*</span>run<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**ISR callback
       for receiving msg from cpu
    */</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>rev_callback<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**ISR callback
       for ack msg from cpu after dsp send msg to cpu
    */</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>ack_callback<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> DSP_TASK<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-2-sche-sendmessage" tabindex="-1"><a class="header-anchor" href="#_3-2-2-sche-sendmessage" aria-hidden="true">#</a> 3.2.2 SCHE_SendMessage</h5><p>【描述】</p><p>dsp上的任务通过此接口给cpu发消息</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ScheStatus <span class="token function">SCHE_SendMessage</span><span class="token punctuation">(</span>DSP_MESSAGE <span class="token operator">*</span>pMsg<span class="token punctuation">,</span> DspTaskChannel ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【参数】</p><p>参见章节3.3.1里的说明</p><h5 id="_3-2-3-sche-getmessage" tabindex="-1"><a class="header-anchor" href="#_3-2-3-sche-getmessage" aria-hidden="true">#</a> 3.2.3 SCHE_GetMessage</h5><p>【描述】</p><p>dsp上的任务通过此接口接收来自cpu的消息</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>ScheStatus <span class="token function">SCHE_GetMessage</span><span class="token punctuation">(</span>DSP_MESSAGE <span class="token operator">*</span>pMsg<span class="token punctuation">,</span> DspTaskChannel ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【参数】</p><p>参见章节3.3.1里的说明</p><h4 id="_3-3-3-dsp-scheduler应用实列" tabindex="-1"><a class="header-anchor" href="#_3-3-3-dsp-scheduler应用实列" aria-hidden="true">#</a> 3.3.3 DSP Scheduler应用实列</h4><p>运行如下命令加载任务调度裸机程序dsp scheduler：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/dsp_app_new
./dsp_app <span class="token punctuation">..</span>/dsp_scheduler/scheduler.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在shell窗口能看到如下log，表明dsp scheduler加载成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dsp schduler start
dsp schduler: register sample task successful, ch 0
dsp schduler: register audio3a task successful, ch 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入/app/mailbox_demo目录，输入如下命令，cpu会发命令给dsp启动一个任务，并且发送处理数据的请求，dsp处理完成会发消息通知cpu，这样一直循环。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/mailbox_demo
/app/mailbox_demo/cpu2dsp_task_demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看到如下log，说明dsp运行cpu指定的任务成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@canaan ~/data <span class="token punctuation">]</span>$ ./cpu2dsp_task_demo
task <span class="token number">0</span> message buffer: vaddr 0x18000, phyAddr 0x1fdff000, size <span class="token number">4096</span>
task <span class="token number">0</span> print buffer: vaddr 0x18000, phyAddr 0x1fdfd000, size <span class="token number">4096</span>
task <span class="token number">0</span> src buffer: vaddr 0x14d000, phyAddr 0x1fdfb000, size <span class="token number">4096</span>
task <span class="token number">0</span> dst buffer: vaddr 0x14e000, phyAddr 0x1fdf9000, size <span class="token number">4096</span>
printc_init<span class="token operator">&gt;</span>log_id <span class="token number">0</span>, cur_addr 0x1fdfd000, log_len <span class="token number">4096</span>
dsp process_command<span class="token operator">&gt;</span>task <span class="token number">0</span>: init <span class="token keyword">done</span>
task <span class="token number">0</span> is enabled
cpu send PROCESS_START
cpu receive PROCESS_END
cpu send PROCESS_START
cpu receive PROCESS_END
cpu send PROCESS_START
cpu receive PROCESS_END
cpu send PROCESS_START
cpu receive PROCESS_END
cpu send PROCESS_START
cpu receive PROCESS_END
cpu send PROCESS_START
cpu receive PROCESS_END
cpu send PROCESS_START
cpu receive PROCESS_END
^C //按下ctrl+c后
cpu send PROCESS_START
cpu receive PROCESS_END
dsp process_command<span class="token operator">&gt;</span>task <span class="token number">0</span>: deinit <span class="token keyword">done</span>
task <span class="token number">0</span> is disabled
exit: task0 is disabled
cpu2dsp_task_demo: <span class="token builtin class-name">exit</span> successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function _(b,h){const i=a("center"),c=a("ExternalLinkIcon");return l(),d("div",null,[r,e(i,null,{default:o(()=>[n(" 图1 k510框图 ")]),_:1}),v,p("p",null,[n("具体指令的可到 "),p("a",k,[n("Product Documentation - Andes Technology"),e(c)]),n(" 下载 AndeStar V5 DSP ISA Extension Specification.PDF（v1.0，2019-03-25），查看第 3.172 节。")]),m])}const g=t(u,[["render",_],["__file","08-SDK_DSP_CORE_Guide.html.vue"]]);export{g as default};
