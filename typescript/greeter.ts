//person:string 类型注解：为函数或变量添加约束
function greeter(person:string){
    return "Hello,"+person;
}

var user = "John";
// var user = 2;

document.body.innerHTML = greeter(user);


//编译:tsc greeter.ts


//接口
interface Person{
	firstName:string;
	lastName:string;
}

function helloSomeone(person:Person){
	return `Hello,${person.firstName} ${person.lastName}`;
}

var kobe = {firstName:"Kobe",lastName:"Bryant"};

document.body.innerHTML = helloSomeone(kobe);


class Student{

    fullName:string;
    constructor(public firstName,public lastName){
           this.fullName = firstName + " "+lastName; 
    	}
}

var curry = new Student("Stephen","Curry");

document.body.innerHTML = helloSomeone(curry);