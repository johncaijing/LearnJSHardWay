//person:string 类型注解：为函数或变量添加约束
function greeter(person) {
    return "Hello," + person;
}
var user = "John";
// var user = 2;
document.body.innerHTML = greeter(user);
function helloSomeone(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var kobe = { firstName: "Kobe", lastName: "Bryant" };
document.body.innerHTML = helloSomeone(kobe);
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
var curry = new Student("Stephen", "Curry");
document.body.innerHTML = helloSomeone(curry);
