const num=prompt("enter a range of numbers from 1 to ?");

// let number =parseInt(num);
const guess=Math.floor(Math.random()*num)+1;

let number=prompt("guess the number");
while(true){
    if(number=="quit"){
        console.log("you quit");
        break;
    }
    

    if(number==guess){
        console.log("congratulations! you won..");
        break;
    }

    else if(number>guess){
        number=prompt("too high,please try again");
    }
    else{
        number=prompt("too low,please try again");
    }

}

