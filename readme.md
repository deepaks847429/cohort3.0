
// async function always return promise, if function  is returning value than it will be wrappped inside a promise ans a promise is returned.



const p= new promise((resolve, reject)=>{
  resolve("promise is resolved);
})

async function getData(){
   return p;
}

const data=getData();
data.then((res)=>console.log(res));


// await


//(general way)
const p=new promise((resolve, reject)=>{
  resolve ("promise resolved);
})


function getdata(){
  p.then(res=> console.log(res));
}

getdata();


// async await(can be only used inside await function) way

const p=new promise((resolve, reject)=>{
  resolve ("promise resolved);
})

async function handlepromise(){
  const val=await p;
  console.log(p);
}

handlePromise();

// difference

const p=new promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("promise resolved, )
  }, 10000);
  
})


function getdata(){
  p.then ((res)=>{
    console.log(res);
    console.log("namaste india")
  })
}

getdata();

// after using await keyword program wait until promise get resolved.
