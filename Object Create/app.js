// const object = {

//     testFunction : function(){
//         console.log("Test 1 Function");
//     },

//     testFunction2 : function() {
//         console.log("Test 2 Function");
//     }

// };

// const employee = Object.create(object); // Object nesnesinden employee nesnesi oluştur.

// employee.name = "Onur Morcagok";
// employee.age = 23;
// employee.department = "Software Development";

// console.log(employee);

function Person() {

}

Person.prototype.test1 = function () {
    console.log("Test 1 Function");
}

Person.prototype.test2 = function () {
    console.log("Test 2 Function");
}

function Employee(name, age) {

    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.myTest = function(){
    console.log("myTest Function");
}

const emp = new Employee("Onur",23);

console.log(emp);