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
{
    let x = 2
    let y = 4
    
    console.log(x+y);  //60
    console.log(x-y);  //-20
    console.log(x*y);  //800
    console.log(x/y);  //0.5
    console.log(x%y);  //20
    console.log(x**y); //16
}

// Assigement operators
{
    let x = 10
    let y = 7
    console.log(x+=y); 
    console.log(x-=y);  
    console.log(x*=y);  
    console.log(x/=y);  
    console.log(x%=y);  
    console.log(x**=y);
}

//comperision operators
{
    let x = 200
    let y = 200
    console.log(x == y);
    console.log(x != y);
    console.log(x === y);
    console.log(x !== y);
    console.log(x < y);
    console.log( x > y);
    console.log(x <= y);
    console.log(x >= y);
}

// Logical Operator
{
    let x = false
    let y = true
    let z = true
    console.log(x && y);
    console.log(x && y && z);
    console.log(x || y || z);
    console.log(!(x || y) && !(z || x) && !(x || z));
}

//ternary operators

//statement ? code 1 : code 2
{

    let age = 15  
    age >= 18 ? console.log("able for voting") : console.log(" not able for voting  ");
}

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

{
    let book = 'Chemistry'

    if(book === 'Chemistry'){
        console.log('chemistry book is available');
    }else if(book === "Physics"){
        console.log('physics book is available');
    }else if(book === "English"){
        console.log('english book is available');
    }else if(book === "Drawing"){
        console.log('drawing book is available');
    }else if(book === "Maths"){
        console.log('maths book is available');
    }else{
        console.log('books is not available');
    }
}

{
  let book = "Maths";

  switch (book) {
    case "Chemistry":
      console.log("Chemistry Book");
      break;

    case "English":
      console.log("English Book");
      break;

    case "Physics":
      console.log("Physics Book");
      break;

    case "Maths":
      console.log("Maths Book");
      break;

    case "Sanskrit":
      console.log("Sanskrit Book");
      break;
    default:
      console.log("book not available");
  }
}



