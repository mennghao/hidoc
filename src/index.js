'use strict'

let file  = require('./file'),
	build = require('./build')

//创建项目结构
exports.init = () => {
	build.create();
}

exports.build = () => {
	file.init(() => {
		build.init()
	})
}