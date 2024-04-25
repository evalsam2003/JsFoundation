for ( let start = 0; start <= 5; start++) {
    console.log (start);
}

console.log ("inside");

//while loop

let start = 0;
while (start <=5) {
    console.log (start);
    start++
}

console.log ("do while start");

//do while
let  doStart =0;
do {
    doStart++;
    console.log (doStart);
} while (doStart == 5);

//1. Do-While Loop:
// Write a program
//  that prompts the user to
//   enter a number greater than 100
//   . If the number is less than or equal 
//   to 100, keep prompting until they 
//   enter a valid number.
let numOne = 0
    do {numOne = prompt ('input your number greater than 100')
        numOne++;
        console.log (numOne);
    }while (numOne <=100);
    




// 2. While Loop:
// Write a program that prints out the first 10
//  multiples of a number entered by the user.


const number = (prompt("Enter a number"));
let begin = 1;

while (begin <= 10) {
    result = number * begin;
    console.log(result);
    begin++;
}


// 3. For Loop:
// Write a program that calculates the factorial of a number
//  entered by the user.
//   (Factorial of n is the product of all
//      positive integers less than or equal to n.)
let numberOne = (prompt("enter a number:"));
let factor = 1;
