class user{
    constructor(username){
        this.username=username
    }

    logMe()
    {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password; 
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const chai = new Teacher("nij","nbp@gmail.com","1234")
chai.addCourse();

console.log(chai instanceof Teacher);
console.log(chai instanceof user);