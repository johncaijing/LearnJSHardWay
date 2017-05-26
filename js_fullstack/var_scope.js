'use strict'; //ECMA strict模式

// abc = "Hello World";
// console.log(abc);

function foo(){
  var x = 1;
  x = x + 1;
}

// x = x + 2;//无法在x作用域外引用到x

//JS函数嵌套的时候，内部函数会屏蔽外部函数重名的变量
function outer(){
  var x = 1;
  function inner(){
  	var x = 'A';
  	console.log('x in inner function:'+x);
  }
  console.log('x in outer function:'+x);
  inner();

}

outer();

//变量提升
//JS提升了变量y的声明，但不会提升y的赋值=>在函数内部首先声明所有变量
function test(){
    var x = 'Hello,'+y;
    console.log(x);
    var y = 'Tom';
} 
test();//Hello,undefined


//不在任何函数内定义的变量具有 全局作用域
var course = 'Learn JS';

console.log(course);
console.log(window.course);//JS中的默认全局对象window

var say = function(text){
	alert("Say function:"+text);
}

//顶级函数全局变量，具有全局作用域，绑定在window对象上

say("direct");
window.say("window call ");

//名字空间
//减少与其他JS文件的冲突：把自己的所有变量和函数全部绑定到一个全局变量上

var MYAPP = {};

MYAPP.name = 'myapp';
MYAPP.version = 1.0;

MYAPP.foo = function(){
	return 'foo';
}


//局部作用域

function loop(){
	for(var i = 0;i<100;i++){
		//
	}
	console.log("out of for loop i="+i);
}

loop();

//ES6 引进了关键字let 可以声明一个块级作用域
function loop2(){
	for(let i = 0;i<100;i++){
		//
	}
	// console.log(i);
}
loop2();

//常量

//ES6之前，大写字母表示常量
var PI = 3.1415;
//ES6 引入关键字 const定义常量，具有块级作用域
const PAI = 3.1415926;
console.log(PAI);
PAI = 3.14;