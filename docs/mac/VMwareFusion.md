<a name="zGP29"></a>
# 安装 VMware Fusion
下载地址：[https://customerconnect.vmware.com/cn/downloads/get-download?downloadGroup=FUS-PUBTP-2021H1](https://customerconnect.vmware.com/cn/downloads/get-download?downloadGroup=FUS-PUBTP-2021H1)
> 个人使用可获得免费许可证，注册用户激活即可。<br />激活成功获得免费许可证后进入上述提供的下载链接：选择ARM版本进行下载。<br />下载完成后，双击安装即可。

![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005138.png)
<a name="wQIig"></a>
# 打开VMware Fusion
选择创建自定虚拟机：<br />![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005234.png)
<a name="ZdUQL"></a>
# 安装CentOS8
<a name="eC6O5"></a>
## 选择操作系统
Linux --> 其他 Linux 5.x 内核 64 位 ARM<br />![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005310.png)
<a name="gTcEU"></a>
## 选择虚拟磁盘
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005334.png)
<a name="lQxUZ"></a>
## 自定设置
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005408.png)
<a name="MEZgs"></a>
### 自定义虚拟机存储位置
完成名称和位置设置。
<a name="Ugrhs"></a>
### 处理器和内存
在设置菜单中完成设置。
<a name="iWPgp"></a>
### 硬盘大小设置
在设置菜单中完成设置。
<a name="KUlzU"></a>
### CD/DVD(STAT)

- 勾选`连接CD/DVD驱动器`
- 选择`CentOS8`镜像

![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005433.png)
<a name="jv2ss"></a>
### 启动虚拟机
启动虚拟机。
<a name="VuKsf"></a>
### Install CentOS Linux 8
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005449.png)<br />等待。
<a name="lTW7f"></a>
### Install Summary
<a name="cGVeM"></a>
#### Language Support（选择语言）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005505.png)
<a name="cSB9J"></a>
#### 完成检查
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005520.png)
<a name="EUPpB"></a>
#### Time & Date（时间和日期）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005537.png)
<a name="fl7E7"></a>
#### Software Selection（Minimal Install）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005555.png)
<a name="hENjQ"></a>
#### Installation Destination（安装目的地）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005610.png)
<a name="phqQR"></a>
#### Network & Host Name（网络和主机名）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005626.png)
<a name="ffy0A"></a>
#### Root Password（设置密码）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005644.png)
<a name="Ybo2L"></a>
#### Begin Installation（开始安装）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005700.png)
<a name="ZNXox"></a>
#### Reboot System（重启系统）
![image.png](https://image-host-1309482430.cos.ap-nanjing.myqcloud.com/20221021005714.png)
<a name="pxSpb"></a>
### 开启SSH服务
> 提示：默认已安装SSH服务并启动，只需开启22端口即可使用终端工具进行连接

```shell
service sshd start
# 重启sshd
service sshd restart
# 关闭sshd
service sshd stopbash
```
<a name="YrJhH"></a>
### 开放22端口
```shell
# 查询22端口是否开放
firewall-cmd --query-port=22/tcp
# 开启端口
firewall-cmd --add-port=22/tcp --permanent
# 开启后重新加载
firewall-cmd --reload
```
<a name="uBZF8"></a>
### 配置yum源
<a name="REQtO"></a>
#### 备份源文件
```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
<a name="QbfeB"></a>
#### 下载阿里源文件
```shell
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```
<a name="kN7hn"></a>
#### 替换源地址
```shell
sed -i -e "s|mirrors.cloud.aliyuncs.com|mirrors.aliyun.com|g " /etc/yum.repos.d/CentOS-*
sed -i -e "s|releasever|releasever-stream|g" /etc/yum.repos.d/CentOS-*
```
<a name="pWwGm"></a>
#### 更新软件包缓存
```shell
yum clean all && yum makecache
```
参考：[https://developer.aliyun.com/mirror/centos](https://developer.aliyun.com/mirror/centos)
