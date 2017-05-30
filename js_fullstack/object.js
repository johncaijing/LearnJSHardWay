'use strict';

//JS中，一切都是对象
//typeof获取对象类型

console.log(typeof(NaN));
console.log(typeof(null));
console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(undefined));

//包装对象
var num = new Number(123);
console.log(typeof(num));

console.log(123);

//Number(),Boolean(),String()==>把数据转换为number,boolean,string类型。

var n = Number('123');
console.log(typeof(n));

//null,undefined没有toString()方法
//number对象调用toString()方法
// console.log(123.toString());
console.log(123..toString());
console.log((123).toString());
