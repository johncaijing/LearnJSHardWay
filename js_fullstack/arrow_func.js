'use strict';

var f = x=>x*x;

//等效于
var f1 = function(x){
	return x*x;
}


console.log(f(10));
console.log(f1(8));

//箭头函数相当于匿名函数
//两种格式:
//1.只包含一个表达式
//2.包含多条语句,不能省略{...}和return

x=>{
	if(x>0){
		return x*x;
	}else{
		return -x*x;
	}
}

//多个参数需要用括号括起来

(x,y)=>x*x+y*y;

()=>3.14;

//箭头函数没有arguments
//https://stackoverflow.com/questions/35368213/getting-arguments-passed-to-an-es6-arrow-function-using-arguments-variable
var sum = (x,y,...rest)=>{
	// if(arguments.length==1){
	// 	return x;
	// }
	if(typeof(x)!=='number'){
		throw 'sum must have one arguemnt';
	}
	if(typeof(y)!=='number'){
       return x;
	}
	var i ,sum = x+y;
	for(i = 0;i<rest.length;i++){
		sum+=rest[i];
	}
	return sum;
}


console.log(sum(1,2,3,4,5));
console.log(sum(1));

//返回一个对象
var fx = x=>({foo:x});
console.log(fx(100).foo);

//箭头函数内部的this是词法作用域，由上下文确定。

var obj = {
	birth:1999,
	getAge:function(){
	    // var f = ()=>new Date().getFullYear()-this.birth;
	    // return f();
	    return (()=>new Date().getFullYear()-this.birth)();
	}
}

console.log(obj.getAge());

//老式写法
var obj2= {
	birth:1999,
	getAge:function(){
		var that = this;
		var f =function(){
			return new Date().getFullYear()-that.birth;
		}
		return f();
	}
}

console.log(obj2.getAge());

