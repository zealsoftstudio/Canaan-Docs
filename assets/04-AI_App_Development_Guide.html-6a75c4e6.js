import{_ as t,r as l,o,c as p,a as n,b as s,d as e,e as i}from"./app-21fd3c9b.js";const d={},c=i('<h1 id="ai应用程序开发指南" tabindex="-1"><a class="header-anchor" href="#ai应用程序开发指南" aria-hidden="true">#</a> AI应用程序开发指南</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p>本文档介绍K510 AI应用的编写与应用。基于K510 AI芯片进行AI应用开发共有如下几个阶段：</p><p>模型准备：将训练好的模型在PC端进行验证（可使用静态图片推理），以确保模型的正确性</p><p>模型生成：将训练好的模型使用nncase compiler进行编译，生成kmodel</p><p>模型验证：将生成的kmodel使用nncase simulator进行精度验证</p><p>编写AI 应用程序：完成视频/图片的读取、输入的预处理、模型推理、模型后处理</p><p>编译AI 应用程序：使用交叉编译工具链，完成K510 AI应用程序的编译</p><p>部署和联调：将编译好的AI 应用署到K510硬件产品上，并在实际场景中进行功能的联调</p><p>在K510 AI芯片上进行AI应用开发的整体架构如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-ai-demo.png" alt=""></p><p>本文档将以320x320分辨率的YOLOV5s的onnx模型为示例，介绍K510 AI应用整个流程的编写与应用。</p>',12),r={href:"https://github.com/kendryte/k510_buildroot",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"_2-模型准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-模型准备","aria-hidden":"true"},"#"),s(" 2 模型准备")],-1),v={href:"https://github.com/kendryte/k510_docs/releases/download/v1.5/models.tar.gz",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>按照脚本命令提示，运行yolov5_image.py脚本，得到静态图片的推理结果。通过验证输出图片的检测框正确与否来检测模型的正确性。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>usage: yolov5_image.py <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>--image_path IMAGE_PATH<span class="token punctuation">]</span>
                       <span class="token punctuation">[</span>--image_out_path IMAGE_OUT_PATH<span class="token punctuation">]</span>
                       <span class="token punctuation">[</span>--onnx_path ONNX_PATH<span class="token punctuation">]</span>
                       <span class="token punctuation">[</span>--confidence_threshold CONFIDENCE_THRESHOLD<span class="token punctuation">]</span>
                       <span class="token punctuation">[</span>--nms_threshold NMS_THRESHOLD<span class="token punctuation">]</span>

object detect

optional arguments:
  -h, <span class="token parameter variable">--help</span>            show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">--image_path</span> IMAGE_PATH
                        input image path
  <span class="token parameter variable">--image_out_path</span> IMAGE_OUT_PATH
                        output image path
  <span class="token parameter variable">--onnx_path</span> ONNX_PATH
                        onnx model path
  <span class="token parameter variable">--confidence_threshold</span> CONFIDENCE_THRESHOLD
                        confidence_threshold
  <span class="token parameter variable">--nms_threshold</span> NMS_THRESHOLD
                        nms_threshold
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-模型生成" tabindex="-1"><a class="header-anchor" href="#_3-模型生成" aria-hidden="true">#</a> 3 模型生成</h2><p>模型生成依赖于nncase compiler，关于nncase compiler的具体使用规则可参考K510_nncase_Developer_Guides.md。生成YOLOV5s的kmodel的脚本位于/docs/utils/AI_Application/aidemo_sdk/scripts子目录。</p><p>按照脚本命令提示，运行gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py，可生成相应的kmodel。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>usage: gen_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>--target TARGET<span class="token punctuation">]</span> <span class="token punctuation">[</span>--dump_dir DUMP_DIR<span class="token punctuation">]</span> <span class="token punctuation">[</span>--onnx ONNX<span class="token punctuation">]</span> <span class="token punctuation">[</span>--kmodel KMODEL<span class="token punctuation">]</span>

