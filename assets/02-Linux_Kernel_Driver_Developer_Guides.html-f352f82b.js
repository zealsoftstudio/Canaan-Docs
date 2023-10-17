import{_ as e,r as i,o as l,c as t,a as n,b as s,d,e as c}from"./app-21fd3c9b.js";const p={},r=n("h1",{id:"系统驱动开发指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#系统驱动开发指南","aria-hidden":"true"},"#"),s(" 系统驱动开发指南")],-1),o=n("h2",{id:"_1-linux-kernel简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-linux-kernel简介","aria-hidden":"true"},"#"),s(" 1 Linux Kernel简介")],-1),u=n("p",null,"目前sdk使用的linux版本是4.17.0。Linux，全称GNU/Linux，是一种免费使用和自由传播的类UNIX操作系统，其内核由林纳斯·本纳第克特·托瓦兹于1991年10月5日首次发布，它主要受到Minix和Unix思想的启发，是一个基于POSIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的Unix工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux有上百种不同的发行版，如基于社区开发的debian、archlinux，和基于商业开发的Red Hat Enterprise Linux、SUSE、Oracle Linux等。",-1),v={href:"https://docs.kernel.org/",target:"_blank",rel:"noopener noreferrer"},m=c(`<h3 id="_1-1-获取方式" tabindex="-1"><a class="header-anchor" href="#_1-1-获取方式" aria-hidden="true">#</a> 1.1 获取方式</h3><p>下载并编译sdk，sdk编译的时候会下载并编译linux代码。</p><p>sdk的下载编译方法请参考：系统开发指南。</p><h3 id="_1-2开发环境需求" tabindex="-1"><a class="header-anchor" href="#_1-2开发环境需求" aria-hidden="true">#</a> 1.2开发环境需求</h3><ul><li>操作系统</li></ul><table><thead><tr><th>编号</th><th>软件资源</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>Ubuntu</td><td>18.04/20.04</td></tr></tbody></table><ul><li>软件环境要求如下表所示：</li></ul><table><thead><tr><th>编号</th><th>软件资源</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>K510 SDK</td><td>v1.5</td></tr></tbody></table><h2 id="_2-内核默认配置文件及dts" tabindex="-1"><a class="header-anchor" href="#_2-内核默认配置文件及dts" aria-hidden="true">#</a> 2 内核默认配置文件及dts</h2><p>默认的内核配置文件路径：</p><p>arch/riscv/configs/k510_defconfig</p><p>kernel支持两个开发板 K510 CRB 和EVB，相应的dts文件如下：</p><p>arch/riscv/boot/dts/canaan/k510_crb_lp3_v0_1.dts</p><p>arch/riscv/boot/dts/canaan/k510_evb_lp3_v1_1.dts</p><p>在arch/riscv/boot/dts/canaan/k510_common目录下存放的是soc级公共dts定义。</p><h2 id="_3调试" tabindex="-1"><a class="header-anchor" href="#_3调试" aria-hidden="true">#</a> 3调试</h2><h3 id="_3-1-使用jtag调试linux内核" tabindex="-1"><a class="header-anchor" href="#_3-1-使用jtag调试linux内核" aria-hidden="true">#</a> 3.1 使用JTAG调试linux内核</h3><ol><li><p>安装Andesight v3.2.1</p></li><li><p>进入andesight安装目录下ice目录，运行ICEMAN</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#ICEman -Z v5 --smp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用gdb调试，这里以 /dev/mem 内核代码driver/char/mem.c为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>riscv64-linux-gdb --eval-command<span class="token operator">=</span><span class="token string">&quot;target remote 192.168.200.100:1111&quot;</span>
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> symbol-file vmlinux
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> hbreak mmap_mem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>应用程序打开/dev/mem，调用mmap后进入断点</p></li></ol><h2 id="_4-驱动说明" tabindex="-1"><a class="header-anchor" href="#_4-驱动说明" aria-hidden="true">#</a> 4 驱动说明</h2><h3 id="_4-1-uart" tabindex="-1"><a class="header-anchor" href="#_4-1-uart" aria-hidden="true">#</a> 4.1 UART</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_SERIAL_8250_DW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/tty/serial/8250
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>serial@96000000 {
    status = &quot;okay&quot;;
    #address-cells = &lt;0x2&gt;;
    #size-cells = &lt;0x2&gt;;
    compatible = &quot;snps,dw-apb-uart&quot;;
    reg = &lt;0x0 0x96000000 0x0 0x100&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x1 0x4&gt;;
    resets = &lt;0x4 0x58 0x1 0x1f 0x0&gt;;
    reset-names = &quot;uart0_rst&quot;;
    power-domains = &lt;0x5 0x6&gt;;
    clock-frequency = &lt;0x17d7840&gt;;
    reg-shift = &lt;0x2&gt;;
    reg-io-width = &lt;0x4&gt;;
    no-loopback-test = &lt;0x1&gt;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x1f&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API：设备文件节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/dev/ttyS0
/dev/ttyS1/2/3    <span class="token comment">#目前dts中disable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编程接口：标准串口驱动，参考Linux man page</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">man</span> termios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-eth" tabindex="-1"><a class="header-anchor" href="#_4-2-eth" aria-hidden="true">#</a> 4.2 ETH</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_NET_CADENCE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/net/ethernet/cadence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>emac@93030000 {
    status = &quot;okay&quot;;
    compatible = &quot;cdns,k510-gem&quot;;
    reg = &lt;0x0 0x93030000 0x0 0x10000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x36 0x4 0x37 0x4 0x38 0x4&gt;;
    clocks = &lt;0x1b 0x1b 0x1b 0x1b 0x1b 0x1b&gt;;
    clock-names = &quot;hclk&quot;, &quot;pclk&quot;, &quot;ether_clk&quot;, &quot;tx_clk&quot;, &quot;rx_clk&quot;, &quot;tsu_clk&quot;;
    clock-config = &lt;0x97001104&gt;;
    resets = &lt;0x4 0xe4 0x1 0x1f 0x0&gt;;
    reset-names = &quot;emac_rst&quot;;
    power-domains = &lt;0x5 0x5&gt;;
    phy-mode = &quot;rgmii&quot;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x1c&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设备：<code>eth0</code> Api说明：标准网口驱动，请参考tcp/ip socket编程；</p><p>网口ip配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> eth0 xxx.xxx.xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-emmc" tabindex="-1"><a class="header-anchor" href="#_4-3-emmc" aria-hidden="true">#</a> 4.3 EMMC</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_MMC_SDHCI_CADENCE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/mmc/host/sdhci-cadence.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sdio@93000000 {
    status = &quot;okay&quot;;
    compatible = &quot;socionext,uniphier-sd4hc&quot;, &quot;cdns,sd4hc&quot;;
    reg = &lt;0x0 0x93000000 0x0 0x2000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x30 0x4&gt;;
    clocks = &lt;0x14&gt;;
    max-frequency = &lt;0x2faf080&gt;;
    resets = &lt;0x4 0xc8 0x1 0x1f 0x0&gt;;
    reset-names = &quot;sdio0_rst&quot;;
    power-domains = &lt;0x5 0x5&gt;;
    bus-width = &lt;0x8&gt;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x15&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设备和分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k510-test ~ <span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/ <span class="token operator">|</span> <span class="token function">grep</span> mmcblk0
brw------- <span class="token number">179</span>,  <span class="token number">0</span> Jan <span class="token number">1</span> <span class="token number">1970</span> mmcblk0      <span class="token comment"># emmc</span>
brw------- <span class="token number">179</span>,  <span class="token number">8</span> Jan <span class="token number">1</span> <span class="token number">1970</span> mmcblk0boot0
brw------- <span class="token number">179</span>, <span class="token number">16</span> Jan <span class="token number">1</span> <span class="token number">1970</span> mmcblk0boot1
brw------- <span class="token number">179</span>,  <span class="token number">1</span> Jan <span class="token number">1</span> <span class="token number">1970</span> mmcblk0p1    <span class="token comment"># emmc第一个分区(boot)</span>
brw------- <span class="token number">179</span>,  <span class="token number">2</span> Jan <span class="token number">1</span> <span class="token number">1970</span> mmcblk0p2    <span class="token comment"># emmc第二个分区(kenrel,env,vfat)</span>
brw------- <span class="token number">179</span>,  <span class="token number">3</span> Jan <span class="token number">1</span> <span class="token number">1970</span> mmcblk0p3    <span class="token comment"># emmmc第三个分区(rootfs文件系统，ext2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>驱动API：标准驱动，当成普通文件读写就可以。</p><h3 id="_4-4-sd-card" tabindex="-1"><a class="header-anchor" href="#_4-4-sd-card" aria-hidden="true">#</a> 4.4 SD CARD</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_MMC_SDHCI_CADENCE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/mmc/host/sdhci-cadence.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sdio@93020000 {
    status = &quot;okay&quot;;
    compatible = &quot;socionext,uniphier-sd4hc&quot;, &quot;cdns,sd4hc&quot;;
    reg = &lt;0x0 0x93020000 0x0 0x2000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x32 0x4&gt;;
    clocks = &lt;0x19&gt;;
    max-frequency = &lt;0x2faf080&gt;;
    resets = &lt;0x4 0xd0 0x1 0x1f 0x0&gt;;
    reset-names = &quot;sdio2_rst&quot;;
    power-domains = &lt;0x5 0x5&gt;;
    bus-width = &lt;0x4&gt;;
    cap-sd-highspeed;
    cdns,phy-input-delay-legacy = &lt;0xf&gt;;
    cdns,phy-input-delay-sd-highspeed = &lt;0xf&gt;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x1a&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设备：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k510-test ~ <span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/ <span class="token operator">|</span> <span class="token function">grep</span> mmcblk1
brw------- <span class="token number">179</span>, <span class="token number">24</span> mmcblk1      <span class="token comment"># sd卡设备</span>
brw------- <span class="token number">179</span>, <span class="token number">25</span> mmcblk1p1    <span class="token comment"># sd卡第一个分区(boot,kenrel,env,vfat)</span>
brw------- <span class="token number">179</span>, <span class="token number">26</span> mmcblk1p2    <span class="token comment"># sd卡第二个分区(rootfs文件系统，ext2)</span>
brw------- <span class="token number">179</span>, <span class="token number">27</span> mmcblk1p3    <span class="token comment"># sd卡第三个分区(用户分区)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>驱动API：标准驱动，当成普通文件读写就可以。</p><h3 id="_4-5-wdt" tabindex="-1"><a class="header-anchor" href="#_4-5-wdt" aria-hidden="true">#</a> 4.5 WDT</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_DW_WATCHDOG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/watchdog/dw_wdt.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wdt@97010000 {
    status = &quot;okay&quot;;
    compatible = &quot;snps,dw-wdt&quot;;
    reg = &lt;0x0 0x97010000 0x0 0x100&gt;;
    clocks = &lt;0x44&gt;;
    resets = &lt;0x4 0x40 0x2 0x0 0x3&gt;;
    reset-names = &quot;wdt0_rst&quot;;
};

wdt@97020000 {
    status = &quot;okay&quot;;
    compatible = &quot;snps,dw-wdt&quot;;
    reg = &lt;0x0 0x97020000 0x0 0x100&gt;;
    clocks = &lt;0x45&gt;;
    resets = &lt;0x4 0x40 0x2 0x0 0x4&gt;;
    reset-names = &quot;wdt1_rst&quot;;
};

wdt@97030000 {
    status = &quot;okay&quot;;
    compatible = &quot;snps,dw-wdt&quot;;
    reg = &lt;0x0 0x97030000 0x0 0x100&gt;;
    clocks = &lt;0x46&gt;;
    resets = &lt;0x4 0x40 0x2 0x0 0x5&gt;;
    reset-names = &quot;wdt2_rst&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API：设备文件节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/dev/watchdog
/dev/watchdog0/1/2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编程接口：linux文件IO（open， close , ioctl），详见Linux man page 内核源码自带文档：<code>Documentation/watchdog/watchdog-api.txt</code></p><h3 id="_4-6-pwm" tabindex="-1"><a class="header-anchor" href="#_4-6-pwm" aria-hidden="true">#</a> 4.6 PWM</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_PWM_GPIO
CONFIG_PWM_CANAAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/pwm/pwm-canaan.c
drivers/pwm/pwm-gpio.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pwm0@970f0000 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan,k510-pwm&quot;;
    reg = &lt;0x0 0x970f0000 0x0 0x40&gt;;
    clocks = &lt;0x55&gt;;
    clock-names = &quot;pwm&quot;;
    resets = &lt;0x4 0x40 0x2 0x0 0xb&gt;;
    reset-names = &quot;pwm_rst&quot;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x56&gt;;
};

pwm1@970f0000 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan,k510-pwm&quot;;
    reg = &lt;0x0 0x970f0040 0x0 0x40&gt;;
    clocks = &lt;0x55&gt;;
    clock-names = &quot;pwm&quot;;
    resets = &lt;0x4 0x40 0x2 0x0 0xb&gt;;
    reset-names = &quot;pwm_rst&quot;;
    pinctrl-names = &quot;default&quot;;
    pinctrl-0 = &lt;0x57&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API：pwm驱动在用户态可以通过sysfs访问， <code>/sys/class/pwm/</code></p><p>编程接口：Linux文件IO（open，read， write），详见Linux man page</p><p>内核源码自带文档：<code>Documentation/pwm.txt</code></p><h3 id="_4-7-i2c" tabindex="-1"><a class="header-anchor" href="#_4-7-i2c" aria-hidden="true">#</a> 4.7 I2C</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_I2C_DESIGNWARE_CORE
CONFIG_I2C0_TEST_DRIVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/misc/canaan/i2c/test-i2c0.c
drivers/i2c/busses/i2c-designware-platdrv.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>i2c@97060000 {
    status = &quot;disable&quot;;
    compatible = &quot;snps,designware-i2c&quot;;
    reg = &lt;0x0 0x97060000 0x0 0x100&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0xc 0x4&gt;;
    clocks = &lt;0x48&gt;;
    clock-frequency = &lt;0x186a0&gt;;
    resets = &lt;0x4 0x40 0x2 0x0 0x0&gt;;
    reset-names = &quot;i2c0_rst&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API： I2C驱动属于总线驱动，使用Linux kernel I2C子系统框架实现。用户态可以通过sysfs访问，也可以使用i2c-tools等用户态工具程序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/sys/bus/i2c/devices/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编程接口：linux文件IO（open，read， write），详见Linux man page 内核源码自带文档：<code>Documentation/i2c/dev-interface</code></p><h3 id="_4-8-usb-otg" tabindex="-1"><a class="header-anchor" href="#_4-8-usb-otg" aria-hidden="true">#</a> 4.8 USB OTG</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>USB_CANAAN_OTG20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/usb/canaan_otg20/core_drv_mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usb@93060000 {
    status = &quot;okay&quot;;
    compatible = &quot;Cadence,usb-dev1.00&quot;;
    reg = &lt;0x0 0x93060000 0x0 0x10000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x2d 0x4 0x2e 0x4&gt;;
    resets = &lt;0x4 0x18c 0x1 0x1f 0x0&gt;;
    reset-names = &quot;usb_rst&quot;;
    power-domains = &lt;0x5 0xc&gt;;
    otg_power_supply-gpios = &lt;0x13 0x10 0x0&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>USB作为host，可以挂载U盘，作为device，可以当作U盘。</p><h3 id="_4-9-clk" tabindex="-1"><a class="header-anchor" href="#_4-9-clk" aria-hidden="true">#</a> 4.9 CLK</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_COMMON_CLK_CAN_K510
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/reset/canaan/reset-k510.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arch/riscv/boot/dts/canaan/k510_common/clock_provider.dtsi
arch/riscv/boot/dts/canaan/k510_common/clock_consumer.dtsi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>clock_provider.dtsi</code>中定义所有时钟节点</li><li><code>clock_consumer.dtsi</code>中在各个驱动dts节点引用</li></ul><h3 id="_4-10-power" tabindex="-1"><a class="header-anchor" href="#_4-10-power" aria-hidden="true">#</a> 4.10 POWER</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_CANAAN_PM_DOMAIN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/soc/canaan/k510_pm_domains.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arch/riscv/boot/dts/canaan/k510_common/power_provider.dtsi
arch/riscv/boot/dts/canaan/k510_common/power_consumer.dtsi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctl_power@97003000 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan, k510-sysctl-power&quot;;
    reg = &lt;0x0 0x97003000 0x0 0x1000&gt;;
    #power-domain-cells = &lt;0x1&gt;;
    phandle = &lt;0x5&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>power_provider.dtsi</code> 定义了provider的dts节点</li><li><code>include/dt-bindings/soc/canaan,k510_pm_domains.h</code> 中定义了全部电源域</li><li><code>power_consumer.dtsi</code>中在驱动各自dts节点中引用</li></ul><h3 id="_4-11-reset" tabindex="-1"><a class="header-anchor" href="#_4-11-reset" aria-hidden="true">#</a> 4.11 RESET</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_COMMON_RESET_K510
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/reset/canaan/reset-k510.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设备树：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arch/riscv/boot/dts/canaan/k510_common/reset_provider.dtsi
arch/riscv/boot/dts/canaan/k510_common/reset_consumer.dtsi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctl_reset@97002000 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan,k510-sysctl-reset&quot;;
    reg = &lt;0x0 0x97002000 0x0 0x1000&gt;;
    #reset-cells = &lt;0x4&gt;;
    phandle = &lt;0x4&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>reset_provider.dtsi</code> 定义了provider的dts节点</li><li><code>include/ dt-bindings/reset/canaan-k510-reset.h</code> 中定义了全部reset信号</li><li><code>reset_consumer.dtsi</code>中在驱动各自dts节点中引用</li></ul><h3 id="_4-12-pinctl" tabindex="-1"><a class="header-anchor" href="#_4-12-pinctl" aria-hidden="true">#</a> 4.12 PINCTL</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_PINCTRL_K510
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/pinctrl/canaan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arch/riscv/boot/dts/canaan/k510_common/iomux_provider.dtsi
arch/riscv/boot/dts/canaan/k510_common/iomux_consumer.dtsi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iomux@97040000 {
    status = &quot;okay&quot;;
    compatible = &quot;pinctrl-k510&quot;;
    reg = &lt;0x0 0x97040000 0x0 0x1000&gt;;
    resets = &lt;0x4 0x40 0x2 0x0 0x9&gt;;
    reset-names = &quot;iomux_rst&quot;;
    #pinctrl-cells = &lt;0x1&gt;;
    pinctrl-k510,register-width = &lt;0x20&gt;;
    pinctrl-k510,function-mask = &lt;0xffffffff&gt;;

    iomux_emac_pins {
        pinctrl-k510,pins = &lt;0x23 0x23012d 0x24 0x24012e 0x22 0x22012c 0x26 0x260132 0x20 0x20012a 0x2e 0x2e013a 0x2d 0x2d0139 0x2a 0x2a0136 0x29 0x290135 0x1d 0x1d0126&gt;;
    };

    iomux_mmc0_pins {
        pinctrl-k510,pins = &lt;0x7 0x70107 0x8 0x80108 0x9 0x90109 0xa 0xa010a 0xb 0xb010b 0xc 0xc010c 0xd 0xd010d 0xe 0xe010e 0xf 0xf010f 0x10 0x100110&gt;;
        phandle = &lt;0x15&gt;;
    };

    iomux_mmc2_pins {
        pinctrl-k510,pins = &lt;0x17 0x170117 0x18 0x180118 0x19 0x190119 0x1a 0x1a011a 0x1b 0x1b011b 0x1c 0x1c011c&gt;;
        phandle = &lt;0x1a&gt;;
    };

    iomux_uart0_pins {
        pinctrl-k510,pins = &lt;0x70 0x54 0x71 0x5a&gt;;
        phandle = &lt;0x1f&gt;;
    };

    iomux_uart1_pins {
        pinctrl-k510,pins = &lt;0x72 0x64 0x73 0x6a&gt;;
        phandle = &lt;0x20&gt;;
    };

    iomux_emac_rgmii_pins {
        pinctrl-k510,pins = &lt;0x23 0x23012d 0x24 0x24012e 0x1d 0x1d0123 0x26 0x260131 0x2e 0x2e013a 0x2d 0x2d0139 0x2c 0x2c0138 0x2b 0x2b0137 0x1e 0x1e0128 0x25 0x25012f 0x2a 0x2a0136 0x29 0x290135 0x28 0x280134 0x27 0x270133&gt;;
        phandle = &lt;0x1c&gt;;
    };

    iomux_i2s_pins {
        pinctrl-k510,pins = &lt;0x64 0xab 0x65 0xad 0x63 0xa3 0x62 0x93&gt;;
        phandle = &lt;0x22&gt;;
    };

    iomux_i2c1_pins {
        pinctrl-k510,pins = &lt;0x78 0x44 0x79 0x45&gt;;
        phandle = &lt;0x4a&gt;;
    };

    iomux_i2c2_pins {
        pinctrl-k510,pins = &lt;0x67 0x46 0x66 0x47&gt;;
        phandle = &lt;0x4d&gt;;
    };

    iomux_i2c3_pins {
        pinctrl-k510,pins = &lt;0x74 0x49 0x75 0x48&gt;;
        phandle = &lt;0x4f&gt;;
    };

    iomux_i2c4_pins {
        pinctrl-k510,pins = &lt;0x30 0x4b 0x2f 0x4a&gt;;
        phandle = &lt;0x52&gt;;
    };

    iomux_dvp_pins {
        pinctrl-k510,pins = &lt;0x33 0x33013f 0x34 0x340140 0x35 0x350141 0x36 0x360142 0x37 0x370143 0x38 0x380144 0x39 0x390145 0x3a 0x3a0146 0x3b 0x3b0147 0x3c 0x3c0148 0x3d 0x3d0149 0x3e 0x3e014a 0x3f 0x3f014b 0x40 0x40014c 0x42 0x42014e&gt;;
        phandle = &lt;0x6c&gt;;
    };

    iomux_gpio_pins {
        pinctrl-k510,pins = &lt;0x20 0x20 0x22 0x1f 0x45 0xc 0x46 0xd 0x47 0xe 0x4b 0xf 0x4c 0x10 0x4d 0x11 0x4e 0x1d 0x4f 0x1e 0x50 0x14 0x51 0x15 0x53 0x16 0x54 0x17 0x55 0x18 0x61 0x19 0x7b 0x1a&gt;;
        phandle = &lt;0x47&gt;;
    };

    iomux_pwm0_pins {
        pinctrl-k510,pins = &lt;0x7e 0xb3&gt;;
        phandle = &lt;0x56&gt;;
    };

    iomux_pwm1_pins {
        pinctrl-k510,pins = &lt;0x7f 0xb7&gt;;
        phandle = &lt;0x57&gt;;
    };

    iomux_spi0_pins {
        pinctrl-k510,pins = &lt;0x56 0x560162 0x57 0x570163 0x58 0x580164 0x59 0x590165 0x5a 0x5a0166 0x5b 0x5b0167&gt;;
        phandle = &lt;0xc&gt;;
    };

    iomux_spi1_pins {
        pinctrl-k510,pins = &lt;0x68 0x8 0x69 0x9 0x6a 0x0 0x6b 0x1&gt;;
        phandle = &lt;0xf&gt;;
    };

    iomux_spi2_pins {
        pinctrl-k510,pins = &lt;0x7a 0x2a&gt;;
        phandle = &lt;0x12&gt;;
    };

    iomux_mmc1_pins {
        pinctrl-k510,pins = &lt;0x11 0x110111 0x12 0x120112 0x13 0x130113 0x14 0x140114 0x15 0x150115 0x16 0x160116&gt;;
        phandle = &lt;0x17&gt;;
    };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>iomux_provider.dtsi</code> 定义了provider的dts节点 <code>include/include/dt-bindings/pinctrl/k510.h</code>中定义了全部IO function number <code>iomux_consumer.dtsi</code>中在驱动各自dts节点中引用</p><h3 id="_4-13-h264" tabindex="-1"><a class="header-anchor" href="#_4-13-h264" aria-hidden="true">#</a> 4.13 H264</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_ ALLEGRO_CODEC_DRIVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/media/platform/canaan/al5r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h264@92740000 {
    status = &quot;okay&quot;;
    compatible = &quot;al,al5r&quot;;
    reg = &lt;0x0 0x92740000 0x0 0x10000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x3f 0x4&gt;;
    clocks = &lt;0x7f&gt;;
    resets = &lt;0x4 0x184 0x1 0x1f 0x0&gt;;
    reset-names = &quot;h264_rst&quot;;
    power-domains = &lt;0x5 0xb&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API: 设备文件节点： <code>/dev/h264-codec</code></p><p>编程接口： linux文件IO（open， close , ioctl），详见Linux man page</p><p>支持的IOCTL命令：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">AL_CMD_IP_WRITE_REG</span>    <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;q&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">al5_reg</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">AL_CMD_IP_READ_REG</span>     <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;q&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">al5_reg</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">AL_CMD_IP_WAIT_IRQ</span>     <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;q&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">AL_CMD_IP_IRQ_CNT</span>      <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;q&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">AL_CMD_IP_CLR_IRQ</span>      <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;q&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例代码：<code>package/h264_demo/src</code></p><h3 id="_4-14-dsp" tabindex="-1"><a class="header-anchor" href="#_4-14-dsp" aria-hidden="true">#</a> 4.14 DSP</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_ K510_DSP_DRIVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/misc/canaan/k510-dsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dsp@99800000 {
    status = &quot;okay&quot;;
    compatible = &quot;k510-dsp&quot;;
    reg = &lt;0x0 0x99800000 0x0 0x80000&gt;;
    resets = &lt;0x4 0x14 0x0 0x1e 0x0&gt;;
    reset-names = &quot;dsp_rst&quot;;
    power-domains = &lt;0x5 0x1&gt;;
    sysctl-phy-addr = &lt;0x97000000&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API： 设备文件节点： <code>/dev/k510-dsp</code></p><p>编程接口： linux文件IO（open， close , ioctl），详见Linux man page</p><p>支持的ioctl命令：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DSP_CMD_BOOT</span>       <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;q&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>package/dsp_app/src/
package/dsp_app_evb_lp3_v1_1/src/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-15-gnne" tabindex="-1"><a class="header-anchor" href="#_4-15-gnne" aria-hidden="true">#</a> 4.15 GNNE</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_ K510_GNNE_DRIVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/misc/canaan/gnne
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gnne@94000000 {
    status = &quot;okay&quot;;
    compatible = &quot;k510-gnne&quot;;
    reg = &lt;0x0 0x94180000 0x0 0x80000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x27 0x4&gt;;
    resets = &lt;0x4 0x2c 0x1 0x1f 0x0&gt;;
    reset-names = &quot;gnne_rst&quot;;
    power-domains = &lt;0x5 0x3&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API： 设备文件节点：/dev/k510-gnne 编程接口： linux文件IO（open， close , ioctl），详见Linux man page 支持的ioctl命令：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_ENABLE</span>                   <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_RESET</span>                    <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_DISABLE</span>                  <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_PC</span>                   <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_MEM_BASE</span>             <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_STATUS</span>               <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_PC_ENABLE</span>            <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_MEM0</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_MEM1</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_MEM2</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_SET_MEM3</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_PC</span>                   <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_CTRL</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_DSP_INTR_MASK</span>        <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_MEM0</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_MEM1</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_MEM2</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_MEM3</span>                 <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_LOAD_STROE_PC_ADDR</span>   <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_TCU_MFU_PC_ADDR</span>      <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_CCR_STATUS0</span>          <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_CCR_STATUS1</span>          <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_CCR_STATUS2</span>          <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GNNE_GET_CCR_STATUS3</span>          <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;g&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>package/nncase_demo/src/mobilenetv2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-16-twod" tabindex="-1"><a class="header-anchor" href="#_4-16-twod" aria-hidden="true">#</a> 4.16 TWOD</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_K510_2D_DRIVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/media/platform/canaan/kendryte_2d.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>twod@92720000 {
    status = &quot;okay&quot;;
    compatible = &quot;k510, kendrty_2d&quot;;
    reg = &lt;0x0 0x92720000 0x0 0x10000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x44 0x0&gt;;
    clocks = &lt;0x6f 0x70&gt;;
    clock-names = &quot;twod_apb&quot;, &quot;twod_axi&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API： 设备文件节点：/dev/kendryte_2d 编程接口： linux文件IO（open， close , ioctl），详见Linux man page 支持的ioctl命令：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">KENDRTY_2DROTATION_90</span>     <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;k&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">KENDRTY_2DROTATION_270</span>    <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;k&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">KENDRTY_2DROTATION_INPUT_ADDR</span>     <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;k&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">KENDRTY_2DROTATION_OUTPUT_ADDR</span>    <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;k&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">KENDRTY_2DROTATION_GET_REG_VAL</span>    <span class="token expression"><span class="token function">_IOWR</span><span class="token punctuation">(</span></span><span class="token char">&#39;k&#39;</span><span class="token expression"><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-17-aes和sha" tabindex="-1"><a class="header-anchor" href="#_4-17-aes和sha" aria-hidden="true">#</a> 4.17 AES和SHA</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_CRYPTO_DEV_KENDRYTE_CRYP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/crypto/kendryte/kendryte-aes.c
drivers/crypto/kendryte/kendryte-aes.h
drivers/crypto/kendryte/kendryte-hash.c
drivers/crypto/kendryte/kendryte-hash.h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aes@91000000 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan,k510-aes&quot;;
    reg = &lt;0x0 0x91000000 0x0 0x10000&gt;;
    clocks = &lt;0x7&gt;;
    resets = &lt;0x4 0x9c 0x1 0x1f 0x0&gt;;
    reset-names = &quot;aes_rst&quot;;
    power-domains = &lt;0x5 0x4&gt;;
    dmas = &lt;0x8 0x1 0xfff 0x0 0x21 0x8 0x1 0xfff 0x0 0x22&gt;;
    dma-names = &quot;tx&quot;, &quot;rx&quot;;
};

sha@91010000 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan,k510-sha&quot;;
    reg = &lt;0x0 0x91010000 0x0 0x10000&gt;;
    clocks = &lt;0x9&gt;;
    resets = &lt;0x4 0x94 0x1 0x1f 0x0&gt;;
    reset-names = &quot;sha_rst&quot;;
    power-domains = &lt;0x5 0x4&gt;;
    dmas = &lt;0x8 0x1 0xfff 0x0 0x20&gt;;
    dma-names = &quot;tx&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API: 设备节点文件： <code>/sys/bus/platform/devices/91000000.aes</code><code>/sys/bus/platform/devices/91010000.sha</code></p><p>编程接口： 用户态程序使用socket访问内核的驱动API，参考文档位于<code>/Documentation/crypto/userspace-if.rst</code></p><p>示例代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>package/crypto_demo/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-18-温度监测——thermal" tabindex="-1"><a class="header-anchor" href="#_4-18-温度监测——thermal" aria-hidden="true">#</a> 4.18 温度监测——thermal</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_THERMAL
CONFIG_CANAAN_THERMAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/thermal/canaan_thermal.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsensor@970e0300 {
    status = &quot;okay&quot;;
    compatible = &quot;canaan,k510-tsensor&quot;;
    reg = &lt;0x0 0x970e0300 0x0 0x100&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x1c 0x4&gt;;
    clocks = &lt;0x54&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /sys/class/thermal/thermal_zone0/
<span class="token builtin class-name">echo</span> enabled <span class="token operator">&gt;</span> mode
<span class="token function">cat</span> temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-19-2d-旋转——twod" tabindex="-1"><a class="header-anchor" href="#_4-19-2d-旋转——twod" aria-hidden="true">#</a> 4.19 2D 旋转——twod</h3><p>配置选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONFIG_KENDRYTE_TWOD_SUPPORT
CONFIG_KENDRYTE_TWOD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>驱动文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drivers/video/canaan/twod/kendryte_td.c
drivers/video/canaan/twod/kendryte_td_reg.c
drivers/video/canaan/twod/kendryte_td.h
drivers/video/canaan/twod/kendryte_td_table.h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关设备树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>twod@92720000 {
    status = &quot;okay&quot;;
    compatible = &quot;k510, kendrty_2d&quot;;
    reg = &lt;0x0 0x92720000 0x0 0x10000&gt;;
    interrupt-parent = &lt;0x6&gt;;
    interrupts = &lt;0x44 0x0&gt;;
    clocks = &lt;0x6f 0x70&gt;;
    clock-names = &quot;twod_apb&quot;, &quot;twod_axi&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,205);function b(k,x){const a=i("ExternalLinkIcon");return l(),t("div",null,[r,o,u,n("p",null,[s("了解更多Linux kernel的相关资料，请访问嘉楠官方资料网址："),n("a",v,[s("https://docs.kernel.org/"),d(a)])]),m])}const g=e(p,[["render",b],["__file","02-Linux_Kernel_Driver_Developer_Guides.html.vue"]]);export{g as default};
