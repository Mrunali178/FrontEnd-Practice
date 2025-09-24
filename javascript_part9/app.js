console.dir(document);
console.dir(document.all);
console.dir(document.all[8]);
console.dir(document.all[8].innerText);
document.all[8].innerText="IronMan";

//selecting elements

//getElementById
let imgObj=document.getElementById("mainImg");
console.log(imgObj.src);
console.dir(imgObj);

document.getElementById("abc"); // null if not found

//getElementsByClassName--> returns an html collection of elements and if not exists, returns an empty collection
console.dir(document.getElementsByClassName("oldImg"));
let obj=document.getElementsByClassName("oldImg");
for(let i=0;i<obj.length;i++){
    console.dir(obj[i]);
}

document.getElementsByClassName("abcs"); // empty collection if not found (HTMMLCollection[])

//getElementsByTagName--> returns an html collection of elements and if not exists, returns an empty collection
console.dir(document.getElementsByTagName("p"));


//querySelector--> returns the first element that matches the specified CSS selector, or null if no matches are found used to return a siingle object
console.dir(document.querySelector("h1")); // returns the first element with class h1
console.dir(document.querySelector("h1").innerText); // returns the text content of the first h1 element

console.dir(document.querySelector(".oldImg")); // returns the first element with class oldImg
console.dir(document.querySelector("#mainImg")); // returns the element with id mainImg
console.dir(document.querySelector("div a"));

//querySelectorAll--> returns a NodeList of all elements that match the specified CSS selector, or an empty NodeList if no matches are found
console.dir(document.querySelectorAll("h1")); // returns a NodeList of all h1 elements
console.dir(document.querySelectorAll("div a")); // returns a NodeList of all h1 elements

//innerText--> shows the text content of an element, excluding HTML tags(only text visible to the user)
//innerHTML--> shows the HTML content of an element, including HTML tags(text and HTML structure)
//textContent--> similar to innerText, but it returns the text content of an element, including hidden elements(which are not visible to the user but written in the HTML)

let para=document.querySelector("p");
console.dir(para.innerText); // returns the text content of the first p element
console.dir(para.innerHTML); // returns the HTML content of the first p element
console.dir(para.textContent); // returns the text content of the first p element, including hidden elements

//attribute manipulation(getters and setters)
//getAttribute--> returns the value of the specified attribute of an element
let img=document.querySelector("img");
console.dir(img.getAttribute("src")); // returns the value of the src attribute of the first img element
//setAttribute--> sets the value of the specified attribute of an element (if the attribute does not exist, it will be created) syntax(element.setAttribute(attribute, value))
img.setAttribute("src","assets/creation_1.png"); // sets the src attribute

//style manipulation
//style property only used to acces the inline styles of an element
//it does not access the styles defined in the CSS file or in a <style> tag
let heading=document.querySelector("h1");
console.dir(heading.style); // returns the style object of the h1 element
// heading.style.color="red"; // sets the color of the h1 element to red
heading.style.backgroundColor="yellow"; // sets the background color of the h1 element to yellow

let anchor=document.querySelectorAll(".box a");
//anchor.style.color="green"; // this will not work because anchor is a NodeList, not a single element

for (let i=0;i<anchor.length;i++){
    anchor[i].style.color="yellow"; // sets the color of all anchor elements inside the box class to blue
}

for (let link of anchor){
    link.style.color="purple"; // sets the color of all anchor elements inside the box class to purple
}

//classList property
//classList is a read-only property that returns a live DOMTokenList collection of the class we can use to manipulate the classes of an element
let box=document.querySelector("p");
console.dir(box.classList); // returns a DOMTokenList of the classes of the first p element(here no class hence 0 or empty)

box.classList.add("newClass"); // adds a new class to the p element
console.dir(box.classList); // returns a DOMTokenList of the classes of the first p element

//by adding a newclass we can style it using that class in our css file or add any existing class with same properties to the element

heading.classList.add("newClass"); // adds a new class to the h1 element
heading.classList.add("underline"); // adds a new class to the h1 element

heading.classList.remove("newClass"); // removes the newClass from the h1 element
console.dir(heading.classList); // returns a DOMTokenList of the classes of the heading

heading.classList.contains("underline"); // returns true if the h1 element has the underline class, otherwise false
heading.classList.toggle("underline"); // if the underline class is present, it removes it; if not present, it adds it
heading.classList.toggle("newClass"); // if the newClass is present, it removes it; if not present, it adds it

//navigation on page

let h4=document.querySelector("h4");
console.dir(h4.parentElement); // returns the parent element of the h4 element
let boxElement=document.querySelector(".box");
console.dir(boxElement.children); // returns a live HTMLCollection of the child elements of the box element
console.dir(boxElement.childElementCount); // returns the number of child elements of the box element

console.dir(document.querySelector("ul").children); // returns a live HTMLCollection of the child elements of the ul element
console.dir(document.querySelector("ul").children[1]); // returns the second child element of the ul element
console.dir(document.querySelector("ul").children[1].previousElementSibling); // returns the previous element (then the first child) of the second child element of the ul element
console.dir(document.querySelector("ul").children[1].nextElementSibling); // returns the next element (then the third child) of the second child element of the ul element

let imgElement=document.querySelector("img");
console.dir(imgElement.previousElementSibling); // returns the previous element of the img element
imgElement.previousElementSibling.style.color="red"; // sets the color of the previous element of the img element to red

//create new elements
let newPara=document.createElement("p"); // creates a new p element
newPara.innerText="This is a new paragraph"; // sets the text content of the new p element
console.dir(newPara); // logs the new p element to the console
document.body.appendChild(newPara); // appends the new p element to the body of the document
//or we can append it to any other element but it will be removed from its previous parent if it has one and appended at last
let boxDiv=document.querySelector(".box");
boxDiv.appendChild(newPara); // appends the new p element to the box div


let btn=document.createElement("button"); // creates a new button element
btn.innerText="Click Me"; // sets the text content of the new button element
console.dir(btn); // logs the new button element to the console
boxDiv.appendChild(btn); // appends the new button element to the box div


newPara.append("This is new paragrah text again"); // appends text to the new p element
newPara.append(btn); // appends the button element to the new p element(btn is child of newPara now)
newPara.append("don't click me"); // appends text to the new p element

boxDiv.prepend(newPara); // prepends the new p element to the box div (adds it at the beginning of the box div)

//insertAdjacent Element-> inserts a new element at a specified position relative to the element
//syntax: element.insertAdjacentElement(position, element) 
//positions: "beforebegin", "afterbegin", "beforeend", "afterend"
let btn2=document.createElement("button"); // creates a new button element
btn2.innerText="New button"; // sets the text content of the new button element
para.insertAdjacentElement("beforebegin", btn2); // inserts the new button element above the new p element starts 
para.insertAdjacentElement("afterbegin", btn2); // inserts the new button element before the new p element
para.insertAdjacentElement("beforeend", btn2); // inserts the new button element after the new p element ends(same line)
//para.insertAdjacentElement("afterend", btn2); // inserts the new button element below the new p element


//remove elements
para.removeChild(btn2); // removes the new button from the document
h4.remove(); // removes the h4 element from the document
