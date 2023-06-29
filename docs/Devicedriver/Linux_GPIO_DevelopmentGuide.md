# GPIO开发手册
## 1 概述

### 1.1 编写目的

本文档对内核的 GPIO 接口使用进行详细的阐述，让用户明确掌握 GPIO 配置、申请等操作的编程方法。



### 1.2 适用范围

<center>表 1-1: 适用产品列表</center>

| 内核版本         | 驱动文件        |
| ---------------- | --------------- |
| Linux-4.9 及以上 | pinctrl-sunxi.c |



### 1.3 相关人员

本文档适用于所有需要在 Linux 内核 sunxi 平台上开发设备驱动的相关人员。
## 2 模块介绍

Pinctrl 框架是 linux 系统为统一各 SoC 厂商 pin 管理，避免各 SoC 厂商各自实现相同 pin 管理子系统而提出的。目的是为了减少 SoC 厂商系统移植工作量。



### 2.1 模块功能介绍

许多 SoC 内部都包含 pin 控制器，通过 pin 控制器，我们可以配置一个或一组引脚的功能和特性。在软件上，Linux 内核 pinctrl 驱动可以操作 pin 控制器为我们完成如下工作：

*•* 枚举并且命名 pin 控制器可控制的所有引脚；

*•* 提供引脚的复用能力

*•* 提供配置引脚的能力，如驱动能力、上拉下拉、数据属性等。

*•* 与 gpio 子系统的交互

*•* 实现 pin 中断



### 2.2 相关术语介绍

<center>表 2-1: Pinctrl 模块相关术语介绍</center>

| 术语           | 解释说明                                                     |
| -------------- | ------------------------------------------------------------ |
| SUNXI          | Allwinner 一系列 SOC 硬件平台                                |
| Pin controller | 是对硬件模块的软件抽象，通常用来表示硬件控制器。能够处理引脚复用、属性配置等功能 |
| Pin            | 根据芯片不同的封装方式，可以表现为球形、针型等。软件上采用常用一组无符号的整数 [0-maxpin] 来表示 |
| Pin groups     | 外围设备通常都不只一个引脚，比如 SPI，假设接在 SoC 的 {0,8,16,24} 管脚，而另一个设备 I2C 接在 SoC 的 {24,25} 管脚。我们可以说这里有两个pin groups。很多控制器都需要处理 pin groups。因此管脚控制器子系统需要一个机制用来枚举管脚组且检索一个特定组中实际枚举的管脚 |
| Pinconfig      | 管脚可以被软件配置成多种方式，多数与它们作为输入/输出时的电气特性相关。例如，可以设置一个输出管脚处于高阻状态，或是 “三态”（意味着它被有效地断开连接）。或者可以通过设置将一个输入管脚与 VDD 或 GND 相连 (上拉/下拉)，以便在没有信号驱动管脚时使管脚拥有确认值 |
| Pinmux         | 引脚复用功能，使用一个特定的物理管脚（ball/pad/finger/等等）进行多种扩展复用，以支持不同功能的电气封装习惯 |
| Device tree    | 犹如它的名字，是一棵包括 cpu 的数量和类别、内存基地址、总线与桥、外设连接，中断控制器和 gpio 以及 clock 等系统资源的树，Pinctrl 驱动支持从device tree 中定义的设备节点获取 pin 的配置信息 |



### 2.3 总体框架

Sunxi Pinctrl 驱动模块的框架如下图所示，整个驱动模块可以分成 4 个部分：pinctrl api、pinctrl common frame、sunxi pinctrl driver，以及 board configuration。（图中最上面一层 device driver 表示 Pinctrl 驱动的使用者）

![](https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/LinuxGPIODevelopmentGuide_001.png)

​                                                               图 2-1: pinctrl 驱动整体框架图

Pinctrl api: pinctrl 提供给上层用户调用的接口。

Pinctrl framework：Linux 提供的 pinctrl 驱动框架。

Pinctrl sunxi driver：sunxi 平台需要实现的驱动。

Board configuration：设备 pin 配置信息，一般采用设备树进行配置。



### 2.4 state/pinmux/pinconfig

Pinctrl framework 主要处理 pinstate、pinmux 和 pinconfig 三个功能，pinstate 和 pinmux、pinconfig 映射关系如下图所示。

![](https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/LinuxGPIODevelopmentGuide_002.png)

<center>图 2-2: pinctrl 驱动 framework 图</center>

系统运行在不同的状态，pin 配置有可能不一样，比如系统正常运行时，设备的 pin 需要一组配置，但系统进入休眠时，为了节省功耗，设备 pin 需要另一组配置。Pinctrl framwork 能够有效管理设备在不同状态下的引脚配置。



### 2.5 源码结构介绍

