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

/* Javascript Template Literals */

{
    // let str1 = 'This is Javascript'
    // let str2 = "This is Javascript"
    // let str3 = `This is Javascript`

    // console.log(str1);
    // console.log(str2);
    // console.log(str3);

    // let str4 = 'This is "Javascript"'
    // let str5 = "This is `Javascript`"
    // let str6 = `This is "Javascript"`

    // console.log(str4);
    // console.log(str5);
    // console.log(str6);

    // let names = 'SkillQode'

    // let str7 = `This is ${names} institute`

    // console.log(str7);
}

// String Object

{

    // let names = 'SkillQode'

    // let str = new String(`This is ${names} String Object`)

    // console.log(str);

}

// String Operator 

{
    // let str = 'Javascript' + 'Lecture' // concatinating

    // console.log(str);

    // let str1 = 'Javascript' - 'Lecture'

    // console.log(str1);

    // let math = 100 + 100 + 'Javascript' + 100 + 100 - 100 - 100

    // console.log(math);

    // let math1 = 'Javascript' + 100 + 200 + 100 - 100 * 100

    // console.log(math1);

    // let math2 = 'Javascript' + 100 + ((100 - 100) - 100) - 100

    // console.log(math2);

    // let math3 = (100 - 100 + 'Javascript' + 100 + 200 + 100) + 100 - 100

    // console.log(math3);

    // let math4 = "100"  + 100 - 100 - 100

    // console.log(math4);

}

/* TypesOf Operator */

/*

1. Arithmetic
2. Assigement
3. Logical
4. Comparision
5. Ternary
6. typeOf
7. instanceOf
8. Bitwise 
9. ++ , -- [ unary operators ]

*/

// Arithmetic operators
// {
//     let x = 2
//     let y = 4

//     console.log(x+y);  //60
//     console.log(x-y);  //-20
//     console.log(x*y);  //800
//     console.log(x/y);  //0.5
//     console.log(x%y);  //20
//     console.log(x**y); //16
// }

// // Assigement operators
// {
//     let x = 10
//     let y = 7
//     console.log(x+=y); 
//     console.log(x-=y);  
//     console.log(x*=y);  
//     console.log(x/=y);  
//     console.log(x%=y);  
//     console.log(x**=y);
// }

// //comperision operators
// {
//     let x = 200
//     let y = 200
//     console.log(x == y);
//     console.log(x != y);
//     console.log(x === y);
//     console.log(x !== y);
//     console.log(x < y);
//     console.log( x > y);
//     console.log(x <= y);
//     console.log(x >= y);
// }

// // Logical Operator
// {
//     let x = false
//     let y = true
//     let z = true
//     console.log(x && y);
//     console.log(x && y && z);
//     console.log(x || y || z);
//     console.log(!(x || y) && !(z || x) && !(x || z));
// }

// //ternary operators

// //statement ? code 1 : code 2
// {

//     let age = 15  
//     age >= 18 ? console.log("able for voting") : console.log(" not able for voting  ");
// }

/* Javascript Statements */

/*

if ....... statement
if..else...statement
if...else ...if statement
neated if.....else....statement
switch case statement

*/

// {
//     let storage = false

//     if(storage === true){
//         console.log('Production has been started!!!!!');
//     }
//     // return console.log('Storage is empty!!'); // Illegal return statement
// }

// {
//     let age = 17

//     if(age >= 18){
//         console.log('You are eligible For vote!!');
//     }else{
//         console.log('You are not eligible For vote!!');
//     }
// }

// {
//     let age = 18
//     let card = false

//     if(age >= 18 && card === true){
//         console.log('You are eligible For vote!!');
//     }else{
//         console.log('You are not eligible For vote!!');
//     }
// }

// {
//   let age = 17;
//   let card = true;

//   if (age >= 18) {
//     if (card === true) {
//       console.log("You are eligible For vote!!");
//     } else {
//       console.log("You are not eligible For vote!!");
//     }
//   } else {
//     console.log("You are not eligible For vote!!");
//   }
// }

// {
//     let book = 'Chemistry'

//     if(book === 'Chemistry'){
//         console.log('chemistry book is available');
//     }else if(book === "Physics"){
//         console.log('physics book is available');
//     }else if(book === "English"){
//         console.log('english book is available');
//     }else if(book === "Drawing"){
//         console.log('drawing book is available');
//     }else if(book === "Maths"){
//         console.log('maths book is available');
//     }else{
//         console.log('books is not available');
//     }
// }

// {
//   let book = "Maths";

//   switch (book) {
//     case "Chemistry":
//       console.log("Chemistry Book");
//       break;

//     case "English":
//       console.log("English Book");
//       break;

//     case "Physics":
//       console.log("Physics Book");
//       break;

//     case "Maths":
//       console.log("Maths Book");
//       break;

//     case "Sanskrit":
//       console.log("Sanskrit Book");
//       break;
//     default:
//       console.log("book not available");
//   }
// }

// Javascript String Method 

// String.prototype.at()

// at(index) [ + and - both allowed]

