const object = new Object();

// const object2 = new Object();
// console.log(object2);

// object.name = "Onur";
// console.log(object);

function Employee(name, age) {

    this.name = name;
    this.age = age;

    // this.toString = function() {
    //     console.log("toString metodu Constructor içerisinden çağırıldı.");
    // }
}

Employee.prototype.showInfos = function () {
    console.log("Name: " + this.name + " Age: " + this.age);
}

// const emp1 = new Employee("Onur",24);
// console.log(emp1);

// console.log(emp1.toString()); // undefined degeri dönecektir.

const emp1 = new Employee("Onur", 24);
const emp2 = new Employee("Umut", 23);

console.log(emp1);
console.log(emp2);