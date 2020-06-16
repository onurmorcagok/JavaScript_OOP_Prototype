// Call and Apply
const person1 = {
    name:"Onur",
    age:23
};

const person2 = {
    name: "Umut",
    age:24
}

function showInfos(department){
    console.log(this.name + " " + this.age + " " + department);
}

// Call

showInfos.call(person1,"Software");
showInfos.call(person2,"Development");

// Apply

showInfos.apply(person1,["Software"]);
showInfos.apply(person2,["Development"]);

// Bind

const obj1 = {
    num1: 10,
    num2: 20
};

function getNumbersTotals(num3,num4){
    
    return this.num1 + this.num2 + num3 + num4;
}

const copyFunction = getNumbersTotals.bind(obj1);

console.log("Result: " + copyFunction(30,40));