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

//默认值
//解构赋值允许指定默认值

let [x1 = true] = [];
print(x1);

let [x2,y2 = 'b']=['a'];
print(x2,y2);

let [x3,y3='b']=['a',undefined];
print(x3,y3);


//ES6使用严格相等运算符(===)
//如一个数组成员不严格等于undefined,默认值时不会生效的。
let [x4 = 1] = [undefined];
let [x5 = 1] = [null];
print(x4,x5);


function f1(){
  console.log('aaa');
}

let [x6 = f1()] = [1];
print(x6);

let [x7 = f1()] = [undefined];
print(x7);


//对象解构赋值
let {foo1,bar1} = {foo1:'aaa',bar1:'bbb'};
print(foo1,bar1);

//变量名和属性名不一致
var {foo2:baz2} = {foo2:1,bar2:'bbb'};
print(baz2);

//字符串的解构赋值
const [a1,b1,c1,d1,e1] = 'hello';
print(a1,b1,c1,d1,e1);

let {length:len} = 'hello';
print(len);

//数值和布尔值的解构赋值
let{toString:s1} = 123;
print(s1 === Number.prototype.toString);

let{toString:s2} = true;
print(s2===Boolean.prototype.toString);

//解构赋值的规则
//只要等号右边的值不是对象或数组，就先将其转换为对象
// let{prop:xx1} = undefined;
// let{prop:yy1} = null;

//函数参数的解构赋值
function add([x,y]){
    return x+y;
}

print(add([1,2]));

var arr = [[1,2],[3,4]].map(([a,b])=>a+b);
print(arr);

//函数参数的解构也可以使用默认值
function move({x=0,y=0}={}){
    return [x,y];
}

print(move({x:3,y:8}));
print(move({x:3}));
print(move({}));
print(move());

//用途
//1.交换变量的值
let aaa = 1;
let bbb = 2;
[aaa,bbb] = [bbb,aaa];
print(aaa,bbb);

//2.从函数返回多个值
//返回一个数组
function example(){
    return [1,2,3];
}

let [qq,ww,ee] = example();
print(qq,ww,ee);

//返回一个对象
function example2(){
    return{
        ppp:1,
        qqq:2
    };
}

let{ppp,qqq} = example2();
print(ppp,qqq);

//3.函数参数的定义
function h([x,y,z]){
    print(x,y,z);
}

h([1,2,3]);

function hh({x,y,z}){
   print(x,y,z);
}

hh({z:3,y:2,x:1});

//4.提取JSON数据
let jsonData = {
    id:42,
    status:"OK",
    data:[123,456]  
};

let {id,status,data:number} = jsonData;
print(id,status,number);

//5.函数参数的默认值
//可以避免在函数体内部再写 var foo = config.foo || 'default foo';
function jq(url,{
    async = true,
    beforeSend = function(){},
    cache = true
}){

};

//6.遍历Map解构
var map = new Map();
map.set('first','hello');
map.set('second','world');

for(let [k,v] of map){
    print(k+' is '+v);
}

for(let[k] of map){
    print(k);
}

for(let [,v] of map){
   print(v);
}

//7.输入模块的指定方法
// const{SourceMapConsumer,SourceNode} = require("source-map");
