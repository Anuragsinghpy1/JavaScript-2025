// Stack Memory (Primitive Data type) , Heap Memory (Non Primitive)

// Stack Memory give you copy
// Heap Memory give you reference

// e.g

const userstackValue = "Anurag"
// console.log(userstackValue)
let anotheruserStack = userstackValue;
anotheruserStack = "learning JS"

// console.log(userstackValue);
// console.log(anotheruserStack);


const objHeap = {
    user: "Jhon",
    email: "jhon@gmail.com",
    age: 99,
}

const objHeap1 = objHeap

objHeap1.user = "Jacky"
objHeap1.email = "jacky@gmail.com"

console.log(objHeap);
console.log(objHeap1);



