'use strict'

let fs = require('fs'),
	_  = require('./util'),
	path = '../build/',
	dist = process.cwd() + '/dist/'

/**
 * [创建文件夹]
 * @return {[type]} [description]
 */
let mkdir = () => {
	_.checkDistDir('dist/static')
	_.checkDistDir('dist/static/css')
	_.checkDistDir('dist/static/js')
}
/**
 * [移动静态资源]
 * @return {[type]} [description]
 */
let moveStatic = () => {

	fs.readdir(path, (err, files) => {
		if (err) throw err

		files.forEach((file) => {
			let type = file.indexOf('js') > -1 ? '/static/js/' : '/static/css/'

			let src = path + '/' + file,
				target = dist + type + file,
				readable,
				writable

			fs.stat(src, (err, st) => {
				if (err) throw err

				if (st.isFile()) {
					readable = fs.createReadStream(src)
					writable = fs.createWriteStream(target)
					readable.pipe(writable)
				}
			})
		})
	})
}

exports.create = () => {
	_.checkDistDir('dist')
	_.checkDistDir('src')
}

exports.init = () => {
	mkdir();
	moveStatic();
}