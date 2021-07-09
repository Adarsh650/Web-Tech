//closure property
function init(a){
    let name="Hello..!"
    let b=5;
    function disp(c){
        console.log(name)
        console.log(a*b*c)
    }
    disp(5)
}
init(5)
 console.log()


//scope of variables

var gm = "cricket"     //global

function outerOne() {
    let name="Games"
    var game = "Chess";
    function outerTwo() {
        console.log (name);
    }

    function outerThree() {
        console.log("Name of game is:" + game);
    }

    function inner() {
        console.log("Games :" + gm +" "+ game);
    }
    outerTwo()
    outerThree()
    inner()
}
outerOne()
console.log()

//.......

function one()
{
    let name='Adarsh'
    function two()
    {
        name='Hegde'
        
    }
    two()
    console.log(name)
}
one()


