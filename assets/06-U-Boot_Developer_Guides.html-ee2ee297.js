import{_ as e,r as t,o as i,c as o,a as n,b as s,d as l,e as c}from"./app-21fd3c9b.js";const p={},d=n("h1",{id:"u-boot开发指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#u-boot开发指南","aria-hidden":"true"},"#"),s(" U-Boot开发指南")],-1),r=n("h2",{id:"_1-u-boot-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-u-boot-简介","aria-hidden":"true"},"#"),s(" 1 U-Boot 简介")],-1),u={href:"https://www.denx.de/wiki/U-Boot",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="_2-开发环境简介" tabindex="-1"><a class="header-anchor" href="#_2-开发环境简介" aria-hidden="true">#</a> 2 开发环境简介</h2><ul><li>操作系统</li></ul><table><thead><tr><th>编号</th><th>软件资源</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>Ubuntu</td><td>18.04/20.04</td></tr></tbody></table><ul><li>软件环境</li></ul><p>软件环境要求如下表所示：</p><table><thead><tr><th>编号</th><th>软件资源</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>K510 SDK</td><td></td></tr></tbody></table><h2 id="_3-获取方式" tabindex="-1"><a class="header-anchor" href="#_3-获取方式" aria-hidden="true">#</a> 3 获取方式</h2><p>下载并编译sdk，sdk编译的时候会下载uboot代码，并编译uboot代码。sdk的下载编译方法请参考:系统开发指南。</p><h2 id="_4-重要目录和文件说明" tabindex="-1"><a class="header-anchor" href="#_4-重要目录和文件说明" aria-hidden="true">#</a> 4 重要目录和文件说明</h2><p>本章以编译k510_evb_lp3_v1_1_defconfig为例。对应的sdk编译方法是make CONF=k510_evb_lp3_v1_1_defconfig，其编译完后目录如下：</p><p><img src="http://photos.100ask.net/canaan-docs/build_out.png" alt="image-20210930135634105"></p><p>k510_evb_lp3_v1_1_defconfig/build/uboot-custom ---uboot的代码和编译目录；</p><p>board/canaan/k510/uboot-sdcard.env---uboot默认环境变量配置文件</p><p>k510_evb_lp3_v1_1_defconfig/build/uboot-custom/configs/k510_evb_lp3_v1_1_defconfig --uboot配置文件；</p><p>k510_evb_lp3_v1_1_defconfig/build/uboot-custom/arch/riscv/dts/k510_evb_lp3_v1_1.dts----设备树文件；</p><p>k510_evb_lp3_v1_1_defconfig/build/uboot-custom/include/configs/k510_evb_lp3_v1_1.h---头文件；</p><p>k510_evb_lp3_v1_1_defconfig/images/u-boot_burn.bin ---uboot烧写固件</p><p>buildroot-2020.02.11/boot/uboot ----buildroot里面关于uboot的编译脚本，一般不需修改；</p><p>configs/k510_evb_lp3_v1_1_defconfig---sdk的配置文件，BR2_TARGET_UBOOT_BOARD_DEFCONFIG指定uboot的配置文件；</p><h2 id="_5-uboot启动流程" tabindex="-1"><a class="header-anchor" href="#_5-uboot启动流程" aria-hidden="true">#</a> 5 uboot启动流程</h2><p>_start(arch/riscv/cpu/start.S, line 43)</p><p>board_init_f(common/board_f.c, line 1013)</p><p>board_init_r(common/board_r.c, line 845)</p><p>run_main_loop(common/board_r.c, line 637)</p><h2 id="_6-uboot下驱动说明" tabindex="-1"><a class="header-anchor" href="#_6-uboot下驱动说明" aria-hidden="true">#</a> 6 uboot下驱动说明</h2><h3 id="_6-1-ddr驱动" tabindex="-1"><a class="header-anchor" href="#_6-1-ddr驱动" aria-hidden="true">#</a> 6.1 ddr驱动</h3><p>board/Canaan/k510_evb_lp3/ddr_init.c</p><h3 id="_6-2-eth驱动" tabindex="-1"><a class="header-anchor" href="#_6-2-eth驱动" aria-hidden="true">#</a> 6.2 eth驱动</h3><p>drivers/net/macb.c</p><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ethernet@93030000 {
    compatible = &quot;cdns,macb&quot;;
    reg = &lt;0x0 0x93030000 0x0 0x10000&gt;;
    phy-mode = &quot;rmii&quot;;
    interrupts = &lt;0x36 0x4&gt;;
    interrupt-parent = &lt;0x4&gt;;
    clocks = &lt;0x5 0x5&gt;;
    clock-names = &quot;hclk&quot;, &quot;pclk&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-串口驱动" tabindex="-1"><a class="header-anchor" href="#_6-3-串口驱动" aria-hidden="true">#</a> 6.3 串口驱动</h3><p>drivers/serial/ns16550.c</p><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>serial@96000000 {
    compatible = &quot;andestech,uart16550&quot;, &quot;ns16550a&quot;;
    reg = &lt;0x0 0x96000000 0x0 0x1000&gt;;
    interrupts = &lt;0x19 0x4&gt;;
    clock-frequency = &lt;0x17d7840&gt;;
    reg-shift = &lt;0x2&gt;;
    reg-io-width = &lt;0x4&gt;;
    no-loopback-test = &lt;0x1&gt;;
    interrupt-parent = &lt;0x4&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-iomux" tabindex="-1"><a class="header-anchor" href="#_6-4-iomux" aria-hidden="true">#</a> 6.4 iomux</h3><p>drivers/pinctrl/pinctrl-single.c</p><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iomux@97040000 {
    compatible = &quot;pinctrl-single&quot;;
    reg = &lt;0x0 0x97040000 0x0 0x10000&gt;;
    #address-cells = &lt;0x1&gt;;
    #size-cells = &lt;0x0&gt;;
    #pinctrl-cells = &lt;0x1&gt;;
    pinctrl-single,register-width = &lt;0x20&gt;;
    pinctrl-single,function-mask = &lt;0xffffffff&gt;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x6 0x7 0x8 0x9 0xa&gt;;

    iomux_uart0_pins {
        pinctrl-single,pins = &lt;0x1c0 0x540ca8 0x1c4 0x5a0c69&gt;;
        phandle = &lt;0x6&gt;;
    };

    iomux_emac_pins {
        pinctrl-single,pins = &lt;0x8c 0x4e 0x90 0xce 0x88 0x8e 0x98 0x4e 0x80 0x8e 0xb8 0x4e 0xb4 0x4e 0xa8 0x8e 0xa4 0x8e 0x74 0x8e&gt;;
        phandle = &lt;0x7&gt;;
    };

    iomux_spi0_pins {
        pinctrl-single,pins = &lt;0x158 0x4e 0x15c 0x4e 0x160 0xce 0x164 0xce 0x168 0xce 0x16c 0xce 0x170 0xce 0x174 0xce 0x178 0xce 0x17c 0xce 0x180 0x8e&gt;;
        phandle = &lt;0x8&gt;;
    };

    iomux_mmc0_pins {
        pinctrl-single,pins = &lt;0x1c 0x4e 0x20 0xce 0x24 0xce 0x28 0xce 0x2c 0xce 0x30 0xce 0x34 0xce 0x38 0xce 0x3c 0xce 0x40 0xce&gt;;
        phandle = &lt;0x9&gt;;
    };

    iomux_mmc2_pins {
        pinctrl-single,pins = &lt;0x5c 0x4e 0x60 0xce 0x64 0xce 0x68 0xce 0x6c 0xce 0x70 0xce&gt;;
        phandle = &lt;0xa&gt;;
    };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-mmc和sd卡驱动" tabindex="-1"><a class="header-anchor" href="#_6-5-mmc和sd卡驱动" aria-hidden="true">#</a> 6.5 mmc和sd卡驱动</h3><p>drivers/mmc/sdhci-cadence.c</p><p>设备树</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mmc0@93000000 {
    compatible = &quot;socionext,uniphier-sd4hc&quot;, &quot;cdns,sd4hc&quot;;
    reg = &lt;0x0 0x93000000 0x0 0x400&gt;;
    interrupts = &lt;0x30 0x4&gt;;
    interrupt-parent = &lt;0x4&gt;;
    clocks = &lt;0xb 0x4&gt;;
    max-frequency = &lt;0xbebc200&gt;;
    cap-mmc-highspeed;
    bus-width = &lt;0x8&gt;;
};

