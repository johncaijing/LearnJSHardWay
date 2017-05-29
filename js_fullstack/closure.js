'use strict';

//闭包

function sum(arr){
		return arr.reduce(function(x,y){
			return x+y;
		});
}

console.log(sum([1,2,3,4,5]));

//不立即求和
function lazy_sum2(arr){
	var sum = function(){
		return arr.reduce(function(x,y){
			return x+y;
		})
	}
	return sum;
}

var f = lazy_sum2([1,2,3,4,5]);
console.log(f);

console.log(f());

var f2 = lazy_sum2([1,2,3,4,5]);
console.log(f===f2);

function count(){
	var arr = [];
	for(var i = 1;i<=3;i++){
		arr.push(function(){
			return i*i;
		});
	}
	return arr;
}

var results = count();
var r1 = results[0];
var r2 = results[1];
var r3 = results[2];

console.log(r1());
console.log(r2());
console.log(r3());

//返回函数不要引用任何循环变量，或者会发生变化的变量

function count2(){
	var arr = [];
	for(var i = 1;i<=3;i++){
		arr.push((function(n){
			return function(){
				return n*n;
			}
		})(i));
	}
	return arr;
}

var results = count2();
var r1 = results[0];
var r2 = results[1];
var r3 = results[2];

console.log(r1());
console.log(r2());
console.log(r3());

//创建匿名函数并立即执行
console.log((function(x){
	return x*x;
})(3));


function make_pow(n){
	return function(x){
		return Math.pow(x,n);
	}
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5));//5的平方
console.log(pow3(3));//3的立方
