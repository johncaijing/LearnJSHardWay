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
  var dom = document.getElementById("num");
  dom.innerHTML = '24678';
  dom.style.color = 'red';
}

//2.原生API不好用，以及兼容性问题，后来广泛使用jQuery
//$('name').text('John').css('color','red');

//3.MVC,需要服务器端配合，JS在前端修改服务器渲染后的数据

//4.前端页面复杂度变高，交互性变高。逐渐开始使用MVVM

//jQuery实现修改DOM节点
$(document).ready(function(){
    $('#name').text('John');
    $('#age').text(18);
});

