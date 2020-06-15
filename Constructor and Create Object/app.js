// Global Scope

// console.log(this);
// console.log(this.window);
// console.log(window);

function Employee(name, age, department) { // Constructor

    this.name = name;
    this.age = age;
    this.department = department;

    this.showInfos = () => {
        console.log(this.name, this.age, this.department);
    };
}

const emp1 = new Employee("Ali", 24, "Software");
console.log(emp1);

const emp2 = new Employee("Veli", 23, "Technical");
console.log(emp2);

emp1.showInfos();

emp2.showInfos();