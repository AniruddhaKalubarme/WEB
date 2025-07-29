const Password = document.querySelector("#password");
const cpy_btn = document.querySelector('#cpy_btn');
const Pass_len = document.querySelector("#length");
const Slider = document.querySelector("#slider");
const Upper = document.querySelector("#Upper");
const Lower = document.querySelector("#Lower");
const iNo = document.querySelector("#Numbers");
const Symbols = document.querySelector("#Symbols");
const Indication = document.querySelector("#indication");
const btn = document.querySelector("#pass_btn");
const checkbox = document.querySelectorAll("input[type=checkbox]");
const msg = document.querySelector("#msg");

const Symbols_str = "!@#$%^&*()_+{}?><:|";


let length = 10;
let checks = 1;
let pass = "";



// Random Generation
function Rand_Genrate(min, max)
{
    return Math.floor((Math.random() * (max-min) + min));
}

function Num_Genrate()
{
    return Rand_Genrate(0,10);
}

function Upper_Genrate()
{
    return String.fromCharCode(Rand_Genrate(65,91));
}

function Lower_Genrate()
{
    return String.fromCharCode(Rand_Genrate(97,123));
}

function Sym_Genrate()
{
    return Symbols_str.charAt(Rand_Genrate(0, Symbols_str.length));
}


function set_Slider()
{
    if(checks == 0)
        length = 0;
    length = Math.max(length, checks);
    Slider.value = length;
    Pass_len.textContent = length; 
}

function set_Indcation()
{
    let iCnt = 0;

    if(Upper.checked) iCnt++; 
    if(Lower.checked) iCnt++; 
    if(Symbols.checked) iCnt++; 
    if(iNo.checked) iCnt++;

    if(iCnt === 4)
        Indication.style.backgroundColor = 'Lightgreen';
    else if(iCnt === 3)
        Indication.style.backgroundColor = 'yellow';
    else
        Indication.style.backgroundColor = 'red';
        
}

async function set_msg()
{
    try
    {
        await navigator.clipboard.writeText(Password.value);
        msg.textContent = "copied";
    }
    catch(e)
    {
        msg.textContent = "Failed";
    }

    msg.classList.add("active");

    setTimeout(()=> {
        msg.classList.remove("active");
    },2000);
}

Slider.addEventListener('input', (e)=>{
    length = e.target.value;
    set_Slider();
})

cpy_btn.addEventListener('click', (e) =>
{
    if(Password.value != "")
    {
        set_msg();
    }
})



function handleCheckBoxChange()
{
    count = 0;
    checkbox.forEach( (check) => {
        if(check.checked)
            count++;
    })

    checks = count;
    set_Slider();
}

checkbox.forEach( (check) => {
    check.addEventListener('change', handleCheckBoxChange)
})

function shuffle(str)
{
    let arr = str.split('');
    for(let i = arr.length-1; i>0; i--)
    {
        let j = Math.floor(Math.random()*(i+1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    str = arr.join('');
    return str;
}

btn.addEventListener('click', ()=>{
    if(checks == 0)
    {
        alert("select atleasy 1 attribute");
        return;
    }
        
        
    let funArr = [];

    if(Upper.checked)
        funArr.push(Upper_Genrate);
    if(Lower.checked)
        funArr.push(Lower_Genrate);
    if(Symbols.checked)
        funArr.push(Sym_Genrate);
    if(iNo.checked)
        funArr.push(Num_Genrate);


    pass = "";
    for(let i = 0; i<funArr.length; i++)
    {
        pass += funArr[i]();
    }

    for(let i = 0; i<(length - funArr.length); i++)
    {
        let rand = Rand_Genrate(0, funArr.length);
        pass += funArr[rand]();
    }

    pass = shuffle(pass);
    Password.value = pass;
    set_Indcation();
})