const weather_btn = document.querySelector(".weather_btn");
const Main_search_btn = document.querySelector(".Main_search_btn");
const access = document.querySelector(".access");
const Weather_Info = document.querySelector(".Weather_Info");
const Search_Bar = document.querySelector(".Search_Bar");
const loading = document.querySelector(".loading");
const grant_Access = document.querySelector("#Grant_Access");
const Not_Found = document.querySelector(".Not_Found");





let currentBtn = weather_btn;
let API_KEY = "cb9123ba8aa601562c197dcebde9b7f9";

getSessionFromStorage();

function ContentOfMainSearch()
{
    if(access.classList.contains("active"))
        access.classList.remove("active");
    else if(Weather_Info.classList.contains("active"))
        Weather_Info.classList.remove("active");

    Search_Bar.classList.add("active");
}

function ContentOfWeather()
{
    Search_Bar.classList.remove("active");
    if(Weather_Info.classList.contains("active"))
        Weather_Info.classList.remove("active");

    getSessionFromStorage();
}

function switchTab(selectedBtn)
{
    if(selectedBtn != currentBtn)
    {
        currentBtn.classList.remove("active_btn");
        currentBtn = selectedBtn;
        currentBtn.classList.add("active_btn");

        if(currentBtn == Main_search_btn)
        {
            ContentOfMainSearch();
        }
        else
        {
            ContentOfWeather();
        }
    }
}

Main_search_btn.addEventListener("click", () =>{
    switchTab(Main_search_btn);
})

weather_btn.addEventListener("click", () =>{
    switchTab(weather_btn);
})

function getSessionFromStorage(){
    const localCoord = sessionStorage.getItem("user-coordinates");

    if(!localCoord)
    {
        access.classList.add("active");
    }
    else
    {
        // the coordinates are stores as string inside the sessionStorage, 
        // to covert that string back to the object we need to parse it
        const coordinates = JSON.parse(localCoord);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates)
{
    const {lat, longi} = coordinates;

    access.classList.remove("active");

    loading.classList.add("active");

    try
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${API_KEY}`);
        const data = await response.json();
        fillWeatherDetails(data);
        loading.classList.remove("active");
        Weather_Info.classList.add("active");
    }
    catch(err){
        alert("Something went wrong");
    }
}

function fillWeatherDetails(data)
{
    let city = document.querySelector("#city");
    let condition = document.querySelector("#condition");
    let cond_img = document.querySelector("#cond_img");
    let temprature = document.querySelector("#temprature");
    let speed = document.querySelector("#speed");
    let humidity = document.querySelector("#humidity");
    let clouds = document.querySelector("#clouds");

    city.innerText = data?.name;
    condition.innerText = data?.weather?.[0]?.description;
    cond_img.src = `https://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temprature.innerText = `${data?.main?.temp}°C`;
    speed.innerText = `${data?.wind?.speed}m/s`;
    humidity.innerText = `${data?.main?.humidity}%`;
    clouds.innerText = `${data?.clouds?.all}%`;
}

grant_Access.addEventListener("click", ()=>{
    console.log("here");
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }
    else
    {
        alert("Geo-location is not available");
    }
})

function handleError(error) {
    console.error("Geo error:", error);
    alert("Geolocation failed: " + error.message);
}

function showPosition(position)
{
    const userCoordinates = {
        lat:position.coords.latitude,
        longi:position.coords.longitude,
    }

    // sessionStorage stores only the string,
    // therefore we need to convert the object into string
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const Search = document.querySelector("#search");

Search_Bar.addEventListener("submit", (e)=>{

    e.preventDefault();
    let cityName = Search.value;

    if(Not_Found.classList.contains("active"))
        Not_Found.classList.remove("active");

    if(Weather_Info.classList.contains("active"))
    {
        Weather_Info.classList.remove("active");
    }

    if(cityName === "")
        return;
    else{
        SearchWeatherInfo(cityName);
    }
})

async function SearchWeatherInfo(CITY_NAME)
{
    loading.classList.add("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`);
        if (!response.ok) {
            loading.classList.remove("active");
            if(!Not_Found.classList.contains("active"))
                Not_Found.classList.add("active");
            return;
        }
        const data = await response.json();
        loading.classList.remove("active");
        fillWeatherDetails(data);
        Weather_Info.classList.add("active");
    }
    catch(err)
    {
        alert("failed to fetch API" + err);
    }
}