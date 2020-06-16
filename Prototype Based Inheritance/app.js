// Inheritance - Kalıtım

function Person(name, age) {

    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("Name: " + this.name + " Age: " + this.age);
}

// const person = new Person("Onur", 23);
// console.log(person);

function Employee(name,age,department) {

    // this.name = name;
    // this.age = age;

    Person.call(this,name,age);
    this.department = department;
}

// Overriding

Employee.prototype.showInfos = function() {
    console.log("Name: " + this.name + " Age: " + this.age + " Department: " + this.department);
}

Employee.prototype = Object.create(Person.prototype);
// Baglama islemi yaptık ve Employee Person'dan miras alır.

Employee.prototype.toString = function() {
    console.log("Employee toString");
}

const emp = new Employee("Onur",23,"Software Development");

// console.log(emp);
// emp.showInfos();
// emp.toString();
// console.log(emp.toString()); // undefined 

console.log(emp);

