'use strict';


//JavaScript对象的定义

var xiaoming = {
	name:'xiaoming',
	birth:1999
}

//对象的方法

var john = {
	name:'john',
	birth:1999,
	age:function(){
		var y = new Date().getFullYear();
		return y - this.birth;//this指向当前对象，即john
	}
}

console.log('john age:'+john.age());

function getAge(){
	return new Date().getFullYear()-this.birth;
}

var kobe = {
	name:'kobe',
	birth:1994,
	age:getAge
}

console.log(kobe.age());
// console.log(getAge()); //undefined

//ECMA规定，strict模式让函数的this指向undefined

var xm = {
	birth:1995,
	age:function(){
		function getAge(){
			return new Date().getFullYear()-this.birth;//this指向了undefined
		}
		return getAge();
	}
}

// xm.age();

//解决办法，用that变量捕获this

var fix_xm = {
	birth:1999,
	age:function(){
		var that = this;//that捕获this
		function getAge(){
			return new Date().getFullYear()-that.birth;
		}
		return getAge();
	}
}

console.log(fix_xm.age());

//apply方法控制this的指向
//用函数本身的apply方法，接收两个参数
//1.需要绑定的this变量
//2.Array,函数本身的参数

console.log(kobe.age());
console.log(getAge.apply(kobe,[]));//this指向kobe,参数为空

//call方法与apply的方法类似
//apply 参数打包成Array
//call 把参数按顺序传入

console.log('普通方法调用:'+Math.max(2,4,3,5));
console.log('apply方法调用:'+Math.max.apply(null,[2,4,3,5]));
console.log('call方法调用:'+Math.max.call(null,2,4,3,5));

//普通函数调用，this绑定为null


//装饰器
//apply方法可以动态改变函数的行为

var count = 0;
var oldParseInt = parseInt;//保留原函数

window.parseInt = function(){
	count+=1;
	return oldParseInt.apply(null,arguments);
}

parseInt('10');
parseInt('20');
parseInt('100');

console.log(count);
