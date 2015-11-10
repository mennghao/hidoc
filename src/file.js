'use strict'

let fs = require('fs'),
	_  = require('./util'),
	md = require('marked'),
	path = process.cwd(),
	src = path + '/src/',
	dist = path + '/dist/',
	menu,
	tpl = fs.readFileSync(__dirname + '/tpl.html', 'utf8') //获取模板

/**
 * [获取到menu列表]
 * @param  {[type]} list) [description]
 * @return {[type]}       [description]
 */
let formatMenu = (list) => list.map((x) => x.replace(/(.*?)\.md$/ig, ($1, $2) => '<li><a href="./' + $2 + '.html">' + $2 + '</a></li>')).join('')

/**
 * [遍历目录下的md]
 * @param  {[type]} files [description]
 * @return {[type]}       [description]
 */
let traverseFiles = (files) => {
	/**
	 * [获取到列表]
	 * @type {[type]}
	 */
	menu = formatMenu(files)

	files.forEach(function(file){

		fs.readFile(src + file, 'utf8', (err, data) => {
			if (err) throw err

			data = md(data)

			fs.writeFile(dist + _.rename(file), _.replaceTxt(tpl, _.getTitle(data), menu, data), 'utf8', () => {
				console.log(file + ' conversion complete')
			})
		})
	})
}

exports.init = (fn) => {

	_.checkDistDir(dist, () => {
		fs.readdir(src, (err, files) => {
			if (err) throw err

			traverseFiles(files)
		})

		if (fn) fn()
	})
}