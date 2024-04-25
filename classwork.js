function evaluate(num) {

   if (num % 2 == 0){
   
    console.log ('this is an even number');
    
}  else {
    console.log ('this is an odd number')
}
}
evaluate(7)
evaluate(10)
evaluate(11)



const age = prompt("please input your age");
console.log(age);
if (age < 18 ){
    console.log("you are not eligible ")
} else {
console.log ("you are eligible")
}


const numOne = prompt("please input the first number")
const numTwo = prompt("please input the second  number") 
if (numOne > numTwo) {
    console.log ("num one is greater")
} else {
    console.log ("numtwo is greater")
}

let score = prompt("Enter your score:");

let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 60 && score <= 69) {
    grade = 'D';
} else {
    grade = 'F';
}


console.log(`Your grade is: ${grade}`);


    function atmSimulation() {
        let accountBalance = (prompt("Enter your account balance:"));
        let amountToWithdraw = (prompt("Enter the amount you want to withdraw:"));
        if (!isNaN(accountBalance) && !isNaN(amountToWithdraw)) {
            if (amountToWithdraw <= accountBalance) {
                let remainingBalance = accountBalance - amountToWithdraw;
                alert("Withdrawal successful! Remaining balance: $" + remainingBalance.toFixed(2));
            } else {
                alert("Insufficient funds. Withdrawal cannot be processed.");
            }
        } else {
            alert("Invalid input. Please enter valid numbers.");
        }
    }

    atmSimulation();
  
