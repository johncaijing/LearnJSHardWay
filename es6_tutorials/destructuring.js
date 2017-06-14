'use strict';

//变量的解构赋值
//解构:ES6允许从数组和对象中提取值，对变量进行赋值

//before:
let a = 1;
let b = 2;
let c = 3;

//ES6
let [aa,bb,cc] = [1,2,3];

console.log(`${a} ${b} ${c}`);
console.log(`${aa} ${bb} ${cc}`);

//模式匹配
let[foo,[[bar],baz]] = [1,[[2],3]];
console.log(`${foo} ${bar} ${baz}`);

let[ , ,third] = ["one","two","three"];
console.log(`${third}`);
print(third);

function print(){
   var str = ``;
   for(let i = 0;i<arguments.length;i++){
    //    console.log(arguments[i]);
       str+=`${arguments[i]} `;
   }
   console.log(str);
}

let [x,,y]=[1,2,3];
print(x,y);

let [head,...tail] = [1,2,3,4];
print(head,tail);


let [i,j,...k] = ['a'];
print(i,j,k);

//不完全解构
let[xx,yy] = [1,2,3];
print(xx,yy);

let[q,[w],e]=[1,[2,3],4];
print(q,w,e);

//只要某种数据解构具有Iterator接口，都可以采用数组形式的解构

function* fibs(){
    let a = 0;
    let b = 1;
    while(true){
        yield a;
        [a,b]=[b,a+b];
    }
}

let[f,s,t,fo,fi,si] = fibs();
print(f,s,t,fo,fi,si);