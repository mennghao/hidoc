'use strict'

let fs = require('fs'),
	_  = require('./util'),
	md = require('marked'),
	path = process.cwd(),
	src = path + '/src/',
	dist = path + '/dist/',
	tpl = fs.readFileSync(__dirname + '/tpl.html', 'utf8') //获取模板

/**
 * [遍历目录下的md]
 * @param  {[type]} files [description]
 * @return {[type]}       [description]
 */
let traverseFiles = (files) => {

	files.forEach(function(file){
		fs.readFile(src + file, 'utf8', (err, data) => {
			if (err) throw err

			data = md(data)

			fs.writeFile(dist + _.rename(file), _.replaceTxt(tpl, _.getTitle(data), data), 'utf8', () => {
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