// let checkEven = new Promise((resolve, reject) => {
//     let number = 3;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure

// function ak()
// {
//     console.log("end")
// }

// setTimeout(ak, 3000);


// let wada1 = new Promise(function(res, rej){
//     setTimeout(() => {
//         console.log("wada1");
//     }, 5000);
    
//     res("wada 1 resolved");
// });

// let op = wada1.then((obj)=>{
//     console.log(obj)
//     let wada2 = new Promise(function(res ){
//         setTimeout(() => {
//             console.log("wada2");
//         }, 3000);
//         res("wada 2 resolved");
//     });
//     return wada2;
// })

// op.then((val) => console.log(val))

// console.log("end");


// async function demo()
// {
//     return "Hello";
// }

// console.log(demo())

// async function aniru()
// {
//     async function utility() {
//         let a = new Promise((res) => {
//             setTimeout(() => {
//                 res("Hii");
//             }, 2000); // resolves after 4s
//             console.log("ANIRUDDHA");
//         });
    
//         // let fun1 = await a;
//         // console.log(fun1); // Logs "Hii" at 4s

//         // above 2 lines can be written as
//         console.log(await a); // Logs "Hii" at 4s
    
//         let b = new Promise((res) => {
//             setTimeout(() => {
//                 res("Hello");
//             }, 2000); // another 4s
//         });
    
//         let fun2 = await b;
//         console.log(fun2); // Logs "Hello" at 8s

//         return "Utility Complete";
//     }

//     let fun = utility();
//     await fun;
//     console.log(fun);
// }

// aniru()

async function API() {
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let op = await content.json();
    console.log(content.status);
    console.log(content.ok);
    console.log(content.text);
    console.log(op)
}

API();

