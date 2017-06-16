// 'use strict';

function log(){
    var result = "";
    for(let i = 0; i<arguments.length;i++){
       result+=arguments[i];
    }
    console.log(result);
}


//字符的Unicode表示法
//范围 \u0000~\uFFFF
//超出范围 用两个双字节表示
var uni = "\u0061";
log(uni);

var uni2 = "\uD843\uDFB8";
log(uni2);

var uni3 = "\u20BB8";//超出范围
log(uni3);

//ES6用大括号将码点括住
var uni4 = "\u{20BB7}";
log(uni4);

var uni5 = "\u{41}\u{42}\u{43}";
log(uni5);

let hello = 1234;
log(hell\u{6F});

var uni6 = '\u{1F680}';
var uni7 = '\uD83D\uDE80';
log(uni6===uni7);

//表示字符的六种方法
log('z');
log('\z');
log('\172');//严格模式下，不允许
log('\x7A');
log('\u007A');
log('\u{7A}');


//2.codePointAt()
//JS内部，字符以UTF-16的格式存储
//每个字符2个字节
//对于需要4个字节的字符（码点>0xFFFF的字符）
//JS会认为是两个字符

var uni8 = "𠮷";
log(uni8.length);
log(uni8.charAt(0));
log(uni8.charAt(1));
log(uni8.charCodeAt(0));
log(uni8.charCodeAt(1));

//ESt6 codePointAt 正确处理4个字节存储的字符，返回一个字符的码点
function is32Bit(c){
    return c.codePointAt(0)>0xFFFF;
}

log(is32Bit(uni8));
log(is32Bit("a"));

var s = "𠮷ab";
for(let ch of s){
    log(ch.codePointAt(0).toString(16));
}

log("\u{20bb7}");

//3.String.fromCodePoint()
//ES5提供String.fromCharCode 码点==>字符
//不能识别32位的UTF-16字符(>0xFFFF)
log(String.fromCharCode(0x20BB7));

//ES6提供String.fromCodePoint 可以识别大于0xFFFF的字符

log(String.fromCodePoint(0x20BB7));

//4.字符串的遍历器接口
for(let cp of 'foo'){
    log(cp);
}

var text = String.fromCodePoint(0x20BB7);
for(let i = 0;i<text.length;i++){
    log(text[i]);
}

for(let i of text){
    log(i);
}

//5.at()
//ES5提供了charAt方法

log('abc'.charAt(0));
log( "𠮷".charAt(0));


// log('abc'.at(0));

//6.normalize()
//表示语调符号和重音符号
//1）直接提供带重音符号的字符
//2）原字符与重音符号的合成

log('\u01D1'==='\u004F\u030C');
log('\u01D1'.length);
log('\u004F\u030C'.length);

//ES6提供字符串的 normalize方法
log('\u01D1'.normalize() === '\u004F\u030C'.normalize());

//7.includes() startsWith() endsWith()
//ES6提供  includes() startsWith() endsWith()
var helloWorld = 'Hello world!';
log(helloWorld.startsWith('Hello'));
log(helloWorld.endsWith('!'));
log(helloWorld.includes('o'));

//第二个参数，表示开始搜索的位置
log(helloWorld.startsWith('Hello',6));
log(helloWorld.endsWith('!',5));
log(helloWorld.includes('o',4));

//8.repeat()
log('John'.repeat(3));
log('Hello'.repeat(2));
log('world'.repeat(0));

//小数会被取整
log('js'.repeat(2.3));

//负数或Infinity会报错
// log('js'.repeat(-2));
// log('js'.repeat(Infinity));

//参数是字符串 会先转换为数字
log('na'.repeat('3'));
