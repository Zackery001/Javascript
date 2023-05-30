//Procedural Code

let baseSalary = 3000;
let overTime = 10;
let rate = 20;

function getWages(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

//Encapsulation

let employee = {
    baseSalary: 3000,
    overTime: 10,
    rate: 20,
    getWages: function () {
        return baseSalary + (overTime * rate);
    }
};

employee.getWages();