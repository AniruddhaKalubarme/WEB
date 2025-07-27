// const t1 = performance.now();

// for(let i = 1; i<=100; i++)
// {
//     let newEle = document.createElement('p');
//     newEle.textContent = 'Hello ' + i;
//     document.body.appendChild(newEle);
// }

// const t2 = performance.now();

// console.log(t2-t1);


// // Optimised
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i = 1; i<=100; i++)
// {
//     let newEle = document.createElement('p');
//     newEle.textContent = 'Hello ' + i;
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log(t4-t3);


// // Optimised
// const t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for(let i = 1; i<=100; i++)
// {
//     let newEle = document.createElement('p');
//     newEle.textContent = 'Hello ' + i;
//     fragment.appendChild(newEle);
// }
// document.body.appendChild(fragment);

// const t6 = performance.now();

// console.log(t6-t5);

// console.log("hello baccho")

// let para = document.createElement('p');
// para.textContent = "This is para graph";
// document.body.appendChild(para);
// para.addEventListener('click',function()
// {
//     console.log("Clicked the para")
// })

// console.log("BYYYY baccho")

setTimeout(function()
{
    console.log("THIS IS PARAGRAPH")
},20)

const t1 = performance.now();
for(let i = 1; i<=100000; i++)
    {
        console.log(i)
    }
const t2 = performance.now();
// console.log(t2-t1);
for(let i = 1; i<=100000; i++)
{
    console.log(i)
}