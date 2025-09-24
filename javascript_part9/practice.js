body=document.querySelector("body");
para=document.createElement("p"); // creates a new p element
para.innerText="hey I'm red";
body.append(para);
para.classList.add("red"); // sets the color of the new p element to red

h3=document.createElement("h3"); // creates a new h3 element
h3.innerText="I'm a blue h3"; // sets the text content of the new h3 element
body.prepend(h3); // prepends the new h3 element to the body of the document
h3.classList.add("blue"); // sets the color of the new h3 element to blue

div=document.createElement("div"); // creates a new div element
div.classList.add("box");

body.append(div); // appends the new div element to the body of the document

h1=document.createElement("h1"); // creates a new h1 element
h1.innerText="I'm in a div"; // sets the text content of the new h
div.append(h1);

p=document.createElement("p"); // creates a new p elemen
p.innerText="Me too"; 
div.append(p);

//assignment
button=document.createElement("button"); // creates a new button element
button.innerText="Click Me"; // sets the text content of the new button element
button.setAttribute("id","btn"); // sets the id of the new button element to btn
button.querySelector("#btn");
button.style.backgroundColor="blue";
button.style.color="white"; 

input=document.createElement("input"); // creates a new input element
input.type="text"; // sets the type of the input element to text
input.setAttribute("placeholder","username");

body.append(input); // appends the new input element to the body of the document
body.append(button);

h1=document.createElement("h1");
h1.innerText="DOM practice";
h1.classList.add("heading");
body.prepend(h1); 

paragraph=document.createElement("p"); 
paragraph.innerHTML="Apna college <b>web dev</b> practice";
body.append(paragraph);

