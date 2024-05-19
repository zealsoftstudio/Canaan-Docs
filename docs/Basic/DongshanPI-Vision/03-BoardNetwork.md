# 开发板配网

硬件要求：

- DongshanPI-Vision开发板
- 天线 x1
- Type-C数据线 x2

## 1.联网

### 1.1 结束开启联网脚本

安装启动开发板完成后，打开串口终端进入开发板控制台。由于开发板启动后会启动联网脚本，我们第一次配网时需要手动结束联网脚本。输入`ps`，查看进程，找到下面所示的两个进程。

```
  159 root      0:00 wpa_supplicant -D nl80211 -i wlan0 -c /etc/wpa_supplicant.
  178 root      0:00 udhcpc -R -n -p /var/run/udhcpc.eth0.pid -i eth0 -b
```

![image-20230721195320635](http://photos.100ask.net/canaan-docs/image-20230721195320635.png)

通过上述信息可以发现，我们需要手动结束159和178这两个进程，您的进程号可能和我不一致，按您开发板上世纪的进程操作。输入：

```
kill -9 <PID>
```

假设我使用的开发板中`wpa_supplicant`和`udhcpc`进程号分别为159和178，此时我应该输入以下命令

```
kill -9 159
kill -9 178
```

![image-20230721195657654](http://photos.100ask.net/canaan-docs/image-20230721195657654.png)

手动结束后使用`ps`查看是否还存在对应进程。

### 1.2 填写WIFI信息

修改`/etc/wpa_supplicant.conf`文件，填写wifi名称和密码，输入

```
vi /etc/wpa_supplicant.conf
```

进入`vi`编辑器后会显示以下信息

```
ctrl_interface=/var/run/wpa_supplicant
update_config=1
ap_scan=1
```

在文件末尾增加网络信息

```
network={
               ssid="<wifi名称>"
               psk="<密码>"
        }
```

假设我的WiFi名称为Programmers，密码为123456，则实际添加的网络信息为：

```
network={
               ssid="Programmers"
               psk="12345678"
        }
```

添加完成后保存并退出vi编辑器。

### 1.3 连接WiFi

连接到 SSID，输入：

```
wpa_supplicant -B -iwlan0 -c /etc/wpa_supplicant.conf
```

执行完成后，如下所示

![image-20230721200931193](http://photos.100ask.net/canaan-docs/image-20230721200931193.png)



获取ip地址，输入：

```
udhcpc -i  wlan0
```

获取完成后即为成功连接互联网。

### 1.4 开机自动获得WiFi IP地址
使用vi修改/etc/init.d/rc.sysinit文件，在文件中添加udhcpc -i  wlan0一句。这样每次启动开发板都会自动获取WiFi路由器分配的IP地址。
```
ifconfig wlan0 up
if [ $? -eq 0 ];then
        if [ -f /first_run_flag_file ];then
                echo "ctrl_interface=/var/run/wpa_supplicant" > /etc/wpa_supplicant.conf
                echo "update_config=1" >> /etc/wpa_supplicant.conf
                echo "ap_scan=1" >> /etc/wpa_supplicant.conf
        fi

        wpa_supplicant -D nl80211 -i wlan0 -c /etc/wpa_supplicant.conf -B
        udhcpc -i  wlan0
fi
```

## 2.测试网络

测试WiFi是否可以访问互联网，输入`ping www.baidu.com`，输入后如下所示：

```
[root@canaan ~ ]$ ping www.baidu.com
PING www.baidu.com (14.119.104.189): 56 data bytes
64 bytes from 14.119.104.189: seq=0 ttl=55 time=10.241 ms
64 bytes from 14.119.104.189: seq=1 ttl=55 time=16.292 ms
64 bytes from 14.119.104.189: seq=2 ttl=55 time=15.699 ms
64 bytes from 14.119.104.189: seq=3 ttl=55 time=12.508 ms
```



在后续启动开发板中，开发板会自动连接到SSID，您只需要输入`udhcpc -i  wlan0`重新获取ip地址即可访问互联网。