mmc2@93020000 {
    compatible = &quot;socionext,uniphier-sd4hc&quot;, &quot;cdns,sd4hc&quot;;
    reg = &lt;0x0 0x93020000 0x0 0x400&gt;;
    interrupts = &lt;0x32 0x4&gt;;
    interrupt-parent = &lt;0x4&gt;;
    clocks = &lt;0xb 0x4&gt;;
    max-frequency = &lt;0xbebc200&gt;;
    cap-sd-highspeed;
    bus-width = &lt;0x1&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-uboot默认环境变量" tabindex="-1"><a class="header-anchor" href="#_7-uboot默认环境变量" aria-hidden="true">#</a> 7 Uboot默认环境变量</h2><p>uboot的默认环境变量在SDK的board/canaan/k510目录下，用文本文件预定义：</p><p>uboot-emmc.env</p><p>uboot-nfs.env</p><p>uboot-sdcard.env</p><p>SDK的post脚本会在编译的时候调用mkenvimage将文本的环境变量定义编译为uboot可以加载的二进制镜像，放在启动分区中。</p><p>举例如下：</p><p>uboot-sdcard.env</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bootm_size=0x2000000
bootdelay=3

stderr=serial@96000000
stdin=serial@96000000
stdout=serial@96000000
arch=riscv
baudrate=115200

ipaddr=10.100.226.221
netmask=255.255.255.0
gatewayip=10.100.226.254
serverip=10.100.226.63
bootargs=root=/dev/mmcblk1p2 rw console=ttyS0,115200n8 debug loglevel=7

bootcmd=fatload mmc 1:1 0x600000 bootm-bbl.img;fatload mmc 1:1 0x2000000 k510.dtb;bootm 0x600000 - 0x2000000
bootcmd_nfs=tftp 0x600000 bootm-bbl.img;tftp 0x2000000 k510_nfsroot.dtb;bootm 0x600000 - 0x2000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：内核启动参数bootargs由uboot的默认环境变量设置，dts中的bootargs将会被覆盖。详见 常见问题-bootargs 哪里获取并传给内核的？</p><h2 id="_8-uboot程序更新" tabindex="-1"><a class="header-anchor" href="#_8-uboot程序更新" aria-hidden="true">#</a> 8 Uboot程序更新</h2><h3 id="_8-1-烧写sdk镜像方法" tabindex="-1"><a class="header-anchor" href="#_8-1-烧写sdk镜像方法" aria-hidden="true">#</a> 8.1 烧写sdk镜像方法</h3><p>sdk镜像里面已经包含uboot程序，直接烧写sdk镜像，比如：k510_evb_lp3_v1_1_defconfig/images/sysimage-sdcard.img文件</p><h3 id="_8-2-linux下更新sd卡里面的uboot程序" tabindex="-1"><a class="header-anchor" href="#_8-2-linux下更新sd卡里面的uboot程序" aria-hidden="true">#</a> 8.2 linux下更新sd卡里面的uboot程序</h3><p>把u-boot_burn.bin文件放到tftp目录，配置设备网口ip地址，进入/root/sd/p1目录；执行tftp -gr u-boot_burn.bin xxx.xxx.xxx.xx 命令；</p><h3 id="_8-3-linux更新emmc里面的uboot程序" tabindex="-1"><a class="header-anchor" href="#_8-3-linux更新emmc里面的uboot程序" aria-hidden="true">#</a> 8.3 linux更新emmc里面的uboot程序</h3><p>把u-boot_burn.bin文件放到tftp目录，配置设备网口ip地址；通过tftp -gr u-boot_burn.bin xxx.xxx.xxx.xx下载文件到设备；</p><p>执行dd if=u-boot_burn.bin of=/dev/mmcblk0p1 命令把文件写到mmc卡。</p><h2 id="_9-常见问题" tabindex="-1"><a class="header-anchor" href="#_9-常见问题" aria-hidden="true">#</a> 9 常见问题</h2><h3 id="_9-1-ddr-频率如何配置" tabindex="-1"><a class="header-anchor" href="#_9-1-ddr-频率如何配置" aria-hidden="true">#</a> 9.1 DDR 频率如何配置？</h3><p>答：目前evb只能跑800，CRB可以设置800或1600。CRB板子ddr频率设置方法见uboot的board\\Canaan\\k510_crb_lp3\\ddr_param.h文件，800M对应#define DDR_800 1，1600M对应#define DDR_1600 1。</p><h3 id="_9-2-bootargs-哪里获取并传给内核的" tabindex="-1"><a class="header-anchor" href="#_9-2-bootargs-哪里获取并传给内核的" aria-hidden="true">#</a> 9.2 bootargs 哪里获取并传给内核的？</h3><p>答：从uboot环境变量bootargs 获取，uboot引导内核时会根据bootargs 环境变量值，修改内存设备树里面的bootargs参数。相关代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">fdt_chosen</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>fdt<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span>   nodeoffset<span class="token punctuation">;</span>
    <span class="token keyword">int</span>   err<span class="token punctuation">;</span>
    <span class="token keyword">char</span>  <span class="token operator">*</span>str<span class="token punctuation">;</span> <span class="token comment">/* used to set string properties */</span>

    err <span class="token operator">=</span> <span class="token function">fdt_check_header</span><span class="token punctuation">(</span>fdt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;fdt_chosen: %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">fdt_strerror</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* find or create &quot;/chosen&quot; node. */</span>
    nodeoffset <span class="token operator">=</span> <span class="token function">fdt_find_or_add_subnode</span><span class="token punctuation">(</span>fdt<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;chosen&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeoffset <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> nodeoffset<span class="token punctuation">;</span>

    str <span class="token operator">=</span> <span class="token function">env_get</span><span class="token punctuation">(</span><span class="token string">&quot;bootargs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        err <span class="token operator">=</span> <span class="token function">fdt_setprop</span><span class="token punctuation">(</span>fdt<span class="token punctuation">,</span> nodeoffset<span class="token punctuation">,</span> <span class="token string">&quot;bootargs&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span>
                    <span class="token function">strlen</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;WARNING: could not set bootargs %s.\\n&quot;</span><span class="token punctuation">,</span>
                    <span class="token function">fdt_strerror</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> err<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">fdt_fixup_stdout</span><span class="token punctuation">(</span>fdt<span class="token punctuation">,</span> nodeoffset<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-启动参数和编译的设备树文件不一致" tabindex="-1"><a class="header-anchor" href="#_9-3-启动参数和编译的设备树文件不一致" aria-hidden="true">#</a> 9.3 启动参数和编译的设备树文件不一致？</h3><p>答：uboot根据启动方式动态获取环境变量，引导内核时根据bootargs环境变量，更新内存里面的设备树。修改完后的启动参数见/sys/firmware/devicetree/base/chosen节点。</p><h3 id="_9-4-uboot环境变量保存在那里" tabindex="-1"><a class="header-anchor" href="#_9-4-uboot环境变量保存在那里" aria-hidden="true">#</a> 9.4 uboot环境变量保存在那里？</h3><p>答：</p><table><thead><tr><th style="text-align:center;">启动方式</th><th style="text-align:center;">uboot读取和保存位置</th><th style="text-align:center;">编译时对应文件</th></tr></thead><tbody><tr><td style="text-align:center;">emmc启动</td><td style="text-align:center;">emmc第二个分区的uboot-emmc.env文件</td><td style="text-align:center;">board\\canaan\\k510\\uboot-emmc.env</td></tr><tr><td style="text-align:center;">sd卡启动</td><td style="text-align:center;">sd卡第一个分区的uboot-sd.env文件</td><td style="text-align:center;">board\\canaan\\k510\\uboot-sd.env</td></tr></tbody></table><h3 id="_9-5-qos如何设置" tabindex="-1"><a class="header-anchor" href="#_9-5-qos如何设置" aria-hidden="true">#</a> 9.5 qos如何设置？</h3><p>答：qos相关寄存器是QOS_CTRL0 QOS_CTRL1 QOS_CTRL2 QOS_CTRL3 QOS_CTRL4 。例子： 设置qos后，nncase demo性能有所提高</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token operator">*</span><span class="token punctuation">(</span><span class="token class-name">uint32_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0x970E00FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0x2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">0x2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">0x2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">0x2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">0x2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token punctuation">(</span><span class="token class-name">uint32_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0x970E0100</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0x3</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x3</span><span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token punctuation">(</span><span class="token class-name">uint32_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0x970E00F4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0x5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">0x5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75);function v(m,x){const a=t("ExternalLinkIcon");return i(),o("div",null,[d,r,n("p",null,[s("u-boot是sdk的一部分，sdk目前使用的u-boot版本是2020.01。Uboot是德国DENX小组的开发用于多种嵌入式CPU的bootloader程序, UBoot不仅仅支持嵌入式Linux系统的引导，当前，它还支持NetBSD, VxWorks, QNX, RTEMS, ARTOS, LynxOS嵌入式操作系统。UBoot除了支持PowerPC系列的处理器外，还能支持MIPS、 x86、ARM、NIOS、RISICV等，主要功能有初始化内存，引导linux系统，更多u-boot介绍请参考"),n("a",u,[s("https://www.denx.de/wiki/U-Boot"),l(a)])]),b])}const h=e(p,[["render",v],["__file","06-U-Boot_Developer_Guides.html.vue"]]);export{h as default};
