'use strict';

//Date对象表示日期和时间

var now = new Date();

console.log(
     now+'\n'
     +now.getFullYear()+'\n'
     +now.getMonth()+'\n'
     +now.getDay()+'\n'
     +now.getHours()+'\n'
     +now.getMinutes()+'\n'
     +now.getSeconds()+'\n'
     +now.getMilliseconds()+'\n'
     +now.getTime()
	);

//时间是浏览器从本机操作系统获取的。不一定准确。

//创建时间
var d = new Date(2015,5,19,20,15,30,123);
console.log(d);

//JS的月份范围是0~11

//解析符合ISO8601格式的字符串

var parse_d = Date.parse('Wed May 31 2017 23:43:15 GMT+0800');
console.log(parse_d);

var d2 = new Date(parse_d);
console.log(d2);

//时区
console.log(now.toLocaleString());
console.log(now.toUTCString());

//时间戳:从1970年1月1日零时整的GMT时区开始的毫秒数

