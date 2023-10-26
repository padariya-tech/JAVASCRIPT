function mul(num) {
    return num*5;
}

mul.ss=10;

// console.log(mul(5));
// console.log(mul.ss);
// console.log(mul.prototype);

function createuser(username,score) {
    this.username=username;
    this.score=score;
}

createuser.prototype.increment=function(){
    this.score++;
}

createuser.prototype.printme=function(){
 console.log(`score is ${this.score}`); // jis ne bhi call kiya uske liye jis
}

const chai =new createuser("chai",25)

const tea = new createuser("tea",250)
chai.printme();