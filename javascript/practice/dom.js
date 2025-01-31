// DOM object

// function styles(){
//     let dom = document.querySelector('div')
//     dom.setAttribute('id' , 'firstDiv')
//     document.getElementById('firstDiv').style.backgroundColor = "red"
// }

// {
//     let dom = document.getElementById('firstDiv').innerHTML

//     console.log(dom);

//     let dom1 = document.getElementById('firstDiv').textContent

//     console.log(dom1);

//     let  dom2 = document.getElementById('firstDiv').innerText

//     console.log(dom2);
// }

/* document.getElementByTagName */

// let dom = document.getElementsByTagName('pre')[0]
// dom.style.backgroundColor = "blue"
// dom.style.color = "white"
// dom.style.height = "100px"
// console.log(dom);

/*  document.getElementByName */
// function focusinput(){
//     let dom = document.getElementsByName('focustext')[0]
//     console.log(dom);
//          dom.focus()
// }
// function blurinput(){
//     let dom = document.getElementsByName('focustext')[0]
//     console.log(dom);
//          dom.blur()
// }



// Promise
// {
//     let promise = new Promise(function (resolve, reject) {})  
// }

{
    let clean = false
    let krisha = new Promise(function (resolve, reject) {
        if (clean === true) {
            resolve('krisha clean the room !!!!')
        } else {
            reject('krisha dont clean the room !!!!')
        }
    })
    krisha.then((result) => {
        console.log(result);
    })
        .then(() => {
            console.log("got a chocolate...!! ");
        })
        .then(() => {
            console.log("krisha is so happy !!!");
        })
        .catch((error) => {
            console.log(error);
            console.log("krisha go for laundry..!!"); 
        })
        .finally(() => {
            console.log("mamma is happy !!");
        })
}