//this keyword

const student={
    name:"mrunali",
    age:21,
    maths:82,
    eng:91,
    hindi:90,
    getAvg(){
        let avg=(this.maths+this.eng+this.hindi)/3;
        console.log(avg);
    }
};

console.log(student);
student.getAvg(); //this will give error without 'this' as the variables maths eng and hindi are not declared so to use them in the same object we write this

function getAvg(){
    console.log(this);
}
getAvg(); //this will print window object which is the parent of all the objects window.alert("hello") and alert("hello") gives the same output

//try catch--> error handling try throws the error and catch cathes the error
//we write try catch as without it the part of code which doesnot have error will also not get executed so we use it
console.log("hello");
console.log("hello");
console.log("hello");
let a=5;
try{        //we write try where we are not sure that error will occur or not if error occurs then it will be thrown to catch block else code runs smoothly
    console.log(a);
    console.log(b);
}
catch(e){
    console.log("error found missing var b");  //if error comes than only this gots executes else not
    console.log(e); //this e will print the actual errors
}
console.log("hello1");
console.log("hello1");
console.log("hello1");
console.log("hello1");

//arrow function--> shorter way to write functions (lekin ye hum variable me assign krke likhte h without function keyword baaki ye act func jesa hi krta h)

const sum=(a,b)=>{
    console.log(a+b);
};
sum(5,6); //this will print 11

const cube= n=>{   //if there is single agrument then we can write it without bracekts else always use even if no parameters pased use braces
    console.log(n*n*n);
};
cube(5); //this will print 125

//we can also use return in each case as it works same as function

const pow=(a,b)=>{
    return a**b;
};
console.log(pow(2,3)); //this will print 8

const hello=()=>{
    console.log("hello");
};
hello(); //this will print hello

//implicit return in arrow function--> if we write only one line and just return the statement (nothing else) in arrow function then we dont need to write return keyword

const mul=(a,b)=>(a*b);
console.log(mul(5,6)); //this will print 30

//since we can write single value without brackets hence it is also vaid:
const add=(a,b)=>a+b;
console.log(add(5,6)); //this will print 11

//setTimeOut function 

setTimeout(()=>
    {
        console.log("Home Page");
    },4000);
    //this will print hello after 4 seconds
console.log("Welcome to");

//setInterval function--> this function will keep on executing the function after every specified time interval

// setInterval(()=>{
//             console.log("MRU");  //will print mru after evry 2 seconds
//     },2000
// );

// console.log("Bavi");

//this will run infinitely so to stop this we can use clearInterval by assgining id to the function

let id=setInterval(()=>{
            console.log("MRU");  //will print mru after evry 2 seconds
    },2000
);

let id2=setInterval(()=>{
            console.log("Hello");  //will print mru after evry 3 seconds
    },3000
);

clearInterval(id2); // this will stop the execution of id2
clearInterval(id); // this will stop the execution of id1

//this in arrow function

const student1 = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function() {
        console. log(this);  //student 
        return this.name;  //aman (normal function me jo object ne call kiya usi ka this h)
    },
    getMarks: () => {
        console. log(this); //parent's scope -> window
        return this.marks;  //window(arrow function me parent ka this h)
    },
    getInfo1: function () {
        setTimeout(()=>{
        console.log(this); //student (isme nested loop h to settimeout window ka this h like settimeout ka parent is case me outer function h jo student object ka isliye uska this call hua)
        }, 2000);
    },  
    getInfo2: function () {
    setTimeout(function () {
        console.log(this); //window (normal function me vo usi ka object dekhta h to is case me settiomeout ka object window h isliye window print krega)
    },3000)}
};

console.log(student1.getName());
console.log(student1.getMarks());
console.log(student1.getInfo1());
console.log(student1.getInfo2());


//practice que--> print hello world 5 times at interval of 2sec
let id3=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id3);
    console.log("clear interavl ran");
},10000);