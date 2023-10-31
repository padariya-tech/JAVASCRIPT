// immediately invoked function expressions (IIFE)

// function which excutes immediatly
// global declaration k polution ko hatane k liye iife use hota he

(function chai(){
    console.log('DB CONNECTED');
})(); // add ; must to end scope of this function
// second bracet is for execution
((name)=>{
    console.log(`DB CONNECTED ${name}`);
})('nij');