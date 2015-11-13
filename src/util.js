'use strict'

let fs =require('fs')

/**
 * [根据文本内容获取标题]
 * @param  {[type]} txt [description]
 * @return {[type]}     [description]
 */
exports.getTitle = (txt) => />(.*?)</ig.exec(txt.split('\n')[0])[1]

/**
 * [替换模板内容]
 * @param  {[type]} txt [description]
 * @return {[type]}     [description]
 */
exports.replaceTxt = (txt, title, menu, second, content) => txt.replace(/\{+(.*?)\}+/ig, function($1){
	if ($1.indexOf('title') > -1) return title
	if ($1.indexOf('menu') > -1) return menu
	if ($1.indexOf('second') > -1) return second
	if ($1.indexOf('content') > -1) return content
})

/**
 * [替换后缀名]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
exports.rename = (name) => name.replace('.md', '.html')

/**
 * [如果没有目录则创建一个]
 * @return {[type]} [description]
 */
exports.checkDistDir = (dist, fn) => {

	fs.exists(dist, (exists) => {
		if (!exists) fs.mkdirSync(dist)
		if (fn) fn()
	})
}