console.log("Hello, World!");

// let num =2;
// console.log(num);

//Object
let person = {
    name: 'Zack',
    age: 13
};

person.name = 'Mosh';
let selected = 'age';
person[selected] = 14;

console.log(person);

//Array
let fruit = ['mango','apple','strawberry'];
fruit[1] = 'orange';
console.log(fruit);

//Function
function greet(name){
    console.log('Hello '+name);
}

greet('Zack');