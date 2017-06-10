enum Direction {
	Up = 1,
	Down,
	Left,
	Right

}

console.log(Direction);

let direction = Direction.Down;
let valueOfDirection = Direction[direction];

console.log(direction);
console.log(valueOfDirection);

const enum ABEnum{
	A = 1,
	B = A*2
}

console.log(ABEnum.B);

//外部枚举
// declare enum Enum{
// 	A = 1,
// 	B, //没有初始化方法时被当作需要经过计算的
// 	C = 2
// }

enum Enum2{
	A = 1,
	B,
	C = 111
}

// console.log(Enum);
console.log(Enum2);