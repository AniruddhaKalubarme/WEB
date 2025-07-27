console.log('Hello baccho')

let lastName = 'Kalubarme'
let lastNameObj = new String('Aniruddha')

console.log(lastName.toUpperCase())

let date1 = new Date();
console.log(date1)

let date2 = new Date('June 20 1998 07:15')
console.log(date2)

let date3 = new Date(2005, 11, 30, 7)
console.log(date3)

let arr=[12, 34, 23, 45, 21, 1];

arr.push(9)
arr.unshift(1)
arr.splice(2, 0, 'a','b','c')

console.log(arr)

if(arr.indexOf(21) == -1)
console.log("Not Present");
else
console.log("Present")


let courses = [{id:29, naam:'love'},
                {id:40, naam:'Babbar'},
                {id:27, naam:'ak'}];

let obj1 = courses.find(function(course)
{
    return course.naam == 'ak';
})
console.log(obj1)

let obj2 = courses.find(course => course.naam == 'ak');

console.log(obj2)

console.log()

let num1 = [1,4,3,2];
let num2 = num1;

num1[4] = 5;
console.log(num1);
console.log(num2);

let str = 'My name is Aniruddha'
let sep = str.split(' ')

console.log(sep)
let jn = sep.join('-')
console.log(jn)

num1.sort()
console.log(num1)

// sorting by id
courses.sort((a,b) => a.id - b.id)
console.log(courses)

// sorting by naam
courses.sort((a,b) => a.naam.localeCompare(b.naam))
console.log(courses)

num1.reverse()
console.log(num1)

let integers = [-2,4,-6,-8,2];
let filtered = integers.filter(function(value)
{
    return value>=0;
});

console.log(filtered)


// Mapping

const numbers = [1, 2, 3, 4];
const newArr = numbers.map(function myFunction(num) {
  return num * num;
})

console.log(newArr)

let names = [{name:'Shiv', age:13},
             {name:'Aniruddha', age:20},
             {name:'Niraj', age:27}
];

let namesWithAge = names.map(function joining(val)
{
    return `My name is: ${val.name}    My age is: ${val.age}`;
})

console.log(namesWithAge)