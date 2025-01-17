
function multiply(a, b = 1) { return a * b; }
console.log(multiply(5)); 


function fun(a = 2, b = 3) { return a + b; }
console.log(fun(5, 6)); 
console.log(fun()); 

function func2(a, b = 3, c = 47) { return a + b + c; }
console.log(func2(5, undefined, null)); 


function restParameter(a, b, ...c) { console.log({ a, b, c }); }
restParameter(1, 2, 3, 4, 5, 6); 

function sum(...args) { return args.reduce((acc, curr) => acc + curr, 0); }
console.log(sum(1, 2, 3)); 


function myFun(a, b, ...args) { console.log({ a, b, args }); }
myFun(1, 2, 3, 4); 

const arr = [1, 2, 3], arr1 = [4, 5, 6], arr2 = [...arr, ...arr1];
console.log(arr2);


function calculateDiscount(price, discount = 10) { return price - (price * discount) / 100; }
console.log(calculateDiscount(100)); 

function mergeArrays(array1, array2) { return [...array1, ...array2]; }
console.log(mergeArrays([1, 2], [3, 4]));

function logArguments(...args) { console.log(args); }
logArguments(1, "hello", true); 

function createMessage(msg, ...names) { return names.map(name => `${msg}, ${name}!`); }
console.log(createMessage("HELLO", "Vanshi", "Anu")); ]

function sumThreeNumbers(a, b, c) { return a + b + c; }
console.log(sumThreeNumbers(...[5, 10, 15]));

function createUserProfile(username, age = 20, country = "INDIA") {
  return { username, age, country };
}
console.log(createUserProfile("Vanshika")); 
console.log(createUserProfile("Ananya", 21, "CANADA")); 
