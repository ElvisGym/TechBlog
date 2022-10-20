# Mac使用npm安装包，完成后显示命令找不到
使用Mac的npm安装包之后，找不到命令的问题。
```json
$json-server --version
zsh: command not found: json-server
```

**解决办法：**<br />.npmrc是npm的配置文件，可以通过npm config list 命令查看

执行以下命令配置环境变量
```json
echo -e "export PATH=$(npm prefix -g)/bin:$PATH" >> ~/.npmrc && source ~/.npmrc
```
执行完成后再次使用命令即可成功。

补充：<br />打开新的端口需要重新source一下～/.npmrc，在~/.zshrc文件中添加一行source ~/.npmrc即可。
