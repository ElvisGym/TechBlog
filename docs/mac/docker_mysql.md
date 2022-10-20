# Docker配置MySQL
docker pull mysql:8.0.30

如果希望容器里面的MySQL，可以通过外部的图像界面管理的话，只需要将端口映射一下就行了。<br />`docker run -p <本机端口:数据库端口> --name <容器名称> -e MYSQL_ROOT_PASSWORD=<数据库密码> -d mysql:<版本号>`
