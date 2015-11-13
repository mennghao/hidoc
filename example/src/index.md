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

## 测试一下1
测试`测试`


```js
new Vue({
	data : function(){
		return {
			show : false,
			title : 'This is title',
			content : 'This is content'
		}
	},
	components : {
		'alert' : Alert
	}
})
```
## 测试一下2
```测试```

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |