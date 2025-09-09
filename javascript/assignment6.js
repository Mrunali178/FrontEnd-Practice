//return array which consistes all the values larger than the given number

let arr=[2,3,6,8,1,7,6,9,10];
let num=3;
function largerNum(arr,num){
    let temp=[];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>num){
            temp.push(arr[i]);
            
        }
    }
    return temp;
}

console.log(largerNum(arr,num));

// extract unique caharacters from a string

let str="abcdabcdefgggh";
function uniqueChar(str){
    let temp="";
    for (let i=0;i<str.length;i++){
      let curr=str[i];
      if(temp.indexOf(curr)==-1){
        temp+=curr;
      }   
    }
    return temp;
}

console.log(uniqueChar(str));

//print longest country name amongst the array of country names

let country=["India","United States of America","United Kingdom","Australia","Canada"];
function longestCountry(country){

    let largest=country[1];

    for(let i=0;i<country.length;i++){

            if(country[i].length>largest.length){
                largest=country[i];
            }
              
    }
    return largest;
}

console.log(longestCountry(country));


//generate random number between range(start,end)
let start=Number(prompt("enter a satrt range"));
let end = Number(prompt("enter a endinh number"));

function randomNum(start,end){ 
    let diff=end-start;  

   return Math.floor(Math.random()*diff)+start;
}

console.log(randomNum(start,end));