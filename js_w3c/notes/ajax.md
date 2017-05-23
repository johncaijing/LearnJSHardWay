#### 什么是Ajax

Asynchronous JavaScript and XML(异步的JavaScript与XML技术)

#### 创建XMLHttpRequest对象

[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)是Ajax的基础，用于和服务器交换数据。

```JavaScript

var xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}


```

#### 向服务器发送请求

使用XMLHTTPRequest对象的open()和send()方法。

```JavaScript
xhr.open("GET","test.txt",true);
xhr.send();


```

方法 | 描述
--- | ---
open(method,url,async)|规定请求的类型、URL 以及是否异步处理请求。
send(string)|将请求发送到服务器


#### 服务器响应

* responseText(字符串形式的响应数据)
* responseXM(XML形式)

```JavaScript
//responseText
document.getElementById("div").innerHTML = xhr.responseText;


//responseXML
xmlResponse = xhr.responseXML;
var txt;
x = xmlResponse.getElementsByTagName("ARTIST");
for(i = 0;i < x.length; i++){
    txt=txt+ x[i].childNodes[0].nodeValue + "<br/>";
}
document.getElementById("div").innerHTML = txt;

```

#### onreadystatechange事件

readyState 存有XMLHttpRequest的状态信息。

* 0 ：请求未初始化
* 1 ：服务器连接已建立
* 2 : 请求已接收
* 3 ：请求处理中
* 4 ：请求已完成，且响应就绪
* 
onreadystatechange

readyState发生改变时调用

status 标准HTTP状态码

#### jQuery Ajax

##### jQuery load()方法

```JavaScript
$(selector).load(URL,data,callback);
```


