// console.log('This will print');
// var a = 5;
// var a = 7;

// console.log(a)
// // console.log(b)

// let person = {
//     firstName : 'Aniruddha',
//     age : 19,
// };

// console.log(person['firstName']  + ' ' + person.age);

// let data = ['Aniruddha', 19, 'Shiv', 13]
// console.log('Name: ' + data[0] + '\tAge: ' + data[1])
// console.log('Name: ' + data[2] + '\tAge: ' + data[3])

// console.log(true && 'anir')

// let ab = 17
// if(ab<19)
// {
//     console.log('less than 19')
// }
// else if(ab>19)
//     console.log('greater than 19')
// else
//     console.log('eqaul to 19')

// switch(ab)
// {
//     case 16:
//         console.log('this is 16')
//         break;
//     case 17:
//         console.log('this is 17')
//         break;
//     case 18:
//         console.log('this is 18')
//         break;
//     default:
//         console.log("default case")
// }

// for(let i = 0; i<9; i++)
// {
//     console.log(i)
// }

// let rectangle = {
//     length:14,
//     width:15,
 
//     draw(){
//         console.log('rectandle');
//     }
// };

// // console.log(rectangle.length)
// // console.log(rectangle.draw)
// // console.log(rectangle.draw())

// function area(){
//     let a = 5;
//     let b = 4;
//     return a*b;
// }

// // let d = area();
// console.log(area())

// function retObj(len, bre){
//     let rectangle = {
//         length : len,
//         width : bre,

//         draw()
//         {
//             console.log('ret Obj');
//         }
//     };

//     return rectangle
// }

// let obj = retObj(5, 6)
// console.log(obj.length)
// console.log(obj.draw())


function fun(name){
    this.name = name;
    this.age = 19;
    this.sal = 28;

    this.getData = function() {
        console.log('name: ' + this.name + ' age: ' + this.age + ' salary: ' + this.sal);
    }
}

console.log(fun.arguments)

// let constructorObj = new fun('anir', 19, 256)
// console.log(constructorObj.name);
// constructorObj.getData();

// console.log(constructorObj.constructor);
// console.log(fun.constructor);


let newFun = new Function('a', 'b',
    `this.a = a;
    this.b = b;

    this.Add = function() {
        console.log(a+b);
    }`
)

let newObj = new newFun(5, 6);
console.log(newObj.Add());

if('a' in newObj)
{
    console.log('Present')
}

// Object Cloning

// let bc = newObj;
// console.log(bc.a)

//method-1
let bc = {};
for(let key in newObj)
    {
        bc[key] = newObj[key];
    }
    console.log(bc.a)
    
//method-2
let dc = {...bc};
dc['shiv'] = 'kalu';
console.log(dc.a);

//method-3
let md = Object.assign({}, bc, dc)
console.log(md.a)
console.log(md.shiv)

md.a++;
console.log(md.a)
console.log(bc.a)