//declare a function
function add(a = 26, b = 20) {
    let result = a + b
    return result
}

//calling a function
console.log(add(23 , 49))

console.log(add(2 , 9))

console.log(add())

//division function divide two variables
function div(a,b) {
    let result = a/b
    return result 
}
console.log(div(10,5))

//a multiplication function multiply 3 digit
function mul(a,b,c) {
    let result = a*b*c
    return result
}
console.log(mul(10,5,2))
//using string predefined 
let message = "user login succesful";
console.log(message.toUpperCase())
//using  number predefined function
let age = 23;
console.log(typeof age);
let agestring =age.toString()
console.log(typeof agestring, agestring);

//use array predefined function
let arr = ["zero", "one", "three"];
arr.push ("four");
console.log(arr);
//object predefined functions
let obj = {
    one: 1,
    two:2,
    three:3,
}
//and object does not have specific predefined 
//functions


//types of modal
//alert sows the user an out put
//and unless its attended to
//the flow is paused

//confirm used to inquire from the user 
//taking reply to as if its true or false

//prompt = its used for asking  the user a 
// question and taking the answer as input


//scope
/**
 * data is inheited from parent
 * and can be written on 
 * functional scope
 * while parent cant see data defined 
 * in the children scope
 */
function globalScope() {
    const global = "Global";
    let data = "global scope data";
    let student = [];


    function functionOne () {
        const scopeOne = "ScopeTwo";
        //let data = "function one data";
        console.log (data);
    }
    functionOne ();

    function functionTwo () {
        const scopeTwo = "Scopetwo";
    }
    functionTwo();

}