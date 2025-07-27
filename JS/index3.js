function sum()
{
    total = 0;
    for(let i of arguments)
    {
        total += i;
    }
    return total;
}

console.log(sum(1,2,3,4))


function abc(a,b,...nums)
{
    console.log(nums);
}

abc(5,6,6,3)

let person ={
    fName: 'aniru',
    lName: 'kalu',

    set fullName(value)
    {
        let part = value.split(' ');
        this.fName = part[0];
        this.lName = part[1];
    },

    get fullName()
    {
        return `${this.fName} and ${this.lName}`;
    }
};

try
{
    person.fullName = 1;
}
catch(e)
{
    // alert('Enter a valid name');
}
console.log(person.fullName);

function ak()
{
    var a=5;
}

if(true)
    var a = 5;

console.log(a)

let num = [2,3,4];
let totalSum = 1;

for(let i of num)
{
    totalSum *= i;
}
console.log(totalSum);

// Above function can be written as

let totalSum2 = num.reduce((total, val)=>total * val, 2);
console.log(totalSum2);


let wrp = document.querySelector('#wrapper');
wrp.addEventListener('click', function(event)
{
    if(event.target.nodeName === 'SPAN')
    console.log(event.target.textContent);
})
