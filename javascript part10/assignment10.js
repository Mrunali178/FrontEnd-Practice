let btn= document.querySelector("button");
function hello(){
    alert("Hello there!!");
    console.log("Button clicked");
}
btn.addEventListener("mouseout",hello); // this will trigger when the mouse leaves the button

// let inp=document.querySelector("input");
// inp.addEventListener("keypress",hello);

let p=document.querySelector("p");
p.addEventListener("scroll",hello); // this will trigger when the paragraph is scrolled

let iframe=document.querySelector("iframe");
iframe.addEventListener("load",function(){
    console.log("Iframe loaded");
}); // this will trigger when the iframe is loaded

let button=document.createElement("button");
button.innerText="I'm green!";
document.body.append(button);
button.addEventListener("click",function(){
    button.style.backgroundColor="green";
});

let inpt=document.querySelector(".text-input");
let h2=document.querySelector("h2");

inpt.addEventListener("keydown", function(event) {
    console.log(event);
    let key = event.key;
    // Allow only letters and space
    if (!(key >= 'A' && key <= 'Z') && !(key >= 'a' && key <= 'z') && !(key===" ")) {
      event.preventDefault(); // block unwanted key
    }
});

inpt.addEventListener("input", function() 
{
    h2.innerText = inpt.value;
});