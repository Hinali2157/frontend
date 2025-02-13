
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
// {
//     let number = 12
//     let isPrime = true
//     if(number === 1 ) {
//         console.log("1 is neither prime nor divisible number.");
//     }
//     else if (number > 1) {
//         for (let i=2 ; i <= number/2 ; i++ ) {
//             if (number % i == 0 ) {
//                 isPrime = false;
//                 break;
//                 }
//         }
//         if (isPrime) {
//                 console.log(`${number} is a prime number`);
//         } else {
//             console.log(`${number} is a not prime number`);
//         }
//     }
//     else {
//         console.log("The number is not a prime number.");
//     }
// }

// 14 JavaScript Program to Print All Prime Numbers in an Interval
// {
//          let number = 12
//          let isPrime = true
//          if(number === 1 ) {
//              console.log("1 is neither prime nor divisible number.");
//          }
//          else if (number > 1) {
//              for (let i=2 ; i <= number/2 ; i++ ) {
//                  if (number % i == 0 ) {
//                      isPrime = false;
//                      break;
//                      }
//              }
//              if (isPrime) {
//                      console.log(`${number} is a prime number`);
//              } else {
//                  console.log(`${number} is a not prime number`);
//              }
//          }
//          else {
//              console.log("The number is not a prime number.");
//          }
//      }

// 15 JavaScript Program to Find the Factorial of a Number
// function Factorial(value) {
//     if (value == 0) {
//    return 1
//     }
//     else {
//         let ans= value * Factorial(value - 1)
//         console.log(`${ans}`);
//         return ans
//     }
// }
//  Factorial(5)

