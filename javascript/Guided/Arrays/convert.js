const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray.pop();

console.log(`Array: ${myArray}`);
console.log(`The length of the array is ${arrayLength}.`);
console.log(`The last item in the array is "${lastItem}".`);