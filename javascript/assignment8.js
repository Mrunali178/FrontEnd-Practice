// square and sum array elements using arrow function then find avg of the array
let arr=[1,2,3,4,5];
let square=arr.map((el)=>el*el);
console.log(square);
let sum=square.reduce((res,el)=>res+el);
console.log(sum);
let avg=sum/square.length;
console.log(avg);

// new array whose each element is equal to original element plus 5

let newArr=arr.map((el)=>el+5);
console.log(newArr);

//Create a new array whose elements are in upper case of words present in the original array
let words=["hello","world","javascript"];
let upperCase=words.map((words)=>{
    return words.toUpperCase();
});
console.log(upperCase);

//write a function which takes an array as input along with variable number of arguments
//The function should return a new array with the original array values and all of the additional arguments doubled

let doubleArgs=(arr,...args)=>{
    let doubledArgs = args.map(arg => arg * 2);
    return arr.concat(doubledArgs);
}
console.log(doubleArgs([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 8, 10, 12]


let students={
    name:"John",
    age:20,
    marks:85,
};
let data={
    city:"New York",
    country:"USA",
};
let mergedData={...students,...data};
console.log(mergedData);