// 16 JavaScript Program to Display the Multiplication Table
// {
//     let h = 51
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${h} * ${i} = ${h*i}`);
//     }
// }

// 17 JavaScript Program to Print the Fibonacci Sequence
//{
// let num1 = 0
// let num2 = 1
// let next
// for (let i = 1; i <= 10; i++) {
//     console.log(num1);
//     next = num1 + num2
//     num1 = num2
//     num2 = next
// }
//}

// 18.
// {
//    let num = 216
//     let sum = 0
//     let temp = num

//     while (temp > 0) {
//         let digit = temp % 10
//         sum += digit * digit * digit
//         temp = Math.floor(temp / 10)
//     }
//     if (sum === num) {
//     console.log(` Armstrong number.`);
// } else {
//     console.log(` not Armstrong number.`);
// }
// }

// 19.javascript program to find armstrong number in an interval
// function isarmstrong(number){

//     // let number = 153
//     let sum = 0
//     let temp = number
//     let lengthofnum = number.toString().length
//     // console.log(lengthofnum);

//     while(temp>0){
//         let digit = temp % 10
//         sum += Math.pow(digit , lengthofnum);
//         temp = Math.floor(temp/10)
//     }
//     return sum === number;
// }
// function findarmstrongnum(start,end){
// const result = []
// for(let i = start;i<=end ; i++){
//     if (isarmstrong(i)){
//         result.push(i)
//     }
// }
// return result
// }
// console.log(findarmstrongnum(100,200));

// 20.javaScript Program to Make a Simple Calculator
// function Calculator(number1,number2,calc){
//     switch(calc){
//         case '+':
//             return number1 + number2
//         case '-':
//             return number1-number2
//         case '*':
//             return number1*number2
//         case '/':
//             if(number2!==0){
//                 return number1/number2
//             }else{
//                 return "zero is not dividable" 
//             }
//             default:
//                 return "invalid operator"
//     }
// }
// const number1 = prompt("enter the first number:")
// const number2 = prompt("enter the second number:")
// const calc = prompt("enter the operator : ")

// const result = Calculator(number1,number2,calc)
// console.log(`result: ${result}`); 

// 21)JavaScript Program to Find the Sum of Natural Numbers
// let n = 10
// if (n > 0) {
//     const sum = (n * (n + 1) / 2)
//     console.log(`The sum of the first ${n} natural numbers is ${sum}`);
// } else {
//     console.log("Please enter a valid number.");
// }

// 22 JavaScript Program to Check if the Numbers Have Same Last Digit
// const number1 = 158
// const number2 = 244

// let lastdigit1 = number1 % 10
// let lastdigit2 = number2 % 10   

// if(lastdigit1 === lastdigit2){
//  console.log(`${number1} and ${number2} both have same last digit`);
// }else{
//     console.log(`${number1} and ${number2} both have not same last digit`);
// }

// 24)JavaScript Program to Find LCM
// function findgcd(num1, num2) {
//     num1 = Math.abs(num1)
//     num2 = Math.abs(num2)

//     while (num2 !== 0) {
//         const temp = num2
//         num2 = num1 % num2
//         num1 = temp
//     }
//     return num1
// }

// function findlcm(num1, num2) {
//     const gcd = findgcd(num1, num2)
//     const lcm = (Math.abs(num1 * num2)) / gcd
//     return lcm
// }

// const a = 15;
// const b = 20;
// const lcm = findlcm(a, b);
// console.log(`The LCM of ${a} and ${b} is ${lcm}`);

// 25)JavaScript Program to Find the Factors of a Number
// function findfactor(num) {
//     const factor = []
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             factor.push(i);
//         }
//     }
//     return factor
// }
// const number = 36;
// const factors = findfactor(number);
// console.log(`The factors of ${number} are: ${factors.join(' , ')}`);

// 27 JavaScript Program to Guess a Random Number
// function guessnum() {
//     let random = Math.floor(Math.random() * 10) + 1
//     // console.log(random);

//     let number = parseInt(prompt('Guess a number from 1 to 10:'))
//     while (number != random) {
//         number = parseInt(prompt('Guess a number from 1 to 10:'))
//     }
//     if (number == random) {
//         console.log('you guess correct number');
//     } else {
//         console.log('oops number not correct!!!');
//     }
// }
// guessnum()

// 29 JavaScript Program to Display Fibonacci Sequence Using Recursion
// function fibonacci(n) {
//     if (n <= 1) {
//         return n
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// function fibonaccisequence(terms) {
//     if (terms <= 0) {
//         console.log('please enter a positive integer');
//         return
//     }
//     console.log('fibonacci series:');
//     for (let i = 0; i < terms; i++) {
//         console.log(fibonacci(i));
//     }
// }

// let terms = 10
// fibonaccisequence(terms)

// 30)JavaScript Program to Find Factorial of Number Using Recursion
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// let number = 5
// if (number < 0) {
//     console.log("Factorial is not defined for negative numbers.");
// } else {
//     console.log(`The factorial of ${number} is ${factorial(number)}.`);
// }


// 32 JavaScript Program to Find ASCII Value of Character
// let char = 'C'
//     console.log(char.charCodeAt(0));

// 33)JavaScript Program to Check Whether a String is Palindrome or Not
{

}
// 34)JavaScript Program to Sort Words in Alphabetical Order
// {
//     let array = [ 'see' , 'tree' , 'sky' ,'lily' , 'apple' ,'moon']
//    let sorting =  array.sort()
//     console.log(sorting); 
// }

// 35)JavaScript Program to Replace Characters of a String
// {
//     let string = "hii java-script"
//     console.log(string);   
//     let Replacestring = string.replace("hii" , "hello")
//     console.log(Replacestring);

// }
// 36)JavaScript Program to Reverse a String
// {
//     let string = "hello javascript"
//     console.log(string);
//    let array = string.split("").reverse().join("")
//    console.log(array);  
// }

// 37)JavaScript Program to Create Objects in Different Ways
// {
//     // 1. object creat with literal
// //    let object = {
// //     "name1" : "hinali",
// //     "age" : "17",
// //     "email" : "hinali@gmail.com"
// //    }
// //    console.log(object);

//   // 2. new object method
// //   let object = new Object()
// //   object.name = "hinali"
// //   object.age ="19"
// //   console.log(object);

//      // 3. create object method
// //   const object = { name1 : "hinali"}
// //   const Object1 = Object.create(object)
// //   Object1.age = "19"
// //   Object1.name = "dhruvi"
// //   console.log(Object1)
// }

// 38)JavaScript Program to Check the Number of Occurrences of a Character in
// the String

// 39)JavaScript Program to Convert the First Letter of a String into UpperCase
// {
//     let string = "sily girl"
//     let upperCase = string.charAt(0).toUpperCase()+ string.slice(1)
//     console.log(upperCase); 
// }

// 40)JavaScript Program to Count the Number of Vowels in a String
// {
//     function countvowel(string) {
//         const vowel = "aeiouAEIOU"
//         let alfabet = 0
//         for (let char of string) {
//             if (vowel.includes(char)) {
//                 alfabet++;
//             }
//         }
//         return alfabet;
//     }
//     let str = " hello apple"
//     console.log(str);  
//     console.log(countvowel(str));
// }

// 41)JavaScript Program to Remove a Property from an Object
// {
//     let obj = {
//         name1 : "hinali" , 
//         age : "19",
//         email : "hinali@gmail.com",
//         gender : "female"
//     }
//     console.log(obj);
//     delete obj.email
//     console.log(obj);
// }

// 42)JavaScript Program to Check Whether a String Starts and Ends With Certain
// Characters
{
}

// 43)JavaScript Program to Check if a Key Exists in an Object
// {
//     let obj = {
//         name1: "hinali",
//         age: "19",
//         email: "hinali@gmail.com",
//         gender: "female"
//     }
//     console.log(obj);
//     function keyExistsInObject(key, object) {
//         return key in object;
//     }
//     console.log(keyExistsInObject('name1', obj));
//     console.log(keyExistsInObject('address', obj));
// }

// 44)JavaScript Program to Clone a JS Object
// {
//     let obj = {
//                  name1: "hinali",
//                  age: "19",
//                  email: "hinali@gmail.com",
//                  gender: "female"
//              }
//              let clone = {...obj}
//              console.log(clone);
// }

// 45)JavaScript Program to Loop Through an Object
// {
//     let obj = {
//                  name1: "hinali",
//                  age: "19",
//                  email: "hinali@gmail.com",
//                  gender: "female"
//              }
//              console.log(obj);
//              for(let key in obj ){
//                 console.log(`${key} => ${obj[key]}`);   
//              }
// }

// 46)JavaScript Program to Merge Property of Two Objects
// {
//     let obj1 = {key1:"moon" , key2 :"star"}
//     let obj2 = {key3:"flowers" , key4 :"tree"}
//    let newobject = Object.assign(obj1 , obj2)
//    console.log(newobject);   
// }

// 47)JavaScript Program to Count the Number of Keys/Properties in an Object
// {
//   let object = {
//     name1 : "hinali",
//     age : "19",
//     passion : "dancer"
//   }
//   console.log(object);
//   let count = 0 
//   for(key in object){
//     ++count
//   }
//   console.log(count);
// }

// 48)JavaScript Program to Add Key/Value Pair to an Object
// {
//   let obj = {
//     name1 : "hinali",
//      age : "19",
//      passion : "dancer"
//   }
//   obj.key = "value"
//   console.log(obj);  
// }

// 49)JavaScript Program to Replace All Occurrences of a String
// {
// let str ="dog is so cute. dog is very dengerous "
// console.log(str.replaceAll (/dog/gi,"fox"));
// }

// 50)JavaScript Program to Create Multiline Strings
// {
// let string = "i am using java script \n" +
//              "i am using nodejs \n" +
//              "i am using reactjs \n"
//              console.log(string);
// }
             
// 51)JavaScript Program to Format Numbers as Currency Strings


// 52)JavaScript Program to Generate Random String
//  {
//   // function random_str(length){
//   //   let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//   //   let result = ""
//   //   for(let i=0;i<length;i++){
//   //     let randomstr = Math.floor(Math.random()*string.length)
//   //     result += string.charAt(randomstr)
//   //   }
//   //   return result 
//   // }
// // let fun = random_str(10)
// // console.log(fun);
// }

// 53)JavaScript Program to Check if a String Starts With Another String


// 54)JavaScript Program to Trim a String
{
  let string = "   hello   "
  console.log(string.trim());
}
// 55)JavaScript Program to Convert Objects to Strings
// 56)JavaScript Program to Check Whether a String Contains a Substring
// 57)JavaScript Program to Compare Two Strings
// 58)JavaScript Program to Encode a String to Base64
// 59)JavaScript Program to Replace all Instances of a Character in a String
// 60)JavaScript Program to Replace All Line Breaks with
