let myname="nij"



// console.log(myname.truelength);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){

        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.printname=function(){

    console.log(`this function is present in all object`);}

Array.prototype.print=function(){

        console.log(`this function  present in all object`);}
myHeros.printname()
myHeros.print()
// heroPower.print()


const teacher={
    makevideo:true
}
const teachingSupport={
    isAvailable:false
}

const TASupport={
    makasignment:'JS Assignment',
    fullTime:true
}












