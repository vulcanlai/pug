'use strict';

var gulp = require('gulp'),
	pug = require('gulp-pug'),					// HTML預處理
	rename = require('gulp-rename'),			// 重新命名檔案
	removeHtmlComments = require('gulp-remove-html-comments'); // HTML移除註釋

// npm install --save-dev gulp gulp-pug gulp-rename gulp-remove-html-comments

//執行 pugIndexProject
gulp.task('pugIndexProject', function () {
	return gulp.src('pug/index.pug')
		.pipe(pug({
			// Your options in here. 
			pretty: true					//格式化
		}))
		.pipe(rename(function(path) {		//重新命名檔案
			path.basename += ".project";
			// path.extname = ".html";
		}))
		.pipe(gulp.dest('./'))				//輸出
});
//執行 pugIndex
gulp.task('pugIndex', ['pugIndexProject'], function () {
	return gulp.src('pug/index.pug')
		.pipe(pug())
		.pipe(removeHtmlComments())			// HTML移除註釋
		.pipe(gulp.dest('./'))				//輸出
});


// 看守所有檔案，一旦有更動，便進行重整
gulp.task('watch',function(){
	gulp.watch('pug/**',['pugIndex']);
});


// Default Task
gulp.task('default', ['pugIndex', 'watch']);


