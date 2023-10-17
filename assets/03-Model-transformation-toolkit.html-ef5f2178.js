import{_ as a,r as t,o as s,c as d,a as e,d as l,e as i}from"./app-21fd3c9b.js";const o={},c=i('<h1 id="配置npu工具包" tabindex="-1"><a class="header-anchor" href="#配置npu工具包" aria-hidden="true">#</a> 配置NPU工具包</h1><h2 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言" aria-hidden="true">#</a> 0.前言</h2><p>NPU 使用的模型是 NPU 自定义的一类模型结构，不能直接将网络训练出的模型直接导入 NPU 进行计算。这就需要将网络训练出的转换模型到 NPU 的模型上。</p><p><img src="https://v853.docs.aw-ol.com/assets/img/dev_npu/image-20220712112951142.png" alt="img"></p><p>NPU 系统的模型部署流程一般包括以下四个部分：</p>',5),p={href:"https://v853.docs.aw-ol.com/assets/img/dev_npu/image-20220712110126757.png",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://v853.docs.aw-ol.com/assets/img/dev_npu/image-20220712110126757.png",alt:"image-20220712110126757"},null,-1),r=i(`<p>V853 支持的常用深度学习框架模型有：</p><ul><li>TensorFlow</li><li>Caffe</li><li>TFLite</li><li>Keras</li><li>Pytorch</li><li>Onnx NN</li><li>Darknet</li></ul><p>本文针对NPU使用的模型转换工具的安装使用进行讲解，本文主要使用<code> Verisilicon Tool Acuity Toolkit</code>工具，主要用于模型转换，该工具目前只支持Linux 发行版Ubuntu 20.04。</p><p>下载地址：https://netstorage.allwinnertech.com:5001/sharing/ZIruS49kj</p><p>模型仿真工具使用指南：</p><h2 id="_1-配置模型转换工具环境" tabindex="-1"><a class="header-anchor" href="#_1-配置模型转换工具环境" aria-hidden="true">#</a> 1.配置模型转换工具环境</h2><p>下载虚拟机环境：https://www.linuxvmimages.com/images/ubuntu-2004/</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230510181541648.png" alt="image-20230510181541648"></p><p>下载完成后解压，解压完成后使用VMware软件打开<code>Ubuntu_20.04.4_VM_LinuxVMImages.COM.vmx</code>文件。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230510190806827.png" alt="image-20230510190806827"></p><p>等待Ubuntu20.04虚拟机打开，打开完成后，下载对应依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install -y python3 python3-dev python3-pip build-essential 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-安装模型仿真工具" tabindex="-1"><a class="header-anchor" href="#_2-安装模型仿真工具" aria-hidden="true">#</a> 2.安装模型仿真工具</h2><p>安装前声明：如果是个人开发者可能无法申请到<code>Lincese</code>使用全部功能。我们仅需要使用其模型转换的功能，该部分功能不需要申请<code>Lincese</code>。</p><p>将下载的<code>Verisilicon_Tool_VivanteIDE</code>，传入虚拟机的任意目录中。假设将该文件下载后的文件名称为<code>V853 NPU Toolkits.zip</code>，在Windows电脑端解压该文件，解压完成后，进入<code>V853 NPU Toolkits\\NPU</code>目录下，将下图中的<code>Verisilicon_Tool_VivanteIDE_v5.7.0_CL470666_Linux_Windows_SDK_p6.4.x_dev_6.4.10_22Q1_CL473325A_20220425.tar</code>文件拷贝到Ubuntu20.04中。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511102613439.png" alt="image-20230511102613439"></p><p>拷贝到虚拟机的目录下，下图所示：</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511102942773.png" alt="image-20230511102942773"></p><p>在压缩包目录下，解压压缩包文件，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ tar xvf Verisilicon_Tool_VivanteIDE_v5.7.0_CL470666_Linux_Windows_SDK_p6.4.x_dev_6.4.10_22Q1_CL473325A_20220425.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511103317254.png" alt="image-20230511103317254"></p><p>解压完成后，会在当前目录下解压出以下文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── doc
│   ├── Vivante.IDE.Release.Notes.pdf
│   └── Vivante_IDE_User_Guide.pdf
├── Vivante_IDE-5.7.0_CL470666-Linux-x86_64-04-24-2022-18.55.31-plus-W-p6.4.x_dev_6.4.10_22Q1_CL473325A-Install
└── Vivante_IDE-5.7.0_CL470666-Win32-x86_64-04-24-2022-18.36.02-plus-W-p6.4.x_dev_6.4.10_22Q1_CL473325A-Setup.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>doc/</code>目录下有：</p><p>仿真工具的IDE版本说明<code>Vivante.IDE.Release.Notes.pdf</code></p><p>仿真工具的用户指南<code>Vivante_IDE_User_Guide.pdf</code></p><p>当前目录下有：</p><p>Linux仿真工具安装包：</p><p><code>Vivante_IDE-5.7.0_CL470666-Linux-x86_64-04-24-2022-18.55.31-plus-W-p6.4.x_dev_6.4.10_22Q1_CL473325A-Install</code></p><p>Windows仿真工具安装包：</p><p><code>Vivante_IDE-5.7.0_CL470666-Win32-x86_64-04-24-2022-18.36.02-plus-W-p6.4.x_dev_6.4.10_22Q1_CL473325A-Setup.exe</code></p><p>由于我们是在Ubuntu下的Linux环境中安装仿真工具，所以需要使用Linux仿真工具安装包，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ ./Vivante_IDE-5.7.0_CL470666-Linux-x86_64-04-24-2022-18.55.31-plus-W-p6.4.x_dev_6.4.10_22Q1_CL473325A-Install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511104911709.png" alt="image-20230511104911709"></p><p>执行完后，会弹出以下对话框，点击<code>Yes</code></p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105020389.png" alt="image-20230511105020389"></p><p>点击<code>Next</code></p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105159542.png" alt="image-20230511105159542"></p><p>阅读许可协议，点击接受许可协议，再点击<code>Next</code></p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105314275.png" alt="image-20230511105314275"></p><p>可以自定义安装路径，这里我使用默认安装路径。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105509716.png" alt="image-20230511105509716"></p><p>选择<code> License</code> 许可文件， 没有许可文件点击 Next 跳过，之后在IDE中添加。企业客户可以根据后续步骤获取<code> License</code> ，个人开发者不申请<code> License</code> 也可以使用模型转换功能。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105553859.png" alt="image-20230511105553859"></p><p>点击<code>Next</code></p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105822651.png" alt="image-20230511105822651"></p><p>等待安装完成</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105848028.png" alt="image-20230511105848028"></p><p>安装完成后，点击<code>Finish</code></p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511105938428.png" alt="image-20230511105938428"></p><p>经过上述步骤仿真工具IDE就已经安装完成了，我们可以进入<code>VeriSilicon/VivanteIDE5.7.0/ide/</code>目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ cd VeriSilicon/VivanteIDE5.7.0/ide/
ubuntu@ubuntu2004:~/VeriSilicon/VivanteIDE5.7.0/ide$ ls
3ds          about.html  artifacts.xml  epl-v10.html  history.txt  libcairo-swt.so  p2       readme     setenv-vivanteide5.7.0     VivanteIDE       VivanteIDE.ini
about_files  acuityc     configuration  features      icon.xpm     notice.html      plugins  resources  uninstall-vivanteide5.7.0  vivanteide5.7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该目录下<code>vivanteide5.7.0</code>即为仿真工具IDE的应用程序，使用如下命令即可运行应用程序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/VeriSilicon/VivanteIDE5.7.0/ide$ ./vivanteide5.7.0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动后，会需要您创建工作空间，这里我使用默认配置，点击OK即可。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511110543268.png" alt="image-20230511110543268"></p><p>等待IDE工具配置完成后，会进入应用程序，这里会需要您输入<code>License</code>。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511110700031.png" alt="image-20230511110700031"></p><p>如果您是个人开发者，那您可直接关闭该应用程序，后续开发不使用该仿真工具也是可以正常进行开发的。</p><p>如果您是企业客户，您可进入芯原官网，填写公司相关信息后，获取到<code>License</code>。</p><p>License申请地址：https://www.verisilicon.com/cn/VIPAcuityIDELicenseRequest</p><p>注意：申请<code>License</code>时需要使用企业邮箱，不能使用个人邮箱申请。</p><h2 id="_2-安装模型转换工具" tabindex="-1"><a class="header-anchor" href="#_2-安装模型转换工具" aria-hidden="true">#</a> 2.安装模型转换工具</h2><h3 id="_2-1-配置环境" tabindex="-1"><a class="header-anchor" href="#_2-1-配置环境" aria-hidden="true">#</a> 2.1 配置环境</h3><p>将下载的<code>Verisilicon Tool Acuity Toolkit</code>，传入虚拟机的任意目录中。假设将该文件下载后的文件名称为<code>V853 NPU Toolkits.zip</code>，在Windows电脑端解压该文件，解压完成后，进入<code>V853 NPU Toolkits\\NPU</code>目录下，将下图中的<code>Vivante_acuity_toolkit_binary_6.6.1_20220329_ubuntu20.04.tgz</code>拷贝Ubuntu20.04中。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511101434413.png" alt="image-20230511101434413"></p><p>拷贝到虚拟机目录下，如下图所示：</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511103013759.png" alt="image-20230511103013759"></p><p>拷贝完成后解压该工具包，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ tar xvf Vivante_acuity_toolkit_binary_6.6.1_20220329_ubuntu20.04.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待解压完成，解压完成后会在当前目录下得到一个<code>acuity-toolkit-binary-6.6.1</code>文件夹</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511111416848.png" alt="image-20230511111416848"></p><p>将该文件夹拷贝到仿真IDE目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ mv acuity-toolkit-binary-6.6.1 /home/ubuntu/VeriSilicon/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：<code>/home/ubuntu/VeriSilicon/</code>该路径需要更换成之前您的IDE安装路径。</p><p>进入<code>acuity-toolkit-binary-6.6.1</code>文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ cd VeriSilicon/acuity-toolkit-binary-6.6.1/
ubuntu@ubuntu2004:~/VeriSilicon/acuity-toolkit-binary-6.6.1$ ls
bin  build_linux.sh  COPYRIGHTS  lenet  LICENSE  README.md  requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于模型转换还需要安装一些包，所需的包已经放在了<code>requirements.txt</code>目录下，所以需要输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/VeriSilicon/acuity-toolkit-binary-6.6.1$ pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待下载完成。由于默认PIP源下载较慢，所以推荐换源后，再下载包。换源方法例如更换清华源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/VeriSilicon/acuity-toolkit-binary-6.6.1$ pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
Writing to /home/ubuntu/.config/pip/pip.conf
ubuntu@ubuntu2004:~/VeriSilicon/acuity-toolkit-binary-6.6.1$ pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511115249711.png" alt="image-20230511115249711"></p><p><strong>FAQ</strong>：</p><p>注意安装时如果提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RROR: launchpadlib 1.10.13 requires testresources, which is not installed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511115732023.png" alt="image-20230511115732023"></p><p>需要手动安装<code>launchpadlib</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/VeriSilicon/acuity-toolkit-binary-6.6.1$ pip install launchpadlib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后重新执行<code>pip install -r requirements.txt</code>即可。</p><h3 id="_2-2-配置路径" tabindex="-1"><a class="header-anchor" href="#_2-2-配置路径" aria-hidden="true">#</a> 2.2 配置路径</h3><p>配置路径，使您可以再任意目录都可以使用。这里提供 2 种方法配置。</p><p>（1）使用命令配置</p><p>在<code>home</code>目录下，进入仿真工具IDE的安装路径<code>VeriSilicon</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ cd VeriSilicon/
ubuntu@ubuntu2004:~/VeriSilicon$ pwd
/home/ubuntu/VeriSilicon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行下面的命令一键设置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export ACTU_BASE=$(ls | grep acu*) &amp;&amp; \\
    export ACTU_IDE_BASE=$(ls | grep *IDE*) &amp;&amp; \\
    echo -e &quot;ACUITY_TOOLS_METHOD=&#39;$PWD/$ACTU_BASE&#39;\\nexport ACUITY_PATH=&#39;$PWD/$ACTU_BASE/bin/&#39;\\nexport VIV_SDK=&#39;$PWD/$ACTU_IDE_BASE/cmdtools&#39;\\nexport PATH=$PATH:$PWD/$ACTU_BASE/bin/:$PWD/$ACTU_IDE_BASE/ide/\\nexport pegasus=$PWD/$ACTU_BASE/bin/pegasus\\nalias pegasus=$PWD/$ACTU_BASE/bin/pegasus&quot; &gt;&gt; ~/.bashrc &amp;&amp; \\
    source ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）手动编辑配置</p><p>手动编辑 <code>~/.bashrc</code> ，配置下列内容。在终端中输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi ~/.bashrc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件的末尾，添加</p><p><code>/home/ubuntu/VeriSilicon/</code> 修改为之前的安装路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ACUITY_TOOLS_METHOD=&#39;/home/ubuntu/VeriSilicon/acuity-toolkit-binary-6.6.1&#39;
export ACUITY_PATH=&#39;/home/ubuntu/VeriSilicon/acuity-toolkit-binary-6.6.1/bin/&#39;
export VIV_SDK=&#39;/home/ubuntu/VeriSilicon/VivanteIDE5.7.0/cmdtools&#39;
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/ubuntu/VeriSilicon/acuity-toolkit-binary-6.6.1/bin/:/home/ubuntu/VeriSilicon/VivanteIDE5.7.0/ide/
export pegasus=/home/ubuntu/VeriSilicon/acuity-toolkit-binary-6.6.1/bin/pegasus
alias pegasus=/home/ubuntu/VeriSilicon/acuity-toolkit-binary-6.6.1/bin/pegasus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后 <code>.bashrc</code> 是这样的</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511131910396.png" alt="image-20230511131910396"></p><p>配置完成后，保存并退出配置界面，在终端输入<code>source ~/.bashrc</code>，激活配置文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~$ source ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此模型转换工具就安装完成了，输入<code>pegasus help</code>命令，测试工具是否生效。</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20230511132344888.png" alt="image-20230511132344888"></p>`,108);function v(m,g){const n=t("ExternalLinkIcon");return s(),d("div",null,[c,e("p",null,[e("a",p,[u,l(n)])]),r])}const h=a(o,[["render",v],["__file","03-Model-transformation-toolkit.html.vue"]]);export{h as default};
