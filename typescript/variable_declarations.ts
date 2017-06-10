//var 
var a = 20;

function f(){
	var message = "Hello,TypeScript";
	return message;
}

function f2(){
	var a = 10;
	return function(){
		var b=a+1;
		return b;
	}
}

var g = f2()();
console.log(g);

//作用域规则
function f3(init:boolean){
    if(init){
    	var x = 10;
    }
    return x;
}
console.log(f3(true));
console.log(f3(false));

// for(var i = 0;i<10;i++){
// 	console.log("i:"+i);
// 	setTimeout(function(){
// 		console.log(i);
// 	},100*i);
// }


for(var i = 0;i<10;i++){
	 (function(i){
	 	setTimeout(function(){
	 		console.log(i);
	 	});
	 })(i);
}


console.log('let');
for(let i = 0;i<10;i++){
	setTimeout(function(){
		console.log(i);
	});

	setTimeout(()=>{
		console.log(i);
	});
}


//let
//块作用域

function f4(input:boolean){
   let a = 100;
   if(input){
   	 let b = a +1;
   	 return b;
   }
   // return b;
}


//重定义及屏蔽
//var可以声明多次，但只会得到1个

function f5(x){
   var x;
   var x;

   if(true){
   	var x;
   }
}


let l = 10;
// let l = 20;


// function f6(x) {
// 	let x = 100;
// }

// function f7(){
// 	let x = 100;
// 	var x = 100;
// }

function f8(condition,x){
   if(condition){
   	  let x = 100;
   	  return x;
   }
   return x;
}


console.log(f8(true,0));
console.log(f8(false,100));

//在一个嵌套作用域里引入一个新名字：屏蔽

function sumMatrix(matrix:number[][]){
	let sum = 0;
	for(let i = 0;i<matrix.length;i++){
		var currentRow = matrix[i];
		for(let j = 0;j<currentRow.length;j++){
			sum+=currentRow[j];
		}
	}
	return sum;
}


let matrix:number[][] = [[1,2,3],[4,5,6],[1,2,3,4,5,6]];
console.log(matrix);
console.log(sumMatrix(matrix));

//const声明
//常量

const numLivesForCat:number = 9;

const kitty = {
	name:"Aurora",
	numLives:numLivesForCat
}

// kitty = {

// }

kitty.name = "kittycat";
kitty.numLives--;


//解构
//解构数组
let input = [111,222];
let[first,second] = input;

console.log(first);//==> first = input[0];
console.log(second); // ==> second = input[1];

//对象解构

let o = {
   aa:"foo",
   bb:12,
   cc:"bar"
};


let{aa,bb} = o;








