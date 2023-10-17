import{_ as e,o as a,c as n,e as l}from"./app-21fd3c9b.js";const s={},i=l(`<h1 id="使用buildroot-sdk编译打包linux-kernel" tabindex="-1"><a class="header-anchor" href="#使用buildroot-sdk编译打包linux-kernel" aria-hidden="true">#</a> 使用buildroot-SDK编译打包Linux Kernel</h1><h3 id="单独编译各个部分" tabindex="-1"><a class="header-anchor" href="#单独编译各个部分" aria-hidden="true">#</a> 单独编译各个部分</h3><ul><li>单独编译 kernel阶段</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>book@virtual-machine:~/Neza-D1/buildroot-2021$  <span class="token function">make</span> linux-rebuild <span class="token assign-left variable">V</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>单独编译文件系统 <ul><li>指定完成工具链 系统配置 需要安装的包 以及所需的格式 执行如下命令，最后生成的镜像在 output/image目录下。</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>book@virtual-machine:~/Neza-D1/buildroot-2021$ <span class="token function">make</span>  all //完整编译系统
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),r=[i];function d(o,t){return a(),n("div",null,r)}const c=e(s,[["render",d],["__file","09-BuildLinuxKernel.html.vue"]]);export{c as default};
