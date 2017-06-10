//布尔值

let isDone :boolean = false;
console.log(isDone);

//数字
//还支持二进制和八进制字面量

let decLiteral:number = 6;
let hex :number = 0xf12ec;
let binary:number = 0b1010;
let oct:number = 0o744;

//字符串
let aname:string = "john";
aname = 'kobe';

//模板字符串
let bname:string = 'curry';
let age:number = 21;

let hello:string = `hello,my name is ${bname} I'm ${age} years old.`;
console.log(hello);

//数组
let list:number[] = [1,2,3];

let list2:Array<number> = [1,2,3];

//元祖
let x:[string,number];
x=['hello',100];
console.log(x);

//枚举
//默认从0开始为元素编号
enum Color{Red,Green,Blue};
let color:Color = Color.Green;

console.log(color);

//可以自己指定
enum Country{China = 1,USA,Japan};
let country:Country = Country.China;
console.log(country);

let country_string:string = Country[country];
console.log(country_string);

//任意值
let not_sure:any = 4;
console.log(not_sure+":"+typeof(not_sure));
not_sure = "balabala";
console.log(not_sure+":"+typeof(not_sure));

let list_any:any[] = [1,true,"free"];
let list_any2:Array<any> = [false,2,'aaa'];
console.log(list_any+'\n'+list_any2);


//空值
function log(message:string):void{
	console.log(message);
}

let a:void = undefined;
// let b:void = 'a';
let c:void = null;

//Null和Undefined

let u:undefined = undefined;
let n:null = null;

//Never

function error(message:string):never{
   throw new Error(message);
}


function infiniteLoop():never{
	while(true){

	}
}

//类型断言===>类似其他语言的类型转换
let someValue:any = "this is a string";
let strLength:number = (<string>someValue).length;

let strLength2:number = (someValue as string).length;

console.log(strLength);
console.log(strLength2);

