const foods = [
    "beans",
    "rice",
    "meat",
    "eggs",
    "milk",
    "oil",
    "bread",
    "oats",
    "bananas"
 ]
 
 for (const food of foods) {
   console.log(food);
 }
 
 let numberString = ["10", "20", "30"];
 let numberNumber = numberString.map(Number);
 console.log(numberString);
 console.log(numberNumber);
 
 function double(number) {
   return number * 2;
 }
 
const numbers = [5, 2, 7, 8];
const doubled = numbers.map(double);
console.log(doubled);

function isLong(password) {
  return password.length >= 8;
}

let password = [
    "abs176d",
    " abwqi",
    " 123456789101122",
    " 12345678"
  ];
let approved = password.filter(isLong);
console.log(`the passwords that you've tried are ${password}.`);
console.log(`but only the passwords ${approved} are accepted`);

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");
const comma = cities.join(", ");

const dogNames = ["rocket", "bella", "slugger", "flash"];