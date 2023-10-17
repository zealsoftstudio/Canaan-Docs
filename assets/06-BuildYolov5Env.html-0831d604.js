import{_ as t,r as l,o,c as d,a as e,b as n,d as a,e as s}from"./app-21fd3c9b.js";const r={},c=e("h1",{id:"yolov5环境搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yolov5环境搭建","aria-hidden":"true"},"#"),n(" YOLOV5环境搭建")],-1),p=e("p",null,[e("strong",null,"PC主机端要求：")],-1),v=e("ul",null,[e("li",null,"显卡，显存4GB以上（无显卡，纯CPU训练较慢）"),e("li",null,"内存16GB以上"),e("li",null,"硬盘100GB以上（建议200GB以上）"),e("li",null,"系统：Windows10/11系统")],-1),u=e("p",null,[e("strong",null,"软件要求：")],-1),m={href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jetbrains.com/pycharm/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"本章节主要讲述目标检测算法YOLOV5基本环境的搭建，如果您想在本地电脑中训练部署模型到开发板端。",-1),g=e("h2",{id:"_1-yolov5介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-yolov5介绍","aria-hidden":"true"},"#"),n(" 1.YOLOV5介绍")],-1),y={href:"https://arxiv.org/pdf/1506.02640.pdf",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/ultralytics/yolov5",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[e("img",{src:"http://photos.100ask.net/canaan-docs/splash.jpg",alt:"img"})],-1),f={href:"https://docs.ultralytics.com/yolov5/",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"_2-yolov5环境搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-yolov5环境搭建","aria-hidden":"true"},"#"),n(" 2.YOLOV5环境搭建")],-1),O={href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"conda",-1),L={href:"https://www.jetbrains.com/pycharm/download/?section=windows",target:"_blank",rel:"noopener noreferrer"},C=s(`<p>PyCharm主要用于查看、修改、编写代码，当然其自带的依赖安装功能也是十分好用的，推荐大家使用学习。</p><h3 id="_2-1-搭建python环境" tabindex="-1"><a class="header-anchor" href="#_2-1-搭建python环境" aria-hidden="true">#</a> 2.1 搭建Python环境</h3><p>打开Conda终端，创建Python3.7的Conda环境，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create -n py37_yolov5 python=3.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完成后，进入<code>py37_yolov5</code>环境下，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda activate py37_yolov5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下图所示，前面括号原本是base，现在变成了<code>py37_yolov5</code>说明显示已经进入刚刚创建的Python3.7环境下，可以在该环境下安装不同版本的包且不影响其他环境。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230727180808585.png" alt="image-20230727180808585"></p><h3 id="_2-2-安装pytorch和cuda" tabindex="-1"><a class="header-anchor" href="#_2-2-安装pytorch和cuda" aria-hidden="true">#</a> 2.2 安装Pytorch和cuda</h3><p>两者的安装顺序没有要求，但都有版本要求。简而言之：两者版本需要对应，一个高版本和一个低版本会导致CUDA无法使用。</p><p>需要查了显卡驱动版本，查看方式如下：</p><p><img src="http://photos.100ask.net/canaan-docs/yolov5-EnvironmentalConstruction.gif" alt="yolov5-EnvironmentalConstruction"></p>`,12),P={href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#id4",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[e("img",{src:"http://photos.100ask.net/canaan-docs/image-20230627170953684.png",alt:"image-20230627170953684"})],-1),q={href:"https://www.nvidia.cn/geforce/drivers/",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"下面我安装CUDA11.3版本的，以满足更多客户的需要。",-1),A={href:"https://pytorch.org/",target:"_blank",rel:"noopener noreferrer"},M=s(`<p><img src="http://photos.100ask.net/canaan-docs/pytorch-EnvironmentalConfig.gif" alt="pytorch-EnvironmentalConfig"></p><p>将复制出来的命令，粘贴至终端输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda install pytorch==1.10.0 torchvision==0.11.0 torchaudio==0.10.0 cudatoolkit=11.3 -c pytorch -c conda-forge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试安装的pytorch是否可用</p><p>在Conda终端输入<code>python</code>后，加载torch模块，打印cuda是否可用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(py37_yolov5) C:\\Users\\100askTeam&gt;python
Python 3.7.16 (default, Jan 17 2023, 16:06:28) [MSC v.1916 64 bit (AMD64)] :: Anaconda, Inc. on win32
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; import torch
&gt;&gt;&gt; torch.cuda.is_available()
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-获取yolov5-v6-0源码" tabindex="-1"><a class="header-anchor" href="#_2-3-获取yolov5-v6-0源码" aria-hidden="true">#</a> 2.3 获取YOLOV5-V6.0源码</h3>`,7),T={href:"https://github.com/ultralytics/yolov5/archive/refs/tags/v6.0.zip",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/ultralytics/yolov5/releases",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,[n("​ 下载"),e("code",null,"yolov5-6.0.zip"),n("压缩包后，请记住您下载压缩包保存的位置。如果您无法完成下载，我们有提供国内的站点供您下载：")],-1),U={href:"https://dongshanpi.cowtransfer.com/s/a8d5f9b4faec4c",target:"_blank",rel:"noopener noreferrer"},B=s(`<p>解压<code>yolov5-6.0.zip</code>压缩包，解压完成后会获取<code>yolov5-6.0</code>文件夹，进入该文件夹下可以发现\`\`yolov5-6.0\`文件夹,再次点击进入即可进入yolov5项目文件夹，如下图所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230727180505920.png" alt="image-20230727180505920"></p><h3 id="_2-4-安装yolov5-v6-0版本依赖包" tabindex="-1"><a class="header-anchor" href="#_2-4-安装yolov5-v6-0版本依赖包" aria-hidden="true">#</a> 2.4 安装YOLOV5-V6.0版本依赖包</h3><p>使用Anaconda Prompt (Anaconda3)软件，进入yolov5项目目录中，Anaconda Prompt (Anaconda3)默认会位于您的c盘中的用户目录中，假设我的用户名为<code>100askTeam</code>，此时会位于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(py37_yolov5) C:\\Users\\100askTeam&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您想访问其他盘符，假设我想访问D盘，可输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230727182754515.png" alt="image-20230727182754515"></p><p>进入yolov5项目目录，这里需要修改为您具体的路径，输入<code>cd</code>+具体路径即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(py37_yolov5) D:\\&gt;cd D:\\Programmers\\ModelDeployment\\2.yolov5\\yolov5-6.0

(py37_yolov5) D:\\Programmers\\ModelDeployment\\2.yolov5\\yolov5-6.0&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装前，查看已经安装的依赖包，输入<code>pip list</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(py37_yolov5) D:\\Programmers\\ModelDeployment\\2.yolov5\\yolov5-6.0&gt;pip list
Package           Version
----------------- --------
certifi           2023.5.7
cycler            0.11.0
fonttools         4.38.0
kiwisolver        1.4.4
numpy             1.21.6
packaging         23.1
Pillow            9.2.0
pip               22.3.1
pyparsing         3.1.0
python-dateutil   2.8.2
setuptools        65.6.3
six               1.16.0
torch             1.10.0
torchaudio        0.10.0
torchvision       0.11.0
typing_extensions 4.6.3
wheel             0.38.4
wincertstore      0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看源码目录中的依赖文件<code>requirements.txt</code>可知，这里我不建议直接输入<code>pip install -r requirements.txt</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># pip install -r requirements.txt

# Base ----------------------------------------
matplotlib&gt;=3.2.2
numpy&gt;=1.18.5
opencv-python&gt;=4.1.2
Pillow&gt;=7.1.2
PyYAML&gt;=5.3.1
requests&gt;=2.23.0
scipy&gt;=1.4.1
torch&gt;=1.7.0
torchvision&gt;=0.8.1
tqdm&gt;=4.41.0

# Logging -------------------------------------
tensorboard&gt;=2.4.1
# wandb

# Plotting ------------------------------------
pandas&gt;=1.1.4
seaborn&gt;=0.11.0

# Export --------------------------------------
# coremltools&gt;=4.1  # CoreML export
# onnx&gt;=1.9.0  # ONNX export
# onnx-simplifier&gt;=0.3.6  # ONNX simplifier
# scikit-learn==0.19.2  # CoreML quantization
# tensorflow&gt;=2.4.1  # TFLite export
# tensorflowjs&gt;=3.9.0  # TF.js export

# Extras --------------------------------------
# albumentations&gt;=1.0.3
# Cython  # for pycocotools https://github.com/cocodataset/cocoapi/issues/172
# pycocotools&gt;=2.0  # COCO mAP
# roboflow
thop  # FLOPs computation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我建议在Conda命令中单独安装所需的依赖，查漏补缺，缺少了哪个依赖包就补充哪一个即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install opencv-python==4.7.0.68 -i https://pypi.doubanio.com/simple/
pip install matplotlib==3.5.3 -i https://pypi.doubanio.com/simple/
pip install PyYAML==6.0 -i https://pypi.doubanio.com/simple/
pip install requests==2.28.2 -i https://pypi.doubanio.com/simple/
pip install tqdm==4.64.1 -i https://pypi.doubanio.com/simple/
pip install tensorboard==2.11.2 -i https://pypi.doubanio.com/simple/
pip install pandas==1.1.5 -i https://pypi.doubanio.com/simple/
pip install seaborn==0.12.2 -i https://pypi.doubanio.com/simple/
pip install coremltools==4.1 -i https://pypi.doubanio.com/simple/
pip install onnx==1.13.0 -i https://pypi.doubanio.com/simple/
pip install onnxruntime==1.8.0 -i https://pypi.doubanio.com/simple/
pip install onnxsim==0.4.13 -i https://pypi.doubanio.com/simple/
pip install scikit-learn==0.19.2 -i https://pypi.doubanio.com/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，查看依赖包列表如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Package                 Version
----------------------- --------
absl-py                 1.4.0
attr                    0.3.2
attrs                   23.1.0
cachetools              5.3.0
certifi                 2023.5.7
charset-normalizer      3.1.0
colorama                0.4.6
coremltools             4.1
cycler                  0.11.0
fonttools               4.38.0
google-auth             2.20.0
google-auth-oauthlib    0.4.6
grpcio                  1.56.0
idna                    3.4
importlib-metadata      6.6.0
kiwisolver              1.4.4
Markdown                3.4.3
markdown-it-py          2.2.0
MarkupSafe              2.1.2
matplotlib              3.5.3
mdurl                   0.1.2
mpmath                  1.3.0
numpy                   1.19.5
oauthlib                3.2.2
onnx                    1.13.0
onnxsim                 0.4.13
opencv-python           4.7.0.68
packaging               23.1
pandas                  1.1.5
Pillow                  9.2.0
pip                     22.3.1
protobuf                3.20.3
pyasn1                  0.5.0
pyasn1-modules          0.3.0
Pygments                2.15.1
pyparsing               3.1.0
python-dateutil         2.8.2
pytz                    2023.3
PyYAML                  6.0
requests                2.28.2
requests-oauthlib       1.3.1
rich                    13.3.5
rsa                     4.9
scikit-learn            0.19.2
scipy                   1.7.3
seaborn                 0.12.2
setuptools              65.6.3
six                     1.16.0
sympy                   1.10.1
tensorboard             2.11.2
tensorboard-data-server 0.6.1
tensorboard-plugin-wit  1.8.1
torch                   1.10.0
torchaudio              0.10.0
torchvision             0.11.0
tqdm                    4.64.1
typing_extensions       4.6.3
urllib3                 1.26.15
Werkzeug                2.2.3
wheel                   0.38.4
wincertstore            0.2
zipp                    3.15.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试yolov5环境" tabindex="-1"><a class="header-anchor" href="#_3-测试yolov5环境" aria-hidden="true">#</a> 3. 测试YOLOV5环境</h2><h3 id="_3-1-测试检测模型" tabindex="-1"><a class="header-anchor" href="#_3-1-测试检测模型" aria-hidden="true">#</a> 3.1 测试检测模型</h3>`,21),j={href:"https://github.com/ultralytics/yolov5/releases/download/v6.0/yolov5s.pt",target:"_blank",rel:"noopener noreferrer"},N=s(`<blockquote><p>虽然执行python detect.py后会自动下载，但是考虑到不同客户的网络状况，建议提前手动下载。</p></blockquote><p>将模型文件下载后，拷贝到YOLOV5-V6.0源码目录，如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230619162921742.png" alt="image-20230619162921742"></p><p>在Conda终端中输入<code>python detect.py </code>进行测试，如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230627174555099.png" alt="image-20230627174555099"></p><p>可以看到已经可以检测出CUDA显卡设备号0。（该显卡）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>YOLOv5  2021-10-12 torch 1.10.0 CUDA:0 (NVIDIA GeForce RTX 3060, 12287.5MB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检测结果位于：<code>runs/detect/exp</code>目录下。后续再次检测会保存在<code>exp*</code>，其中<code>*</code>会以数字命名。</p><p>下面展示检测后结果图：</p><p><img src="http://photos.100ask.net/canaan-docs/bus-1690512289615-8.jpg" alt="bus"></p><p><img src="http://photos.100ask.net/canaan-docs/zidane.jpg" alt="bus"></p><h3 id="_3-2-测试导出模型" tabindex="-1"><a class="header-anchor" href="#_3-2-测试导出模型" aria-hidden="true">#</a> 3.2 测试导出模型</h3><p>执行export.py函数前需要需要确保已经安装了onnx包，在终端输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python export.py --weights yolov5s.pt --include onnx --dynamic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230627174934964.png" alt="image-20230627174934964"></p><p>导出的模型位于yolov5项目目录中，模型名称为<code>yolov5s.onnx</code>，如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230619164141069.png" alt="image-20230619164141069"></p><h3 id="_3-3-测试训练模型" tabindex="-1"><a class="header-anchor" href="#_3-3-测试训练模型" aria-hidden="true">#</a> 3.3 测试训练模型</h3><p>在终端输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python train.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230627182900796.png" alt="image-20230627182900796"></p><p>训练结果会保存在<code>runs/train/exp</code>目录下。后续再次训练会保存在<code>exp*</code>，其中<code>*</code>会以数字命名。</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="_1-测试检测模型报错" tabindex="-1"><a class="header-anchor" href="#_1-测试检测模型报错" aria-hidden="true">#</a> 1 测试检测模型报错</h3><p>​ 如果您执行<code>python detect.py</code>命令时，遇到如下报错：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728102504455.png" alt="image-20230728102504455"></p><p><strong>原因：</strong></p><p>pytorch版本过高，可以通过修改代码或者降低版本。</p><p><strong>解决办法：</strong></p><p>​ 下面我使用修改代码的方式解决：</p><p>​ 修改<code>D:\\Anaconda3\\envs\\my-yolov5-env\\lib\\site-packages\\torch\\nn\\modules\\upsampling.py</code>文件中的Upsample类中forward函数的返回值。</p><blockquote><p>注意：<code>D:\\Anaconda3\\envs\\my-yolov5-env\\lib\\site-packages\\torch\\nn\\modules\\upsampling.py</code>该路径需要修改为您实际的路径，具体路径可以参考红框处的报错信息，找到<code>upsampling.py</code>程序具体路径</p></blockquote><p>下面展示源码修改前后的对比示例：</p><p>修改前：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    def forward(self, input: Tensor) -&gt; Tensor:
        return F.interpolate(input, self.size, self.scale_factor, self.mode, self.align_corners,
                             recompute_scale_factor=self.recompute_scale_factor)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    def forward(self, input: Tensor) -&gt; Tensor:
        return F.interpolate(input, self.size, self.scale_factor, self.mode, self.align_corners)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改结果如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230619162245935.png" alt="image-20230619162245935"></p><h3 id="_2-测试训练模型报错" tabindex="-1"><a class="header-anchor" href="#_2-测试训练模型报错" aria-hidden="true">#</a> 2. 测试训练模型报错</h3><p>当您在Conda终端执行<code>python train.py</code>后，会报错，提示您<code>yolov5训练时提示页面文件太小，无法完成操作</code>。</p><p><strong>原因：</strong></p><p>​ 默认情况下D盘是没有分配虚拟内存的或者分配的虚拟内存很小。如果我们的安装的Conda环境安装在D盘时，会导致在跑程序的时候，没有分配虚拟内存，就会遇到上面的问题。</p><p><strong>解决办法：</strong></p><p>​ 进入Windows设置，如下图所示，点击红框处，进入系统设置</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728110658187.png" alt="image-20230728110658187"></p><p>进入系统设置界面后，点击<code>关于</code>后，可以看到相关设置中有<code>高级系统设置</code>选项，点击高级系统设置。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728111106861.png" alt="image-20230728111106861"></p><p>打开高级系统设置后，会弹出以下窗口，选择高级中的性能框中的<code>设置</code>，可以看到该设置可以控制内存使用和虚拟内存。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728111409104.png" alt="image-20230728111409104"></p><p>打开性能设置后会弹出以下界面，此时需要点击<code>高级</code></p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728111639208.png" alt="image-20230728111639208"></p><p>选择高级设置后，点击更改虚拟内存。注意：由于我之前已经修改过来可能显示的文件大小与您的不一致。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728111720511.png" alt="image-20230728111720511"></p><p>修改虚拟内存，选择您安装yolov5环境的磁盘，这里我使用的D盘，可以看到可用空间，选择自定大小，将初始值设置为可用空间的一半左右，最大值在初始值向上加20%左右即可。设置完成后点击确定。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728112031460.png" alt="image-20230728112031460"></p><p>此时会退出虚拟内存设置界面，再次点击性能选项中的<code>确定</code>。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728112323201.png" alt="image-20230728112323201"></p><p>再次点击系统属性设置中的确定。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230728112354479.png" alt="image-20230728112354479"></p><p>最后请一定要重启电脑！重启电脑后，上述设置才能生效。</p><p>修改步骤过程如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/3bea9532b091050f835e6b8c12510bd51b9d7181.gif" alt="3bea9532b091050f835e6b8c12510bd51b9d7181"></p>`,63);function F(G,I){const i=l("ExternalLinkIcon");return o(),d("div",null,[c,p,v,u,e("ul",null,[e("li",null,[n("Anaconda（python 包管理工具）："),e("a",m,[n("https://www.anaconda.com/"),a(i)])]),e("li",null,[n("PyCharm社区版（免费的python IDE）："),e("a",h,[n("https://www.jetbrains.com/pycharm/"),a(i)])])]),b,g,e("p",null,[n("​ YOLOV5目标检测算法是YOLO算法的第五次迭代，YOLO全称为You Only Look Once(你只需看一次)，YOLO在2015年提出将物体检测作为回归问题求解，论文地址:"),e("a",y,[n("https://arxiv.org/pdf/1506.02640.pdf"),a(i)]),n("。这里介绍该论文的引言部分，简单了解YOLO思想：YOLO算法主要来自于人类生活中的日常行为，当人脸瞥一眼图像就立刻知道该图像中的内容，知道该图像中所突出的物体以及物体与图像中的其他内容的相互作用，人类的视觉就是如此的发达且快速精准，这是十分符合我们实际的应用中遇到各种场景的。例如：在自动驾驶中车辆在行驶过程中我们很少用意识思维，即经过思考后才做出的决定，而是应该下意识就应该做出的反应。这种快速且准确的物体检测算法才能满足计算机以及嵌入式设备在没有专用的传感器的情况下驾驶汽车，并且可以让辅助设备向人类传达实时的场景信息，有望设计出通用的且反应灵敏的机器人系统。")]),e("p",null,[n("​ YOLOV5是2020年Ultralytics在GitHub上发布的单阶段目标检测算法，源码地址："),e("a",_,[n("https://github.com/ultralytics/yolov5"),a(i)]),n("。该算法是YOLO算法革命性的迭代，该算法在YOLOv4的基础上添加了一些新的改进思路，使其速度与精度都得到了极大的性能提升。该目标检测算法是基于Pytorch深度学习框架上搭建的，所以具有易用、可附加功能和高性能的特性。")]),x,e("p",null,[n("您如果想详细学习YOLOV5可以访问官方文档："),e("a",f,[n("https://docs.ultralytics.com/yolov5/"),a(i)])]),k,e("p",null,[n("​ 开始前请安装"),e("a",O,[n("Anaconda3"),a(i)]),n("，该软件用于创建不同的python虚拟环境，后面我们会经常用到"),w,n("来解决各种依赖包的问题。安装")]),e("p",null,[e("a",L,[n("PyCharm"),a(i)]),n("社区版，这里十分感谢注重Python生态的jetbrains公司免费给开发者提供PyCharm社区版，支持Python生态系统的开源系统。")]),C,e("p",null,[n("查看CUDA驱动适用版本:"),e("a",P,[n("CUDA驱动适配版本"),a(i)]),n(",查看表格3:"),e("a",Y,[n("CUDA工具包和相应的驱动程序版本"),a(i)])]),V,e("p",null,[n("如果客户的驱动版本过低，更新显卡驱动即可升级，更新方法可访问"),e("a",q,[n("英伟达驱动官网"),a(i)]),n("更新。")]),D,e("p",null,[n("进入pytorch网址："),e("a",A,[n("https://pytorch.org/"),a(i)]),n("，下载之前版本的pytorch。下载步骤如下：")]),M,e("p",null,[n("​ YOLOV5目前已经更新了很多版本，但我们为了稳定性和不同客户的需求选择使用V6.0版本，YOLOV5-V6.0源码地址位于："),e("a",T,[n("https://github.com/ultralytics/yolov5/archive/refs/tags/v6.0.zip"),a(i)]),n("。当然您也可以使用Git获取，这里不推荐，可自行尝试。")]),e("blockquote",null,[e("p",null,[n("YOLOV5所有的资源都可以在这个链接找到:"),e("a",z,[n("https://github.com/ultralytics/yolov5/releases"),a(i)])])]),E,e("p",null,[e("a",U,[n("https://dongshanpi.cowtransfer.com/s/a8d5f9b4faec4c"),a(i)])]),B,e("p",null,[n("进入YOLOV5-V6.0源码目录后，这里建议提前手动下载模型文件放在源码目录中，模型下载地址："),e("a",j,[n("yolov5s.pt"),a(i)])]),N])}const W=t(r,[["render",F],["__file","06-BuildYolov5Env.html.vue"]]);export{W as default};
