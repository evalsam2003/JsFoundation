console.log("lets start talking on conditional statement")
/**
 * conditional statement is the ability for devs
 * to structure their application or program 
 * to choose between different optons
 * use case
 * helping us make decision in ourbcode 
 */

/**
 * if else condition
 * it takes a comparison operator
 * and denotes its option on whether its true
 * or false
 * hence it takes only two condition
 */

const condition = true;

if ("cool" =="cool" ) {
    //statement
    console.log (true);
}   else {
    //statement
    console.log (false );
}
/**
 * else if condition
 * it works similar to the if else condition
 * though it innovations that it allows 
 * unlimited amount of conditions
 */

if (condition) {
    //statement 
}  else if (condition) {
    //statement
} else if (condition) {
    //statement
} else {
    //statement
    //this is the default condition
}
 const select = document.querySelector("select");
 const para = document.querySelector("p");

 select.addEventListener("change", setWeatherSwitch)

 function setWeatherElseIf() {
    const choice = select.value;
    const umbrella = true;
    if (choice == "sunny") {
        para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and dont stay out for too long.";
        /**
         * nested if ... else
         * its used to embed an if statement into another
         * if statement
         */
        if (umbrella) {
            para.textContent += "please use the umbrella to go out";

        } else {
            para.textContent += "we cant go out yet, call mom to bring the car";
        }
    
 } else if (choice == "snowing") {
    para.textContent =
    "the snow is coming down- it is freezing! best to stay in with a cup of hot chocolate,or go build a snowcastle"
 } else if (choice === "overcast") {
    para.textContent =
    "it isnt raining, but the sky is gray and glowing";
 } else {
    para.textContent = "";
 }
}
 /**
  * switch case
  * it like the else if condition,
  * just more structured and 
  * beginners friendly
  * they are mostly useful when you have
  * multiple choice to select from
  */
 // switch (condition) {
// case choice1 :
//  //statement
// break

//case choice2:
//   // statement
//   break:

//   default:
//    // statement for default
//    break:
//  }

function setWeatherSwitch () {
    const choice = select.value;
     
    switch (choice) {
        case "sunny":
            para.textContent =
            "it is nice and sunny outside today, wearyour sunglasses";
            break;

            case "rainy":
                para.textContent = 
                "rain is falling outside take a rain coat as you are going";
                break;
                case "snowing":
                    para.textContent =
                    "the snow is comung down it is freezing";
                    break;
                case "overcast":
                    para.textContent = 
                    "it isnt raining  but the sky is gray";
                    break;
                    default:
                        para.textContent = "";
    }
}

/**
 * tenary operator 
 * this is an abbreviation of the 
 * if else condition
 */
condition ? console.log(true) : console.log(false);

// classwork for april 4 
// 1.Write a program that checks if
//   a given number is even or odd 
//   and prints the result.
// 2.Create a program that prompts the
//  user for their age and determines 
//  if they are eligible to vote 
//  (considering the legal voting age is 18).
// 3.Write a script that asks the 
//  user to input two numbers
//  and then determines which one is greater.
// 4.Develop a program that simulates a 
// simple grading system. Prompt the user 
// to input their score, and then output 
// their corresponding letter grade based 
// on the following scale: 90-100: A, 80-89: B,
//  70-79: C, 60-69: D, Below 60: F.
// 5.Create a program that simulates a basic
//  ATM machine. Ask the user for their 
//  account balance and the amount they
//   want to withdraw. Ensure to check if 
//   the balance is sufficient for the withdrawal. 
//   If it is, deduct the amount and print
//    the remaining balance. If not, notify 
//    the user that the withdrawal cannot
//     be processed due to insufficient funds.


