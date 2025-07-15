// Premitive Data Type

// String, Number, Boolean, Null, Undefined, Symbol

const stringData = "Anurag"; // String typeof "string"
const numData = 1234;        // Number typeof "Number"
const booleanData = true;    // Boolean typeof "Boolean"
const nullDatatype = null;   // Null typeof "Object"
let undefinedData;           // undefined typeof "undefined"
const id = Symbol('123')     // Symbol typeof "symbol"

// console.log(`${typeof stringData} ${typeof numData} ${typeof booleanData} ${typeof nullDatatype} ${typeof undefinedData} ${typeof id}`);



////////////// Non Premitive Data Type /////////////////

// Array, Objects, Functions

const nameArray = ["Anurag" , "Anmol", "Hrithik"]
// console.log(typeof nameArray);

let objtype = {
    name:"Anurag",
    age: 22,
    location: "Banglore",
}

const myFunction = function(){
    console.log("Hello World");
}

console.table([`${typeof nameArray} ${typeof obj} ${typeof myFunction}`]);





