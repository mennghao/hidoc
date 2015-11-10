# hidoc
根据.md文件生成一组api文档页面

## 安装

````
➜ npm install -g hidoc
```
安装完成之后会提供一个全局命令```hidoc```

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

src目录存放编写好的文档```.md```文件, 然后执行

```
➜ hidoc build
```
之后会将生成好的文档放在```dist```目录