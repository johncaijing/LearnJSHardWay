'use strict';

function log(){
    var log_message = "";
    for(let i = 0;i<arguments.length;i++){
        log_message+=arguments[i];
    }
    console.log(log_message);
}

//原型(prototype)


var Student = {
   name:'Robot',
   height:1.3,
   run:function(){
       console.log(this.name+' is running...');
   }
};

var xiaoming = {
    name:'xiaoming'
}

Student.__proto__.toString = function(){
    return 'Student name:'+this.name+' height:'+this.height;
};

//在实际的编写JS代码时，不要直接使用obj.__proto__去改变一个对象的原型

xiaoming.__proto__=Student;
log(xiaoming.toString());
xiaoming.run();


function createStudent(name){
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaohuang = createStudent('xiaohuang');
xiaohuang.run();
log(xiaohuang.__proto__ === Student);


//创建对象
//JS对每个创建的对象都会设置一个原型，指向它的原型对象
var arr = [1,2,3];

//原型链
//arr-->Array.prototype-->Object.prototype-->null

function getProtoTypeList(o){
    var p = o.__proto__;
    var result = [];
    while(p!=null){
        result.push(p);
        p = p.__proto__;
    }
    return result;
}

function foo(){
    return 0;
}

var res = getProtoTypeList(arr);
console.log(res);

var res2 = getProtoTypeList(foo);
console.log(res2);
//函数也是一个对象
//foo-->Function.prototype-->Object.prototype-->null

//访问对象属性，会沿着原型链向上查找访问

//构造函数
//方法1:{...}
//方法2:new XXX
function Teacher(name){
    this.name = name;
    this.hello = function(){
        console.log('Hello '+this.name+'!');
    }
}

var canglaoshi = new Teacher('canglaoshi');
console.log(canglaoshi.name);
canglaoshi.hello();
//new Teacher() Teacher就变成构造函数
//Teacher 普通函数

//原型链
//canglaoshi-->Student.prototype-->Object.prototype-->null

console.log(canglaoshi.constructor===Teacher.prototype.constructor);
console.log(Teacher.prototype.constructor === Teacher);
console.log(Object.getPrototypeOf(canglaoshi)===Teacher.prototype);
console.log(canglaoshi instanceof Teacher);


function Programmer(props){
    this.name = props.name || 'nobody';
    this.age = props.age || 20;
}

Programmer.prototype.hello = function(){
    console.log('Hello World,'+this.name);
};

function createProgrammer(props){
   return new Programmer(props||{});
}

var jackMa = createProgrammer({
    name:'JackMa'
});

console.log(jackMa.age);
jackMa.hello();


//原型继承
function PrimaryProgrammer(props){
   Programmer.call(this,props);
   Programmer.age = props.age || 22;
}

//空函数实现
function F(){

}

F.prototype = Programmer.prototype;

PrimaryProgrammer.prototype = new F();

PrimaryProgrammer.prototype.constructor = PrimaryProgrammer;

PrimaryProgrammer.prototype.getAge = function(){
    return this.age;
}

var ponyMa = new PrimaryProgrammer({
    name:'PonyMa',
    age:40    
});

console.log(ponyMa.name);
console.log(ponyMa.age);

console.log(ponyMa.__proto__ === PrimaryProgrammer.prototype);
console.log(ponyMa.__proto__.__proto__===Programmer.prototype);

console.log(ponyMa instanceof PrimaryProgrammer);
console.log(ponyMa instanceof Programmer);

var pro_res = getProtoTypeList(ponyMa);
console.log(pro_res);

//http://www.liaoxuefeng.com/files/attachments/001439872160923ca15925ec79f4692a98404ddb2ed5503000/l


function inherits(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Singer(props){
    this.name = props.name || 'Nobody';
}

Singer.prototype.hello = function(){
    console.log('Hello '+this.name);
}

function PopSinger(props){
    Singer.call(this,props);
    this.age = props.age|| 40;
}

inherits(PopSinger,Singer);

PopSinger.prototype.getAge = function(){
    return this.age;
}

//JS原型继承实现方式
//1.定义新的构造函数，并在内部使用call 调用希望继承的构造函数，并绑定this
//2.借助中间函数F()实现原型链继承，最好使用封装好的函数实现
//3.继续在新的构造函数的原型上定义新的方法


//ES6引入class关键字
class Player{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log('Player:'+this.name);
    }
}

var KobeBryant = new Player('KobeBryant');
KobeBryant.hello();


//class继承
class BasketBallPlayer extends Player{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    getAge(){
        console.log('BasketBall Player:'+this.name+' age:'+this.age);
    }
}

var Curry = new BasketBallPlayer('Curry',29);
Curry.getAge();
Curry.hello();

//Babel:转换class代码为传统的prototype代码



