const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();
myArray.push("Eric", "Chris");
for (let name of myArray) {
  console.log(`${name} (${myArray.indexOf(name)})`);
}

const myString = myArray.join(" - ");
console.log(myString);