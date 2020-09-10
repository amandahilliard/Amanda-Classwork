function abs(num){
    if (num >= 0) {
        return num;
    }
    return num * -1
}
console.log(abs(5));
console.log(abs(-5));

//------------------------------------------------------------------
function Pow(x, y) {
    let outcome = 1;
    for(let i = 1; i <= y; i++){
        outcome = outcome * x;
    } 
    console.log(outcome)
}
//------------------------------------------------------------------

function isPalindrome(word){
    let backwards = word.split("").reverse().join("");
    if(backwards.toLowerCase() === word.toLowerCase()){
        console.log(`${word} is a palindrome`)
    }
    else{
        console.log(`${word} is not a palindrome`);
    }
}
isPalindrome("hello");
isPalindrome("radar");
isPalindrome("Radar");

//------------------------------------------------------------------

let words = ["today", "tomorrow", "yesterday", "horse", "dog"];
let bannedwords = ["tomorrow", "horse", "cat", "apple"];

function wordCensor(toCensor, banned){
    for (let i = 0; i < toCensor.length; i++) {
        for (let j = 0; j < banned.length; j++) {   
            if(toCensor[i] === banned[j]){
                toCensor[i] = "REDACTED"
            }
        }   
    }
    console.log(toCensor);
}
wordCensor(words, bannedwords);

//------------------------------------------------------------------

function getDayofWeek (date){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let d = new Date(date);
    console.log(days[d.getDay()]);
}
getDayofWeek("2020-09-15");

//------------------------------------------------------------------

function fizzBuzz(a,b){
    if(a > b){
        for(let i = a; i >= b; i--){
           if(i % 2 === 0 && i % 3 === 0){
               console.log("FizzBuzz");
           }
           else if(i % 3 === 0){
                console.log("Buzz");
           }
           else if(i % 2 === 0){
                console.log("Fizz")
           }
           else{
               console.log(i);
           }
        }
    }
    else if(a < b){
        for(let i = a; i <= b; i++){
            if(i % 2 === 0 && i % 3 === 0){
                console.log("FizzBuzz");
            }
            else if(i % 3 === 0){
                 console.log("Buzz");
            }
            else if(i % 2 === 0){
                 console.log("Fizz")
            }
            else{
                console.log(i);
            }
        }
    }
    else{
        return;
    }

}
fizzBuzz(1,10);
fizzBuzz(10,1);
fizzBuzz(1,1);
//---------------------------------------------------------------

let students = [
    {name: "Amanda", score: 25},
    {name: "John", score: 90},
    {name: "Alex", score: 67},
    {name: "David", score: 89},
    {name: "Cassie", score: 35},
    {name: "Sarah", score: 42},
    {name: "Allie", score: 56},
    {name: "Brianna", score: 29},
    {name: "Stacie", score: 88},
    {name: "Tom", score: 44},
    {name: "Jack", score: 78},
];
console.log(students.sort(function(a,b){
    return a.score - b.score 
}));

//----------------------------------------------------------------
let arr1 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr1.map(function(val){
    return val * 3;
}))
//----------------------------------------------------------------
//Go through all numbers 1-100. Create three arrays and add numbers to them based off the following criteria:
//Array One should have all numbers divisible by 2
//Array Two should have all numbers between 16 and 25 (inclusive)
//Array Three should have all numbers divisible by 4 AND 3

let array1 = [];
let array2 = [];
let array3 = [];

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        array1.push(i)
    }
    if(i >= 16 && i <= 25){
        array2.push(i)
    }
    if(i % 3 === 0 && i % 4 === 0){
        array3.push(i)
    }
}
console.log(array1);
console.log(array2);
console.log(array3);