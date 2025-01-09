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

{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //    01234567890123456789012345
    //    12345678901234567890123456

    // slice(indexStart)
    // slice(indexStart, indexEnd)


    // console.log(str.slice());
    // console.log(str.substring(0));
    // console.log(str.slice(10));
    //     console.log(str.substring(10));
    // console.log(str.slice(-10)); [ last starts with 1]
    //     console.log(str.substring(-10)); [start with 0 - not alloud]
    // console.log(str.slice(10 , 15));
    // console.log(str.substring(10 , 15));
    // console.log(str.slice(-10 , 10));
    // console.log(str.substring(-10 , 15));
    // console.log(str.slice(-10 , -8));
    // console.log(str.substring(-10 , -1));
    // console.log(str.slice(0 , 0));
    // console.log(str.substring(0 , 0));

}

// String.prototype.split() [ convert string to array]

// syntax : 
// slice(indexStart)
// slice(indexStart, indexEnd)
{
    // let str = "this is nice dog"

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

// {
//     let map = new Map()

//     let map1 = map.set('key-1', 'map-object-1')
//     let map2 = map.set('key-2', 'map-object-2')
//     let map3 = map.set('key-3', 'map-object-3')
//     console.log(map);
//     console.log(map.size);
//     console.log(map1);

//     let map4 = map.get('key-1')
//     let map5 = map.get('key-3')
//     console.log(map5);
// }


// math function 

// 1. math.abs() // always positive value
// {
//     let a= -10
//     console.log(Math.abs(a));   
// }

//  2 math.ceil() // round of value
// {
//     let a= -9.95
//     console.log(Math.ceil(a));    
// }

// 3 Math.cos() && math.sin() // value between -1 to 1
// {  
//     console.log(Math.cos(`${0*3.14/180}`)); 
//     console.log(Math.sin(`${0*3.14/180}`)); 
// }

// 4 Math.floor
// {
//         let a= -9.95
//         console.log(Math.ceil(a));    
//     }

// 5 Math.log()
// {
//     let a = Math.log10(3)
//     console.log(`${a}`);
// }

// 6 min and max function 
// {
//     let array= [10,20,500,40,90]   
//     console.log(Math.min(...array));
//     console.log(Math.max(...array));   
// }

// 7 Math.pow()
// {
//     console.log(Math.pow(3,2));   
// }

// 8 Math.random()
// {
//     console.log(Math.random());  
// }

// 9 Math.round()
// {
//     console.log(Math.round(3.59));   
// }

// 10 Math.sqrt()
// {
//     console.log(Math.sqrt(625));
// }

// 11 Math.trunc()
// {
//     console.log(Math.trunc(3.59));
// }

// date : get method 

// {
//     let today=Date.parse('01 jan 1970 00:00:00')
//         console.log(today);  
//     let box= date.getDate()
//     let box= date.getDay()
//     let box= date.getFullYear()
//     let box= date.getHours()
//     let box= date.getMinutes()
//     let box= date.getMonth()
//     let box= date.getMilliseconds()
//     let box= date.getSeconds()
//     let box= date.getTime()
//     let box= date.getTimezoneOffset()
//     console.log(box);
// }

// Number function 

// {
//     let x = "10"

//     let y = Number(x)

//     console.log(y);

//     console.log(typeof x);
//     console.log(typeof y);
// }

// {
//     console.log(Number.isFinite(0/-1));
//     console.log(Number.isFinite(1/0));
//     console.log(Number.isFinite(0/1));
//     console.log(Number.isFinite(Infinity/1));
//     console.log(Number.isFinite(1/-1));
// }

// {
//     console.log(Number.isInteger(10));
//     console.log(Number.isInteger(10.10)); 
//     console.log(Number.isInteger(Number(true)));
//     console.log(Number.isInteger(false));
// }

// {
//   console.log(Number.isNaN());
//   console.log(Number.isNaN(NaN));
//   console.log(Number.isNaN(0));
// }

// {
//   console.log(Number.isSafeInteger(1/1));
//   console.log(Number.isSafeInteger(12/2));
//   // limit 0-20
// }

// {
//   console.log(Number.parseFloat(10.20));
//   console.log(Number.parseFloat(20.00));
//   console.log(Number.parseInt(50.30));
//   console.log(Number.parseInt(100));
// }

// // Number.prototype.toExponential()

// {
//       let number = 450000

//       let expontial1 = number.toExponential()
//       let expontial2 = number.toExponential(3)
//       let expontial3 = number.toExponential(20)

//       console.log(expontial1);
//       console.log(expontial2);
//       console.log(expontial3);
//   }

//   {
//     let number = 40.42563214

//     let fixed = number.toFixed(0)
//     let fixed1 = number.toFixed(1)
//     let fixed2 = number.toFixed(2)

//     console.log(fixed);
//     console.log(fixed1);
//     console.log(fixed2);
// }

// {
//     let number = 4.4521863251

//     let precision = number.toPrecision(1)
//     let precision1 = number.toPrecision(3)
//     let precision2 = number.toPrecision(50)
//     let precision3 = number.toPrecision(2)

//     console.log(precision);
//     console.log(precision1);
//     console.log(precision2);
//     console.log(precision3);
// }

// {
//     let number = 10.10
//     let string = number.toString()
//     let value = number.valueOf()
//     console.log(number);
//     console.log(string);
//     console.log(value);
// }


// method of array

// Array.prototype.copyWithin()

// let arr = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]
// console.log(arr);
// // console.log(arr.copyWithin(4));
// // console.log(arr.copyWithin(6,3));
// console.log(arr.copyWithin(5,2,3));

// Array.prototype.find() // value doesn't exist give undefined 
// let array = [1, 2, 10, 8, 11]
// let findelement = array.find((element) => element > 5)
// console.log(findelement);


// // Array.prototype.findindex() // value doesn't exist give -1
// let findindex = array.findIndex((element) => element > 5)
// console.log(findindex);

// // Array.prototype.findLast()
// let findlast = array.findLast((element) => element > 5)
// console.log(findlast);

// // Array.prototype.findLastIndex() // value doesn't exist give -1
// let findlastindex = array.findLastIndex((element) => element > 5)
// console.log(findlastindex);

// Array.prototype.join()
// let element = ['java', 'script' , 'js' , 'react']
// console.log(element.join(' , '));

// // Array.prototype.lastIndexOf() // value doesn't exist give -1
// let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo' , 'Tiger'];
// console.log(animals.lastIndexOf('Tiger'));

// // Array.prototype.pop()
// // Array.prototype.push()
//  let nature=['moon','stars','ocean','trees','water']
//  console.log(nature.pop());
//  console.log(nature.pop());
//  console.log(nature.push('mountains'));
//  console.log(nature);

// Array.prototype.reverse()
// let nature = ['moon', 'stars', 'ocean', 'trees', 'water']
// console.log(nature);
// let reversefun = nature.reverse()
// console.log(`reverse: ${reversefun}`);

// Array.prototype.shift()
// let nature = ['moon', 'stars', 'ocean', 'trees', 'water']
// let shiftfun=nature.shift()
// console.log(shiftfun);
// console.log(nature);

// Array.prototype.unshift()
// let nature = ['moon', 'stars', 'ocean', 'trees', 'water']
// let unshiftfun=nature.unshift('sunset','sunrise')
// console.log(unshiftfun);
// console.log(nature);

// const pageperview = 4
// for(let i=0;i<=16;i++){
//     let firstindex= pageperview*i
//     let lastindex=firstindex+4
//     console.log(`firstindex: ${firstindex}`);
//     console.log(`lastindex: ${lastindex}`);
// }

{

    let products =  [
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            category: "beauty",
            price: 9.99,
            discountPercentage: 7.17,
            rating: 4.94,
            stock: 5,
      tags: [
          "beauty",
          "mascara"
        ],
        brand: "Essence",
        sku: "RCH45Q1A",
        weight: 2,
        dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
        {
            rating: 2,
            comment: "Very unhappy with my purchase!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "John Doe",
            reviewerEmail: "john.doe@x.dummyjson.com"
        },
        {
            rating: 2,
            comment: "Not as described!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Nolan Gonzalez",
            reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
        },
        {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Scarlett Wright",
            reviewerEmail: "scarlett.wright@x.dummyjson.com"
        }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ],
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        price: 19.99,
        discountPercentage: 5.5,
        rating: 3.28,
        stock: 44,
        tags: [
            "beauty",
            "eyeshadow"
        ],
        brand: "Glamour Beauty",
        sku: "MVCFH27F",
        weight: 3,
        dimensions: {
            width: 12.42,
            height: 8.63,
            depth: 29.13
        },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Very satisfied!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Liam Garcia",
                reviewerEmail: "liam.garcia@x.dummyjson.com"
            },
            {
                rating: 1,
                comment: "Very disappointed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Nora Russell",
                reviewerEmail: "nora.russell@x.dummyjson.com"
            },
            {
                rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com"
        }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 32,
    meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
},
{
    id: 3,
    title: "Powder Canister",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    tags: [
        "beauty",
        "face powder"
    ],
    brand: "Velvet Touch",
    sku: "9EN8WLT2",
    weight: 8,
    dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07
    },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
        {
            rating: 5,
            comment: "Very happy with my purchase!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Ethan Thompson",
            reviewerEmail: "ethan.thompson@x.dummyjson.com"
        },
        {
            rating: 4,
            comment: "Great value for money!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com"
        },
        {
            rating: 5,
            comment: "Highly impressed!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Hazel Gardner",
            reviewerEmail: "hazel.gardner@x.dummyjson.com"
        }
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 25,
    meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
        id: 4,
        title: "Red Lipstick",
        description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        category: "beauty",
        price: 12.99,
        discountPercentage: 19.03,
        rating: 2.51,
        stock: 68,
        tags: [
            "beauty",
            "lipstick"
        ],
        brand: "Chic Cosmetics",
        sku: "O5IF1NTA",
        weight: 5,
        dimensions: {
            width: 14.37,
            height: 13.94,
            depth: 14.6
        },
        warrantyInformation: "Lifetime warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Great product!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Leo Rivera",
                reviewerEmail: "leo.rivera@x.dummyjson.com"
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com"
        },
        {
            rating: 5,
            comment: "Very pleased!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Carter Rivera",
            reviewerEmail: "carter.rivera@x.dummyjson.com"
        }
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 6,
    meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "9444582199406",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
},
{
    id: 5,
    title: "Red Nail Polish",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    stock: 71,
    tags: [
        "beauty",
        "nail polish"
    ],
    brand: "Nail Couture",
    sku: "YUIIIP4W",
    weight: 9,
    dimensions: {
        width: 8.11,
        height: 10.89,
        depth: 29.06
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 5,
              comment: "Very pleased!",
              date: "2024-05-23T08:56:21.619Z",
              reviewerName: "Leo Rivera",
              reviewerEmail: "leo.rivera@x.dummyjson.com"
            },
            {
                rating: 5,
                comment: "Great product!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Evan Reed",
                reviewerEmail: "evan.reed@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Highly recommended!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Evelyn Sanchez",
                reviewerEmail: "evelyn.sanchez@x.dummyjson.com"
            }
        ],
        returnPolicy: "No return policy",
        minimumOrderQuantity: 46,
        meta: {
            createdAt: "2024-05-23T08:56:21.619Z",
            updatedAt: "2024-05-23T08:56:21.619Z",
            barcode: "3212847902461",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
        id: 6,
        title: "Calvin Klein CK One",
      description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      category: "fragrances",
      price: 49.99,
      discountPercentage: 0.32,
      rating: 4.85,
      stock: 17,
      tags: [
        "fragrances",
        "perfumes"
    ],
    brand: "Calvin Klein",
    sku: "DZM2JQZE",
    weight: 5,
    dimensions: {
        width: 11.53,
        height: 14.44,
        depth: 6.81
    },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
        {
            rating: 5,
            comment: "Great value for money!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Sophia Brown",
            reviewerEmail: "sophia.brown@x.dummyjson.com"
        },
        {
            rating: 3,
            comment: "Very disappointed!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Madison Collins",
            reviewerEmail: "madison.collins@x.dummyjson.com"
        },
        {
            rating: 1,
            comment: "Poor quality!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Maya Reed",
            reviewerEmail: "maya.reed@x.dummyjson.com"
        }
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 20,
    meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "2210136215089",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
      images: [
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
        id: 7,
        title: "Chanel Coco Noir Eau De",
        description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        category: "fragrances",
      price: 129.99,
      discountPercentage: 18.64,
      rating: 2.76,
      stock: 41,
      tags: [
          "fragrances",
          "perfumes"
        ],
        brand: "Chanel",
        sku: "K71HBCGS",
        weight: 4,
        dimensions: {
            width: 21.27,
            height: 28,
            depth: 11.89
        },
        warrantyInformation: "1 week warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 1,
                comment: "Disappointing product!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Lincoln Kelly",
                reviewerEmail: "lincoln.kelly@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Great product!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Lincoln Kelly",
                reviewerEmail: "lincoln.kelly@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Excellent quality!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Lucas Allen",
                reviewerEmail: "lucas.allen@x.dummyjson.com"
            }
        ],
        returnPolicy: "60 days return policy",
        minimumOrderQuantity: 5,
        meta: {
            createdAt: "2024-05-23T08:56:21.619Z",
            updatedAt: "2024-05-23T08:56:21.619Z",
            barcode: "1435582999795",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
},
{
    id: 8,
    title: "Dior J'adore",
    description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    discountPercentage: 17.44,
    rating: 3.31,
    stock: 91,
    tags: [
        "fragrances",
        "perfumes"
    ],
    brand: "Dior",
    sku: "E70NB03B",
    weight: 10,
    dimensions: {
        width: 21.51,
        height: 7,
        depth: 26.51
    },
    warrantyInformation: "Lifetime warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
        {
            rating: 5,
            comment: "Fast shipping!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Zoe Nicholson",
            reviewerEmail: "zoe.nicholson@x.dummyjson.com"
        },
        {
            rating: 4,
            comment: "Excellent quality!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Addison Wright",
          reviewerEmail: "addison.wright@x.dummyjson.com"
        },
        {
            rating: 4,
            comment: "Would buy again!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Clara Berry",
            reviewerEmail: "clara.berry@x.dummyjson.com"
        }
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 8,
    meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "0887083199279",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
},
{
    id: 9,
    title: "Dolce Shine Eau de",
    description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
    price: 69.99,
    discountPercentage: 11.47,
    rating: 2.68,
    stock: 3,
    tags: [
        "fragrances",
        "perfumes"
    ],
    brand: "Dolce & Gabbana",
    sku: "1NBFK980",
    weight: 5,
    dimensions: {
        width: 17,
        height: 24.57,
        depth: 13.3
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "Low Stock",
      reviews: [
          {
              rating: 4,
              comment: "Very satisfied!",
              date: "2024-05-23T08:56:21.619Z",
              reviewerName: "Xavier Wright",
              reviewerEmail: "xavier.wright@x.dummyjson.com"
            },
            {
                rating: 1,
                comment: "Poor quality!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Mila Hernandez",
                reviewerEmail: "mila.hernandez@x.dummyjson.com"
            },
            {
                rating: 5,
                comment: "Very happy with my purchase!",
                date: "2024-05-23T08:56:21.619Z",
                reviewerName: "Sophia Brown",
                reviewerEmail: "sophia.brown@x.dummyjson.com"
            }
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 9,
        meta: {
            createdAt: "2024-05-23T08:56:21.619Z",
            updatedAt: "2024-05-23T08:56:21.619Z",
            barcode: "1939383392674",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
            "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
        ],
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
    },
    {
        id: 10,
        title: "Gucci Bloom Eau de",
        description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        category: "fragrances",
        price: 79.99,
        discountPercentage: 8.9,
        rating: 2.69,
        stock: 93,
        tags: [
            "fragrances",
            "perfumes"
        ],
        brand: "Gucci",
        sku: "FFKZ6HOF",
        weight: 10,
        dimensions: {
            width: 22.28,
            height: 17.81,
            depth: 27.18
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
          {
              rating: 5,
              comment: "Great value for money!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Aria Parker",
              reviewerEmail: "aria.parker@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Excellent quality!",
                date: "2024-05-23T08:56:21.620Z",
                reviewerName: "Natalie Harris",
                reviewerEmail: "natalie.harris@x.dummyjson.com"
            },
            {
                rating: 4,
                comment: "Fast shipping!",
                date: "2024-05-23T08:56:21.620Z",
                reviewerName: "Ava Harris",
                reviewerEmail: "ava.harris@x.dummyjson.com"
            }
        ],
        returnPolicy: "No return policy",
        minimumOrderQuantity: 10,
        meta: {
            createdAt: "2024-05-23T08:56:21.620Z",
            updatedAt: "2024-05-23T08:56:21.620Z",
            barcode: "8232190382069",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png"
        },
        images: [
            "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
},

]
let filterItem = products.filter((item) => item.price <= 50)
let filterItem1 = products.filter((item) => item.price > 50)

console.log(filterItem);
console.log(filterItem1);
}


