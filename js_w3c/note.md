#### CDN

CDN(Content Delivery Network)内容分发网络，是包含可分享代码库的服务器网络。

引用jQuery

```JavaScript
<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.7.2.min.js"></script>
```


#### jQuery

```JavaScript
jQuery函数: $()


传递DOM对象，返回jQuery对象。通过CSS选择器选取对象。
```


```JavaScript

#JS方式:

function jsFunction(){
    var obj = document.getElementById("h01");
    obj.innerHTML = "Hello jQuery";
}
onload = jsFunction;


#jQuery方式:
function jQueryFunction(){
    $("#h01").html("Hello jQuery");
}

$(document).ready(jQueryFunction);

```



jQuery库

#### 特性

* 选取，操作HTML元素
* CSS操作
* HTML事件函数
* JS特效和动画
* HTML DOM遍历和修改
* AJAX
* Utilities

#### 添加jQuery库
<script>标签应该位于页面的<head>部分。

#### 下载jQuery

两个版本:

* 精简过的
* 未压缩的

#### jQuery CDN库

```JavaScript
#Google

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


#微软
<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>

```

JS是HTML5以及现代浏览器的默认脚本语言。


#### jQuery语法

基础语法:

```
$(selector).action()
```

* 美元符号定义jQuery
* selector 查询和查找 HTML元素
* action()执行对元素的操作

```JavaScript

$(this).hide();

$("p").hide();

$(".test").hide();
# class

$("#test").hide();
# id


```
#### 文档就绪函数

```
$(document).ready(function(){
    
});
```

#### jQuery元素选择器

jQuery 使用CSS选择器 选取HTML元素。

```
$("p") #选取<p>元素

$("p.intro") #选取class="intro"的<p>元素

$("p#demo") #选取所有id="demo"的<p>元素
```

#### jQuery属性选择器

jQuery 使用XPath表达式选择带有给定属性的元素。
```
$("[href]") href属性

$("[href='#']")
href属性等于"#"的元素

$("[href$='.jpg']")
以".jpg"结尾的元素
```
#### jQuery CSS选择器

```
$('p').css("background-color","red");
```

#### jQuery 事件处理


```Javascript
 <script type="text/javascript">
        $(document).ready(function(){
        	$('button').click(
               function(){
               	alert('test');
               }    
        		);
        });
     </script>
```

#### jQuery 名称冲突

```
$ 符号可能其他JavaScript库也会使用

var jq = jQuery.noConflict();代替$符号
```


#### jQuery 效果

* 显示隐藏

```javascript

$(selector).hide(speed,callback);

$(selector).show(speed,callback);

$(selector).toggle(speed,callback);


```

* 淡入淡出

```javascript
$(selector).fadeIn(speed,callback);

$(selector).fadeOut(speed,callback);

$(selector).fadeToggle(speed,callback);
```

* 滑动
```javascript
$(selector).slideDown(speed,callback);

$(selector).slideUp(speed,callback);

$(selector).slideToggle(speed,callback);
```


* 动画

```javascript
$(selector).animate({params},speed,callback);
```

> HTML 元素都有一个静态位置，且无法移动。
如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 `relative`、`fixed` 或 `absolute`。

```
<!DOCTYPE html>
<html>
<head>
	<title>jQuery Animate</title>
	 <script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.7.2.min.js"></script>
	 <script type="text/javascript">
	 	
	 	$(document).ready(function(){
	 		$("button").click(function(){
	 			$("p").animate({left:'150px',top:'200px'});
	 		});
	 	});

	 </script>
</head>
<body>

   <button>Animate</button>
   <p style="position: absolute; width: 200px;height: 200px;background-color: red">你好你好</p>

</body>
</html>
```

#### jQuery操作CSS属性

使用 animate() 时，必须使用 Camel标记法书写所有的属性名

```javascript
是`paddingLeft` 而不是`padding-left`
```

#### jQuery动画停止

```
$(selector).stop(stopAll,goToEnd);
```

#### jQuery Callback函数

在当前动画100%完成时执行

```
$(selector).hide(speed,callback)
```

#### jQuery Chaining方法链

```
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```

#### jQuery HTML

* 获取

```
text();
val();
html();
```

* 添加

>* append() - 在被选元素的结尾插入内容
>* prepend() - 在被选元素的开头插入内容
>* after() - 在被选元素之后插入内容
>* before() - 在被选元素之前插入内容

* 删除

>* remove() - 删除被选元素（及其子元素）
>* empty() - 从被选元素中删除子元素

#### jQuery CSS类

>* addClass() - 向被选元素添加一个或多个类
>* removeClass() - 从被选元素删除一个或多个类
>* toggleClass() - 对被选元素进行添加/删除类的切换操作
>* css() - 设置或返回样式属性 
>* css("propertyname") - 返回指定CSS属性的值
>* $("p").css("background-color"); - 设置CSS属性

#### jQuery遍历

> **jQuery 遍历**，意为“移动”，用于根据其相对于其他元素的关系来“查找”（或选取）HTML 元素。以某项选择开始，并沿着这个选择移动，直到抵达期望的元素为止。

##### DOM遍历（树遍历）

##### jQuery 遍历（祖先）

向上遍历DOM树，查找祖先

>* parent() 所选元素的直接父元素
>* parents() 被选元素的所有祖先元素
>* parentsUntil() 介于两个给定元素之间的所有祖先元素

##### jQuery 遍历 (后代)

向下遍历DOM树，查找后代

* children()  返回被选元素的所有直接子元素。
* find() 返回被选元素的后代元素，一路向下直到最后一个后代。

##### jQuery遍历(同胞)

>* siblings() 返回被选元素的所有同胞元素。
>* next() 返回被选元素的下一个同胞元素
>* nextAll() 返回被选元素的所有跟随的同胞元素。
>* nextUntil() 方向相反
>* prev()
>* prevAll()
>* prevUntil(

#### jQuery 过滤

>* first() 返回被选元素的首个元素
>* last()最后一个
>* eq() 带有指定索引号的元素
>* filter() 过滤
>* not() 不匹配的