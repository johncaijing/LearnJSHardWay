//var 
var a = 20;
function f() {
    var message = "Hello,TypeScript";
    return message;
}
function f2() {
    var a = 10;
    return function () {
        var b = a + 1;
        return b;
    };
}
var g = f2()();
console.log(g);
//作用域规则
function f3(init) {
    if (init) {
        var x = 10;
    }
    return x;
}
console.log(f3(true));
console.log(f3(false));
// for(var i = 0;i<10;i++){
// 	console.log("i:"+i);
// 	setTimeout(function(){
// 		console.log(i);
// 	},100*i);
// }
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        });
    })(i);
}
console.log('let');
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    });
    setTimeout(function () {
        console.log(i_1);
    });
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
//let
//块作用域
function f4(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    // return b;
}
//重定义及屏蔽
//var可以声明多次，但只会得到1个
function f5(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
var l = 10;
// let l = 20;
// function f6(x) {
// 	let x = 100;
// }
// function f7(){
// 	let x = 100;
// 	var x = 100;
// }
function f8(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(f8(true, 0));
console.log(f8(false, 100));
//在一个嵌套作用域里引入一个新名字：屏蔽
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_2 = 0; i_2 < matrix.length; i_2++) {
        var currentRow = matrix[i_2];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
var matrix = [[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]];
console.log(matrix);
console.log(sumMatrix(matrix));
//const声明
//常量
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// kitty = {
// }
kitty.name = "kittycat";
kitty.numLives--;
//结构
//结构数组
var input = [111, 222];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
