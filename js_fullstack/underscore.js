'use strict';

var a1 = [1,4,9,16];
console.log(a1.map(Math.sqrt));
console.log(a1.filter((x)=>(x%2==0)));

//JS 函数式编程 支持高阶函数和闭包

//Array有map,filter方法，但是Object没有，低版本IE浏览器也没有

//underscore 提供了一套完善的函数式编程的接口==> 更方便在JS中实现函数式编程
//underscore 会把自身绑定到全局变量_上

