function increament()
{
    let content = document.getElementById("value");
    let value = parseInt(content.innerHTML);
    content.innerHTML = ++value;
}

function decreament()
{
    let content = document.getElementById("value");
    let value = parseInt(content.innerHTML);
    content.innerHTML = --value;
}