{
    // let str = "This is Javascript String Method!"

    // console.log(str.at(-12));
    // console.log(str.at(12));

}

// String.prototype.CharAt()

// charAt(index) [only + number allowed]


// {
// let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

// console.log(str.charAt(1));
// }

// String.prototype.charCodeAt()

// charCodeAt(index) [returns ascii value of index number]

// https://www.toptal.com/designers/htmlarrows/letters/


// {
// let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

// console.log(str.charCodeAt(10));
// }


// String.prototype.concat()

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

// {
// let x = "Hello"
// let y = "Javascript"

// console.log(y.concat("\t"+x));

// }

// String.prototype.includes()

// includes(searchString) [answer is true or false]
// includes(searchString, position)

// {
// let str = "Dog is very cute and cat is lovable"

// console.log(str.includes('cute'));
// console.log(str.includes('cute' , 10));

// }


// String.prototype.indexOf()

// indexOf(searchString)
// indexOf(searchString, position)

// {
// let str = "Dog is very cute and cat is lovable"

// console.log(str.indexOf("v" , 20));

// }

// String.prototype.lastIndexOf()

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)


// {
//     let str = "Dog is very cute and cat is lovable"

//     console.log(str.lastIndexOf("v" , 20)); 
// }

// String.prototype.padStart() /  padEnd() 

// padStart(targetLength) [ oly string is allowed]
// padStart(targetLength, padString)
// padEnd(targetLength)
// padEnd(targetLength, padString)

// {
// let x = 'hello'

// console.log(x.padStart(20)); [space in start]
// console.log(x.padEnd(15 , 'h')); [add in last]

//     // 03:12

// let x = '3'

// console.log(x.padStart(2 , '0'));

//     console.log(x.repeat(10));
// }


// Slice and Substring

// {
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                01234567890123456789012345
//                12345678901234567890123456

//     // slice(indexStart)
//     // slice(indexStart, indexEnd)


//     console.log(str.slice(0));
//     console.log(str.substring(0));
//     console.log(str.slice(10));
//     console.log(str.substring(10));
// console.log(str.slice(-10)); [ last starts with 1]
//     console.log(str.substring(-10)); [start with 0 - not alloud]
// console.log(str.slice(10 , 15));
//     console.log(str.substring(10 , 15));
//     console.log(str.slice(-10 , 10));
//     console.log(str.substring(-10 , 15));
// console.log(str.slice(-10 , -8));
// console.log(str.substring(-10 , -1));
// console.log(str.slice(0 , 0));
// console.log(str.substring(0 , 0)); [empty]

// }

// String.prototype.split() [ convert string to array]

// syntax : 
// slice(indexStart)
// slice(indexStart, indexEnd)
{
    // let str = "i am srushti gangani"

    // console.log(str.slice(5));
    // console.log(str.slice(-4));
    // console.log(str.slice(5 , 14)); [doesn't print index end char]
    // console.log(str.slice(5 , -10)); [print srush]
}

// String.prototype.startsWith()

// syntax:
// startsWith(searchString)
// startsWith(searchString, position)
//  [gives output in boolean value (true or false)]

{
    // let str = "java script or java"

    // console.log(str.startsWith('java'));
    // console.log(str.startsWith('java' , 1)); [false]

}

// String.prototype.toLowerCase()

// syntax: 
// toLowerCase()

// {
//     let str = "THE MAN AND WOMEN"

//     console.log(str.toLowerCase());

// }

// String.prototype.toString()

// syntax:
// toString()

{
    // let str = new String ("tooo many")
    // console.log(str); [string('tooo many')]
    // console.log(str.toString()); [tooo many]

}

// String.prototype.toUpperCase()

// syntax:
// toUpperCase()

// {
//     let str = "the man and women"

//     console.log(str.toUpperCase());

// }

// String.prototype.trim()

// syntax:
// trim()  [remove spaces]

/* javascript string match and matchAll Method [output in array]*/

// match(regexp)  [g-global i-ignore case]
// matchAll(regex) [only gi and g allowed]

// {
//     let str= "Dog is sweet and Cat is very cute but dog and cats both are scary"

//     let regex = /[Dog]/gi

//     // let demo = str.match(regex)
//     // let demo = [...str.matchAll(regex)]

//     console.log(demo);

// }

// replace(pattern, replacement)

// {
//     let str = "Dog is sweet and Cat is very cute but dog and cats both are scary this is dog his name is candy and this is cat her name is pummy . cat are blessed with beautiful scary eyes that kill all dogs  "

//     // let regex = /Dog/g

//     // console.log(str.replace(/Dog/gi,'fox'));
//     console.log(str.replace(/dog/gi,'fox'));

// }

// object 

// {
//     let object = {
//          name:'SkillQode'
//     }

//     let obj1 = object.name = "Loops"
//     let obj2 = object.skill = "reactJS"

//     console.log(object.name);
//     console.log(object.skill);

//     console.log(object);

//     console.log(obj1);

// }

// map object in javascript

{
    let map = new Map()
    console.log(map);
    
}