```
linux
|
|-- drivers
| |-- pinctrl
| | |-- Kconfig
| | |-- Makefile
| | |-- core.c
| | |-- core.h
| | |-- devicetree.c
| | |-- devicetree.h
| | |-- pinconf.c
| | |-- pinconf.h
| | |-- pinmux.c
| | `-- pinmux.h
| `-- sunxi
| |-- pinctrl-sunxi-test.c
| |-- pinctrl-sun*.c
| `-- pinctrl-sun*-r.c
`-- include
`-- linux
`-- pinctrl
|-- consumer.h
|-- devinfo.h
|-- machine.h
|-- pinconf-generic.h
|-- pinconf.h
|-- pinctrl-state.h
|-- pinctrl.h
`-- pinmux.h
```

## 3 模块配置

### 3.1 kernel menuconfig 配置

进入 longan 根目录，执行./build.sh menuconfig

进入配置主界面，并按以下步骤操作:

首先，选择 Device Drivers 选项进入下一级配置，如下图所示：

![](https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/LinuxGPIODevelopmentGuide_003.png)

​                                                        图 3-1: 内核 menuconfig 根菜单



选择 Pin controllers, 进入下级配置，如下图所示：

 ![](https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/LinuxGPIODevelopmentGuide_004.png)

​                                                      图 3-2: 内核 menuconfig device drivers 菜单



选择 Allwinner SoC PINCTRL DRIVER, 进入下级配置，如下图所示：

![](https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/LinuxGPIODevelopmentGuide_005.png)

​                                                    图 3-3: 内核 menuconfig pinctrl drivers 菜单



Sunxi pinctrl driver 默认编译进内核，如下图（以 sun50iw9p1 平台为例，其他平台类似）所示：

![](https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/LinuxGPIODevelopmentGuide_006.png)

​                                                  图 3-4: 内核 menuconfig allwinner pinctrl drivers 菜单





### 3.2 device tree 源码结构和路径

对于 Linux4.9： 

*•* 设备树文件的配置是该 SoC 所有方案的通用配置，对于 ARM64 CPU 而言，设备树的路径为：kernel/{KERNEL}/arch/arm64/boot/dts/sunxi/sun*-pinctrl.dtsi。 

*•* 设备树文件的配置是该 SoC 所有方案的通用配置，对于 ARM32 CPU 而言，设备树的路径为：kernel/{KERNEL}/arch/arm32/boot/dts/sun*-pinctrl.dtsi。 

*•* 板级设备树 (board.dts) 路径：/device/config/chips/{IC}/configs/{BOARD}/board.dts

device tree 的源码结构关系如下：

```
board.dts
|--------sun*.dtsi
		     |------sun*-pinctrl.dtsi
		     |------sun*-clk.dtsi
```



对于 Linux5.4:

*•* 设备树文件的配置是该 SoC 所有方案的通用配置，对于 ARM64 CPU 而言，5.4 内核中不再维护单独的 pinctrl 的 dtsi，直接将 pin 的信息放在了：kernel/{KERNEL}/arch/arm32/boot/dts/sun*.dtsi

*•* 设备树文件的配置是该 SoC 所有方案的通用配置，对于 ARM32 CPU 而言，5.4 内核中不再维护单独的 pinctrl 的 dtsi，直接将 pin 的信息放在了：kernel/{KERNEL}/arch/arm32/boot/dts/sun*.dtsi

*•* 板级设备树 (board.dts) 路径：/device/config/chips/{IC}/configs/{BOARD}/board.dts

*•* device tree 的源码包含关系如下：

```
board.dts
    |--------sun*.dtsi
```





#### 3.2.1 device tree 对 gpio 控制器的通用配置

在 kernel/{KERNEL}/arch/arm64/boot/dts/sunxi/sun*-pinctrl.dtsi* 文件中 *(Linux5.4* 直接放在 *sun*.dtsi 中)，配置了该 SoC 的 pinctrl 控制器的通用配置信息，一般不建议修改，有 pinctrl 驱动维护者维护。目前，在 sunxi 平台，我们根据电源域，注册两个 pinctrl 设备：r_pio 设 备 (PL0 后的所有 pin) 和 pio 设备 (PL0 前的所有 pin)，两个设备的通用配置信息如下：

```
r_pio: pinctrl@07022000 {
	compatible = "allwinner,sun50iw9p1-r-pinctrl"; //兼容属性，用于驱动和设备绑定
	reg = <0x0 0x07022000 0x0 0x400>; //寄存器基地址0x07022000和范围0x400
    clocks = <&clk_cpurpio>;          //r_pio设置使用的时钟 
    device_type = "r_pio";            //设备类型属性 
    gpio-controller;                  //表示是一个gpio控制器 
    interrupt-controller;             //表示一个中断控制器，不支持中断可以删除 
    #interrupt-cells = <3>;           //pin中断属性需要配置的参数个数，不支持中断可以删除 
    #size-cells = <0>;                //没有使用，配置0
    #gpio-cells = <6>;                //gpio属性配置需要的参数个数,对于linux-5.4为3

    /*
     * 以下配置为模块使用的pin的配置，模块通过引用相应的节点对pin进行操作
     * 由于不同板级的pin经常改变，建议通过板级dts修改（参考下一小节）
     */
    s_rsb0_pins_a: s_rsb0@0 {
        allwinner,pins = "PL0", "PL1";
        allwinner,function = "s_rsb0";
        allwinner,muxsel = <2>;
        allwinner,drive = <2>;
        allwinner,pull = <1>;
    };

    /*
     * 以下配置为linux-5.4模块使用pin的配置，模块通过引用相应的节点对pin进行操作
     * 由于不同板级的pin经常改变，建议将模块pin的引用放到board dts中
     *（类似pinctrl-0 = <&scr1_ph_pins>;),并使用scr1_ph_pins这种更有标识性的名字）。
     */
    scr1_ph_pins: scr1-ph-pins {
        pins = "PH0", "PH1";
        function = "sim1";
        drive-strength = <10>;
        bias-pull-up;
    };
};

