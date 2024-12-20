// ES 5 - variable 
// var keyword [global scope variable] 
 
// var x=10; 
// // var y=20; 
 
// { 
//     console.log(x); 
//     console.log(x+y); 
// } 
 
// var x=20; 
// { 
//     console.log(x); 
//     console.log(x+y); 
// } 
// var y=30; 
 
// ES6 - const,let 
 
// var - [global scope variable] redefine/ redeclare 
// let - [block scope variable] reassigned / not redeclare 
// const -[block scope variable] not reassigned / not redeclared 
 
// let x = 10 
// x=20 
 
// { 
//     x=50 
//     console.log(x); 
// } 
 
// console.log(x); 
 
// const variable 
 
// const name = "java" 
// console.log(name);   (predefine) 
 
// const boolean = "java" 
// console.log(boolean); 
 
// const profile = "srushti" 
// // profile = "srushti" - not reassigned 
// // profile = "riya"   - not redeclared 
 
// { 
//     console.log(profile); 
     
// } 
// console.log(profile); 
 
// javascript hoisting [var / let support hoisting] const not supported 
 
// {var x 
// var y 
// var z 
 
// x=10 
// y=20 
// z=30 
 
 
// console.log(x); 
// console.log(y); 
// console.log(z);     
// } 
 
// { 
//     let x 
// let y 
// let z 
 
// x=10 
// y=20 
// z=30 
 
 
//     console.log(x); 
//     console.log(y); 
//     console.log(z);     
// } 
 
// { 
    // const variable not supported hoisting 
// const x 
// const y 
// const z 
 
// x=10 
// y=20 
// z=30 
 
 
//     console.log(x); 
//     console.log(y); 
//     console.log(z);     
// }