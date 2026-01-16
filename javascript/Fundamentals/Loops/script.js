function toUpper(string) {
  return string.toUpperCase();
}

const cAts = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cAts.map(toUpper);

console.log(upperCats);

/*
for (let i = 1; i < 11; i++) {
  console.log(`${i} × ${i} = ${i * i}`);
}*/

let count = 1;

while (count <= 10) {
  console.log(`${count} × ${count} = ${count * count}`);
  
  count++;
}

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  
  i++;
} while (i < cats.length);

console.log(myFavoriteCats);

/*let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  
  i++;
}
console.log(myFavoriteCats);*/