optional arguments:
  -h, <span class="token parameter variable">--help</span>           show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">--target</span> TARGET      target to run
  <span class="token parameter variable">--dump_dir</span> DUMP_DIR  temp folder to dump
  <span class="token parameter variable">--onnx</span> ONNX          onnx model path
  <span class="token parameter variable">--kmodel</span> KMODEL      kendryte model path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，为了尽可能减少在CPU上做预处理，脚本中的编译选项配置如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>compile_options<span class="token punctuation">.</span>input_type <span class="token operator">=</span> <span class="token string">&#39;uint8&#39;</span>
compile_options<span class="token punctuation">.</span>preprocess <span class="token operator">=</span> <span class="token boolean">True</span>
compile_options<span class="token punctuation">.</span>input_layout <span class="token operator">=</span> <span class="token string">&#39;NCHW&#39;</span>
compile_options<span class="token punctuation">.</span>output_layout <span class="token operator">=</span> <span class="token string">&#39;NHWC&#39;</span>
compile_options<span class="token punctuation">.</span>input_shape <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">]</span>
compile_options<span class="token punctuation">.</span>mean <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
compile_options<span class="token punctuation">.</span>std <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">]</span>
compile_options<span class="token punctuation">.</span>input_range <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-模型验证" tabindex="-1"><a class="header-anchor" href="#_4-模型验证" aria-hidden="true">#</a> 4 模型验证</h2><p>模型验证依赖于nncase simulator，关于nncase simulator的具体使用规则可参考《nncase开发指南》。验证YOLOV5s的kmodel脚本位于/docs/utils/AI_Application/aidemo_sdk/scripts子目录。</p><p>按照脚本命令提示，运行simu_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py，可验证相应的kmodel是否生成正确。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>usage: sim_yolov5s_320_with_sigmoid_bf16_with_preprocess_output_nhwc.py <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>--onnx ONNX<span class="token punctuation">]</span> <span class="token punctuation">[</span>--kmodel KMODEL<span class="token punctuation">]</span>

optional arguments:
  -h, <span class="token parameter variable">--help</span>       show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">--onnx</span> ONNX      original model <span class="token function">file</span>
  <span class="token parameter variable">--kmodel</span> KMODEL  kmodel <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如有cosine similarity接近与1或者等于1，则可确保生成的kmodel的正确性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output 0 cosine similarity : 0.9999450445175171
output 1 cosine similarity : 0.9999403953552246
output 2 cosine similarity : 0.9999019503593445
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-编写ai-应用程序" tabindex="-1"><a class="header-anchor" href="#_5-编写ai-应用程序" aria-hidden="true">#</a> 5 编写AI 应用程序</h2><p>模型验证依赖于nncase runtime，关于nncase runtime的具体使用规则可参考《nncase开发指南》。AI应用程序参考 <code>k510_buildroot/package/ai/code/object_detect</code>。首先需要创建目标检测实例，并为kmodel输入输出分配空间。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>objectDetect od(obj_thresh, nms_thresh, net_len, {valid_width, valid_height});
od.load_model(kmodel_path);  // load kmodel
od.prepare_memory();  // memory allocation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为实现zero memory copy，将ISP输出地址与kmodel输入地址关联</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// define cv::Mat for ai input
// padding offset is (valid_width - valid_height) / 2 * valid_width
cv::Mat rgb24_img_for_ai(net_len, net_len, CV_8UC3, od.virtual_addr_input[0] + (valid_width - valid_height) / 2 * valid_width);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置ISP输出的宽高</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code> /****fixed operation for video operation****/
 mtx.lock();
 cv::VideoCapture capture;
 capture.open(5);
 // video setting
 capture.set(cv::CAP_PROP_CONVERT_RGB, 0);
 capture.set(cv::CAP_PROP_FRAME_WIDTH, net_len);
 capture.set(cv::CAP_PROP_FRAME_HEIGHT, net_len);
 // RRRRRR....GGGGGGG....BBBBBB, CHW
 capture.set(cv::CAP_PROP_FOURCC, V4L2_PIX_FMT_RGB24);
 mtx.unlock();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置相应的video配置文件，video_height_r为ISP真实输出高度，video_height为ISP不同通道间的高度偏移</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;/dev/video5&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;video5_used&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;video5_width&quot;</span><span class="token operator">:</span><span class="token number">320</span><span class="token punctuation">,</span>
    <span class="token property">&quot;video5_height&quot;</span><span class="token operator">:</span><span class="token number">320</span><span class="token punctuation">,</span>
    <span class="token property">&quot;video5_height_r&quot;</span><span class="token operator">:</span><span class="token number">240</span><span class="token punctuation">,</span>
    <span class="token property">&quot;video5_out_format&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将输入输出地址与kmodel的input_tensor和output_tensor关联</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>od.set_input(0);
