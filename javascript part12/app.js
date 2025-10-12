//async function--> always return promises even if you not return anything in the function
//makes function asynchronous
async function hello() {}
console.log(hello()); //on console returns a promise with state fulfilled

async function greet() {
  // throw("poor connection");  //this will give error
  //if we remove throw will give fullfied state with hello world printed
  return "hello world"; //this will return promises (here state will be rejected as error)
}

greet()
  .then((result) => {
    console.log("result was: ", result);
  })
  .catch((err) => {
    console.log("error catched: ", err);
  });

//can be used with arrow functions also

let demo = async () => {
  return 5;
};
console.log(demo());

//await

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

//await-->The await keyword can only be used inside async functions. It tells JavaScript to "wait" until the promise is resolved or rejected before moving on.

async function getRandom() {
  await getNum(); //await is used only in async functions
  await getNum(); // awaits stops the execution untill the first one is not executed
  await getNum(); //if above getNum executed than only this can be executed else not
  await getNum();
  getNum();
}

getRandom();


//getting better with chngColor (part 11)
h2=document.querySelector("h2");
function changColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num=Math.floor(Math.random()*5)+1;
      if(num>3){ //this will throw an error where ever num>3
        reject("promise rejected");
      }
      h2.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

async function modified(){
    try{
        await changColor("red",2000);
        await changColor("orange",2000);
        await changColor("green",2000);
        await changColor("pink",2000);
        changColor("blue",2000);
    }
    catch(error){
        console.log(error);
    }

    let a=5;
    console.log("error k baad bhi",a+3);
    
}

modified();

//handling rejections --> use try cathch whenever you write awaits else the other code will aslo not get executed


//working with APIs
//json data to js object example
let jasonRes=
'{"fact":"There are approximately 60,000 hairs per square inch on the back of a cat and about 120,000 per square inch on its underside.","length":125}';
//json data is fetched from api in the form of string
let validRes=JSON.parse(jasonRes); //converts json data to js object
console.log(validRes.fact);


//converting js object to json data
let student={
    name:"Mrunali",
    age:21,
    city:"Indore",
};
console.log(JSON.stringify(student));


//first api request 

//using fetch(url)--> returns a promise

let url="https://catfact.ninja/fact";
// fetch(url) //returns promise
// .then((response)=>{
//     console.log(response);
//     return response.json(); //returns promise and conerts response to json
// })
// .then((data)=>{
//     console.log("data1 : ",data.fact); //return key fact
//     return fetch(url);
// })
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log("data2: ",data.length);
// })
// .catch((err)=>{
//     console.log(err); // catches error if occurs
// })


//using async await with fetch for the same
// async function getFacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log("data1:",data.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// console.log(getFacts());

//in fetch we need to parse data to make it in jason so we use axios it directly provide data in json

//we need to install axios or we an copy its cdn link in our html page

//to show facts on html page
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact=await getFacts();
    let p=document.querySelector("#result");
    p.innerText=fact;
})
async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log(err);
        return "no facts found"
    }
}



// console.log(getFacts());