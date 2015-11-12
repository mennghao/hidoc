# hidoc
根据.md文件生成一组api文档页面
## 安装
```js
➜ npm install -g hidoc
```
## 使用
```
➜ hidoc init
```
上面的命令会创建这样一个结构
```
|__dist
|
|__src  //存放.md文件
```
src目录存放编写好的文档.md文件, 然后执行
```
➜ hidoc build
```
之后会将生成好的文档放在dist目录