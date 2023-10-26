// const promiseOne = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log("Async task 1");
//         resolve()
//     },1000)
// })
// promiseOne .then(function(){
//     console.log("Async task 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"nijpadariya@gmail.com"}) // pass as object
//     },1000)
// })

// // promiseThree.then(function(user){
// //     console.log(user);
// // })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error)
//         {
//             resolve({username:"Chai",email:"nijpadariya@gmail.com"})
//         }
//         else
//         {
//             reject("ERROR: Something Went Wrong");
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     return user.username;
// }).then((username)=>{
// console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log('promise either reject or resolved'))


// const proniseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error)
//         {
//             resolve({username:"Chai",password:"1234"})
//         }
//         else
//         {
//             reject("ERROR: JS Went Wrong");
//         }
//     },1000)
// })
// // thodi der wait krta he kam hone ka ag r ho gya tabhi aage badhta he varna error de deta he
// // catch handle is problem
// // async function consumepromisefive(){
// //     try {
// //         const response = await proniseFive
// //         console.log(response);
// //     } catch (error) {
// //         console.log(error);
        
// //     }
// // }
// consumepromisefive()

// async function githubdetails(){
//     try {
//        const responce = await fetch('https://api.github.com/users/hiteshchoudhary');
//        console.log(await responce.json());
//     } catch (error) {
//         console.log(error)
//     }
// }
// githubdetails()


fetch('https://api.github.com/users/hiteshchoudhary').then((responce)=>{
    return responce.json()
})
.then((data)=>{console.log(data);})
.catch((error)=>console.log(error))
































