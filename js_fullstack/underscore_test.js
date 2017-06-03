'use strict';

var a1 = [1,4,9,16];
console.log(a1.map(Math.sqrt));
console.log(a1.filter((x)=>(x%2==0)));

//Collections
//underscore为集合类（Array和Object）对象提供了一致的接口。


//map/filter

var obj = {
    name:'bob',
    school:'BeiJing University',
    address:'BeiJing' 
};

var upper = _.mapObject(obj,function(value,key){
	return value.toUpperCase();
});

alert(JSON.stringify(upper));

//every/some
//所有元素满足===> _.every()函数返回true
//集合的至少一个元素满足===> _.some()函数返回true

var every = _.every([1,4,7,-3,-9],(x)=>x>0);
var every2 = _.every([1,2,3,4,5],(x)=>x>0);
console.log(every+"\n"+every2);

var some = _.some([1,4,7,-3,-9],(x)=>x>0);
var some2 = _.some([1,2,3,4,5],(x)=>x<0);
console.log(some+"\n"+some2);


//max/min

var arr = [3,7,5,9];
var max = _.max(arr);
var min = _.min(arr);

var max2 = _.max([]);
var min2 = _.min([]);

console.log(max+"\n"+min
	       +"\n"+max2+"\n"+min2);

console.log(_.max({a:1,b:2,c:3}));

//groupBy
var scores = [20,81,75,40,91,59,77,65,87,32];
var groups = _.groupBy(scores,function(x){
    if(x<60){
    	return 'C';
    }else if(x<80){
    	return 'B';
    }else{
    	return 'A';
    }
});

console.log(groups);

//shuffle/sample
//shuffle 洗牌算法随机打乱一个集合
for(var i = 0;i<5;i++){
	console.log(_.shuffle([1,2,3,4,5,6]));
}

//sample 随机选择一个或多个元素
for(var j = 0;j<5;j++){
	console.log(_.sample([1,2,3,4,5,6],j+1));
}


//Arrays

//first/last 第一个/最后一个
var array = [1,3,2,4,5];
var first = _.first(array);
var last = _.last(array);
console.log(first+" "+last);

//flatten ===>将多维数组转换为一维数组
var array2 = [1,[2,[3,4,5],6],7,8];
console.log(_.flatten(array2));

//zip/unzip
//zip===>按索引对其两个或多个数组==>按索引合并成新数组

var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
var result =_.zip(names, scores);
console.log(result);
//unzip==>与zip的操作相反
var result2 = _.unzip(result);
console.log(result2);

//object
var objects = _.object(names,scores);
console.log(objects);

//range
//快速生成一个序列
console.log(_.range(10));
for(var i of _.range(10)){
	console.log(i);
}

//Functions

//bind
console.log("HelloWorld");
var log = console.log;
log("HelloWorld");

log.call(console,'HelloWorld');

var log2 = _.bind(console.log,console);
log2("HelloWorld");


//partial 为一个函数创建偏函数
var pow2N = _.partial(Math.pow,2);
console.log(pow2N(3));
console.log(pow2N(10));

var cube = _.partial(Math.pow,_,3);
console.log(cube(3));
console.log(cube(10));

//偏函数==>将原函数的某些参数固定住，降低函数调用的难度

//memoize

function factorial(n){
	console.log('start calculate '+n+'!...');
	var s = 1,i = n;
	while(i>1){
       s = s*i;
       i--; 
	}
	console.log(n+'!='+s);
	return s;
}

factorial(10);
factorial(10);

var factorial2 = _.memoize(function(n){
   return factorial(n);
});

factorial2(15);
factorial2(15);
factorial2(15);
factorial2(14);


var fb = _.memoize(function(n){
   console.log('start calculate '+n+'!...');
   if(n<2){
   	  return 1;
   }else{
   	return n*fb(n-1);
   }
});

log(fb(10)+"\n");
log(fb(9)+"\n");

//once保证某函数执行且仅执行一次

var register = function(){
   alert('register!');
};

register();
register();
register();

var register_once = _.once(function(){
   register();
});

register_once();
register_once();
register_once();

//delay 让一个函数延迟执行，效果和setTimeout()一样

_.delay(register,2000);


//Objects

//keys/allKeys
//keys返回object自身的所有key，不包含从原型链继承下来的
//values 与keys类似

function Student(name,age){
	this.name = name;
	this.age = age;
}

var xiaoming = new Student('xm',20);
console.log(_.keys(xiaoming));
console.log(_.values(xiaoming));

//allKeys()还返回从原型链继承下来的
Student.prototype.school = 'No.1 Middle school';

var jack = new Student('jack',23);
console.log(_.allKeys(jack));

//mapObject
//针对object的map版本
var obj = {a:1,b:2,c:3};
log(_.mapObject(obj,(v,k)=>100+v));

//invert
//交换object的key和value
var obj2 = {
  Adam:90,
  Lisa:88,
  Bart:69
};

log(_.invert(obj2));

//extend/extendOwn
//extend合并多个object的key-value到第一个object并返回
//extendOwn忽略从原型链继承的属性

log(
   _.extend(
    {name:'bob',age:20},
    {age:15},
    {age:34,city:'BeiJing'}
   	)
	);

//clone 复制object对象 浅复制
var source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};
var copied = _.clone(source);
copied.name = 'Jack';
alert(JSON.stringify(copied, null, '  '));

//isEqual 对两个object进行深度比较
var o1 = ['Bob', { skills: ['Java', 'JavaScript'] }];
var o2 = ['Bob', { skills: ['Java', 'JavaScript'] }];

log(o1 === o2); // false
log(_.isEqual(o1, o2)); // true


//Chaining
//把对象包装成能进行链式调用的方法

log(
  _.chain([1,3,4,6,9])
   .map(x=>x+2)
   .filter(x=>x%2==1)
   .value()
	);
