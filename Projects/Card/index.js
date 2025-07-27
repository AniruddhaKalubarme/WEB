function ShowData()
{
    let link = document.querySelector(".links");
    let overlay = document.querySelector(".overlay");
    link.style.scale = '1';
    overlay.style.transform = 'scaleX(1)';

}

document.addEventListener('click', function(event)
{
    let link = document.querySelector(".links");
    let overlay = document.querySelector(".overlay");

    if(event.target == link)
    {
        link.style.scale = '0';
        overlay.style.transform = 'scaleX(0)';
    }
})