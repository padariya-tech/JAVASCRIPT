
const user={
    username:"nij",
    price:2222,
    welcomeMessage:function(){
        console.log(`${this.username},WElcome to Website`);
        // console.log(this);
    }
}
 
// user.welcomeMessage();
// user.username="nij Padariya"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="nniijj"
//     //this can not be used with function
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "nijj"
//     console.log(this.username);
// }
// chai() same as above


//+++++++++++++++++ Arrow Function ()=>{} ++++++++++++++

const chai = ()=>{ // Arrow function
    let username = "nijj"
    console.log(this);
}
// chai()

// const addtwo = (num1,num2)=>{ explicit return 
// return num1+num2;
// }

// const addtwo = (num1,num2)=>  num1+num2; implicit return 
// const addtwo = (num1,num2) => (num1+num2)
    
const addtwo = (num1,num2) => ({username:"nij"})
// for object return write in {} braces


console.log(addtwo(3,4))









