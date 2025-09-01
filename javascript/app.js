console.log("hello!")
let a=10;
let b=20;

let addition="the sum of "+a+" and "+b+" is "+(a+b);

//instead of using string concatenation, we can use template literals
let sum=`the sum of ${a} and ${b} is ${a+b}`;

console.log(addition);
console.log(sum);


//== vs ===  == copares only value not type while === compares both value and type

console.log(123=="123");
console.log(123==="123");

console.log('a'>'A');
console.log('*'<'&');

//if statement

let color="red";
if(color=="red"){
    console.log("stop");
}

if(color=="yellow"){
    console.log("slow down");
}

if(color=="green"){
    console.log("go");
}


// else if statement- only executed if if statement is false and else if statement is true

let marks=73;
if (marks>=12){
    console.log("you passed");
}

else if(marks>=12){ // this will not be executed because if statement is true even if both are true
    console.log("you passed");  
}


// else statement- executed if if and else if statement is false

let size="S";
if (size==="XL"){
    console.log("price is 250");
}

else if (size==="L"){
    console.log("price is 200");
}

else if (size==="M"){
    console.log("price is 100");
}

else{
    console.log("price is 50");
}

//nested if else
//marks intiazlied above
if(marks>=33){
    if(marks>80){
        console.log("A grade");
    }

    else{
        console.log("Pass")
    }
}

else{
    console.log("better luck next time");
}

// practice que-> good string-- should start with a and length>3

let str="nabcde";
if(str[0]=='a' && str.length>3){
    console.log("good string");
}

else{
    console.log("bad");
}

//switch case

let light="blue";
switch(light){
    case "red":
        console.log("stop");
        break;

    case "green":
        console.log("go");
        break;

    case "yellow":
        console.log("slow down");
        break;

    default:
        console.log("broken");
        break;
}


//alert and prompt

//assignment Q2
alert("something is wrong");
firstname=prompt("name?");
age=prompt("what is age?");
alert(`${firstname} age is ${age}`);


//assignment Q1
let num=121;
if (num%10===0){
    console.log("good");
}

else{
    console.log("bad");
}


//Q3
let quater=1;
switch(quater){
    case 1: console.log("jan","feb","march");
    break;
    case 2: console.log('april','may','june');
    break;
    case 3: console.log('july', 'aug', 'sep');
    break;
    case 4: console.log('oct','nov','dec');
    break;
    default: console.log('unvalid quater');
}

//Q4
let strr='Abcdef';
if ((strr[0]=='a' || strr[0]=="A") && strr.length>5){
    console.log("golden string");
}
else{
    console.log("not golden");
}

//Q5

let n1=78;
let n2=300;
let n3=4;
let max_num=0;
if(n1>n2 && n1>n3){
    console.log(`${n1} is largest number`);
}

else if(n2>n1 && n2>n3){
    console.log(`${n2} is largest number`);
}

else{
    console.log(`${n3} is largest number`);
}

//Q6

let num1=30;
let num2=47850;
if(num1%10==num2%10){
    console.log(`last digit = ${num1%10}`);
}
else{
    console.log("no same last digit");
}