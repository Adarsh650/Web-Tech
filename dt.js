//          PART A
//1.Sum of two arrays with individual index
function addArray(array1,array2){
    res=[];
    i=0;
    x=0;
    while(i<array1.length && i<array2.length){
        res.push(array1[i]+array2[i]);
        i++;
    }
    if(i==array1.length){
     for(x=i;x<array2.length;x++){
         res.push(array2[i]);
     }
    }
    else{
        for(x=i;x<array1.length;x++){
            res.push(array1[i]);
        }
    }
    return res;

}
console.log(addArray([1,2,3,4,5],[6,7,8,9,10,11]))

//2.Capitalize first letter of string
function cap(str){
    const capitalized=str[0].toUpperCase()+str.slice(1);
    return capitalized;
    
}
console.log(cap('adarsh'))

//3.Take no.of wins drwas losses and return
function calc(win,draw,loss){
    x=win;
    y=draw;
    z=loss;
    console.log("Points for "+x+" wins = "+(3*x));
    console.log("Points for "+y+" draws = "+y);
    console.log("Points for losses = 0");
}
console.log(calc(2,3,1))


//4.Reverse an array
let array=[1,2,3,4,5]
console.log(array.reverse())

//5.Adding string to integers
function addFunc(a,b,c){
    c=a+b+c;
    console.log(c)
}
addFunc(3,2,"7")

////
let c=3+2+"7";
console.log(c)

//6.Usage of arrow function
const sq = a => console.log("Square of "+a+" = " +(a*a))
sq(2);

//7.Retrieve value using key
function getKeyByValue(object,value){
    return Object.keys(object).find(key=>object[key]==value);
}
const map={"first":1,"second":2}
console.log(getKeyByValue(map,"2"))

///
const obj={1:"Adarsh",2:"Hegde"}
keys=Object.keys(obj);
console.log(keys);

///
const obj1={
    a:"some",
    b:2 , 
    c:false
}
console.log(Object.keys(obj1))


//8.Return true if one of them is 10 or sum is 10
function check(a,b){
    var c=a+b;
    if(isNaN(a) || isNaN(b)){console.log("One of them is not an integer")}
    else if(a==10 || b==10 || c==10){return true}
    else{return false}
}
console.log(check(3,10))



