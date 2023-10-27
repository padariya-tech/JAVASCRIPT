// DEclare of Object

const mySymb = Symbol("key1")


const JsUser={
    name:"Nij",
    age:22,
    [mySymb]:"mykey1",
    location:"Kanpur",
    email:"nij@gmail.com",
    isLoggedIn:false
}

console.log(JsUser.name);
console.log(JsUser["age"]);
console.log(JsUser[mySymb]);

JsUser.age=50
console.log(JsUser["age"]);
// Object.freeze(JsUser); // it will not allowed to change the value of this object
JsUser.age=100
console.log(JsUser["age"]);
console.log(JsUser);

JsUser.greeting= function(){
    console.log(
        "jay hind dosto"
    );
}

console.log(JsUser.greeting());


JsUser.greeting2= function(){
    console.log(
        `jay hind ${this.name} bhai`
    );
}
console.log(JsUser.greeting2());


