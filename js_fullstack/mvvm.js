'use strict';

//MVVM:Model-View-ViewModel


//前端发展过程
//1.静态HTML网页
//2.CGI拼接字符串生成HTML
//3.ASP,JSP和PHP创建动态HTML　
//4.JavaScript引入

//JS操作HTML
//1.JS直接操作DOM节点，使用浏览器提供的原生API
window.onload = function(){
    // console.log('onload');
  var dom = document.getElementById("name");
  dom.innerHTML = 'John';
  dom.style.color = 'red';
}