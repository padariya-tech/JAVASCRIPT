class user
{
    constructor(username)
    {
        this.username=username
    }
    logme()
    {
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }


}

const chai = new user("nij")
console.log(chai.createId());
