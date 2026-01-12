//testing if a string contains a substring
const browser = 'firefox';

if (browser.includes("fox")) {
  console.log('it has fox!')
} else {
  console.log('it hasn\'t fox')
}

if (browser.startsWith('fire')) {
  console.log('it starts with fire')
} else {
  console.log('it doesnt starts with fire')
}

if (browser.endsWith('fox')) {
  console.log('it ends with fox')
} else {
  console.log('it doesnt end with fox')
}

//searching for substrings by the position of the first letter and extracting a substring using slice().
const tagline = "MDN - resources for developers, by developers";
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("by", firstOccurrence + 1);
console.log(`the substring "developers" starts at the ${firstOccurrence} letter.`)
console.log(`the substring "by" starts at the ${secondOccurrence} letter.`);

//using toUpperCase() and toLowerCase() and updating parts of a string with replace().

const word = "i LoVe YoU"
const wordlow = word.toLowerCase()
const wordup = word.toUpperCase()
console.log(`the word is ${word}.`) 
console.log(`with lower letters it is ${wordlow}.`) 
console.log(`and with upper case letters it is ${wordup}.`)

const updatedWord = word.replace("LoVe", "hate")
console.log(`i dont like you anymore, ${updatedWord}`)