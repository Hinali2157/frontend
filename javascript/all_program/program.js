
// 1
// {
// let word="hello world"
// console.log(`${word}`);
// }

// 2
// {
// let a = 10
// let b = 20
// let add = a + b
// console.log(`ans=${add}`);
// }

// 3.Program to Find the Square Root
// {
// let a=25
// console.log(Math.sqrt(a));
// }

// 4 Program to Calculate the Area of a Triangle
// {
//     let l=10
//     let b=10
//     let area =(l*b)/2
//     console.log(`area:${area}`);
// }

// 5 Program to Swap Two Variable
// {
//     let a = 10
//     let b = 20

//     console.log(`before swiping a: ${a} \n`);
//     console.log(`before swiping b : ${b}`);
//     [a, b] = [b, a]
//     console.log(`after swiping a: ${a} \n`);
//     console.log(`after swiping b: ${b} `);
// }

// 6. Program to Solve Quadratic Equation
// {
//     let a = 1
//     let b = 2
//     let c = 3

//     let D = b * b - (4 * a * c)

//     if (D > 0) {
//         let root_1 = (-b + Math.sqrt(D)) / 2 * a
//         let root_2 = (-b - Math.sqrt(D)) / 2 * a
//         console.log(`root_1: ${root_1}`);
//         console.log(`root_2: ${root_2}`);
//     }else if(D==0){
//         let root=-b/2*a
//         console.log(`root:${root}`);
//     }else{
//         console.log('root is not exist');

//     }
// }

// 7  JavaScript Program to Convert Kilometres to Miles
// {
//     let distance = 1000
//     let miles = 0.621371 * distance
//     console.log(`distance: ${distance} km\nmiles: ${miles}`);
// }

// 8  Javascript Program to Convert Celsius to Fahrenheit
// {
//     let cel = 50
//     let fehrenheit = (9 / 5) * cel + 32
//     console.log(`temperature is : ${fehrenheit}`)
// }

// 9 Javascript Program to Generate a Random Number
// {
//     let number = Math.ceil(Math.random()*100)+1
//     console.log(`random number: ${number}`);   
// }

// 10 Javascript Program to Check if a number is Positive, Negative, or Zero
// {
//     let i = -6
//     if (i > 0) {
//         console.log(`${i} is positive value`);
//     }
//     else if (i < 0) {
//         console.log(`${i} is negetive value`);
//     } else {
//         console.log(`${i} is 0`);
//     }
// }

// 11 Javascript Program to Check if a Number is Odd or Even
// {
//     let number=10
//     if(number%2==0){
//         console.log(`${number} is even`);
//     }else{
//         console.log(`${number} is odd`);
//     }
// }

// 12 JavaScript Program to Find the Largest Among Three Numbers
// {
//     let a = 100
//     let b = 50
//     let c = 30

//     if (a > b && a > c){
//         console.log(`${a} a is largest number`);

//     }else if (b>a && b>c){
//         console.log(`${b} b is largest number`);

//     }else{
//         console.log(`${c} c is largest number`);  
//     }
// }

// 13 JavaScript Program to Check Prime Number
let number = 12
let i = 2
for(i;i<number/2;i++){

    if (6 * i + 1 || 6 * i - 1) {
        console.log('prime');
    } else {
        console.log('not prime');
    }
}