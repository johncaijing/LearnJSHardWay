//TypeScript中，对值所具有的shape进行类型检查
//接口的做哟个市为这些类型命名和为代码定义契约
function printLabel(label) {
    console.log(label.label + ' ' + label.num);
}
var my_obj = {
    label: 'aaaa',
    num: 10
};
//类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
printLabel(my_obj);
function create_square(config) {
    var new_square = { color: 'white', area: 100 };
    if (config.color) {
        new_square.color = config.color;
    }
    if (config.width) {
        new_square.area = config.width * config.width;
    }
    return new_square;
}
var my_square = create_square({ color: 'black' });
console.log(my_square);
var p1 = { x: 10, y: 20 };
// p1.x = 12;
var a = [1, 2, 3, 4];
var ra = a;
a.push(5);
a.length = 100;
a = ra;
function create_circle(config) {
    var my_circle = { color: 'white', area: 0 };
    if (config.color) {
        my_circle.color = config.color;
    }
    if (config.width) {
        my_circle.area = 3.14 * config.width * config.width;
    }
    return my_circle;
}
var circle_options = { colour: "red", width: 100 };
var my_circle = create_circle(circle_options);
console.log(my_circle);
var my_search_func;
my_search_func = function (source, sub_string) {
    var result = source.search(sub_string);
    return result > -1;
};
console.log(my_search_func('abc', 'd'));
console.log(my_search_func('abc', 'a'));
