let btn=document.querySelector("#myButton");
console.dir(btn);

btn.onclick=function(){ //on click will trigger this function when the button is clicked
    console.log("Heloo JS!! triggered");
}

//we can also use this in multiple buttons as well 
let btns=document.querySelectorAll("button");
function hello(){
    alert("Hello there!!");
}

function Welcome(){
    alert("Welcome to my website!!");
}

for(btn of btns){
    btn.onclick=hello; //here don't use hello() because it will call the function immediately, we need to pass the function reference
    //mouse events
    btn.onmouseenter=function(){
        console.log("Mouse entered the button"); // this will trigger when mouse enters the button
    }

}
//by using onclick we can only assign one function to the button, if we want to assign multiple functions we can use addEventListener
for (button of btns) {
    button.addEventListener("click",Welcome);
    button.addEventListener("click",hello);
    button.addEventListener("dblclick",function(){alert("hello dbl!")}); // this will trigger when the button is double clicked
}

h1=document.querySelector("h1");
p=document.querySelector("p");
h3=document.querySelector("h3");
div=document.querySelector("div");

function changeColor(event){
    console.log(event); // this will give us the event object
    // console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor='yellow';  
}
h1.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
div.addEventListener("click",changeColor);

//keyboard events

let input=document.querySelector("input");
input.addEventListener("keydown",function(event){//this event is the default parameter 
    console.log("key was pressed"); 
    console.log(event);// for click shows the pointer onject for keydown shows the key object
    console.log(event.code); // this will show the code of the key pressed
    console.log(event.key); // this will show the value of the key pressed
})

//the keyboard event has many properties but 2 main are code and key
//code shows the physical key on the keyboard(like if a is pressed it will show KeyA, if space is pressed it will show Space)
//key shows the value of the key pressed(like a pressed will show a)
//lets make a game type
let box=document.querySelector(".container");
box.addEventListener("keydown",function(event){
    if(event.code=="ArrowUp"){
        box.style.marginBottom="90%";
    } 
    
    else if(event.code=="ArrowDown"){
        box.style.marginTop="30%";
    }
    
    else if(event.code=="ArrowLeft"){
        box.style.marginRight="60%";
    } 
    
    else if(event.code=="ArrowRight"){
        box.style.marginLeft="60%";
    }
})

//form events
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault(); // this will prevent the form from submitting and reloading the page (stops any default execution)
    console.log("Form submitted");
    
    //for extracting the values or data from the form we can do
    let inp=document.querySelector(".form");
    console.dir(inp); // this will give us the input element
    console.log(inp.value); // this will give us the value of the input field

    //we can also use the form object to get the values of the input fields rather then selecting one by one form has an property elemnt
    console.dir(form);
    console.dir(form.elements); // this will give us all the elements in the form
    console.log(form.elements[0]);
    console.log(form.elements[0].value) // this will give us the value of the first input or can write

    let user= this.elements[0];
    console.log(user.value); // this will give us the value of the first input field in the form
})

//change and input events
form.addEventListener("change",function(event){
    final =console.log(event.target.value); // this will give us the value of the input field that changed
    console.log("Change event triggered");
    
});

form.addEventListener("input",function(event){
    console.log(event.target.value); // this will give us the value of the input field that is being typed in
    console.log("Input event triggered");
});