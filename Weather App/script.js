const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")

btn.addEventListener("click",()=>{
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'2c969256cdf60444f0272db071972ced'}`).then(response=>response.json())
 .then(data => {
    console.log(data);

    const iconCode= data.weather[0].icon;
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`

    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML=`${weatherCity}, ${weatherCountry}`;


     let weatherTemp = data.main.temp;
     weatherTemp=  weatherTemp - 273;
     const temp = weatherTemp.toFixed(2)
     temperature.innerHTML= `${temp}°C`;

    const weatherDesc = data.weather[0].description;
    description.innerHTML= weatherDesc;


})

}