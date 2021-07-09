//sync-event handlers-button-alert,<p>-JS single thread
//Async-fetch(file),display(file),callbacks,promise

//Promise-real time promises
//Scenario-writing exam-pass-party,fail-temple
//waiting for result-async operation in JS
//pass/fail - Promise return value
//Pass-promise is fullfilled
//fail-promise is rejected
//hosting party-success callback
//temple-failure callback

let a=5
let p=new Promise(function(resolve,react){
     if(a==5){resolve('Success')}
     else{react('Failure')}

})

console.log(p)
//promise chaining
p.then((message)=>{//success callback
    console.log(message+' then is executed')}).catch((result)=>{//failure callback
        console.log(result+' catch is executed')})

/*const r1=new Promise((resolve,react)=>{
    resolve('Video 1 is recorded')
})

const r2=new Promise((resolve,react)=>{
    resolve('Video 2 is recorded')
})

const r3=new Promise((resolve,react)=>{
    resolve('Video 3 is recorded')
})

Promise.all/allSettled/race([p,r1,r2,r3]).then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})

const one =()=>{
    console.log("This is one")
}
const two =()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject("Two is rejected")},1000)})
}
const four =()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("This is two")},1000)})
}
const three =()=>{
    console.log("This is three")
}



const display=async()=>{
    try{
    let v2=await two()
    console.log(v2)

    let v1=one()
    console.log(v1)

    let v4=await four()
    console.log(v4)


    let v3=three()
    console.log(v3)
}catch(err){console.log('You are in catch block -'+err)}
}

display()
Promise.all([v1,v2,v3,v4]).then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})*/