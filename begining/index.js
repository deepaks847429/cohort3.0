// react and nextjs are framework, and they compile back in html, js , css.
// properties of javascript
//1. interpreted- meaning it is executed line by line.

// var a=10;
// a="deepak";
// console.log(a);

// let name="deepak"
// const age=30;
// var isStudent=true;
// console.log(name, age, isStudent);

// // daTA TYPES

// let number=42;  // number
// let string="hello web2"; // string
// let isActive=false; // boolean
// let numbers=[1,2,3]; //array



// // operators

// let sum=10+5;
// let isEqual=(10===10);
// let isTrue=(true && false);


// // functions

// function greet(name){
//   return "hello "+ name;
// }

// let message=greet("aayu");

// console.log(message);

// // assignment1 

// function sum(num1, num2){
//   return num1+num2;
// }

// let add=sum(2,3);
// console.log(add);


// // if-else

// if(age>=18){
//   console.log("you are an adult.")
// }
// else{
//   console.log("you are a minor.")
// }

// second assignment
// let num=10;
// if(num%2===0){
//   console.log("number is even");
// }
// else{
//   console.log("number is odd");
// }



// looops

// for(let i=0; i<5; i++){
//   console.log(i);
// }


// let j=0;
// while(j<5){
//   console.log(j);
//   j++;
// }

function sum1ton(num){
  let add=0;
  for(let i=0; i<num; i++){
     add+=i;
  }
  return add;
}

let jfi=sum1ton(10);
console.log(jfi);

// objects

let user={
  name:"deepak",
  age:23,
}

console.log("deepak age is "+ user.age);

// objects assignment

function greet(user){
  return user
}


const users = [{
  name: "Harkirat",
  age: 21
}, {
  name: "raman",
  age: 22
}
]

const user1 = users[0] 
const user1Age = users[0].age


// objects of object
const user2 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;


// filter in javascript

function canVote(age){
  return age>=18;
}

function func(){
  let filtered=[24,30,12,32].filter(canVote);
  console.log(filtered);
}
func();

function solve(arr){
  let arr1=[];
  for(let i=0; i<arr.length(); i++){
      if(arr[i].age>18 && arr[i].gender==='male'){
        arr1.push(arr[i]);
      }
  }
  return arr1;
}
