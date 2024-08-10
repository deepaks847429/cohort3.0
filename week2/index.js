//https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1

// functional arguments

function sum(a, b){
  return a+b;
}

function multiply(a, b){
  return a*b;
}

function subtract(a, b){
  return a-b;
}

function divide(a, b){
  return a/b;
}

function doOperation(a, b, op){
  return op(a, b);
}

console.log(doOperation(1,2, sum));

// callbacks
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});


// find sum of two numbers
function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(ans);


// find sum of 1 to number
function sum(n){
  let ans=0;
  for(let i=0; i<=n ; i++){
    ans+=i;
  }
  return ans;
}

const ans=sum(100);
console.log(ans);


// Synchronous code
// Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.
// For example

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);


// I/O heavy operations
// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.
// Examples of I/O Heavy Operations:
// Reading a file
// Starting a clock
// HTTP Requests
 
// 💡
// We’re going to introduce imports/requires next. A require statement lets you import code/functions export from another file/module.

const fs=require("fs")

const contents=fs.readFileSync("a.txt", "utf-8");

console.log(contents);


const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);



// I/O bound tasks vs CPU bound tasks
// CPU bound tasks
// CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.

let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	

// A real world example of a CPU intensive task is running for 3 miles. Your legs/brain have to constantly be engaged for 3 miles while you run.


// I/O bound tasks
// I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.



const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

// A real world example of an I/O bound task would be Boiling water. I don’t have to do much, I just have to put the water on the kettle, and my brain can be occupied elsewhere.



// Asynchronous code, callbacks
// Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback since the function gets called back when the file is read 


const fs=require("fs");
fs.readFile("a.txt", "utf-8", (err, contents)=>{
  console.log(contents);
})

// settimeouts

//setTimeout is another asynchronous function that executes a certain code after some time

function run(){
  console.log("i will run after 1 sec");
}
setTimeout(run, 1000);
console.log("I will run ummidieatley");


// JS Architecture for async code

// 1. Call Stack
//  The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.
// When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.

// code

function first(){
  console.log("first");
}

function second(){
  first();
  console.log("second");
}
second();

// 2. Web APIs
// Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.


// Callback Queue 
// The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.

// 4. Event loop
// The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.



// Assignment
//promisified version of setTimeout

async function run(){
  console.log("waiting for 2 seconds.....");
  await wait(2000);
  console.log("Done waiting!")
}

run();

//create a promisified version of fetch

async function customFetch(url, options={}){
  try {
    const response=await fetch(url, options);
    if(!response.ok){
      throw new Error(`HTTP ERROR! status: ${response.status}`);
    }
    const data=await response.json();
    return data;
    
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
    
  }
}

// example

(async()=>{
  try {
    const data=await customFetch('https://api.example.com/data')
    console.log(data);

  } catch (error) {
    console.error(error);
    
  }
})

// promisified version of readfilesync

const fs=require('fs').promises;
async function readFileAsync(filePath, encoding='utf8'){
  try {
    const data=await fs.readFile(filePath, encoding);
    return data;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`)
    
  }
}