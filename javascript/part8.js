//array methods
//forEach


// let arr=[1,2,3,4];
// let print=function(el){
//     console.log(el);
// };

// arr.forEach(print);

let arr=[1,2,3,4];
arr.forEach(function(el){
    console.log(el);
});

arr.forEach(
    (el)=>{
        console.log(el);
    }
);

//can be used for objects as well

let student=[    
    {
        name:"Rahul",
        marks:20,
    },
    {
        name:"Rohan",
        marks:21,
    },
    {
        name:"sonam",
        marks:22,
    },
];
student.forEach((person)=>{
    console.log(person.name,person.marks);
});

//map function

let arr1=[1,2,3,4];
let arr2=arr1.map((el)=>{
    return el*2;
});
console.log(arr2);

//if we don't return anything, it will return undefined
let arr3=arr1.map((el)=>{
   
});//it will return an array of undefined values of the same length as arr1

console.log(arr3);

//can be used for objects as well

let students=[    
    {
        name:"Rahul",
        marks:20,
    },
    {
        name:"Rohan",
        marks:21,
    },
    {
        name:"sonam",
        marks:22,
    },
];
let cgpa=students.map((person)=>{
    return person.marks/10;
});
console.log(cgpa);

//filter function --> returns a new array with elements that pass the test implemented by the provided function
let nums=[1,2,3,4,5,6,7,8,9];
let even=nums.filter((el)=>{
    return el%2===0;
});
console.log(even);

//every function --> tests whether all elements in the array pass the test implemented by the provided function
let allEven=nums.every((el)=>{  //nums=[1,2,3,4,5,6,7,8,9]
    return el%2===0;
});
console.log(allEven); // false, because not all numbers are even  

console.log([16,2,4,88].every((el)=>{
    return el%2==0; //returns false because 5,67,88 are not even
}));


//some function --> tests whether at least one element in the array passes the test implemented by the provided function

let someEven=nums.some((el)=>{      //nums=[1,2,3,4,5,6,7,8,9]
    return el%2===0;
});
console.log(someEven); // true, because there are even numbers in the array

//reduce function --> executes a reducer function (that you provide) on each element of the array, resulting in a single output value

let num=[1,2,3,4];
let sum=num.reduce((res,el)=>{
    console.log(res);  //res always holds the accumulated value
    return res+el
});
console.log(sum); // 10, because 1+2+3+4=10

//maximum in an array
//normal using for loop
let array=[1,2,3,4,5,6,7,8,9];
let max=-1;
for (let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log(max); // 9

//using reduce function
let maxNum=array.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(maxNum); // 9

//practice que--> check all elements in are multiple of 10 or not?

let nums1=[10,20,30,40,50];

let multipleTen=nums1.every((el)=>(el%10==0));
console.log(multipleTen); // true, because all elements are multiples of 10


//create a function to find min value in array
let nums2=[10,20,30,40,50];

let minValue=nums2.reduce((min,el)=>{
    if(el<min){
        return el;
    }
    else{
        return min;
    }
});
console.log(minValue); // 10, because 10 is the minimum value in the array

//default parameters in functions
function addition(a,b=3){
    return a+b;
}
console.log(addition(5)); // 8, because b is defaulted to 3
console.log(addition(5,2)); // 7, because b is overridden to 2
// but if we don't pass a value for a, it will be undefined and if a is default and we want to assign avlue to b it will not happen as values are assigned in order so single value will always be assigned to a


//spread operator
let arr4=[1,2,3];
console.log(...arr4); // 1 2 3, spreads the array elements

console.log(..."Mrunali Baviskar"); // M r u n a l i   B a v i s k a r, spreads the string characters

//with array literals--> we can use spread operator to merge arrays or copy arrays
let arr5=[1,2,3];
let arr6=[...arr5]; // creates a shallow copy of arr5
console.log(arr6); // [1, 2, 3]

let char=[..."Mrunali"];
console.log(char); // ['M', 'r', 'u', 'n', 'a', 'l', 'i']

let odd=[1,3,5];
let eve=[2,4,6];
let all=[...odd,...eve]; // merges two arrays
console.log(all); // [1, 3, 5, 2, 4, 6]

//spread with object literals
let obj1={name:"Mrunali",age:25};
let objCopy={...obj1,id:123}; // creates a shallow copy of obj1 and adds a new property id
console.log(objCopy); // { name: 'Mrunali', age: 25, id: 123 }

// we can store array or strings in an object using spread operator
let ar=[1,2,3];
let objWithArray={...ar}; // creates an object with array elements as properties
console.log(objWithArray); // { '0': 1, '1': 2, '2': 3 }


let strCharacters={..."Hello"}; // creates an object with string characters as properties
console.log(strCharacters); // { '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

//rest operator
function sum2(...args){ // args is an array of all arguments passed to the function 
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i];
    }
    return total;
};
console.log(sum2(1,2,3,4,5)); // 15
console.log(sum2(10,20)); // 30

//rest operator with arrow function
function sum1(...args){ // args is an array of all arguments passed to the function 
    return args.reduce((acc, el) => acc + el, 0);
};
console.log(sum1(1,2,3,4,5)); // 15
console.log(sum1(10,20)); // 30

// we can pass multiple arguments to a function using rest operator
function min(msg,...args){
    console.log(msg); // prints the message
    return args.reduce((min,el)=>{
        if(el<min){
            return el;
        }
        else{
            return min;
        }
    });
}

console.log(min("Finding minimum value:", 10, 20, 5, 30)); // Finding minimum value: 5
console.log(min(10,20,30,40)); // 10 20 --> 10 will be treated as msg and 20,30,40 will be treated as args

//desturcturing 
let names=["Mrunali","Baviskar","Rohan"];
let [firstName, lastName] = names; // destructuring array
console.log(firstName); // Mrunali
console.log(lastName); // Baviskar
//we can use rest operator to get remaining elements
let [first, ...rest] = names; // first will be Mrunali and rest will be ["Baviskar", "Rohan"]
console.log(first); // Mrunali
console.log(rest); // [ 'Baviskar', 'Rohan' ]

//destructuring objects
let person = {
    name: "Mrunali",
    age: 25,
    city: "Pune",
    country: "India",
    subjects: ["Math", "Science", "English", "History"],
};

let { name, age, city } = person; // destructuring object
console.log(name); // Mrunali
console.log(age); // 25
let {name: personName, age: personAge} = person; // renaming variables during destructuring
console.log(personName); // Mrunali
let {country,marks=100,state:place="MP"}= person; // marks will be defaulted to 100 if not present in the object
console.log(country); // India
console.log(place); // MP, because state is not present in the object
// console.log(state); // error, because state is not present in the object

