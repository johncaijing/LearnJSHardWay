//布尔值
var isDone = false;
console.log(isDone);
//数字
//还支持二进制和八进制字面量
var decLiteral = 6;
var hex = 0xf12ec;
var binary = 10;
var oct = 484;
//字符串
var aname = "john";
aname = 'kobe';
//模板字符串
var bname = 'curry';
var age = 21;
var hello = "hello,my name is " + bname + " I'm " + age + " years old.";
console.log(hello);
//数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//元祖
var x;
x = ['hello', 100];
console.log(x);
//枚举
//默认从0开始为元素编号
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
console.log(color);
//可以自己指定
var Country;
(function (Country) {
    Country[Country["China"] = 1] = "China";
    Country[Country["USA"] = 2] = "USA";
    Country[Country["Japan"] = 3] = "Japan";
})(Country || (Country = {}));
;
var country = Country.China;
console.log(country);
var country_string = Country[country];
console.log(country_string);
//任意值
var not_sure = 4;
console.log(not_sure + ":" + typeof (not_sure));
not_sure = "balabala";
console.log(not_sure + ":" + typeof (not_sure));
var list_any = [1, true, "free"];
var list_any2 = [false, 2, 'aaa'];
console.log(list_any + '\n' + list_any2);
//空值
function log(message) {
    console.log(message);
}
var a = undefined;
// let b:void = 'a';
var c = null;
//Null和Undefined
var u = undefined;
var n = null;
//Never
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
//类型断言===>类似其他语言的类型转换
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength);
console.log(strLength2);
