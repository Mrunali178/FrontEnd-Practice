//object literals

let student={
    name:"John",
    age:20,
    grade:90
};

let twitter={
    username:"mrunali",
    content:"#study hard",
    likes:20,
    followere:23,
    reposts:5,
    tags:["apnaclg","apnikaksha"]
};

console.log(twitter);
console.log(twitter["content"]);

//or
console.log(twitter .content);
console.log(twitter.tags[1]);


//coversion in get values

//js automatically converts keys or objects into string even if it is number or boolean

let example={
    1:'a',
    2:'b',
    null:'c',
    true:'d',
    undefined:'e'
};
console.log(example[1]);
console.log(example[2]);
console.log(example[null]);
console.log(example[true]);
console.log(example[undefined]);

//but not posiible in example.1 & example.2  and possible in example.null or example.true or example.undefined


//add or update value

twitter.username="yash"; //update --> can be updaed as string or array 
console.log(twitter["username"]);

twitter.reposts="five";
console.log(twitter["reposts"]);

twitter.followere=[1,2,3,4];
console.log(twitter["followere"]);

twitter.posts="4";
console.log(twitter.posts); //add new key value pair

console.log(twitter);

//delete

delete twitter.likes;
console.log(twitter);

//nested object
const classInfo={
    aman:{age:30,city:"delhi"},
    mru:{age:21,city:"indore"},
    yash:{age:25,city:"mumbai"}
}

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.aman.age);
console.log(classInfo.aman.city);
classInfo.aman.city="MP";
console.log(classInfo.aman.city);

//array of objects

let info=[
    {
        name:"yash",
        age:25
    },
    {
        name:"aman",
        age:30
    },
    {
        name:"mru",
        age:21
    }
];
console.log(info);
console.log(info[1]);
console.log(info[1].name);

info[1].age=26;
console.log(info[1].age);

info[2].gender="female";
console.log(info[2]);

//Math object

console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-12.5));
console.log(Math.abs(12));
console.log(Math.pow(2,3));
console.log(Math.floor(5.99999));
console.log(Math.floor(-5.55));
console.log(Math.ceil(-5.55));
console.log(Math.ceil(5));
console.log(Math.ceil(5.000001));
console.log(Math.random());


//random integers

let num=Math.random();
num=num*5;
num=Math.floor(num);
console.log(num);

//this can be wriiten as--> if i want range 10

console.log(Math.floor(Math.random()*10));

//but 5 or 10 will not be printed so we can add 1 at the end so that range becomes 1-5 or 1-10 rather than 0-4 or 0-9
console.log(Math.floor(Math.random()*10)+1);


//assignment

console.log(Math.floor(Math.random()*6)+1);

let car={
    name:"Ferrari",
    model:"812 GTS",
    color:"Red"
};
console.log(car.name);


let person={
    name:"yash",
    age:25,
    city:"Indore"
};

person.city="New York";
person.country="United States";

console.log(person);