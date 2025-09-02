//for loops
for (let i=1;i<=15;i=i+2){
    console.log(i);
}


for(let i=5;i<=50;i=i+5){
    console.log(i);
}

let n=prompt("give a number");
n=parseInt(n);
for (let i=n;i<=n*10;i=i+n){
    console.log(i);
}


const favMovie="3idiots";
let guess=prompt("enter my fav movie");
while(guess!=favMovie){
    if(guess=="quit"){
        break;
    }
    guess=prompt("wrong ans. Try again");
}


//loops in array

let a=["man","lan","van"];
for (let i=0;i<a.length;i++){
    console.log(i,a[i]);
}

//nested arrays loops
let nested=[["hero","zero","curo"],["men","women","others"]];
for (let i=0;i<nested.length;i++){
    console.log(`List ${i} ${nested[i]}`);
    for (let j=0;j<nested[i].length;j++){
        console.log(j, nested[i][j]);
    }
}


//for of loop

for (i of a){
    console.log(i);
}

let name="apnacollege";
for (char of name){
    console.log(char);
}

//for of in nested array

for(rhym of nested){
    console.log(rhym);
    for(hero of rhym){
        console.log(hero);
    }
}


//assignment

let g=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<g.length;i++){
    if(g[i]==num){
        g.splice(i,1);
}
}
console.log(g);


let numb=287152;
let count=0;
let copy=numb;

while(copy>0){
    count++;
    copy=Math.floor(copy/10);

}

console.log(count);


let sum=0;
while(copy>0){
    digit=copy%10;
    sum+=digit;
    copy=Math.floor(copy/10);
}
console.log(sum);

let n1=5;
let factorial=1;

for(let i=1;i<=n1;i++){
    factorial*=i;

}
console.log(`factorial of ${n1} is ${factorial}`);