'use strict';

//generator ES6新引入的数据类型
//看上去像函数。可以返回多次

//定义:
//you
function* foo(x){
	yield x+1;
	yield x+2;
	return x+3;
}

console.log(foo(1));

//调用generator对象的两个方法
//1.调用generator对象的next方法

var f = foo(3);
console.log(f.next());
console.log(f.next());
console.log(f.next());

// console.log(f.next());

//2.直接用for...of循环迭代generator对象
for(var x in foo(6)){
	console.log(x);
}


//生成器的作用:
//在执行过程中可以多次返回
//像一个可以保存执行状态的函数


//用对象保存状态
var fib = {
	a:0,
	b:1,
	n:0,
	max:5,
	next:function(){
		var r = this.a,
		    t = this.a+this.b;
		this.a = this.b;
		this.b = t;
		if(this.n<this.max){
			this.n++;
			return r;
		}else{
			return undefined;
		}    
	}
}

// console.log(fib);
fib.max = 10;
var next = fib.next();
while(next!==undefined){
	console.log(next);
	next = fib.next();
}
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());

function* fib2(max){
   var 
     t,
     a = 0,
     b = 1,
     n = 1;
     while(n<max){
     	yield a;
     	t = a+b;
     	a = b;
     	b = t;
     	n++;
     }
     return a;
}

for(var x of fib2(10)){
	console.log(x);
}


