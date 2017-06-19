'use strict';

//window
//全局作用域，浏览器窗口
alert(`innerWidth: ${window.innerWidth} innerHeight: ${window.innerHeight}
       outerWidth: ${window.outerWidth} outerHeight: ${window.outerHeight}`);

//navigator
//浏览器信息

alert(`appName:${navigator.appName}
       appVersion:${navigator.appVersion}
       language:${navigator.language}
       platform:${navigator.platform}
       UA:${navigator.userAgent}`);

//navigator的信息可以被用户修改，所以这个值不一定正确


//JS对不存在的属性返回undefined,短路运算符||
var width = window.innerWidth || document.body.clientWidth;

//screen
//屏幕的信息
alert(`screen width:${screen.width} height:${screen.height}`);

// if(confirm('reload?')){
//     location.reload();
// }else{
//     location.assign("http://baidu.com");
// }

//location
//页面的URL信息
alert(`
   protocol:${location.protocol}
   host:${location.host}
   port:${location.port}
   pathname:${location.pathname}
   search:${location.search}
   hash:${location.hash}
`);

//document
//当前页面，整个DOM树的根节点
document.title = 'Learn JavaScript Hard Way';

window.onload = function(){
//根据ID和TagName查找节点
var menu = document.getElementById('aaa');
var drinks = document.getElementsByTagName('dt');

console.log(menu);
var s = '提供的饮料有:';
for(let i = 0;i<drinks.length;i++){
    s+=(drinks[i].innerHTML+',')
}
alert(s);
};

//读取cookie
console.log(document.cookie);

//设定了httpOnly的Cookie不能被JS读取


//history
//back() forward() 后退前进
//不应该使用这个对象 用户体验不好