pio: pinctrl@0300b000 {
    compatible = "allwinner,sun50iw9p1-pinctrl"; //兼容属性，用于驱动和设备绑定
    reg = <0x0 0x0300b000 0x0 0x400>; //寄存器基地址0x0300b000和范围0x400
    interrupts = <GIC_SPI 51 IRQ_TYPE_LEVEL_HIGH>, /* AW1823_GIC_Spec: GPIOA: 83-32=51 */
            <GIC_SPI 52 IRQ_TYPE_LEVEL_HIGH>,
            <GIC_SPI 53 IRQ_TYPE_LEVEL_HIGH>,
            <GIC_SPI 54 IRQ_TYPE_LEVEL_HIGH>,
            <GIC_SPI 55 IRQ_TYPE_LEVEL_HIGH>,
            <GIC_SPI 56 IRQ_TYPE_LEVEL_HIGH>,
            <GIC_SPI 57 IRQ_TYPE_LEVEL_HIGH>; //该设备每个bank支持的中断配置和gic中断号，每个中断号对应一个支持中断的bank
    device_type = "pio"; //设备类型属性
    clocks = <&clk_pio>, <&clk_losc>, <&clk_hosc>; //该设备使用的时钟
    gpio-controller;          //表示是一个gpio控制器
    interrupt-controller;     //表示是一个中断控制器
    #interrupt-cells = <3>;   //pin中断属性需要配置的参数个数，不支持中断可以删除
    #size-cells = <0>;        //没有使用
    #gpio-cells = <6>;        //gpio属性需要配置的参数个数,对于linux-5.4为3
    /* takes the debounce time in usec as argument */
}
```



#### 3.2.2 board.dts 板级配置

board.dts 用于保存每个板级平台的设备信息 (如 demo 板、demo2.0 板等等)，以 demo 板为例，board.dts 路径如下：

/device/config/chips/{CHIP}/configs/demo/board.dts

在 board.dts 中的配置信息如果在 *.dtsi 中 (如 sun50iw9p1.dtsi 等) 存在，则会存在以下覆盖规则：

*•* 相同属性和结点，board.dts 的配置信息会覆盖 *.dtsi 中的配置信息。

*•* 新增加的属性和结点，会追加到最终生成的 dtb 文件中。

linux-4.9 上面 pinctrl 中一些模块使用 board.dts 的简单配置如下：

```
pio: pinctrl@0300b000 {
    input-debounce = <0 0 0 0 0 0 0>; /*配置中断采样频率，每个对应一个支持中断的bank，单位us*/
    
    spi0_pins_a: spi0@0 {
        allwinner,pins = "PC0", "PC2", "PC4"; 
        allwinner,pname = "spi0_sclk", "spi0_mosi", "spi0_miso"; 
        allwinner,function = "spi0"; 
    };
};
```

对于 linux-5.4，不建议采用上面的覆盖方式，而是修改驱动 pinctrl-0 引用的节点。

linux-5.4 上面 board.dts 的配置如下：

```
&pio{
    input-debounce = <0 0 0 0 1 0 0 0 0>; //配置中断采样频率，每个对应一个支持中断的bank，单位us
    vcc-pe-supply = <&reg_pio1_8>; //配置IO口耐压值，例如这里的含义是将pe口设置成1.8v耐压值 
};
```


## 4 模块接口说明

### 4.1 pinctrl 接口说明

#### 4.1.1 pin4ctrl_get

*•* 函数原型：struct pinctrl *pinctrl_get(struct device *dev);

*•* 作用：获取设备的 pin 操作句柄，所有 pin 操作必须基于此 pinctrl 句柄。

*•* 参数：

* dev: 指向申请 pin 操作句柄的设备句柄。

*•* 返回：

- 成功，返回 pinctrl 句柄。

- 失败，返回 NULL。



#### 4.1.2 pinctrl_put

*•* 函数原型：void pinctrl_put(struct pinctrl *p)

*•* 作用：释放 pinctrl 句柄，必须与 pinctrl_get 配对使用。

*•* 参数：

​    	*•* p: 指向释放的 pinctrl 句柄。

*•* 返回：

​	    *•* 没有返回值。

**!** 警告

必须与 **pinctrl_get** 配对使用。



#### 4.1.3 devm_pinctrl_get

*•* 函数原型：struct pinctrl *devm_pinctrl_get(struct device *dev)

*•* 作用：根据设备获取 pin 操作句柄，所有 pin 操作必须基于此 pinctrl 句柄，与 pinctrl_get功能完全一样，只是 devm_pinctrl_get 会将申请到的 pinctrl 句柄做记录，绑定到设备句柄信息中。设备驱动申请 pin 资源，推荐优先使用 devm_pinctrl_get 接口。

*•* 参数：

​    	*•* dev: 指向申请 pin 操作句柄的设备句柄。

*•* 返回：

​		*•* 成功，返回 pinctrl 句柄。

​		*•* 失败，返回 NULL。



#### 4.1.4 devm_pinctrl_put

*•* 函数原型：void devm_pinctrl_put(struct pinctrl *p)

*•* 作用：释放 pinctrl 句柄，必须与 devm_pinctrl_get 配对使用。

*•* 参数：

​		*•* p: 指向释放的 pinctrl 句柄。

*•* 返回：

​		*•* 没有返回值。

**!** 警告

必须与 **devm_pinctrl_get** 配对使用，可以不显式的调用该接口。



#### 4.1.5 pinctrl_lookup_state

*•* 函数原型：struct pinctrl_state *pinctrl_lookup_state(struct pinctrl *p, const char *name)

*•* 作用：根据 pin 操作句柄，查找 state 状态句柄。

*•* 参数：

​		*•* p: 指向要操作的 pinctrl 句柄。

​		*•* name: 指向状态名称，如 “default”、“sleep” 等。

*•* 返回：

​		*•* 成功，返回执行 pin 状态的句柄 struct pinctrl_state *。 

​	    *•* 失败，返回 NULL。



#### 4.1.6 pinctrl_select_state

*•* 函数原型：int pinctrl_select_state(struct pinctrl *p, struct pinctrl_state *s)

*•* 作用：将 pin 句柄对应的 pinctrl 设置为 state 句柄对应的状态。

*•* 参数：

​		*•* p: 指向要操作的 pinctrl 句柄。

​		*•* s: 指向 state 句柄。

*•* 返回：

​		*•* 成功，返回 0。 

​		*•* 失败，返回错误码。



#### 4.1.7 devm_pinctrl_get_select

*•* 函数原型：struct pinctrl *devm_pinctrl_get_select(struct device *dev, const char *name)

*•* 作用：获取设备的 pin 操作句柄，并将句柄设定为指定状态。

*•* 参数：

​		*•* dev: 指向管理 pin 操作句柄的设备句柄。

​		*•* name: 要设置的 state 名称，如 “default”、“sleep” 等。

*•* 返回：

​		*•* 成功，返回 pinctrl 句柄。

​		*•* 失败，返回 NULL。



#### 4.1.8 devm_pinctrl_get_select_default

*•* 函数原型：struct pinctrl *devm_pinctrl_get_select_default(struct device *dev)

*•* 作用：获取设备的 pin 操作句柄，并将句柄设定为默认状态。

*•* 参数：

​		*•* dev: 指向管理 pin 操作句柄的设备句柄。

*•* 返回：

​		*•* 成功，返回 pinctrl 句柄。

​		*•* 失败，返回 NULL。



#### 4.1.9 pin_config_get

*•* 作用：获取指定 pin 的属性。

*•* 参数：

​		*•* dev_name: 指向 pinctrl 设备。

​		*•* name: 指向 pin 名称。

​		*•* config: 保存 pin 的配置信息。

*•* 返回：

​		*•* 成功，返回 pin 编号。

​		*•* 失败，返回错误码。

**!** 警告

该接口在 **linux-5.4** 已经移除。



#### 4.1.10 pin_config_set

*•* 作用：设置指定 pin 的属性。

*•* 参数：

​		*•* dev_name: 指向 pinctrl 设备。

​		*•* name: 指向 pin 名称。

​		*•* config:pin 的配置信息。

*•* 返回：

​		*•* 成功，返回 0。 

​		*•* 失败，返回错误码。

**!** 警告

该接口在 **linux-5.4** 已经移除。



### 4.2 gpio 接口说明

#### 4.2.1 gpio_request

*•* 函数原型：int gpio_request(unsigned gpio, const char *label)

*•* 作用：申请 gpio，获取 gpio 的访问权。

*•* 参数：

​		*•* gpio:gpio 编号。

​		*•* label:gpio 名称，可以为 NULL。 

*•* 返回：

​		*•* 成功，返回 0。 

​		*•* 失败，返回错误码。



#### 4.2.2 gpio_free

*•* 函数原型：void gpio_free(unsigned gpio)

*•* 作用：释放 gpio。 

*•* 参数：

​		*•* gpio:gpio 编号。

*•* 返回：

​		*•* 无返回值。



#### 4.2.3 gpio_direction_input

*•* 函数原型：int gpio_direction_input(unsigned gpio)

*•* 作用：设置 gpio 为 input。 

*•* 参数：

​		*•* gpio:gpio 编号。

*•* 返回：

​		*•* 成功，返回 0。 

​		*•* 失败，返回错误码。



#### 4.2.5 __gpio_get_value

*•* 函数原型：int __gpio_get_value(unsigned gpio)

*•* 作用：获取 gpio 电平值 (gpio 已为 input/output 状态)。 

*•* 参数：

​		*•* gpio:gpio 编号。

*•* 返回：

​		*•* 返回 gpio 对应的电平逻辑，1 表示高, 0 表示低。



#### 4.2.6 __gpio_set_value

*•* 函数原型：void __gpio_set_value(unsigned gpio, int value)

*•* 作用：设置 gpio 电平值 (gpio 已为 input/output 状态)。 

*•* 参数：

​		*•* gpio:gpio 编号。

​		*•* value: 期望设置的 gpio 电平值，非 0 表示高, 0 表示低。

*•* 返回：

​		*•* 无返回值



#### 4.2.7 of_get_named_gpio

*•* 函数原型：int of_get_named_gpio(struct device_node *np, const char *propname, int index)

*•* 作用：通过名称从 dts 解析 gpio 属性并返回 gpio 编号。

*•* 参数：

​		*•* np: 指向使用 gpio 的设备结点。

​		*•* propname:dts 中属性的名称。

​		*•* index:dts 中属性的索引值。

*•* 返回：

​		*•* 成功，返回 gpio 编号。

​		*•* 失败，返回错误码。



#### 4.2.8 of_get_named_gpio_flags

*•* 函数原型：int of_get_named_gpio_flags(struct device_node *np, const char *list_name, int index,

enum of_gpio_flags *flags)

*•* 作用：通过名称从 dts 解析 gpio 属性并返回 gpio 编号。

*•* 参数：

​		*•* np: 指向使用 gpio 的设备结点。

​		*•* propname:dts 中属性的名称。

​		*•* index:dts 中属性的索引值

​		*•* flags: 在 sunxi 平台上，必须定义为 struct gpio_config * 类型变量，因为 sunxi pinctrl的 pin 支持上下拉，					 驱动能力等信息，而内核 enum of_gpio_flags * 类型变量只能包含输入、输出信息，后续 sunxi 平台					 需要标准化该接口。

*•* 返回：

​		*•* 成功，返回 gpio 编号。

​		*•* 失败，返回错误码。

**警告**

该接口的 **flags** 参数，在 **sunxi linux-4.9** 及以前的平台上，必须定义为 **struct gpio_config** 类型变量。**linux-5.4** 已经标准化该接口，直接采用 **enum of_gpio_flags** 的定义。

## 5 使用示例

### 5.1 使用 pin 的驱动 dts 配置示例

对于使用 pin 的驱动来说，驱动主要设置 pin 的常用的几种功能，列举如下：

*•* 驱动使用者只配置通用 GPIO, 即用来做输入、输出和中断的

*•* 驱动使用者设置 pin 的 pin mux，如 uart 设备的 pin,lcd 设备的 pin 等，用于特殊功能

*•* 驱动使用者既要配置 pin 的通用功能，也要配置 pin 的特性

下面对常见使用场景进行分别介绍。



#### 5.1.1 配置通用 GPIO 功能/中断功能

用法一：配置 GPIO，中断，device tree 配置 demo 如下所示：

```
soc{
    ...
    gpiokey {
        device_type = "gpiokey"; 
        compatible = "gpio-keys";
        
        ok_key {
            device_type = "ok_key";
            label = "ok_key";
            gpios = <&r_pio PL 0x4 0x0 0x1 0x0 0x1>; //如果是linux-5.4，则应该为gpios = <&r_pio 0 4 GPIO_ACTIVE_HIGH>;
            linux,input-type = "1>";
            linux,code = <0x1c>;
            wakeup-source = <0x1>;
            };
        };
    ...
};
```

说明

```
说明：gpio in/gpio out/ interrupt采用dts的配置方法，配置参数解释如下：
对于linux-4.9:
gpios = <&r_pio PL 0x4 0x0 0x1 0x0 0x1>;
            |    |  |   |   |   |   `---输出电平，只有output才有效
            |    |  |   |   |   `-------驱动能力，值为0x0时采用默认值
            |    |  |   |   `-----------上下拉，值为0x1时采用默认值
            |    |  |   `---------------复用类型
            |    |  `-------------------当前bank中哪个引脚
            |    `-----------------------哪个bank
            `---------------------------指向哪个pio，属于cpus要用&r_pio
使用上述方式配置gpio时，需要驱动调用以下接口解析dts的配置参数：
int of_get_named_gpio_flags(struct device_node *np, const char *list_name, int index,
enum of_gpio_flags *flags)
拿到gpio的配置信息后(保存在flags参数中，见4.2.8.小节)，在根据需要调用相应的标准接口实现自己的功能
对于linux-5.4:
gpios = <&r_pio 0 4 GPIO_ACTIVE_HIGH>;
            |   |      |
            |   |      `-------------------gpio active时状态，如果需要上下拉，还可以或上
            GPIO_PULL_UP、GPIO_PULL_DOWN标志
            |   `-----------------------哪个bank
            `---------------------------指向哪个pio，属于cpus要用&r_pio
