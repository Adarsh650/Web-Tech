function getRandomInt(max){
    return Math.floor(Math.randm()*max);}
var x,count=1;
x=getRandomInt(max);
num=getRandomInt(100);
function myfunc(){
    var g=document.getElementById("guess").value;
    if(guess==num){
        alert("You are right");
    }
    else if(guess<num){
        alert("More");
    }
    else{
        alert("Less");
    }
}