'use strict'

let file  = require('./file'),
	build = require('./build')

exports.init = () => {
	file.init(() => {
		build.init()
	})
}