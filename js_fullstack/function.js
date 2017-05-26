

function abs(x){
	if(typeof x != 'number'){
		throw 'Not a number';
	}
	return x>0?x:-x;
}

//匿名函数
var abs_another = function(x){
	if(typeof x !='number'){
		throw 'Not a number';
	}
	return x>0?x:-x;
}

var x = abs(-10);
var y = abs_another(2);
var z = abs_another(-3);
// var w = abs_another('aaa');

console.log('x:'+x+" y:"+y+" z:"+z);

//JavaScript中的函数可传入任意个参数

var i1=abs(10,'12344');
console.log(i1);

var i2=abs(-9);
console.log(i2);

// var i3=abs();
// console.log(i3);

//JavaScript的arguments关键字
function foo(x){
	for(var arg in arguments){
		console.log(arg+":"+arguments[arg]);
	}
}

foo(1,"2xfefw",null,undefined,NaN,-1223);

//ES6 新特性:rest

function sum(...rest){
  var result = 0;
  for(var i = 0;i<rest.length;i++){
   result+=rest[i];
}
   return result;
}


var s = sum(1,2,3,4,5);
console.log(s);

function test(){
    return  //JS在行末自动添加分号 return;
    {
    	name:"test"
    };
}

function test2(){
	return{
		name:"test2"
	};
}

console.log(test());
console.log(test2());