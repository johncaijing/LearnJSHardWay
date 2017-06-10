//TypeScript中，对值所具有的shape进行类型检查
//接口的做哟个市为这些类型命名和为代码定义契约


interface labelValue{
	label:string;
	num:number;
}

function printLabel(label:labelValue){
     console.log(label.label+' '+label.num);
}

let my_obj  = {
	label:'aaaa',
	num:10
};
//类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
printLabel(my_obj);

//可选属性

interface square_config{
	color?:string;
	width?:number;
}

function create_square(config:square_config):{color:string;area:number}{
	let new_square = {color:'white',area:100};
	if(config.color){
		new_square.color = config.color;
	}
	if(config.width){
		new_square.area = config.width*config.width;
	}
	return new_square;
}

let my_square = create_square({color:'black'});
console.log(my_square);


interface Point{
	readonly x:number;
	readonly y:number;
}

let p1:Point = {x:10,y:20};
// p1.x = 12;

let a:number[] = [1,2,3,4];
let ra:ReadonlyArray<number> = a;

a.push(5);
a.length = 100;
a = ra as number[];
// a = ra;
// ra.push(5);
// ra.length = 100;


//readonly,const
//变量 const  属性 readonly


interface CircleConfig{
	color?:string;
	width?:number;
	[propName:string]:any;
}

function create_circle(config:CircleConfig):{color:string;area:number}{
	let my_circle = {color:'white',area:0};
	if(config.color){
		my_circle.color = config.color;
	}
	if(config.width){
		my_circle.area = 3.14*config.width*config.width;
	}
	return my_circle;

}

let circle_options = {colour:"red",width:100};
let my_circle = create_circle(circle_options);

console.log(my_circle);

//接口
//描述带有属性的普通对象
//描述函数类型

interface search_func{
	(source:string,sub_string:string):boolean;
}



let my_search_func:search_func;

my_search_func = function(source:string,sub_string:string){
	let result = source.search(sub_string);
	return result>-1;
}

console.log(my_search_func('abc','d'));
console.log(my_search_func('abc','a'));

let my_search2 : search_func;
my_search2 = function(src,sub){
    let result = src.search(sub);
    return result>-1;
}