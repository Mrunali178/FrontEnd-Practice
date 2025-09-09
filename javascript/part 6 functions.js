function hello(){
    console.log("Hello");
}

hello();
hello();

function printNum(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

printNum();

//practice que to print a poem

function poem(){
    console.log("jhonny jhonny yes papa...");
    console.log("Eating sugar?..No Papa....open your mouth hahaha!!");
}
poem();

//dice roll value between 1-6

function diceRoll(){
    console.log(Math.floor(Math.random()*6)+1);
}

diceRoll();

//functions with arguments

function printName(name){
    console.log(name);
}

printName("Mrunali")

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("mrunali",21);
printInfo("yash");
printInfo();  //if no argument is paased it will show undefined for that parameter like for above age is undefined

//practice ques avg of 3 numbers

function avg(num1,num2,num3){
    console.log((num1+num2+num3)/3);
}

avg(1,2,3);

//print multiplication table

function multiplication(n){
    for (let i=n;i<=n*10;i+=n){
       console.log(i);
    }
}

multiplication(3);

//return keyword --> return some value from a function and anything written after written is not executed, return stops the execution of function and return value

function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
console.log(sum(sum(1,2),3))  //this will first calculate the sum of 1&2 ,1+2=3 and then 3+3=6 it is possible in js

//in retrun we can return only 1 value for multiple values we can store it in objects or array

function isAdult(age){
    if(age>=18){
        return "adult";
    }
    else{
        return "not adult";
    }
}

console.log(isAdult(23));

//practice ques sum of numners from 1 to n
function sumOfNumbers(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sumOfNumbers(3));

//concatenate all strings in array

function concate(arg){
    let result="";
    for(let i=0;i<arg.length;i++){
        result=result+arg[i];
    }
    return result;
}

console.log(concate(["man","lan","van"]));


//scope

let sum1=54; //global scope
function calc(a,b){ 
    //let sum1=a+b;   //function scope here console.log will use this sum only 
    console.log(sum1);  //but if no sum is defined inside function can use global scope vala function
}
calc(1,2);
console.log(sum1); //can use only global scope vala sum here


//block scope --> only applies to et and const and not var 
{
    let a=12;
    const b=2;
    var c=3;
}
// console.log(a);  //error as a is in block scope
// console.log(b);  // error as b is in block scope
console.log(c);// can use as c is in global scope


let Age=25;
if(Age>=18){
    let str="adult";

    console.log(str); // o/p --> adult
}

// console.log(str);  //error str is not defined


//lexical scope

function outer(){
    let x=10;
    let y=5;
    function inner(){ //function scope
        console.log(x); //lexical scope --> outer function ka var is asscesible to inner function but ooposite not true
    }
    inner();
}
outer();
// inner(); // inner is not defined this error is there as inner fuction is defined inside a fumction hence have function scope

//function expression

let add=function(a,b){ 
    return a+b;
}
console.log(add(1,2));
console.log(add);
//we can chng these variables and can pass them as parametrs as well same as normal variables 

add=function(c,d){
    return c*d;
}
console.log(add(1,2));
console.log(add);


//high order function --> takes 1 or multiple functions as arguments or returns a function as return value or do both

function multiplegreet(func,n){
    for(let i=1; i<=n;i++){
        func();
    }
}

let greet=function(){
    console.log("hello");
}

multiplegreet(greet,3);

// multiplegreet(greet(),3); //give error as greet() is a function call and not a function reference

multiplegreet(function(){
    console.log("hello");
},100);

//return function

function oddEvenTest(req){
    if(req=="odd"){
        return function(n){console.log(n%2!=0)};
    }
    else if(req=="even"){
        return function(n){console.log(n%2==0)};
    }else{
        console.log("wrong request");
    }
}
let req="odd";

let func = oddEvenTest(req);
func(5); // prints: true

req="even";
let funky=oddEvenTest(req);
funky(10);


//methods --> functions that are inside an object (key:value me function bana diya)

let calculate={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};

console.log(calculate);
// console.log(calculate.num); //accessing property
console.log(calculate.add(5,6)); //accessing method =11
console.log(calculate.add); //accessing method shows the function itself


///short hand
let calculator={
    add(a,b){
        return a+b;
    },

    sub(a,b){
        return a-b;
    },
    
    mul(a,b){
        return a*b;
    }
}

console.log(calculator.add(5,6)); //accessing method =11
console.log(calculator.add); //accessing method shows the function itself
