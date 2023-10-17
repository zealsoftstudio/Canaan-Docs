import{_ as s,r as t,o,c as l,a as n,b as e,d as a,e as d}from"./app-21fd3c9b.js";const r={},u=d('<h1 id="sdk系统开发指南" tabindex="-1"><a class="header-anchor" href="#sdk系统开发指南" aria-hidden="true">#</a> SDK系统开发指南</h1><p><strong>硬件要求：</strong></p><ul><li>一台PC电脑： <ul><li>显卡，显存4GB以上</li><li>内存16GB以上</li><li>硬盘100GB以上（建议200GB以上）</li><li>系统：Windows10/11系统</li></ul></li></ul><p><strong>软件要求：</strong></p>',4),c={href:"https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"Ubuntu镜像，可通过以下两种方法获取：",-1),g={href:"https://dongshanpi.cowtransfer.com/s/386fc0c0310946",target:"_blank",rel:"noopener noreferrer"},p={href:"https://pan.baidu.com/s/1LbkblZvlbsXiJWH-mzFsWw?pwd=blgh",target:"_blank",rel:"noopener noreferrer"},v=d(`<p>开始前请确保您已经成功安装VMware虚拟机工具并成功运行我们给您提供的Ubuntu20.04镜像。</p><h2 id="_1-获取系统源码" tabindex="-1"><a class="header-anchor" href="#_1-获取系统源码" aria-hidden="true">#</a> 1.获取系统源码</h2><p>​ 打开VMware虚拟机工具启动Ubuntu20.04系统，启动完成后在用户目录中打开终端，创建<code>DongshanPI-Vision</code>文件夹，用于存放系统源码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ mkdir DongshanPI-Vision
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入<code>DongshanPI-Vision</code>目录下，拉取系统源码：https://e.coding.net/weidongshan/dongshanpi-vision/br2-canaan-k510.git。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ cd DongshanPI-Vision
ubuntu@ubuntu2004:~/DongshanPI-Vision$ git clone https://e.coding.net/weidongshan/dongshanpi-vision/br2-canaan-k510.git
Cloning into &#39;br2-canaan-k510&#39;...
remote: Enumerating objects: 3885, done.
remote: Counting objects: 100% (3885/3885), done.
remote: Compressing objects: 100% (1616/1616), done.
remote: Total 3885 (delta 2193), reused 3857 (delta 2177), pack-reused 0
Receiving objects: 100% (3885/3885), 11.68 MiB | 9.10 MiB/s, done.
Resolving deltas: 100% (2193/2193), done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>br2-canaan-k510 </code>目录下，拉取buildroot源码：https://e.coding.net/weidongshan/dongshanpi-vision/buildroot-2020.02.11.git。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision$ cd br2-canaan-k510/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ git clone https://e.coding.net/weidongshan/dongshanpi-vision/buildroot-2020.02.11.git
Cloning into &#39;buildroot-2020.02.11&#39;...
remote: Enumerating objects: 14715, done.
remote: Counting objects: 100% (14715/14715), done.
remote: Compressing objects: 100% (13741/13741), done.
remote: Total 14715 (delta 724), reused 14682 (delta 709), pack-reused 0
Receiving objects: 100% (14715/14715), 7.92 MiB | 9.77 MiB/s, done.
Resolving deltas: 100% (724/724), done.
Updating files: 100% (11625/11625), done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h={href:"https://dongshanpi.cowtransfer.com/s/4d7394cfad3640",target:"_blank",rel:"noopener noreferrer"},m={href:"https://dongshanpi.cowtransfer.com/s/4d7394cfad3640",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"DongshanPI-Vision/br2-canaan-k510/",-1),k=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ ls
board                        external.desc   pkg-download
buildroot-2020.02.11         external.mk     README.md
Config.in                    LICENSE         release_notes.md
configs                      Makefile        toolchain
dl.tar.gz                    mkdtb-local.sh  tools
docs                         package
dongshanpi-vision_defconfig  patches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压压缩包dl.tar.gz文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ tar -xzvf dl.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压完成后可以在当前文件夹看到多出了一个名为<code>dl</code>文件夹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ ls
board                 dongshanpi-vision_defconfig  patches
buildroot-2020.02.11  external.desc                pkg-download
Config.in             external.mk                  README.md
configs               LICENSE                      release_notes.md
dl                    Makefile                     toolchain
dl.tar.gz             mkdtb-local.sh               tools
docs                  package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-获取交叉编译工具链" tabindex="-1"><a class="header-anchor" href="#_2-获取交叉编译工具链" aria-hidden="true">#</a> 2.获取交叉编译工具链</h2>`,6),x={href:"https://dongshanpi.cowtransfer.com/s/bc101fb198e746",target:"_blank",rel:"noopener noreferrer"},f={href:"https://dongshanpi.cowtransfer.com/s/bc101fb198e746",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"DongshanPI-Vision/br2-canaan-k510/toolchain",-1),D=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/toolchain$ ls
nds64le-elf-mculib-v5d.txz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压交叉编译工具链压缩包nds64le-elf-mculib-v5d.txz</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/toolchain$ tar -xvf nds64le-elf-mculib-v5d.txz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压完成后，请返回<code>DongshanPI-Vision/br2-canaan-k510</code>目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/toolchain$ cd ../
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-编译" tabindex="-1"><a class="header-anchor" href="#_3-编译" aria-hidden="true">#</a> 3.编译</h2><h3 id="_3-1-指定配置文件并编译系统" tabindex="-1"><a class="header-anchor" href="#_3-1-指定配置文件并编译系统" aria-hidden="true">#</a> 3.1 指定配置文件并编译系统</h3><p>在<code>DongshanPI-Vision/br2-canaan-k510</code>目录下，执行<code>make CONF=dongshanpi-vision_defconfig </code>，在SDK源码内指定DongshanPI-Vision开发板系统配置文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ make CONF=dongshanpi-vision_defconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230803161838977.png" alt="image-20230803161838977"></p><p>配置完成后会自动编译系统。</p><p>编译时间可能会比较长，需要您耐心等待。。。</p><p>当系统输出以下内容即代表编译成功。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803193255868.png" alt="image-20230803193255868"></p><p>编译完成后，会生成<code>dongshanpi-vision_defconfig</code>文件夹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ cd dongshanpi-vision_defconfig/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ ls
build  host  images  Makefile  nand_target  staging  target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中各文件描述如下：</p><table><thead><tr><th><strong>文件</strong></th><th><strong>内容描述</strong></th></tr></thead><tbody><tr><td>Makefile</td><td>编译镜像使用的Makefile。</td></tr><tr><td>build</td><td>所有源码包的编译目录。例如linux kernel，u-boot，BBL，busybox等，源码都会解压到build目录下并编译。</td></tr><tr><td>host</td><td>所有host package的安装路径，toolchain也会拷贝至此目录下，用于构建交叉编译环境。</td></tr><tr><td>images</td><td>编译生成的目标文件目录（详见下面的说明）</td></tr><tr><td>nand_target</td><td>根文件系统原始目录（生成NandFlash镜像使用）</td></tr><tr><td>target</td><td>根文件系统原始目录（生成eMMC和SD卡镜像使用）</td></tr></tbody></table><p>dongshanpi-vision_defconfig/images目录下是烧录镜像，其中各个文件的说明如下。</p><table><thead><tr><th><strong>文件</strong></th><th><strong>内容描述</strong></th></tr></thead><tbody><tr><td>bootm-bbl.img</td><td>Linux+bbl内核镜像（打包过内核的bbl目标文件，用于uboot引导bbl）</td></tr><tr><td>k510.dtb</td><td>设备树</td></tr><tr><td>sysimage-emmc.img</td><td>emmc烧录文件：已整个打包uboot_burn、kernel和bbl</td></tr><tr><td>sysImage-sdcard.img</td><td>sdcard烧录文件：已整个打包uboot_burn、kernel和bbl</td></tr><tr><td>sysImage-nand.img</td><td>nand烧录文件：已整个打包uboot_burn、kernel和bbl</td></tr><tr><td>u-boot.bin</td><td>uboot 二进制文件</td></tr><tr><td>u-boot_burn.bin</td><td>uboot 烧录文件</td></tr><tr><td>uboot-emmc.env</td><td>uboot环境变量：用于emmc启动</td></tr><tr><td>uboot-sd.env</td><td>uboot环境变量：用于sdcard启动</td></tr><tr><td>uboot-nand.env</td><td>uboot环境变量：用于nand启动</td></tr><tr><td>vmlinux</td><td>Linux内核镜像文件（带elf调试信息）</td></tr><tr><td>rootfs.ext2</td><td>buildroot格式rootfs ext2镜像文件</td></tr><tr><td>sysimage-sdcard-debian.img</td><td>sdcard烧录文件：卡镜像(debian格式rootfs)</td></tr></tbody></table><p>dongshanpi-vision_defconfig/build 目录下是所有被编译对象的源码，其中几个重要的文件说明如下。</p><table><thead><tr><th><strong>文件</strong></th><th><strong>内容描述</strong></th></tr></thead><tbody><tr><td>linux-xxx</td><td>被编译的 Linux kernel源码目录</td></tr><tr><td>uboot-xxx</td><td>被编译的 Uboot 源码目录</td></tr><tr><td>riscv-pk-k510-xxx</td><td>被编译的 bbl 源码目录</td></tr><tr><td>...</td><td></td></tr></tbody></table><p>注： xxx是版本号。后面章节引用kernle，bbl和uboot的路径时，xxx均表示版本号。</p><blockquote><p><strong>需要特别注意</strong>：当make clean 的时候，dongshanpi-vision_defconfig文件夹下所有内容将被删除。所以，如果需要修改kernel、bbl或者uboot代码，不要直接在build目录下修改，可以参考第4章内容，使用override source的方式。</p></blockquote><h3 id="_3-2-配置buildroot" tabindex="-1"><a class="header-anchor" href="#_3-2-配置buildroot" aria-hidden="true">#</a> 3.2 配置Buildroot</h3><p>在终端中的<code>DongshanPI-Vision/br2-canaan-k510</code>目录下输入配置 buildroot命令<code>make CONF=dongshanpi-vision_defconfig menuconfig</code>，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ make CONF=dongshanpi-vision_defconfig menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230803201609888.png" alt="image-20230803201609888"></p><p>执行完成后会进入buildroot配置界面，</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803202012123.png" alt="image-20230803202012123"></p><p>完成配置后保存并退出，用户可进入<code>dongshanpi-vision_defconfig</code>目录下执行<code>make</code>编译刚刚配置的文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ cd dongshanpi-vision_defconfig/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-配置-u-boot" tabindex="-1"><a class="header-anchor" href="#_3-3-配置-u-boot" aria-hidden="true">#</a> 3.3 配置 U-Boot</h3><p>当用户需要对 uboot配置进行修改，可进入<code>dongshanpi-vision_defconfig/build/uboot-origin_master</code>目录， 输入<code>vi .config</code>命令，修改U-Boot配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ <span class="token builtin class-name">cd</span> dongshanpi-vision_defconfig/build/uboot-origin_master
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ <span class="token function">vi</span> .config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803203428086.png" alt="image-20230803203428086"></p><p>执行完成后会使用vi编辑器进入uboot配置文件，如下所示，按照您的需要修改配置文件。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803203755608.png" alt="image-20230803203755608"></p><p>修改完成后，按下<code>esc</code>后，输入<code>:wq</code>，保存并退出uboot配置文件。</p><p>​ 当您修改完成uboot配置文件后，需要返回到<code>DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig</code>目录下执行<code>make uboot-rebuild</code>，重新编译uboot。如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build/uboot-origin_master$ cd ../../
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make uboot-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230803204402130.png" alt="image-20230803204402130"></p><h3 id="_3-4-编译u-boot" tabindex="-1"><a class="header-anchor" href="#_3-4-编译u-boot" aria-hidden="true">#</a> 3.4 编译U-boot</h3><p>dongshanpi-vision_defconfig/build/uboot-xxx 目录下保存有被编译的U-Boot源码，无论是用户对 U-Boot源代码进行了修改，还是对uboot 进行了重新配置，都需要重新编译U-Boot。</p><p>进入dongshanpi-vision_defconfig目录，输入如下命令重新编译 U-Boot：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> uboot-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成后，会在dongshanpi-vision_defconfig/images目录下生成新的 u-boot.bin 文件。</p><p>如果要用新u-boot重新生成烧录镜像文件，在<code>dongshanpi-vision_defconfig</code>目录下执行<code>make</code>，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成会看到如下镜像文件生成的信息。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803205346040.png" alt="image-20230803205346040"></p><h3 id="_3-5-配置-linux-kernel" tabindex="-1"><a class="header-anchor" href="#_3-5-配置-linux-kernel" aria-hidden="true">#</a> 3.5 配置 Linux kernel</h3><p>当用户需要对 kernel 配置进行修改，可进入k510_crb_lp3_v1_2_defconfig目录， 输入<code>make linux-menuconfig</code>命令启动 kernel 配置，如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make linux-menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入后会进入内核配置界面</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803205645988.png" alt="image-20230803205645988"></p><p>修改配置后退出menuconfig后，在dongshanpi-vision_defconfig目录，输入如下命令启动编译：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make linux-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-编译linux-kernel" tabindex="-1"><a class="header-anchor" href="#_3-6-编译linux-kernel" aria-hidden="true">#</a> 3.6 编译Linux kernel</h3><p>dongshanpi-vision_defconfig/build/linux-xxx 目录下保存有被编译的linux源码，无论是用户对 linux 源代码进行了修改，还是对linux 进行了重新配置，都需要重新编译linux 。</p><p>进入dongshanpi-vision_defconfig目录，输入如下命令重新编译 linux：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> linux-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make linux-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成后会在dongshanpi-vision_defconfig/images目录下生成新的vmlinux。</p><p>linux kernel镜像需要用bbl打包，重编linux kernel后，需要重编bbl生成新的bbl/kernel镜像用于u-boot引导，因此输入如下两条命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> riscv-pk-k510-dirclean
<span class="token function">make</span> riscv-pk-k510
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make riscv-pk-k510-dirclean
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make riscv-pk-k510
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230803210239243.png" alt="image-20230803210239243"></p><p>译完成，会在<code>dongshanpi-vision_defconfig/images</code>目录下生成新的<code>bootm-bbl.img</code>。</p><p>最后在<code>dongshanpi-vision_defconfig</code>目录下输入<code>make</code>，用新的bootm-bbl.img打包生成emmc和sd卡镜像文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成会看到如下镜像文件生成的信息。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803210645292.png" alt="image-20230803210645292"></p><h3 id="_3-7-编译-dts" tabindex="-1"><a class="header-anchor" href="#_3-7-编译-dts" aria-hidden="true">#</a> 3.7 编译 dts</h3><p>设备树文件<code>dongshanpi-vision.dts</code>位于<code>DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build/linux-origin_master/arch/riscv/boot/dts/canaan</code>目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build/linux-origin_master/arch/riscv/boot/dts/canaan$ ls
dongshanpi-vision.dts  k510_common  k510_crb_lp3_debian_v0_1.dts  k510_crb_lp3_hdmi_v1_2.dts  k510_crb_lp3_v0_1.dts  k510_crb_lp3_v1_2.dts  k510_evb_lp3_v1_1.dts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户只修改了设备树，可只对设备树进行编译和反编译。</p><p>返回<code>DongshanPI-Vision/br2-canaan-k510</code>目录编写一个 mkdtb-local.sh 脚本，其中的内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># !/bin/sh

set -Eeuo pipefail

export BUILDROOT=&quot;$(dirname &quot;$(realpath &quot;$0&quot;)&quot;)&quot;
export VARIANT=&quot;\${1:-dongshanpi-vision}&quot;

if [[ &quot;$VARIANT&quot; = *_defconfig ]]; then
        VARIANT=&quot;\${VARIANT:0:-10}&quot;
fi

export KERNEL_BUILD_DIR=&quot;\${BUILDROOT}/\${VARIANT}_defconfig/build/linux-origin_master&quot;
export BINARIES_DIR=&quot;$BUILDROOT/\${VARIANT}_defconfig/images&quot;
export PATH=&quot;$PATH:\${BUILDROOT}/\${VARIANT}_defconfig/host/bin&quot;

echo &quot;\${BUILDROOT}/\${VARIANT}_defconfig/host/bin&quot;

riscv64-linux-cpp  -nostdinc -I &quot;\${KERNEL_BUILD_DIR}/include&quot; -I &quot;\${KERNEL_BUILD_DIR}/arch&quot; -undef -x assembler-with-cpp &quot;\${KERNEL_BUILD_DIR}/arch/riscv/boot/dts/canaan/\${VARIANT}.dts&quot; &quot;\${BINARIES_DIR}/\${VARIANT}.dts.tmp&quot;

&quot;\${KERNEL_BUILD_DIR}/scripts/dtc/dtc&quot; -I dts -o &quot;\${BINARIES_DIR}/k510.dtb&quot; &quot;\${BINARIES_DIR}/\${VARIANT}.dts.tmp&quot;
&quot;\${KERNEL_BUILD_DIR}/scripts/dtc/dtc&quot; -I dtb -O dts &quot;\${BINARIES_DIR}/k510.dtb&quot; -o &quot;\${BINARIES_DIR}/all.dts&quot;

echo &quot;DONE&quot;
echo &quot;\${BINARIES_DIR}/k510.dtb&quot;
echo &quot;\${BINARIES_DIR}/all.dts&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>touch</code>命令创建<code>mkdtb-local.sh</code>脚本文件，使用vi编辑器将上面的内容填入<code>mkdtb-local.sh</code>脚本文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ touch mkdtb-local.sh
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ vi mkdtb-local.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完成后，此时该脚本还不是可执行脚本，需要给脚本文件增加可执行权限，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ chmod +x mkdtb-local.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>增加完成后运行编译脚本，运行结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ ./mkdtb-local.sh 
/home/ubuntu/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/host/bin
DONE
/home/ubuntu/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/images/k510.dtb
/home/ubuntu/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/images/all.dts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译完成在dongshanpi-vision_defconfig/images目录下的 k510.dtb是新生成的设备树数据库文件，all.dts是反编译后的设备树文件。</p><h3 id="_3-8-编译-app" tabindex="-1"><a class="header-anchor" href="#_3-8-编译-app" aria-hidden="true">#</a> 3.8 编译 app</h3><p>用户可参考 <code>package/hello_world</code> 中Config.in和makefile文件写法，构建自己的应用程序，用户应用程序放置到 DongshanPI-Vision/br2-canaan-k510/package 目录下。</p><p>这里以将 hello_world 工程放置到 DongshanPI-Vision/br2-canaan-k510/package 为例，来说明编译应用程序的过程。</p><p>在宿主机环境下修改DongshanPI-Vision/br2-canaan-k510目录下的Config.in文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ vi Config.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在Config.in 中添加package/hello_world/Config.in所在的路径并保存。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230804094508906.png" alt="image-20230804094508906"></p><p>在DongshanPI-Vision/br2-canaan-k510目录下输入配置 buildroot命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ make CONF=dongshanpi-vision_defconfig menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现buildroot配置页面，进入<code>External option</code>选项下，选中其中的hello_world后保存退出。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230804095038885.png" alt="image-20230804095038885"></p><p>保存退出后返回终端，在<code>DongshanPI-Vision/br2-canaan-k510</code>目录下，进入dongshanpi-vision_defconfig/目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510$ <span class="token builtin class-name">cd</span> dongshanpi-vision_defconfig/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app目录下，可以看到生成的hello应用程序，由此可判断应用程序是否被正确编译。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig$ cd target/app/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app$ ls
ai            crypto       dsp_log        gpio_keys    mailbox_demo  rtc     twod_app  wifi
aws_iot_test  drm_demo     dsp_scheduler  hello_world  mediactl_lib  server  uart      write_read_file
client        dsp_app_new  encode_app     lvgl         pwm           trng    watchdog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到app目录下生成了<code>hello_world</code>文件夹，进入该文件夹下可以看到对应的hello可执行程序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app$ cd hello_world/
ubuntu@ubuntu2004:~/DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/target/app/hello_world$ ls
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若已经编译过，只是对app进行编译并打包到烧录镜像中，执行步骤如下：</p><p>进入到DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig目录下，输入如下命令编译 hello应用程序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make hello_world-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230804120237589.png" alt="image-20230804120237589"></p><h2 id="_4-使用k510-sdk进行开发" tabindex="-1"><a class="header-anchor" href="#_4-使用k510-sdk进行开发" aria-hidden="true">#</a> 4.使用K510 SDK进行开发</h2><h3 id="_4-1-linux-kernel-bbl-uboot源码" tabindex="-1"><a class="header-anchor" href="#_4-1-linux-kernel-bbl-uboot源码" aria-hidden="true">#</a> 4.1 linux kernel/BBL/uboot源码</h3><p>本sdk使用的uboot版本是2020.01，uboot补丁目录是package/patches/uboot，打完补丁后的目录是dongshanpi-vision_defconfig/build/uboot-2020.01。</p><p>本sdk使用的kernel版本是4.17，kernel补丁目录是package/patches/linux，打完补丁后的目录是dongshanpi-vision_defconfig/build/linux-4.17。</p><p>本sdk的 BBL作为一个target package，放在package/riscv-pk-k510/目录下，riscv-pk-k510.mk中指定了bbl的代码源和版本号：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RISCV_PK_K510_VERSION = d645baf2964c3088f8cb08b4600e8f9f0fdeca4e
RISCV_PK_K510_SITE = https://github.com/kendryte/k510_BBL.git
RISCV_PK_K510_SITE_METHOD = git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-开发linux-kernel-bbl-uboot" tabindex="-1"><a class="header-anchor" href="#_4-2-开发linux-kernel-bbl-uboot" aria-hidden="true">#</a> 4.2 开发linux kernel/BBL/uboot</h3><p>Buildroot下编译的每一个pacakge，包括linux kernel/BBL/uboot，都是通过下载tarball，解压，配置，编译，安装等统一的包管理步骤来实现的，因此在DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/build目录下虽然可以看到全部的源码，但是都没有版本控制信息，即使代码是从git 仓库下载的。</p><p>虽然在dl/目录下可以看到包含了git仓库数据的kernel/BBL/uboot源码，但是buildroot仅仅把dl目录下的源码作为缓存，不建议直接在这个目录的进行开发。</p><p>针对开发模式，buildroot提供了OVERRIDE_SRCDIR的方式。</p><p>简单来说就是可以在dongshanpi-vision_defconfig目录下添加一个local.mk文件，在里面添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;pkg1&gt;_OVERRIDE_SRCDIR = /path/to/pkg1/sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>LINUX 是kernel的package name</li><li>UBOOT 是uboot的PACKAGE name</li><li>RISCV_PK_K510 是bbl的package name</li></ul><p>我们以linux kernel为例，介绍如何使用。 假设我已经在/data/yourname/workspace/k510_linux_kernel目录下clone了kernel的代码，并做了修改，想要在buildroot下编译并在DongshanPI-Vision开发板上测试，可以在dongshanpi-vision_defconfig目录下创建一个local.mk并添加如下内容:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LINUX_OVERRIDE_SRCDIR = /data/yourname/workspace/k510_linux_kernel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在dongshanpi-vision_defconfig目录下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> linux-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以看到build/linux-custom目录下重新编译了kernel，用的就是/data/yourname/workspace/k510_linux_kernel下修改过的代码。 uboot和bbl也类似。这样就可以直接修改内核代码并在buildroot下重编内核，增量编译镜像去测试。</p><p>注： override的源码在dongshanpi-vision_defconfig/build目录下的目录名称会加上custom的后缀，来区分buildroot的默认配置中的每个package的代码源的不同。例如上述linux kernel的例子，编译会看到override指定的代码是在dongshanpi-vision_defconfig/build/linux-custom目录下编译，而不是之前我们看到的dongshanpi-vision_defconfig/build/linux-xxx目录。</p><p>对于package目录下的其他代码，或者buildroot原生的package，都可以通过这种方式在buildroot的框架下进行开发工作。</p><h2 id="_5-烧录镜像" tabindex="-1"><a class="header-anchor" href="#_5-烧录镜像" aria-hidden="true">#</a> 5.烧录镜像</h2><p>DongshanPI-Vision开发板支持sdcard和eMMC启动方式，每次编译时在DongshanPI-Vision/br2-canaan-k510/dongshanpi-vision_defconfig/image目录下将同时生成sysimage-sdcard.img和sysimg-emmc.img镜像文件，两份文件可分别烧录到sdcard和eMMC。</p><p>DongshanPI-Vision开发板通过 BOOT0 和 BOOT1 两个硬件管脚的状态决定芯片启动方式，具体设置请参考开发板的启动说明章节。</p><table><thead><tr><th>BOOT1</th><th>BOOT0</th><th>启动方式</th></tr></thead><tbody><tr><td>0(ON)</td><td>0(ON)</td><td>串口启动</td></tr><tr><td>0(ON)</td><td>1(OFF)</td><td>SD卡启动</td></tr><tr><td>1(OFF)</td><td>0(ON)</td><td>NANDFLASH启动</td></tr><tr><td>1(OFF)</td><td>1(OFF)</td><td>EMMC启动</td></tr></tbody></table><h3 id="_5-1-windows下烧录镜像" tabindex="-1"><a class="header-anchor" href="#_5-1-windows下烧录镜像" aria-hidden="true">#</a> 5.1 Windows下烧录镜像</h3>`,136),V={href:"https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/04-UpdateSystem.html",target:"_blank",rel:"noopener noreferrer"};function P($,R){const i=t("ExternalLinkIcon");return o(),l("div",null,[u,n("ul",null,[n("li",null,[n("p",null,[e("VMware虚拟机工具："),n("a",c,[e("VMware下载中心"),a(i)])])]),n("li",null,[b,n("ul",null,[n("li",null,[e("奶牛快传："),n("a",g,[e("DongshanPI-Vision虚拟机-Ubuntu20.04.zip"),a(i)])]),n("li",null,[e("百度网盘："),n("a",p,[e("DongshanPI-Vision虚拟机-Ubuntu20.04.zip"),a(i)])])])])]),v,n("p",null,[e("下载系统拓展压缩包："),n("a",h,[e("dl.tar.gz"),a(i)]),e("。获取拓展压缩包"),n("a",m,[e("dl.tar.gz"),a(i)]),e("文件后，需要您手动下载并传入Ubuntu中的"),_,e("目录下，如下所示：")]),k,n("p",null,[e("​ 交叉编译工具链下载地址："),n("a",x,[e("https://dongshanpi.cowtransfer.com/s/bc101fb198e746"),a(i)])]),n("p",null,[e("​ 下载交叉编译工具链压缩包"),n("a",f,[e("nds64le-elf-mculib-v5d.txz"),a(i)]),e("，下载完成后将压缩包传入"),I,e("目录下，如下所示：")]),D,n("p",null,[e("对于Windows下如何烧录eMMC镜像和sdcard镜像，请访问"),n("a",V,[e("《更新系统》"),a(i)]),e("。")])])}const w=s(r,[["render",P],["__file","01-SystemDevelopmentGuide.html.vue"]]);export{w as default};
