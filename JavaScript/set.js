//set
/*let mySet = new Set() //empty set
mySet.add([10,20,20,40])
console.log("set mySet:")
console.log(mySet)

let set1=new Set([1,2,3,4,5],'string',{"objectKey":"objectValue"})
console.log("set set1 : ")
console.log(set1.entries())

console.log(set1.has(2))
if(set1.has(2)){
    set1.delete(2)
}
else{
    set1.clear()
}
console.log(set1)
set1.add(78)
console.log(set1.values())
console.log(set1.size)
for(let i of set1.values()){
    console.log(i)
}*/

//converting set ito an array
/*let set2=new Set([3,56,'a string'])
console.log(set2)
let ar1=[...set2]//destructuring
console.log("set to array")
console.log(ar1)

//converting array into a set
let ar2=[45,3,4]
let setConv=[...new Set(ar2)]
console.log("array to set")
console.log(setConv)*/

//to remove duplicate elements from array
let ar3=[2,2,2,3,4,5,5,5,6,6,7,1,2,3]
console.log(ar3)
//2 ways
//1st way
let ar3Set=Array.from(new Set(ar3))
console.log("\nFirst way ")
console.log(ar3Set)

//2nd way
console.log("\nSecond way ")
let s3=new Set(ar3)
console.log(s3)
let ar4=[...s3]
console.log(ar4)

//performance efficiency
/*let a=[],s=new Set()
let b=[1,2,3,45,6,7,8,9]
for(let i=0;i<b.length;i++){
    console.time('Array')
    a.push(b[i])
    console.timeEnd('Array')
    console.time('Set')
    s.add(b[i])
    console.timeEnd('Set')
}


let result
console.time('Array')
result=a.indexOf(2)!==-1;
console.timeEnd('Array')

console.time('Set')
result=s.has(2)
console.timeEnd('Set')

let ob1={id:1,name:'abc'}
let ob2={id:2,name:'xyz'}

s.add(ob1)
s.add(ob2)
console.log(s)

let e=new Set([1,2,3]);
let f=new Set([3,2,6]);
let union=new Set([...e,...f])
console.log(union)
let intersection=new Set([...e].filter(x=>f.has(x)))
console.log(intersection)
let diff=new Set([...e].filter(x=>!f.has(x)))
console.log(diff)*/
