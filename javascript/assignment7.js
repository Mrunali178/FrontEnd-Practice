//arrow function named avgarrow that acccepts array og number and return thier avg

let arr=[6,2,3,4,1,2];
let avgArrow=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(avgArrow(arr));

//isEven takes a num as argument and return true if num is even and false if num is odd

let isEven=num=>{
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(6));

//output of:

const object={
    message:"hello world!",
    logMessage(){
        console.log(this.message);
    }
}
setTimeout(object.logMessage,1000);


//ouput of:
let length=4;
function callback(){
    console.log(this.length);
}
const obj={
    length:5,
    method(callback){
        callback;
    }
};

obj.method(callback,1,2);