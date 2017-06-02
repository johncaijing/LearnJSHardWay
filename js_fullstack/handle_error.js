'use strict';

//错误分两种
//1.程序逻辑不对

// var s = null;
// var len = s.length;


//2.无法预测的异常情况

//try...catch...finally语句处理错误

//1.完整的try..catch..finally
// try{
// 	...
// }catch(e){
// 	...
// }finally{
// 	...
// }

//2.只有try..catch
// try{
// 	...
// }catch(e){
// 	...
// }

//3.只有try..finally
// try{
//    ...
// }finally{
//    ...
// }


//错误类型
//JS中有一个标准的Error对象表示错误
//还有从Error派生的TypeError等错误对象

try{
	null.length();
}catch(e){
	if(e instanceof TypeError){
		alert("Type Error!"+e.message);
	}else if(e instanceof Error){
		alert(e.message);
	}else{
		alert('Error:'+e);
	}
}

//抛出错误

var result,value,str;

try{
	str = prompt('Please input a number:');
	value = parseInt(str);
	if(isNaN(value)){
		throw new Error('输入的'+str+'不是数字');
	}
	resule = value * value;
	alert(n+'*'+n+'='+result);
}catch(e){
	alert('出错了:'+e);
}


//JS允许抛出任意对象，但是最好抛出Error对象


//错误传播
//一个函数内部发生错误，没有捕获的话，错误就会向上抛到外层调用函数
//外层没有捕获，错误会一直沿着函数调用链向上抛出
//直到被JS引擎捕获，代码终止执行


//异步错误处理
//JS引擎是一个事件驱动的执行引擎
//代码是以单线程执行

function printTime(){
	console.log('It is time:'+(new Date()));
}

setTimeout(printTime,2000);
console.log('done:'+(new Date()));

//涉及到异步代码，无法在调用时捕获，原因在捕获的时候，回调函数并未执行

