// Iteration 1: Names and Input
let hacker1 = "Miguel";
let hacker2 = "Janos";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let hacker1 = "Miguel";
let hacker2 = "Janos";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  else {
    console.log(`You should enter a valid name.`);
  }


// Iteration 3: Loops
let hacker1 = "Miguel";
let hacker2 = "Janos";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  else {
    console.log(`You should enter a valid name.`);
  }

let hacker1UpCase = hacker1.toUpperCase();
let hacker1UpSpace = " ";
for (let i = 0; i < hacker1UpCase.length; i += 1) {
  hacker1UpSpace += hacker1UpCase[i] + " ";
}
console.log(hacker1UpSpace);

let reversedHacker2 = hacker2.split("").reverse().join("");

console.log(reversedHacker2);

let comparison = hacker1.localeCompare(hacker2);

if (comparison > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
}
else if (comparison < 0) {
    console.log(`The driver's name goes first.`);
}
else {
  console.log(`What?! You both have the same name?`);
}


// Bonus 1 - unfinished
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit lacus odio, non euismod sapien pharetra a. Sed congue, leo ut tempor dictum, urna mi pharetra felis, a eleifend ante dolor non ligula. Vivamus nisl diam, facilisis sit amet mi in, vehicula imperdiet enim. Curabitur vitae dui at odio fermentum luctus. Cras congue porttitor nisl, id finibus mauris pretium eget. Praesent convallis dolor id dui pretium, vitae aliquet est elementum. Etiam at quam suscipit, posuere orci eget, porttitor nunc. Phasellus faucibus risus at erat finibus, nec rutrum diam finibus. Ut sagittis tortor in ultrices dictum. Nullam ornare porta sapien, vitae pretium diam aliquam quis. Pellentesque finibus fermentum purus, non pellentesque mauris consequat sed. Quisque malesuada molestie rhoncus. Aliquam pulvinar luctus felis et consectetur. Aenean hendrerit condimentum quam sit amet dapibus. Nunc pharetra justo nec sapien efficitur, ut pellentesque lorem eleifend. Nulla magna libero, iaculis et iaculis eget, condimentum vel dolor. Nam blandit nibh magna, eu egestas leo ultrices nec. Phasellus feugiat magna sed scelerisque bibendum. Aliquam erat volutpat. Proin ac mollis quam. Nam sem ligula, suscipit ac sagittis ut, aliquet in augue. Donec pellentesque molestie augue, pharetra laoreet diam aliquet eu. Integer in dapibus ante. Morbi eu sem quam. Sed nec nunc ac lectus fermentum ornare vitae in lectus. Sed nec condimentum risus. In odio sem, elementum ac pharetra nec, consequat non nunc. Donec congue lectus eu libero laoreet finibus. Pellentesque feugiat placerat ligula, nec tempor erat tristique vitae. Mauris placerat tristique mi nec suscipit. Donec vel porta lectus.";

let words = longText.split(" ");
let wordCount = words.length;


// Bonus 2 - couldn't make it run...
let phraseToCheck = "race car"

let cleanPhrase = phraseToCheck.replace(/[ ,]/g, '');
 
let UpCleanPhrase = cleanPhrase.toUpperCase();

let revPhrase = UpCleanPhrase.split().reverse().join();

if (UpCleanPhrase == revPhrase) {
  console.log(`It's a Palidrome!!!`);
}
else {
  console.log(`Ain't no palidrome. :(`);
}

console.log(revPhrase);