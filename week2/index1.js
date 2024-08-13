// // classes in javascript.

const { setDefaultResultOrder } = require("dns");

// const { types } = require("util")

// // primmitives types
// 1. number
// 2. string
// 3. boolean

// complex types
// 1. objects
// 2. arrays

// classes

// In javascript, classes are a way to define blueprints for creating objects(these objects are different from the objects defined in the last section).In

class Rectangle{
  constructor(width, height, color){
    this.width=width;
    this.height=height;
    this.color=color;
  }
  area(){
     const area=this.width*this.height;
  }
  print(){
    console.log(`painting with color ${this.color}`)
  }
};

const rect=new Rectangle(2,4);
const area=rect.area();
console.log(area);class keyword



// key concepts
// class Declaration:
// -> we declare a class using class keyword
// ->inside a class , you define properties and methods that will belong to the objects created from the class.


// constructor
// -> a special method inside the class that is called when you create an instabce of the class
// ->it' s used to initalized the propertiers of the object.

// methods
// ->functions that are defined inside the class and can be used to all instances of the class.

// ->inheritance
// class can inherit properties and methods from other classes allowing you to create a new class based on existing one.

// -> static methods
// methods that belong to the class ityself, not to onstances of the class. you call them directly on the class.

// ->getters and setters

// -> special methods that allow you to define  how /////////////properties are accessed and modified

// inheritance in class

class Circle{
  constructor(radius, color){
    this.radius=radius;
    this.color=color;
  }
  area(){
    const area=this.radius*this.radius*Math.PI;
    return area;
  }
  paint(){
    console.log(`painting with color ${this.color}`);
  }
}

const circle= new circle(2, "red");
const area=circle.area();
console.log(area);

// Base class

class shape{
  constructor(color){
    this.color=color;
  }
  paint(){
    console.log(`painting with color ${this.color}`);
  }
  area(){
    throw new Error(`the area method must be implemented in the subclasss`);
  }
  getDescription(){
    return `A shape with color ${this.color}`;
  }
}

// rectangle class

class Rectangle extends shape{
  constructor(width, height, color){
    super(color);
    this.width=width;
    this.height=height;
  }
  area(){
    return this.width*this.height;
  }
  getDescription(){
    return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
  }
}


// circle class

class Circle extends shape{
  constructor(radius, color){
    super(color);
    this.radius=radius;
  }
  area(){
    return Math.PI*this.radius*this.radius;
  }
  getDescription(){
    return `A circle with radius ${this.radius} and color ${this.color}}`;
  }
}

const Circle= new Circle(20, "red");
console.log(Circle.area);


// somw more classes

Date
const now=new Date(); // current date and time
console.log(now.toISOString()); //output date in ISO format


// maps
const map= new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
console.log(map.get('age'));


// promise classes
// A promise in a javascript is an object that represents the eventual completion of an asynchronus operation and its resulting validateHeaderValue. Promises are used to handle asynchronus operations more effectively than traditioonal callback functions, providing a cleaner and more mangeable way to deal with the code that executes asynchronusly, such as API calls, file I/Object, or Timers 


// using functions that returns promise.

function setTimeOutPromisified(ms){
  return new Promise (resolve=> setTimeout(resolve, ms));
}

function callback(){
  console.log("3 second have passed");
}

setTimeOutPromisified(3000).then(callback);


// callback hell

setTimeout(function(){
  console.log("hi");
  setTimeout(function(){
    console.log("hello");

    setTimeout(function(){
      console.log("hello there");
    },5000)
  },3000)
},1000)

function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);




// promisified vewrsion

function setTimeOutPromisified(ms){
  return new Promise(resolve =>setTimeout(resolve, ms));
}


function setTimeOutPromisified(ms){
  return new promiseHooks((resolve)=>setTimeout(resolve, ms));

}

setTimeOutPromisified(1000).then (function(){
  console.log("hi");
  setTimeOutPromisified(3000).then(function(){
    console.log("hello");
    setTimeOutPromisified(5000).then(function(){
      console.log("hi theree")
    })
  })
})

setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });


  // The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises. 

function setTimeOutPromisified(ms){
  return new Promise(resolve=>setTimeout(resolve, ms));
}

async function solve(){
  await setTimeOutPromisified(1000);
  console.log("hi");
  await setTimeOutPromisified(3000);
  console.log("hello");
  await setTimeOutPromisified(5000);
  console.log("hi there");
}

solve();


// You can only call await inside a function if that function is async
// You cant have a top level await 




// Defining your own async function
// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

const fs=require('fs');
function cleanFile(filePath, cb){
  return new Promise(function(resolve){
    fs.readFile(filePath, "utf-8", function(err, data){
      data=data.trim();
      fs.writeFile(filePath, data, function(){
        resolve();
      })
    })
  })

}

async function main(){
  await cleanFile("a.txt");
  console.log("a.txt");
  console.log("done cleaning file");
}

main();


const fs = require("fs")
function afterDone(err, data) {
  if (err) {
    console.log("Error while reading file");
  } else {
    console.log(data)
  }
}

fs.readFile("a.txt", "utf-8", afterDone);


//Promises use the reject  argument to propagate errors

const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);


// assignment done in week2(1)
