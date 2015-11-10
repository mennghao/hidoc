#!/usr/bin/env node
'use strict';

let program = require('commander'),
	start = require('../src/index'),
	version = require('../package.json').version

program
	.allowUnknownOption()
	.version(version)
	.option('init', 'init project')
	.option('build', 'init project')
	.parse(process.argv)

//接收init参数
if (program.init){
	start.init();
}

if (program.build) {
	start.build()
}