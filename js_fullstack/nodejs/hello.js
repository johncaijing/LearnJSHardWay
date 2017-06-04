'use strict';

var word = 'NodeJS';

var hello =`hello,${word}`;

console.log(hello);

//在Node环境中，js文件就是一个模块

//使用模块提高代码的可维护性
//避免函数名和变量名的冲突

var s = 'Hello';

function greet(name){
    console.log(name);
}

module.exports = greet;
console.log(module);