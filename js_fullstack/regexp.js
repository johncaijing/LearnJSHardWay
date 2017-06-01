'use strict';


//JS中使用正则表达式
//1.直接通过 /正则表达式/
//2.通过new RegExp('正则表达式')

var rg1 = /ABC\-001/;
var rg2 = new RegExp('ABC\\-001');

console.log(rg1);
console.log(rg2);

var re = /^\d{3}\-\d{3,8}$/;

console.log(re.test('010-1234565'));
console.log(re.test('010-123d'));
console.log(re.test('07431234'));

//切分字符串
var arr = 'a b  c'.split(' ');
console.log(arr);

var arr2 = 'a b  c'.split(/\s+/);
console.log(arr2);

var arr3 = 'a,b, c   d'.split(/[\s\,]+/);
console.log(arr3);

var arr4 = 'a,b;;c  d'.split(/[\s\,\;]+/);
console.log(arr4);

//分组
//提取子串,()表示要提取分组
//在RegExp对象上用exec提取出子串
//提取成功返回Array
//提取失败返回null


var re2 = /^(\d{3})-(\d{3,8}$)/

console.log(re2.exec('010-12345678'));
console.log(re2.exec('010 12345'))

//贪婪匹配
//正则匹配默认是贪婪匹配

var re3 = /^(\d+)(0*)$/
var result = re3.exec('102300');
console.log(result);

//非贪婪匹配
var re4 = /^(\d+?)(0*)$/
var result2 = re4.exec('102300');
console.log(result2);

//全局搜索
//g表示全局匹配

var r1 = /test/g;
//等价于
var r2 = new RegExp('test','g');

var s = 'JavaScript,VBScript,JScript,and ECMAScript';
var reg = /[a-zA-Z]+Script/g;

var result = reg.exec(s);
while(result!==null){
	console.log(result+"\nlastIndex:"+reg.lastIndex);
	result = reg.exec(s);
}

//i 忽略大小写
//m 多行匹配

