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