```



#### 5.1.2 用法二

用法二：配置设备引脚，device tree 配置 demo 如下所示：

```
device tree对应配置
soc{
    pio: pinctrl@0300b000 {
        ...
        uart0_ph_pins_a: uart0-ph-pins-a {
            allwinner,pins = "PH7", "PH8"; 
            allwinner,function = "uart0"; 
            allwinner,muxsel = <3>;
            allwinner,drive = <0x1>;
            allwinner,pull = <0x1>;
        };
        /* 对于linux-5.4 请使用下面这种方式配置 */
        mmc2_ds_pin: mmc2-ds-pin {
            pins = "PC1";
            function = "mmc2";
            drive-strength = <30>;
            bias-pull-up;
        };
        ...
    }；
    ...
    uart0: uart@05000000 {
        compatible = "allwinner,sun8i-uart";
        device_type = "uart0";
        reg = <0x0 0x05000000 0x0 0x400>;
        interrupts = <GIC_SPI 49 IRQ_TYPE_LEVEL_HIGH>;
        clocks = <&clk_uart0>;
        pinctrl-names = "default", "sleep";
        pinctrl-0 = <&uart0_pins_a>;
        pinctrl-1 = <&uart0_pins_b>;
        uart0_regulator = "vcc-io";
        uart0_port = <0>;
        uart0_type = <2>;
    };
    ...
};
```

其中：

*•* pinctrl-0 对应 pinctrl-names 中的 default，即模块正常工作模式下对应的 pin 配置

*•* pinctrl-1 对应 pinctrl-names 中的 sleep，即模块休眠模式下对应的 pin 配置



### 5.2 接口使用示例

#### 5.2.1 配置设备引脚

一般设备驱动只需要使用一个接口 devm_pinctrl_get_select_default 就可以申请到设备所有pin 资源。

```c
static int sunxi_pin_req_demo(struct platform_device *pdev)
{ 
	struct pinctrl *pinctrl;
	/* request device pinctrl, set as default state */
	pinctrl = devm_pinctrl_get_select_default(&pdev->dev);
	if (IS_ERR_OR_NULL(pinctrl))
		return -EINVAL;

	return 0;
}
```



#### 5.2.2 获取 GPIO 号 

```
static int sunxi_pin_req_demo(struct platform_device *pdev)
{
    struct device *dev = &pdev->dev;
    struct device_node *np = dev->of_node;
    unsigned int gpio;
    
    #get gpio config in device node.
    gpio = of_get_named_gpio(np, "vdevice_3", 0);
    if (!gpio_is_valid(gpio)) {
    	if (gpio != -EPROBE_DEFER)
    		dev_err(dev, "Error getting vdevice_3\n");
		return gpio;
    }
}
```



#### 5.2.3 GPIO 属性配置

通过 pin_config_set/pin_config_get/pin_config_group_set/pin_config_group_get 接口单独控制指定 pin 或 group 的相关属性。

```
static int pctrltest_request_all_resource(void)
{
    struct device *dev;
    struct device_node *node;
    struct pinctrl *pinctrl;
    struct sunxi_gpio_config *gpio_list = NULL;
    struct sunxi_gpio_config *gpio_cfg;
    unsigned gpio_count = 0;
    unsigned gpio_index;
    unsigned long config;
    int ret;

    dev = bus_find_device_by_name(&platform_bus_type, NULL, sunxi_ptest_data->dev_name);
    if (!dev) {
        pr_warn("find device [%s] failed...\n", sunxi_ptest_data->dev_name);
        return -EINVAL;
    }

    node = of_find_node_by_type(NULL, dev_name(dev));
    if (!node) {
        pr_warn("find node for device [%s] failed...\n", dev_name(dev));
        return -EINVAL;
    }
    dev->of_node = node;

    pr_warn("++++++++++++++++++++++++++++%s++++++++++++++++++++++++++++\n", __func__);
    pr_warn("device[%s] all pin resource we want to request\n", dev_name(dev));
    pr_warn("-----------------------------------------------\n");

    pr_warn("step1: request pin all resource.\n");
    pinctrl = devm_pinctrl_get_select_default(dev);
    if (IS_ERR_OR_NULL(pinctrl)) {
        pr_warn("request pinctrl handle for device [%s] failed...\n", dev_name(dev));
        return -EINVAL;
    }

    pr_warn("step2: get device[%s] pin count.\n", dev_name(dev));
    ret = dt_get_gpio_list(node, &gpio_list, &gpio_count);
    if (ret < 0 || gpio_count == 0) {
        pr_warn(" devices own 0 pin resource or look for main key failed!\n");
        return -EINVAL;
    }

    pr_warn("step3: get device[%s] pin configure and check.\n", dev_name(dev));
    for (gpio_index = 0; gpio_index < gpio_count; gpio_index++) {
        gpio_cfg = &gpio_list[gpio_index];

        /*check function config */
        config = SUNXI_PINCFG_PACK(SUNXI_PINCFG_TYPE_FUNC, 0xFFFF);
        pin_config_get(SUNXI_PINCTRL, gpio_cfg->name, &config);
        if (gpio_cfg->mulsel != SUNXI_PINCFG_UNPACK_VALUE(config)) {
            pr_warn("failed! mul value isn't equal as dt.\n");
            return -EINVAL;
        }

        /*check pull config */
        if (gpio_cfg->pull != GPIO_PULL_DEFAULT) {
            config = SUNXI_PINCFG_PACK(SUNXI_PINCFG_TYPE_PUD, 0xFFFF);
            pin_config_get(SUNXI_PINCTRL, gpio_cfg->name, &config);
            if (gpio_cfg->pull != SUNXI_PINCFG_UNPACK_VALUE(config)) {
                pr_warn("failed! pull value isn't equal as dt.\n");
                return -EINVAL;
            }
        }

        /*check dlevel config */
        if (gpio_cfg->drive != GPIO_DRVLVL_DEFAULT) {
            config = SUNXI_PINCFG_PACK(SUNXI_PINCFG_TYPE_DRV, 0XFFFF);
            pin_config_get(SUNXI_PINCTRL, gpio_cfg->name, &config);
            if (gpio_cfg->drive != SUNXI_PINCFG_UNPACK_VALUE(config)) {
                pr_warn("failed! dlevel value isn't equal as dt.\n");
                return -EINVAL;
            }
        }

        /*check data config */
        if (gpio_cfg->data != GPIO_DATA_DEFAULT) {
            config = SUNXI_PINCFG_PACK(SUNXI_PINCFG_TYPE_DAT, 0XFFFF);
            pin_config_get(SUNXI_PINCTRL, gpio_cfg->name, &config);
            if (gpio_cfg->data != SUNXI_PINCFG_UNPACK_VALUE(config)) {
                pr_warn("failed! pin data value isn't equal as dt.\n");
                return -EINVAL;
            }
        }
    }

    pr_warn("-----------------------------------------------\n");
    pr_warn("test pinctrl request all resource success!\n");
    pr_warn("++++++++++++++++++++++++++++end++++++++++++++++++++++++++++\n\n");
    return 0;
}
注：需要注意，存在SUNXI_PINCTRL和SUNXI_R_PINCTRL两个pinctrl设备，cpus域的pin需要使用
SUNXI_R_PINCTRL
```

**!** 警告

**linux5.4** 中 使 用 **pinctrl_gpio_set_config** 配 置 **gpio** 属 性， 对 应 使 用**pinconf_to_config_pack** 生成 **config** 参数：

*•* **SUNXI_PINCFG_TYPE_FUNC** 已不再生效，暂未支持 **FUNC** 配置（建议使用 **pinctrl_select_state**接口代替）

*•* **SUNXI_PINCFG_TYPE_PUD** 更新为内核标准定义（**PIN_CONFIG_BIAS_PULL_UP/PIN_CONFIG_BIAS_PULL_DOWN**） 

*•* **SUNXI_PINCFG_TYPE_DRV** 更新为内核标准定义（**PIN_CONFIG_DRIVE_STRENGTH**），相应的 **val** 对应关系为（**4.9->5.4: 0->10, 1->20…**） 

*•* **SUNXI_PINCFG_TYPE_DAT** 已不再生效，暂未支持 **DAT** 配置（建议使用 **gpio_direction_output**或者 **__gpio_set_value** 设置电平值）



### 5.3 设备驱动使用 GPIO 中断功能

方式一：通过 gpio_to_irq 获取虚拟中断号，然后调用申请中断函数即可目前 sunxi-pinctrl 使用 irq-domain 为 gpio 中断实现虚拟 irq 的功能，使用 gpio 中断功能时，设备驱动只需要通过 gpio_to_irq 获取虚拟中断号后，其他均可以按标准 irq 接口操作。

```
static int sunxi_gpio_eint_demo(struct platform_device *pdev)
{ 
    struct device *dev = &pdev->dev;
    int virq;
    int ret;
    /* map the virq of gpio */
    virq = gpio_to_irq(GPIOA(0));
    if (IS_ERR_VALUE(virq)) {
	    pr_warn("map gpio [%d] to virq failed, errno = %d\n",
    											GPIOA(0), virq);
        return -EINVAL;
    }
    pr_debug("gpio [%d] map to virq [%d] ok\n", GPIOA(0), virq);
    /* request virq, set virq type to high level trigger */
    ret = devm_request_irq(dev, virq, sunxi_gpio_irq_test_handler,
                                IRQF_TRIGGER_HIGH, "PA0_EINT", NULL);
    if (IS_ERR_VALUE(ret)) {
        pr_warn("request virq %d failed, errno = %d\n", virq, ret);
        return -EINVAL;
    }
    
	return 0;
}
```

方式二：通过 dts 配置 gpio 中断，通过 dts 解析函数获取虚拟中断号，最后调用申请中断函数即可，demo 如下所示：

```
dts配置如下：
soc{
	...
    Vdevice: vdevice@0 {
        compatible = "allwinner,sun8i-vdevice";
        device_type = "Vdevice";
        interrupt-parent = <&pio>; /*依赖的中断控制器(带interrupt-controller属性的结 点)*/
        interrupts = < PD 3 IRQ_TYPE_LEVEL_HIGH>;
                        | |   `------------------中断触发条件、类型
                        | `-------------------------pin bank内偏移
                        `---------------------------哪个bank
        pinctrl-names = "default";
        pinctrl-0 = <&vdevice_pins_a>;
        test-gpios = <&pio PC 3 1 2 2 1>;
        status = "okay";
	};
	...
};
```

在驱动中，通过 platform_get_irq() 标准接口获取虚拟中断号，如下所示：

```
static int sunxi_pctrltest_probe(struct platform_device *pdev)
{ 
    struct device_node *np = pdev->dev.of_node;
    struct gpio_config config;
    int gpio, irq;
    int ret;

    if (np == NULL) {
        pr_err("Vdevice failed to get of_node\n");
        return -ENODEV;
    }
    ....
    irq = platform_get_irq(pdev, 0);
    if (irq < 0) {
        printk("Get irq error!\n");
        return -EBUSY;
    }
	.....
	sunxi_ptest_data->irq = irq;
	......
	return ret;
}

//申请中断：
static int pctrltest_request_irq(void)
{
    int ret;
    int virq = sunxi_ptest_data->irq;
    int trigger = IRQF_TRIGGER_HIGH;

    reinit_completion(&sunxi_ptest_data->done);

    pr_warn("step1: request irq(%s level) for irq:%d.\n",
	    trigger == IRQF_TRIGGER_HIGH ? "high" : "low", virq);
	ret = request_irq(virq, sunxi_pinctrl_irq_handler_demo1,
			trigger, "PIN_EINT", NULL);
    if (IS_ERR_VALUE(ret)) {
        pr_warn("request irq failed !\n");
        return -EINVAL;
    }

    pr_warn("step2: wait for irq.\n");
    ret = wait_for_completion_timeout(&sunxi_ptest_data->done, HZ);
    
    if (ret == 0) {
        pr_warn("wait for irq timeout!\n");
        free_irq(virq, NULL);
        return -EINVAL;
    }

    free_irq(virq, NULL);

    pr_warn("-----------------------------------------------\n");
    pr_warn("test pin eint success !\n");
    pr_warn("+++++++++++++++++++++++++++end++++++++++++++++++++++++++++\n\n\n");

    return 0;
}
```



### 5.4 设备驱动设置中断 debounce 功能

方式一：通过 dts 配置每个中断 bank 的 debounce，以 pio 设备为例，如下所示：

```
&pio {
    /* takes the debounce time in usec as argument */
    input-debounce = <0 0 0 0 0 0 0>;
                      | | | | | | `----------PA bank
                      | | | | | `------------PC bank
                      | | | | `--------------PD bank
                      | | | `----------------PF bank
                      | | `------------------PG bank
                      | `--------------------PH bank
                      `----------------------PI bank
};
```

注意：input-debounce 的属性值中需把 pio 设备支持中断的 bank 都配上，如果缺少，会以bank 的顺序设置相应的属性值到 debounce 寄存器，缺少的 bank 对应的 debounce 应该是默认值（启动时没修改的情况）。sunxi linux-4.9 平台，中断采样频率最大是 24M, 最小 32k，debounce 的属性值只能为 0 或 1。对于 linux-5.4，debounce 取值范围是 0~1000000（单位 usec）。

方式二：驱动模块调用 gpio 相关接口设置中断 debounce 

```
static inline int gpio_set_debounce(unsigned gpio, unsigned debounce);
int gpiod_set_debounce(struct gpio_desc *desc, unsigned debounce);
```

在驱动中，调用上面两个接口即可设置 gpio 对应的中断 debounce 寄存器，注意，debounce 是以 ms 为单位的 (linux-5.4 已经移除这个接口)。