od.set_output();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行kmodel，得到输出结果，并进行后处理</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>{
    ScopedTiming st(&quot;od run&quot;, enable_profile);
    od.run();
}

{
    ScopedTiming st(&quot;od get output&quot;, enable_profile);
    od.get_output();
}
std::vector&lt;BoxInfo&gt; result;
{
    ScopedTiming st(&quot;post process&quot;, enable_profile);
    od.post_process(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终，将检测框画到OSD上，显示输出</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>{
    ScopedTiming st(&quot;draw osd&quot;, enable_profile);
    obj_cnt = 0;
        for (auto r : result)
        {
        if (obj_cnt &lt; 32)
        {
            struct vo_draw_frame frame;
            frame.crtc_id = drm_dev.crtc_id;
            frame.draw_en = 1;
            frame.frame_num = obj_cnt;
            frame.line_y_start = r.x2 * DRM_INPUT_WIDTH / valid_width;
            frame.line_x_start = r.x1 * DRM_INPUT_WIDTH / valid_width;
            frame.line_x_end = r.y1 * DRM_INPUT_HEIGHT / valid_height + DRM_OFFSET_HEIGHT;
            frame.line_y_end = r.y2 * DRM_INPUT_HEIGHT / valid_height + DRM_OFFSET_HEIGHT;
            draw_frame(&amp;frame);

            cv::Point origin;
            origin.x = (int)(r.x1 * DRM_INPUT_WIDTH / valid_width);
            origin.y = (int)(r.y1 * DRM_INPUT_HEIGHT / valid_height + 10);
            std::string text = od.labels[r.label] + &quot;:&quot; + std::to_string(round(r.score * 100) / 100.0).substr(0,4);
            cv::putText(img_argb, text, origin, cv::FONT_HERSHEY_COMPLEX, 1.5, cv::Scalar(0, 0, 255, 255), 1, 8, 0);
        }
        obj_cnt += 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-编译ai应用程序" tabindex="-1"><a class="header-anchor" href="#_6-编译ai应用程序" aria-hidden="true">#</a> 6 编译AI应用程序</h2><p>使用交叉编译工具链，关于AI应用程序的编译的具体使用规则可参考。</p>`,31);function _(b,h){const a=l("ExternalLinkIcon");return o(),p("div",null,[c,n("blockquote",null,[n("p",null,[s("开始前请注意：此文档为官方文档，所有资料可访问："),n("a",r,[s("https://github.com/kendryte/k510_buildroot"),e(a)])])]),u,n("p",null,[s("用于推理的YOLOV5s的onnx模型位于/docs/utils/AI_Application/aidemo_sdk/models/onnx子目录(如果没有文件请下载 "),n("a",v,[s("models"),e(a)]),s(" 并解压)，静态图片位于/docs/utils/AI_Application/aidemo_sdk/examples/python_inference_on_PC/data子目录，脚本位于/docs/utils/AI_Application/aidemo_sdk/examples/python_inference_on_PC子目录。")]),m])}const g=t(d,[["render",_],["__file","04-AI_App_Development_Guide.html.vue"]]);export{g as default};
