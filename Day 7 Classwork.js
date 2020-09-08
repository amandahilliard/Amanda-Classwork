//Loop Practice
for (var i = 1; i <= 100; i++){

    if (i % 2 === 0 && i % 3 === 0) {
        console.log(`${i} FizzBuzz`);
    }

    else if(i % 2 === 0) {
        console.log(`${i} Fizz`);
    }

    else if(i % 3 === 0) {
        console.log(`${i} Buzz`);
    }
}

//----------------------------------------------------------------------

let input = prompt("Enter a word or series of words")

for (let i = 3; i < input.length; i++) {
    console.log(input[i]);
}

//----------------------------------------------------------------------

let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum);
let numGuesses = 0
let guess;

do {
    guess = parseInt(prompt("Guess a number 1-10"));
    numGuesses++;
} while (guess !== randomNum);
  console.log(`It took you ${numGuesses} try to guess correctly`);

//----------------------------------------------------------------------

for (let i = 1; i < 5; i++) {
    let output = "*";
    for (var j = 1; j < i; j++) {
        output +="*" 
    }
    console.log(output);
}

//-----------------------------------------------------------------------

let randomNum = Math.floor(Math.random() * 2) + 1;

let numRetries = 0;

while (coin == 1){
    coin = Math.floor(Math.random() * 2) + 1;
    numRetries++;
}
  console.log(`It took you ${numRetries} to get heads!`);

//-----------------------------------------------------------------------

let arr1 = [-1,-2,2,10,7,8]
let arr2 = [4,-2,2,7,9,5]
let numInCommon = 0;

for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            numInCommon++;
        }
    }
}
console.log(`There was ${numInCommon} numbers in common.`)

//-----------------------------------------------------------------------

let name = prompt("What is your first name?");
let number = parseInt(prompt("Give me a number between 1 and 100"));

if(number % 2 ===0){
    console.log("That number is Even");
}
else if(number % 3 ===0){
    console.log("That number is Odd");
    }

if(name.toLowerCase() === "amanda"){
    alert("That's a great name!")
}
console.log(name.split("").reverse().join(""));