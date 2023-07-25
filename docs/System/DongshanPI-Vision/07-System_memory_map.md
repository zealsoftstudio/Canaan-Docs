# 系统内存分配指南

## 1  K510 系统内存规划

K510的内存规划如下图所示：

![](http://photos.100ask.net/canaan-docs/k510-system-memory-map.png)

K510 crb参考板上有512MB DDR，总共规划了四个区域：

- 0~240M规划给Linux kernel
- 240M~496MB规划给share memory，采用预留CMA内存池的方式，这样在Share memory没有使用的情况下，Linux kernel内存管理子系统也可以从CMA池中分配内存
- 496M~510M规划给DSP使用
- 510M~512M规划给logo使用

## 2 设备树描述

K510的内存规划采用reserved-meory的方式，通过设备树的reserved-memory节点进行描述。相关设备树节点信息如下：

```text
ddr_memory: memory@0 {
    status              = "okay";
    device_type         = "memory";
    reg                 = <0x0 0x00000000 0x0 0x20000000>;
};

sharem_cma:sharem_cma@8000000 {
    compatible          = "k510-share-memory-cma";
    reg                 = <0x0 0xf000000 0x0 0x10000000>;  /*240M~496M*/
};

reserved-memory {
    #address-cells = <2>;
    #size-cells = <2>;
    ranges;

    cma_buffer: buffer@f000000 {
        compatible = "shared-dma-pool";
        reusable;
        linux,cma-default;
        reg = <0x0 0xf000000 0x0 0x10000000>;
    };

    dsp_buffer: buffer@1f000000 {
        no-map;
        reg = <0x0 0x1f000000 0x0 0xe00000>;
    };

    logo_buffer: buffer@1fe00000 {
        no-map;
        reg = <0x0 0x1fe00000 0x0 0x200000>;
    };
};
```

## 3 Buildroot相关配置

系统内存规划全部在linux kernel的dts中描述，但是dsp firmware的加载地址需要在buildroot中配置：

configs/k510_crb_lp3_v0_1_defconfig：

configs/k510_crb_lp3_v1_2_defconfig：

BR2_TARGET_EVB_FIRMWARE_LOAD_ADD=0x1f000000

