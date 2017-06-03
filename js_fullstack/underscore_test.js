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
