   // using constructor :- singleton

 const info={
    email:"nij@yahoo.com",
    fullname:{
        userfullname:{
            firstname:"nij",
            lastname:"padariya"

        }
    }
 }
//  console.log(info.fullname.userfullname.firstname);\\

const obj1={
    1:"a",2:"b"
}

const obj2={
    3:"a",4:"b"
}

// const obj3=Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


//array of object

const users=[
    {
        id:1,
        email:"nk@ggg.ccc"
    }
]
// console.log(users[0].email);

// console.log(Object.keys(obj3));//output is in form of array
// console.log(Object.values(obj3));//output is in form of array


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}

// const {courseInstructor} = course

// console.log(courseInstructor);

const {courseInstructor:TA}=course //thi is called de-structuring
console.log(TA);

// json look like object without name  and keyand values are in string form
// {
//     "coursename":"js in hindi",
//     "price":"999",
//     "courseInstructor":"hitesh"

// }

 

























