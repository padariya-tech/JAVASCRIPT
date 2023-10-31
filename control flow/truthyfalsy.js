// falsy value

// false,0,-0,BigInt , "",0,null,undefined,NaN

// truthy value
// "0",'false'," ",[],{},function(){}

// nullish coalescing operator (??): null undefined 

let val1;
// val1=5??10;
// console.log(val1); //o/p=5
// val1=null ?? 10;
// console.log(val1); o/p will be 10

// val1=undefined ?? 10; o/p will be 10
// // console.log(val1);
// val1=null ?? 10??20 o/p will be 10