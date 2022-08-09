// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223


let rev = 0;
let num = 123456;

rev = Number(String(num).split('').reverse().join(''));

console.log("Reverse number : "+rev);