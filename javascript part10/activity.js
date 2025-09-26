let btn=document.querySelector("button");
function changeColor(){
    document.querySelector("div").style.backgroundColor=randomColor();
    document.querySelector("h1").innerText=randomColor();
}

function randomColor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
btn.addEventListener("click",changeColor);

//addEventListener is not only used for buttons but can also be used for other elements.