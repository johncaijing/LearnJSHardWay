var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var direction = Direction.Down;
var valueOfDirection = Direction[direction];
console.log(direction);
console.log(valueOfDirection);
console.log(2 /* B */);
//外部枚举
// declare enum Enum{
// 	A = 1,
// 	B, //没有初始化方法时被当作需要经过计算的
// 	C = 2
// }
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 1] = "A";
    Enum2[Enum2["B"] = 2] = "B";
    Enum2[Enum2["C"] = 111] = "C";
})(Enum2 || (Enum2 = {}));
// console.log(Enum);
console.log(Enum2);
