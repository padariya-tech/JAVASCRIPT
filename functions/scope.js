{let  = 10
const b = 20
var c=30}

// console.table(c); because it is declare as var we get value of c outof the scope also , that's why use of var to declare variable is not recommended

function one(){
    const username="nij"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); give error bcz not in scope
    two();
}

// one();


// +++++++++++++++++ interesting +++++++++++++++
console.log(addone(5));
function addone(num)
{
    return num+1;
}

//we can give any thing to variable in js
const addtwo=function(num) // here we are giving the function to const variable so access posible only after eclaration of this function 
{
    return num+2;
}

 console.log(addtwo(5));// this is called hoisting in javascript













