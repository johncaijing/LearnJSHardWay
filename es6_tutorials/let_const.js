{
	let a = 10; //let声明的变量只在所在的代码块有效
	var b = 1;
}
// console.log(a);
console.log(b);

for(let i = 0;i<10;i++){
	console.log(`${i}`);
}
// console.log(i);

var a = [];
for(var i = 0;i<10;i++){
	a[i]=function(){
      console.log(i);
	};
}

a[6]();

var b = [];
for(let i = 0;i<10;i++){
	b[i]=function(){
       console.log(i);
	};
}

b[6]();


//for循环时父作用域
//循环体内部时单独的子作用域
for(let i = 0;i<3;i++){
	let i = 'abc';
	console.log(i);
}


//let不存在变量提升

//var变量提升，变量可以在声明之前使用，值为undefined
console.log(foo);
var foo = 2;

// console.log(bar);
// let bar = 2;


//暂时性死区

//ES6规定 区块中存在let和const，凡是在声明之前使用就会报错

var temp = 123;
if(true){
	// temp = 'abc';
	let temp;
}

//暂时性死区(temporal dead zone:TDZ)
//在代码块内，使用let命令声明变量前，该变量都是不可用的。
if(true){
	//TDZ开始
	// temp = 'abc';
	// console.log(temp);

	let temp;//TDZ结束
	console.log(temp);

	temp = 123;
	console.log(temp);
}

//不存在重复声明
//let不允许相同作用域内，重复声明同一个变量

// function(){
// 	let a = 10;
// 	var a = 1;
// }

// function(){
// 	let a = 10;
// 	let a = 1;
// }

// function func(arg){
// 	let arg;
// }

function func(arg){
 {
	let arg;
 }
}


//块级作用域


//ES5只有全局作用域和函数作用域
var tep = new Date();

function f(){
	console.log(tep);//局部变量tep 变量提升覆盖外层变量
	if(false){
		var tep = 'Hello World';
	}
}

f();

var s = 'hello';

for(var i =0;i<s.length;i++){
	console.log(s[i]);
}

console.log(i);

//ES6的块级作用域

function f1(){
	let n = 5;
	if(true){
		let n = 10;
	}
	console.log(n);//外层n不受内层n的影响
}

f1();

{{{{{let in_text = 'Hello World'}}}}}

{{{{let in_text = 'Hello World'}{let in_text = 'Hello World'}}}}

//IIFE写法
(function(){
  var temp = '123';
})();

//块级作用域写法
{
	let temp = '123';
}

//块级作用域与函数声明

//ES5 函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

if(true){
	function f(){}
}