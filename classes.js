//  class user{
//     constructor(username,email,password)
//     {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeCase(){
//         return `${this.username.toUpperCase()}`
//     }
//  }

//  const chai = new user("nij","nij@google.com","1234")
//  console.log(chai.encryptPassword());
//  console.log(chai.changeCase());


// Without using Class

function user(username,email,password)
{
    this.username=username;
    this.email=email;
    this.password=password;
}

user.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

user.prototype.changeCase=function(){
    return `${this.username.toUpperCase()}`
}

const chai = new user("nijjjj","nij@google.com","1234")
 console.log(chai.encryptPassword());
 console.log(chai.changeCase());
