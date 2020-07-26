#!/usr/bin/env node

// 获取命令行参数
// console.log(process.argv)

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')

// require 载入这个模块
// resolve 找到这个模块所对应的路径，传递参数为相对路径  '../lib/index'
// 或者直接传参 '..' ，会找到根目录下的package.json，从中读取 main字段
process.argv.push(require.resolve('..'))

// console.log(process.argv)
require('gulp/bin/gulp')
