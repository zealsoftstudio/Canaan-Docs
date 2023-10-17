import{_ as e,o as i,c as n,e as l}from"./app-21fd3c9b.js";const s={},d=l(`<h1 id="系统内存分配指南" tabindex="-1"><a class="header-anchor" href="#系统内存分配指南" aria-hidden="true">#</a> 系统内存分配指南</h1><h2 id="_1-k510-系统内存规划" tabindex="-1"><a class="header-anchor" href="#_1-k510-系统内存规划" aria-hidden="true">#</a> 1 K510 系统内存规划</h2><p>K510的内存规划如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/k510-system-memory-map.png" alt=""></p><p>K510 crb参考板上有512MB DDR，总共规划了四个区域：</p><ul><li>0~240M规划给Linux kernel</li><li>240M~496MB规划给share memory，采用预留CMA内存池的方式，这样在Share memory没有使用的情况下，Linux kernel内存管理子系统也可以从CMA池中分配内存</li><li>496M~510M规划给DSP使用</li><li>510M~512M规划给logo使用</li></ul><h2 id="_2-设备树描述" tabindex="-1"><a class="header-anchor" href="#_2-设备树描述" aria-hidden="true">#</a> 2 设备树描述</h2><p>K510的内存规划采用reserved-meory的方式，通过设备树的reserved-memory节点进行描述。相关设备树节点信息如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ddr_memory: memory@0 {
    status              = &quot;okay&quot;;
    device_type         = &quot;memory&quot;;
    reg                 = &lt;0x0 0x00000000 0x0 0x20000000&gt;;
};

sharem_cma:sharem_cma@8000000 {
    compatible          = &quot;k510-share-memory-cma&quot;;
    reg                 = &lt;0x0 0xf000000 0x0 0x10000000&gt;;  /*240M~496M*/
};

reserved-memory {
    #address-cells = &lt;2&gt;;
    #size-cells = &lt;2&gt;;
    ranges;

    cma_buffer: buffer@f000000 {
        compatible = &quot;shared-dma-pool&quot;;
        reusable;
        linux,cma-default;
        reg = &lt;0x0 0xf000000 0x0 0x10000000&gt;;
    };

    dsp_buffer: buffer@1f000000 {
        no-map;
        reg = &lt;0x0 0x1f000000 0x0 0xe00000&gt;;
    };

    logo_buffer: buffer@1fe00000 {
        no-map;
        reg = &lt;0x0 0x1fe00000 0x0 0x200000&gt;;
    };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-buildroot相关配置" tabindex="-1"><a class="header-anchor" href="#_3-buildroot相关配置" aria-hidden="true">#</a> 3 Buildroot相关配置</h2><p>系统内存规划全部在linux kernel的dts中描述，但是dsp firmware的加载地址需要在buildroot中配置：</p><p>configs/k510_crb_lp3_v0_1_defconfig：</p><p>configs/k510_crb_lp3_v1_2_defconfig：</p><p>BR2_TARGET_EVB_FIRMWARE_LOAD_ADD=0x1f000000</p>`,14),r=[d];function a(m,c){return i(),n("div",null,r)}const v=e(s,[["render",a],["__file","07-System_memory_map.html.vue"]]);export{v as default};
