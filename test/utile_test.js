'use strict';

let assert = require('chai').assert,
	_ 	   = require('../src/util')


 describe('Test util', () => {

 	describe('#getTitle', () => {

 		it('should return name', () => {
	 		let txt1 = '<h1>name</h1>',
	 			txt2 = '<h1>name</h1>\n<h2>content</h2>',
	 			txt3 = '<h1>name</h1>\n<h2>content</h2>\n<p>content</p>',
	 			txt4 = '<h1 id="title">name</h1>\n<h2>content</h2>',
	 			result1 = _.getTitle(txt1),
	 			result2 = _.getTitle(txt2),
	 			result3 = _.getTitle(txt3),
	 			result4 = _.getTitle(txt4)

	 		assert.equal(result1, 'name')
	 		assert.equal(result2, 'name')
	 		assert.equal(result3, 'name')
	 		assert.equal(result4, 'name')
 		})	
 	
 	})

 	describe('#rename', () => {

 		it('should return the.html extension', () => {

 			let test1 = 'index.md',
 				test2 = 'test.md',
 				result1 = _.rename(test1),
 				result2 = _.rename(test2)

 			assert.equal(result1, 'index.html')
 			assert.equal(result2, 'test.html')
 		})
 	})
 })