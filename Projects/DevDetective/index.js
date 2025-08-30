let container = document.querySelector(".Contain");
let Dark_btn = document.querySelector(".Dark_btn");
let Search_Panel = document.querySelector(".Search_Panel");
let Profile_Image = document.querySelector(".Profile_Image");
let Search_Bar = document.querySelector(".Search_Bar");
let Details = document.querySelector(".Details");
let name = document.querySelector("#name");
let JoinDate = document.querySelector("#JoinDate");
let user_link = document.querySelector("#user_link");
let Description = document.querySelector("#Description");
let card = document.querySelector("#card");
let Repo_count = document.querySelector("#Repo_count");
let Followers_count = document.querySelector("#Followers_count");
let Following_count = document.querySelector("#Following_count");
let loc = document.querySelector("#location");
let website = document.querySelector("#website");
let twitter = document.querySelector("#twitter");
let company = document.querySelector("#company");
let modeText = document.querySelector("#modeText");
let modeImg = document.querySelector("#modeImg");
let Search_btn = document.querySelector(".Search_btn");
let form_btn = document.querySelector(".form_btn");


let WhiteTextElements = Array.from(document.getElementsByClassName('cards'));
WhiteTextElements.push(name);
WhiteTextElements.push(Search_Bar);

let light = 1;
Dark_btn.addEventListener("click", ()=>{
    if(light == 1)
    {
        if(container.classList.contains('bg-[#F6F8FF]'))
            container.classList.remove("bg-[#F6F8FF]");
        container.classList.add("bg-[#141D2F]", "text-gray-300");

        Search_Panel.classList.remove("bg-white");
        Search_Panel.classList.add("bg-[#1E2A47]");

        Details.classList.remove("bg-white");
        Details.classList.add("bg-[#1E2A47]");

        card.classList.remove("bg-[#F6F8FF]");
        card.classList.add("bg-[#141D2F]");

        Search_Bar.classList.add('placeholder-white');

        for(let i of WhiteTextElements)
        {
            i.classList.add("WhiteText");
        }

        modeText.textContent = "LIGHT";
        modeImg.src = "sun-icon.svg";
        light=0;
    }
    else
    {
        container.classList.remove("bg-[#141D2F]", "text-gray-300");
        container.classList.add("bg-[#F6F8FF]");

        Search_Panel.classList.remove("bg-[#1E2A47]");
        Search_Panel.classList.add("bg-white");

        Details.classList.remove("bg-[#1E2A47]");
        Details.classList.add("bg-white");

        card.classList.remove("bg-[#141D2F]");
        card.classList.add("bg-[#F6F8FF]");

        Search_Bar.classList.remove('placeholder-white');

        for(let i = 0; i<WhiteTextElements.length; i++)
        {
            WhiteTextElements[i].classList.remove("WhiteText");
        }

        modeText.textContent = "DARK";
        modeImg.src = "moon-icon.svg";

        light=1;
    }
})

async function FillData(user)
{
    try
    {
        const ApiCall = await fetch(`https://api.github.com/users/${user}`);
        if (!response.ok) { // checks for status 200–299
      // Handle the error, such as 404
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await ApiCall.json();
        name.innerText = data?.login;
        JoinDate.innerText = data?.created_at;
        Description.innerText = data?.bio;
        user_link.href = data?.html_url;
        user_link.innerText = (data?.name) == null ? "N/A" : `@${data?.name}`;
        Repo_count.innerText = data?.public_repos;
        Followers_count.innerText = data?.followers;
        Following_count.innerText = data?.following;
        loc.innerText = (data?.location) == null ? "N/A" : data?.location;
        company.innerText = (data?.company) == null ? "N/A" : data?.company;
        website.innerText = (data?.email) == null ? "N/A" : data?.email;
        twitter.innerText = (data?.twitter_username) == null ? "N/A" : data?.twitter_username;
        Profile_Image.src = data?.avatar_url;
    }
    catch(err)
    {
        alert("Somethind went wrong");
    }
}

form_btn.addEventListener('submit', (e) => {
    e.preventDefault();
    FillData(Search_Bar.value);
})

Search_btn.addEventListener('click', () => {
    FillData(Search_Bar.value);
})