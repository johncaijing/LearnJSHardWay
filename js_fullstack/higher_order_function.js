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

//filter
//接收一个函数，根据函数的返回值是true还是false
//来决定是否保留元素

var nums = [1,2,3,4,5];
var result = nums.filter(function(x){
	return x%2==1;
});

console.log(result);


var stringArray = ['A','','c',null,undefined,' '];
var filterResult = stringArray.filter(function(s){
	return s&&s.trim();
});

console.log(filterResult);


//filter()方法可以接收多个参数

var arr = ['A','B','C'];
var result = arr.filter(function(element,index,self){
     console.log('element:'+element+' index:'+index);
     console.log('self:'+self);
     return true;
});

console.log(result);


//sort
//JS中的Array的sort()方法
//先将所有元素转换为String再排序

var numArray = [10,20,1,2]
var sort = numArray.sort();
console.log(sort);


//sort方法也是高阶函数
var sort2= numArray.sort(function(x,y){
   return x>y?1:(x==y?0:-1);
});
console.log(sort2);

//sort方法会直接对Array进行修改
console.log(numArray);
console.log(sort);
console.log(sort2);






