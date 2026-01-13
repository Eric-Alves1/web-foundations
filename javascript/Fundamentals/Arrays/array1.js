//creating arrays skills and goals
let skills = [
    "Html", 
    " Css", 
    " JavaScript", 
    " Git", 
    " Github", 
    " English"
  ];

let goals = [
    "Have a laptop",
    "become a full stack developer",
    "get a remote job",
    "travel around the world while working"
  ];

//modifying the array goals
goals.push("get a international job", "make my mom happy", "become a good man");
goals[0] = "get a strong body";
goals.unshift("eat healthy");
goals.pop();
console.log(`i have ${skills.length} skills and ${goals.length} goals.`);
console.log(`but my main goal is ${goals[6]}`);

//modifying the array skills
console.log(`my skills were ${skills}`);
const skillRemoved = skills.splice(3, 6);
console.log(`but now they are ${skills}, because in my opinion knowing ${skillRemoved} is the minimum`);

//accesses specifics items inside a multidimensional array
const random = ["three", 2, 1, [4, 8, 7, [5, 6]]];
console.log(random[3][3][0]);

//knowing the index of a specific item in an big array
const birds = [
    "sparrow",
    "canary",
    "hummingbird",
    "swallow",
    "thrush",
    "owl",
    "falcon",
    "seagull",
    "pigeon",
    "toucan"
  ];

console.log(`the bird owl is at the position ${birds.indexOf("owl")}`);
console.log(birds[5]);