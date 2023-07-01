# 开发板适配七寸RGB屏

## 0.前言

​	在前面我们已经学习了关于100ASK_V853-PRO编译和烧写,接下来就是在Tina SDK下去适配七寸RGB屏，购买链接为：[https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18944745104.11.669f1b7fE1ptyQ&id=611156659477](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18944745104.11.669f1b7fE1ptyQ&id=611156659477)

![image-20230411160118610](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411160118610.png)

100ASK_V853-PRO开发板购买链接：[100ASK_V853-PRO开发板](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-18944745109.10.4ea53031qOBnND&id=706864521673)

![image-20230418094041344](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230418094041344.png)



LCD_调试指南:[https://tina.100ask.net/SdkModule/Linux_LCD_DevelopmentGuide-01/](https://tina.100ask.net/SdkModule/Linux_LCD_DevelopmentGuide-01/)

Display_开发指南:[https://tina.100ask.net/SdkModule/Linux_Display_DevelopmentGuide-01/](https://tina.100ask.net/SdkModule/Linux_Display_DevelopmentGuide-01/)



​	如果已经使用我们的增加的补丁文件，默认启动有Tina Linux的logo，同时还支持了lvgl示例和触摸。可在开发板的串口终端上输入`lv_examples`，可以发现我们提供有5个lvgl示例。输入`lv_examples 0`，可运行第一个lvgl示例。

```
root@TinaLinux:/# lv_examples
lv_examples 0, is lv_demo_widgets
lv_examples 1, is lv_demo_music
lv_examples 2, is lv_demo_benchmark
lv_examples 3, is lv_demo_keypad_encoder
lv_examples 4, is lv_demo_stress
root@TinaLinux:/# lv_examples 0
wh=1024x600, vwh=1024x1200, bpp=32, rotated=0
Turn on double buffering.
Turn on 2d hardware acceleration.
Turn on 2d hardware acceleration rotate.
```

运行完成后可在七寸RGB屏上显示LVGL V8的示例界面，同时支持触摸控制示例。



## 1.适配七寸RGB屏的流程

​	由于Tina SDK中默认已经支持RGB屏驱动，所以适配七寸RGB屏只注意以下几个点：

​		1.修改设备树

​		2.配置内核

​		3.修改Uboot配置

内核设备树的位置：tina-v853-open/device/config/chips/v853/configs/100ask/board.dts

uboot设备树的位置：tina-v853-open/device/config/chips/v853/configs/100ask/board.dts

修改内核配置：在tina的根目录下执行`make kernel_menuconfig`

修改uboot配置：进入uboot的根目录tina-v853-open/brandy/brandy-2.0/u-boot-2018下执行`make menuconfig`

内核驱动位置：tina-v853-open/kernel/linux-4.9/drivers/video/fbdev/sunxi/disp2/disp/lcd/default_panel.c

uboot驱动位置：

tina-v853-open/brandy/brandy-2.0/u-boot-2018/drivers/video/sunxi/disp2/disp/lcd/default_panel.c

## 2.检查修改设备树

在Tina根目录下，输入`cd device/config/chips/v853/configs/100ask/`

```shell
book@100ask:~/workspaces/tina-v853-open$ cd device/config/chips/v853/configs/100ask/
book@100ask:~/workspaces/tina-v853-open/device/config/chips/v853/configs/100ask$ vi board.dts
```

### 2.1 修改内核设备树

修改 board.dts中的lcd0为：

```
&lcd0 {
        /* part 1 */
        lcd_used            = <1>;
        lcd_driver_name     = "default_lcd";
        lcd_backlight       = <100>;

        /* part 2 */
        lcd_if = <0>;
        lcd_hv_if = <0>;

        /* part 3 */
        lcd_x               = <1024>;
        lcd_y               = <600>;
        lcd_width           = <154>;
        lcd_height          = <85>;
        lcd_dclk_freq       = <51>;
        lcd_hbp             = <140>;
        lcd_ht              = <1344>;
        lcd_hspw            = <20>;
        lcd_vbp             = <20>;
        lcd_vt              = <635>;
        lcd_vspw            = <3>;

        lcd_pwm_used        = <1>;
        lcd_pwm_ch          = <9>;
        lcd_pwm_freq        = <500>;
        lcd_pwm_pol         = <1>;

        /* part 5 */
        lcd_frm = <1>;
        lcd_io_phase = <0x0000>;
        lcd_gamma_en = <0>;
        lcd_cmap_en = <0>;
        lcd_hv_clk_phase = <0>;
        lcd_hv_sync_polarity= <0>;

        /* part 6 */
        lcd_power = "vcc-lcd";
        lcd_pin_power = "vcc-pd";
        pinctrl-0 = <&rgb18_pins_a>;
        pinctrl-1 = <&rgb18_pins_b>;
};
```

在&pio节点下增加rgb18_pins_a和rgb18_pins_b子节点，增加引脚复用功能

```
 rgb18_pins_a: rgb18@0 {
                allwinner,pins = "PD0", "PD1", "PD2", "PD3", "PD4", "PD5", \
                        "PD6", "PD7", "PD8", "PD9", "PD10", "PD11", \
                        "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", \
                        "PD18", "PD19", "PD20", "PD21";
                allwinner,pname = "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", \
                        "lcdd10", "lcdd11", "lcdd12", "lcdd13", "lcdd14", "lcdd15", \
                        "lcdd18", "lcdd19", "lcdd20", "lcdd21", "lcdd22", "lcdd23", \
                        "lcdpclk", "lcdde", "lcdhsync", "lcdvsync";
                allwinner,function = "lcd";
                allwinner,muxsel = <2>;
                allwinner,drive = <3>;
                allwinner,pull = <0>;
        };

        rgb18_pins_b: rgb18@1 {
                        allwinner,pins = "PD0", "PD1", "PD2", "PD3", "PD4", "PD5", \
                                        "PD6", "PD7", "PD8", "PD9", "PD10", "PD11", \
                                        "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", \
                                        "PD18", "PD19", "PD20", "PD21";
                        allwinner,pname = "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", \
                                        "lcdd10", "lcdd11", "lcdd12", "lcdd13", "lcdd14", "lcdd15", \
                                        "lcdd18", "lcdd19", "lcdd20", "lcdd21", "lcdd22", "lcdd23", \
                                        "lcdpclk", "lcdde", "lcdhsync", "lcdvsync";
                        allwinner,function = "io_disabled";
                        allwinner,muxsel = <0xf>;
                        allwinner,drive = <3>;
                        allwinner,pull = <0>;
        };
```

### 2.2 修改uboot设备树

在同一目录下修改uboot设备树

```shell
book@100ask:~/workspaces/tina-v853-open/device/config/chips/v853/configs/100ask$ vi uboot-board.dts
```

```
&lcd0 {
        lcd_used            = <1>;
        lcd_driver_name     = "default_lcd";
        lcd_backlight       = <100>;

        lcd_if = <0>;
        lcd_hv_if = <0>;

        lcd_x               = <1024>;
        lcd_y               = <600>;
        lcd_width           = <154>;
        lcd_height          = <85>;
        lcd_dclk_freq       = <51>;
        lcd_hbp             = <140>;
        lcd_ht              = <1344>;
        lcd_hspw            = <20>;
        lcd_vbp             = <20>;
        lcd_vt              = <635>;
        lcd_vspw            = <3>;

        lcd_pwm_used        = <1>;
        lcd_pwm_ch          = <9>;
        lcd_pwm_freq        = <500>;
        lcd_pwm_pol         = <1>;

        lcd_frm = <1>;
        lcd_io_phase = <0x0000>;
        lcd_gamma_en = <0>;
        lcd_cmap_en = <0>;
        lcd_hv_clk_phase = <0>;
        lcd_hv_sync_polarity= <0>;

        lcd_power = "vcc-lcd";
        lcd_pin_power = "vcc-pd";
        pinctrl-0 = <&rgb18_pins_a>;
        pinctrl-1 = <&rgb18_pins_b>;
};
```

在&pio节点下增加rgb18_pins_a和rgb18_pins_b子节点，增加引脚复用功能

```
rgb18_pins_a: rgb18@0 {
                allwinner,pins = "PD0", "PD1", "PD2", "PD3", "PD4", "PD5", \
                        "PD6", "PD7", "PD8", "PD9", "PD10", "PD11", \
                        "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", \
                        "PD18", "PD19", "PD20", "PD21";
                allwinner,pname = "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", \
                        "lcdd10", "lcdd11", "lcdd12", "lcdd13", "lcdd14", "lcdd15", \
                        "lcdd18", "lcdd19", "lcdd20", "lcdd21", "lcdd22", "lcdd23", \
                        "lcdpclk", "lcdde", "lcdhsync", "lcdvsync";
                allwinner,function = "lcd";
                allwinner,muxsel = <2>;
                allwinner,drive = <3>;
                allwinner,pull = <0>;
        };
        rgb18_pins_b: rgb18@1 {
                        allwinner,pins = "PD0", "PD1", "PD2", "PD3", "PD4", "PD5", \
                                        "PD6", "PD7", "PD8", "PD9", "PD10", "PD11", \
                                        "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", \
                                        "PD18", "PD19", "PD20", "PD21";
                        allwinner,pname = "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", \
                                        "lcdd10", "lcdd11", "lcdd12", "lcdd13", "lcdd14", "lcdd15", \
                                        "lcdd18", "lcdd19", "lcdd20", "lcdd21", "lcdd22", "lcdd23", \
                                        "lcdpclk", "lcdde", "lcdhsync", "lcdvsync";
                        allwinner,function = "io_disabled";
                        allwinner,muxsel = <0xf>;
                        allwinner,drive = <3>;
                        allwinner,pull = <0>;
        };
```

## 3.检查修改内核配置和uboot配置

### 3.1 修改内核配置

在Tina的根目录下输入`make kernel_menuconfig`

```shell
book@100ask:~/workspaces/tina-v853-open$ make kernel_menuconfig
```

通过方向键，选择并进入如下目录，输入Y开启DISP Driver Support

```
 → Device Drivers 
 	→ Graphics support 
 		→ Frame buffer Devices 
 			→ Video support for sunxi
 				<*> DISP Driver Support(sunxi-disp2)
```

如下图所示：

![image-20230411185022055](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411185022055.png)

选中后，通过方向键选择Save，按下回车。

![image-20230411185717558](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411185717558.png)

按下后会提示您是否确认保存备份，选择OK

![image-20230411190013770](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411190013770.png)

此时我们所修改的配置将保存在tina-v853-open/kernel/linux-4.9/.config文件中，继续按下回车退出。

![image-20230411190051184](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411190051184.png)

保存完成后，通过方向键选择Exit，一直选择Exit，直到退出内核配置界面

![image-20230411190138923](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411190138923.png)

### 3.2 修改uboot配置

想要修改uboot，需要进入tina-v853-open/brandy/brandy-2.0/u-boot-2018目录下，执行`make menuconfig`

```
book@100ask:~/workspaces/tina-v853-open$ cd brandy/brandy-2.0/u-boot-2018/
book@100ask:~/workspaces/tina-v853-open/brandy/brandy-2.0/u-boot-2018$ make menuconfig
```

通过方向键进入

```
→ Device Drivers 
	→ Graphics support 
		 [*] DISP Driver Support(sunxi-disp2)  --->
```

如下图所示：

![image-20230411192759836](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411192759836.png)

选中后，通过方向键选择Save，按下回车。

![image-20230411185717558](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411185717558.png)

按下后会提示您是否确认保存备份，选择OK

![image-20230411190013770](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411190013770.png)

此时我们所修改的配置将保存在`tina-v853-open/brandy/brandy-2.0/u-boot-2018/.config`文件中，继续按下回车退出。

![image-20230411190051184](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411190051184.png)

保存完成后，通过方向键选择Exit，一直选择Exit，直到退出uboot配置界面

![image-20230411190138923](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230411190138923.png)



## 4.七寸RGB屏驱动程序

内核和uboot中的驱动程序都是同一套，可以复用的。由于我们选中了sunxi-disp2，都会默认去编译default_panel.c驱动程序。

内核驱动位置：tina-v853-open/kernel/linux-4.9/drivers/video/fbdev/sunxi/disp2/disp/lcd/default_panel.c

uboot驱动位置：

tina-v853-open/brandy/brandy-2.0/u-boot-2018/drivers/video/sunxi/disp2/disp/lcd/default_panel.c

```
/*
 * drivers/video/sunxi/disp2/disp/lcd/default_panel.c
 *
 * Copyright (c) 2007-2019 Allwinnertech Co., Ltd.
 * Author: zhengxiaobin <zhengxiaobin@allwinnertech.com>
 *
 * This software is licensed under the terms of the GNU General Public
 * License version 2, as published by the Free Software Foundation, and
 * may be copied, distributed, and modified under those terms.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 */
#include "default_panel.h"

static void LCD_power_on(u32 sel);
static void LCD_power_off(u32 sel);
static void LCD_bl_open(u32 sel);
static void LCD_bl_close(u32 sel);

static void LCD_panel_init(u32 sel);
static void LCD_panel_exit(u32 sel);

static void LCD_cfg_panel_info(panel_extend_para * info)
{
        u32 i = 0, j=0;
        u32 items;
        u8 lcd_gamma_tbl[][2] =
        {
                //{input value, corrected value}
                {0, 0},
                {15, 15},
                {30, 30},
                {45, 45},
                {60, 60},
                {75, 75},
                {90, 90},
                {105, 105},
                {120, 120},
                {135, 135},
                {150, 150},
                {165, 165},
                {180, 180},
                {195, 195},
                {210, 210},
                {225, 225},
                {240, 240},
                {255, 255},
        };

        u32 lcd_cmap_tbl[2][3][4] = {
        {
                {LCD_CMAP_G0,LCD_CMAP_B1,LCD_CMAP_G2,LCD_CMAP_B3},
                {LCD_CMAP_B0,LCD_CMAP_R1,LCD_CMAP_B2,LCD_CMAP_R3},
                {LCD_CMAP_R0,LCD_CMAP_G1,LCD_CMAP_R2,LCD_CMAP_G3},
                },
                {
                {LCD_CMAP_B3,LCD_CMAP_G2,LCD_CMAP_B1,LCD_CMAP_G0},
                {LCD_CMAP_R3,LCD_CMAP_B2,LCD_CMAP_R1,LCD_CMAP_B0},
                {LCD_CMAP_G3,LCD_CMAP_R2,LCD_CMAP_G1,LCD_CMAP_R0},
                },
        };

        items = sizeof(lcd_gamma_tbl)/2;
        for (i=0; i<items-1; i++) {
                u32 num = lcd_gamma_tbl[i+1][0] - lcd_gamma_tbl[i][0];

                for (j=0; j<num; j++) {
                        u32 value = 0;

                        value = lcd_gamma_tbl[i][1] + ((lcd_gamma_tbl[i+1][1] - lcd_gamma_tbl[i][1]) * j)/num;
                        info->lcd_gamma_tbl[lcd_gamma_tbl[i][0] + j] = (value<<16) + (value<<8) + value;
                }
        }
        info->lcd_gamma_tbl[255] = (lcd_gamma_tbl[items-1][1]<<16) + (lcd_gamma_tbl[items-1][1]<<8) + lcd_gamma_tbl[items-1][1];

        memcpy(info->lcd_cmap_tbl, lcd_cmap_tbl, sizeof(lcd_cmap_tbl));

}

static s32 LCD_open_flow(u32 sel)
{
        LCD_OPEN_FUNC(sel, LCD_power_on, 30);   //open lcd power, and delay 50ms
        LCD_OPEN_FUNC(sel, LCD_panel_init, 50);   //open lcd power, than delay 200ms
        LCD_OPEN_FUNC(sel, sunxi_lcd_tcon_enable, 100);     //open lcd controller, and delay 100ms
        LCD_OPEN_FUNC(sel, LCD_bl_open, 0);     //open lcd backlight, and delay 0ms

        return 0;
}

static s32 LCD_close_flow(u32 sel)
{
        LCD_CLOSE_FUNC(sel, LCD_bl_close, 0);       //close lcd backlight, and delay 0ms
        LCD_CLOSE_FUNC(sel, sunxi_lcd_tcon_disable, 0);         //close lcd controller, and delay 0ms
        LCD_CLOSE_FUNC(sel, LCD_panel_exit,     200);   //open lcd power, than delay 200ms
        LCD_CLOSE_FUNC(sel, LCD_power_off, 500);   //close lcd power, and delay 500ms

        return 0;
}

static void LCD_power_on(u32 sel)
{
        sunxi_lcd_power_enable(sel, 0);//config lcd_power pin to open lcd power0
        sunxi_lcd_pin_cfg(sel, 1);
}

static void LCD_power_off(u32 sel)
{
        sunxi_lcd_pin_cfg(sel, 0);
        sunxi_lcd_power_disable(sel, 0);//config lcd_power pin to close lcd power0
}

static void LCD_bl_open(u32 sel)
{
        sunxi_lcd_pwm_enable(sel);
        sunxi_lcd_backlight_enable(sel);//config lcd_bl_en pin to open lcd backlight
}

static void LCD_bl_close(u32 sel)
{
        sunxi_lcd_backlight_disable(sel);//config lcd_bl_en pin to close lcd backlight
        sunxi_lcd_pwm_disable(sel);
}

static void LCD_panel_init(u32 sel)
{
        return;
}

static void LCD_panel_exit(u32 sel)
{
        return ;
}

//sel: 0:lcd0; 1:lcd1
static s32 LCD_user_defined_func(u32 sel, u32 para1, u32 para2, u32 para3)
{
        return 0;
}

__lcd_panel_t default_panel = {
        /* panel driver name, must mach the name of lcd_drv_name in sys_config.fex */
        .name = "default_lcd",
        .func = {
                .cfg_panel_info = LCD_cfg_panel_info,
                .cfg_open_flow = LCD_open_flow,
                .cfg_close_flow = LCD_close_flow,
                .lcd_user_defined_func = LCD_user_defined_func,
        },
};
```

## 5.开启触摸功能

### 5.1修改设备树

修改设备树中的twi2节点下增加ctp触摸子节点

```
&twi2 {
        ctp@14 {
                compatible = "allwinner,gsl3680";
                device_type = "ctp";
                reg = <0x14>;
                status = "okay";
                ctp_name = "gt9xxnew_ts";
                ctp_twi_id = <0x2>;
                ctp_twi_addr = <0x14>;
                ctp_screen_max_x = <0x400>;
                ctp_screen_max_y = <0x258>;
                ctp_revert_x_flag = <0x0>;
                ctp_revert_y_flag = <0x0>;
                ctp_exchange_x_y_flag = <0x0>;
                ctp_int_port = <&pio PH 7 6 1 3 0xffffffff>;
                ctp_wakeup   = <&pio PH 8 1 1 3 0xffffffff>;
                //ctp-supply = <&reg_aldo2>;
                //ctp_power_ldo = <&reg_dldo1>;
                //ctp_power_ldo_vol = <3300>;
        };

};
```

并在lcd0节点后面使能twi2节点和引脚复用功能。

```
&twi2 {
        clock-frequency = <400000>;
        pinctrl-0 = <&twi2_pins_a>;
        pinctrl-1 = <&twi2_pins_b>;
        pinctrl-names = "default", "sleep";
        /* For stability and backwards compatibility, we recommend setting ‘twi_drv_used’ to 0  */
        twi_drv_used = <0>;
        twi-supply = <&reg_dcdc1>;
        twi_pkt_interval = <0>;
        //status = "disabled";
        status = "okay";
};
```

### 5.2 修改内核配置

​	在Tina的根目录下执行make kernel_menuconfig

```
book@100ask:~/workspaces/tina-v853-open$ make kernel_menuconfig
```

进入下面的目录输入Y选中gt9xxnew touchscreen driver触摸驱动

```
→ Device Drivers 
	→ Input device support 
		→ Touchscreens 
			<*>   gt9xxnew touchscreen driver
```

如下图所示

![image-20230412150545791](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230412150545791.png)

保存并退出内核配置界面

## 6.打开lvgl示例程序

在Tina的根目录下，输入`make menuconfig`

```
book@100ask:~/workspaces/tina-v853-open$ make menuconfig
```

进入如下目录，并输入Y选中lv_examples

```
 > Gui 
 	> Littlevgl
 		 <*> lv_examples................................. lvgl examples use lvgl-8.1.0 
```

选中后保存并退出配置界面。

## 7.编译并打包生成镜像

由于我们第一次已经完整编译了系统，现在修改后编译系统的时间就不会特别长，具体时间取决于CPU的性能，在Tina的根目录下执行`make -jN `，其中N为线程数，增加线程数提高编译速度。

```
book@100ask:~/workspaces/tina-v853-open$ make -j4
```

等待编译完成后，输入pack，打包生成镜像

```
book@100ask:~/workspaces/tina-v853-open$ pack
```

打包生成镜像后可以在tina-v853-open/out/v853/100ask/openwrt/目录下找到新的镜像文件

v853_linux_100ask_uart0.img，将该文件拷贝到windows电脑下备用。

## 8.烧录新镜像启动开发板

使用全志PhoenixSuit烧写工具进行新镜像的烧写，具体方法可以参见《100ASK_V853-PRO 环境配置及编译烧写》。

注意：需要在上电前连接七寸RGB屏，同时连接排线时需要注意排线的线序是否正确。

![image-20230412101223261](http://photos.100ask.net/allwinner-docs/v853/DeviceDriver/image-20230412101223261.png)

连接好七寸屏，再连接电源线和两条Type-C数据线，将开关拨向电源接口的方向即可上电启动开发板，在烧写新镜像完成后通过串口工具打开开发板的串口终端，进入Tina Linux的控制台界面，输入`lv_examples 0`，即可在七寸RGB屏上显示出LVGL的DEMO程序。

```
root@TinaLinux:/# lv_examples 0
wh=1024x600, vwh=1024x1200, bpp=32, rotated=0
Turn on double buffering.
Turn on 2d hardware acceleration.
Turn on 2d hardware acceleration rotate.
```
