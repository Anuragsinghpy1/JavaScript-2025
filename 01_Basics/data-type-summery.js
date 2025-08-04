// Premitive Data Type

// String, Number, Boolean, Null, Undefined, Symbol

const stringData = "Anurag"; // String typeof "string"
const numData = 1234;        // Number typeof "Number"
const booleanData = true;    // Boolean typeof "Boolean"
const nullDatatype = null;   // Null typeof "Object"
let undefinedData;           // undefined typeof "undefined"
const id = Symbol('123')     // Symbol typeof "symbol"

const bigNum = 48767866324388988972342n // BigInit

// console.log(`${typeof stringData} ${typeof numData} ${typeof booleanData} ${typeof nullDatatype} ${typeof undefinedData} ${typeof id}`);



////////////// Non Premitive Data Type /////////////////

// Array, Objects, Functions

// Array

const heroName = ["Marvels","DC","X-man"];

// Objects

const myObj ={
    name:"Anurag",
    age:25,
    Gaduate: true,
}

// Functions

const newFunction = function(){
  console.log("hello function");
  
}



// console.table([
//   { type: typeof stringData },
//   { type: typeof numData },
//   { type: typeof booleanData },
//   { type: typeof nullDatatype },
//   { type: typeof undefinedData },
//   { type: typeof id }, // Convert Symbol to string for display
// ]);

console.log(heroName);

