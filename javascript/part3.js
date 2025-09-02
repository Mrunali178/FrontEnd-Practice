// string methods
let msg="   he llo   "
console.log(msg.trim()); // trim used to trim extra spaces from both the ends of string and not middle

//toUpperCase and toLowerCase 

let name= "Mrunali"
console.log(name.toUpperCase()); // converts string to upper case
console.log(name.toLowerCase()); // converts string to lower case

//string with arg 
//indexOf --> finds first occurence of the string or char pased within arguments

console.log(name.indexOf("ru"));
console.log(name.indexOf("Ru"));
 
//method chaining --> applying more than two methods on a string at a time

let msg1="    hello   ";
console.log(msg1.trim().toUpperCase()); // first trim then upper case

//slice--> syntex-- str.slice(startindex, stopindex+1)

let str="Ilovecoding"; 
console.log(str.slice(1,5)); // returns "Ilove" from start index 0 to end index 4
console.log(str.slice(5)); // returns "coding" from start index 5
console.log(str.slice(-2)); // returns "ng" from start index length-2 to end

//replace --> str.replace("what to replace", "with what to replace") 

console.log(str.replace("coding","you"));
console.log(str.replace("o","x"));  //replaces only 1st occurences ithers remin same and also don't chng original string just returns new string
console.log(str)

//repeat--> reapeats same things the number of times specified in argument

let fruit="Apple";
console.log(fruit.repeat(3));

//array--> linear collection of elements can be of different types and it is mutable in js

let a=["mru","yash","mohit"];
console.log(a);
console.log(typeof (a)) ; //object since arrays are object type in js

let arr=["sharddha",3,4.5,6,7];
console.log(arr);
console.log(arr.length);
console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0].length);

arr[10]=45;
console.log(arr);

//adding elements is array
//push --> elemnts at ending of array also returns the value

arr.push("mru");
console.log(arr);

//pop--> deletes last element from array also returns the value
arr.pop()
console.log(arr);

//unshift--> adds elements at starting and also returns the value

arr.unshift("yash");
console.log(arr);

//shift --> deletes first element from array also returns the value
arr.shift();
console.log(arr);

//indexOf--> finds index of element

console.log(arr.indexOf("sharddha"));

//includes--> checks if element is present in array or not

console.log(arr.includes(4.5));
console.log(arr.includes(4));

//conact--> concatenates two arrays
console.log(arr.concat([1,2,3,4,5,6,7,8])); //this formed aaray is not chnged in original array it just returns new array
console.log(arr);

//reverse--> reverses the original array
console.log(arr.reverse());
console.log(arr.reverse());
//slice--> returns a new array from specified index to specified index

console.log(arr.slice()); //returns copy of original array
console.log(arr.slice(1)); //returns copy of original array from index 2 to ending
console.log(arr.slice(1,3)); //returns copy of original array from index 2 to ending i.e 3
console.log(arr.slice(-1)); //returns copy of original array from last index

//splice--> it can slice\delete elemnt\replce elemnt and do chngs in original array
//syntax splice(index,howmany elemnts to delete,elemnt1,elemnt2,elemnt3)


let color=["red","blue","yellow","green","black"];
console.log(color.splice(3)); // will slice or remove elements from start index 3 to end 
color.splice(1,1); // will slice from start index 1 to end and remove 1st element
console.log(color);

color.splice(1,0,"voilet","pink"); // will slice from start index 1 to end and add two elemnts voilet and pink from index 1
console.log(color);

//sort --> sorts array
let num=[1,5,2,7,3,4,100];  //in numbers the sort function 1st converts it to the string than sorts hence when 100 is givrn sorting chngs
console.log(num.sort());

let char=["a",'b','t','c','a'];
console.warn(char.sort());


//tic-tac-toe representation using multidimensional array
let tic=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(tic);
tic[0][1]="O";
console.log(tic);


//assingment
let n=3;
let ar=[7,9,0,-2];
console.log(ar.slice(0,n));
console.log(ar.slice(-n));

let s1=[];
if (s1.length==0){
    console.log(true);
}
else{
    console.log(false);
}

let st="Mrunali";
let i=3;
if(st[i]==st[i].toLowerCase()){
    console.log("lowercase");
}else{
    console.log("uppercase");
}

let m="   hello  ";
console.log(m.trim());


let r=[1,2,"rahul","soniya",3];
let item=8;
if(r.indexOf(item)==-1){
    console.log("doesn't exist");
}else{
    console.log("exists");
}