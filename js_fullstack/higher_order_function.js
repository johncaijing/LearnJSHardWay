'use strict';

// 函数接收另一个函数作为参数：高阶函数

function add(x,y,f){
	return f(x)+f(y);
}

console.log(add(-5,6,Math.abs));

//map Array===>新的Array

function pow(x){
	return x*x;
}

var array = [1,2,3,4,5];

var new_array = array.map(pow);

console.log(new_array);
console.log(new_array.map(String));

//reduce
//Array的reduce()把一个函数作用到Array上
//接收两个参数，reduce把结果和序列的下一个元素做累积计算
//如 [x1,x2,x3,x4].reduce(f) = f(f(f(x1,x2),x3),x4);

var arr = [1,3,5,7,9];
var sum = arr.reduce(function(x,y){
	return x+y;
});

console.log(sum);


function string2int(s){
	if(typeof(s)!=='string'){
		throw 's is not a number';
	}
	var num = {
		'1':1,
		'2':2,
		'3':3,
		'4':4,
		'5':5,
		'6':6,
		'7':7,
		'8':8,
		'9':9,
		'0':0
	}
    var result = Array.from(s).map(function(n){
           return num[n];
    }).reduce(function(x,y){
       return x * 10+ y;
    });
    return result;
}

console.log(string2int('12345'));
console.log(Array.from('12345'));
// console.log(string2int(true));

function normalize(arr) {
    arr.map(function(name){
        return name.charAt(0).toUpperCase()+name.substring(1, name.length).toUpperCase(); 
    });
}

var str_array = ['1','2','3'];
var r = str_array.map(s=>parseInt(s));

console.log(r);


