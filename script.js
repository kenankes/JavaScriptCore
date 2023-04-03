// to define a float in JavaScript
let total = 149.9;
//defining a string in JS
let product = 'Hiking Boots';
//defining a boolean in js
let discounted = true;

//You can use double quotes as well for the strings :)
let welcome = "Welcome";
alert(welcome);

// you can also define multiple vairables by a single "let"
let a = "a",
    b = "b",
    c = "c";

//to modify a defined variable
welcome += " Kenan";
alert(welcome);

//you can define also constants
const warning = "Attention !";
alert(warning);

//old way to declare a variable is using the "var" keyword
var myMessage = "There is a discount on this site !!!";
alert(myMessage);
//The main difference between var and let is that var allows us to use a variable before its declaration however, the let keyword ensures that the variable is defined before the usage. It is better to use let keyword instead of var.


//You can get the type of a variable by using typeof
alert(typeof myMessage);

//You can also use the functions to manipulate the strings, e.g.
console.log(myMessage.toLowerCase());

//To convert a String into a number
let strAmount = "125";
let numAmount = Number.parseInt(strAmount);

//We can create objects
let person = {
    firstName: "Kenan",
    lastName: "Kestaneci"
};
console.log(typeof person);
console.log(person.firstName);

//using if condition
let state = "FL";
let taxPercent = 0;
if (state === "FL") {
    taxPercent = 7;
}
console.log("Tax percent in " + state + " : " + taxPercent);
//Double Equals (==) checks for value equality only. It inherently does type coercion. Triple Equals (===) does not perform type //....coercion. It will verify whether the variables being compared have both the same value AND the same type.

//for the negation, use !== sign
if (state !== "FL") {
    taxPercent = 5;
}


//To set a 2 digit decimal, we can use toFixed()
let myFloat = 1.234;
let myFloatTwoDigitStr = myFloat.toFixed(2); //it returns a string, to make it a number, put a "+" at the beginning
let myFloatTwoDigit = +myFloat.toFixed(2);
//when you compare a float in a condition, you need to use toFixed, otherwise it will be wrong your comparison.

if (+myFloat.toFixed(2) === 1.23) {
    alert(myFloatTwoDigitStr);
}

//The ternary Operator -> to use one line condition
let price = 5;
let myPrice = (price > 10) ? "expensive" : "cheap";


//to create a for loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

//to create a while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//to create a function
function logMessage(message) {
    console.log(message);
}

//to return a value within a function
function getSumOfAList(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
let myList = [1, 2, 5, 3];
let myResult = getSumOfAList(myList);
console.log(myResult);

//we can call the function modifyPercentage to modify the percentage element
modifyPercentage(35); ''