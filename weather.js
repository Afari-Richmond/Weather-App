//variables that store the api key and api url, including the search button and input~
const apiKey = "99199ae9a81d02deff713ffd2bd2456f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput =  document.querySelector(".search input");
const searchButton =  document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image");

//async function that fetches the data using the api and parses it into the json format
 async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
//selects the various elements associated with the data and changes it values 
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//changes the picture above based on the waether condition
if(data.weather[0].main == "clouds"){
    weatherImage.src = "/images/clouds.png";
}
else if(data.weather[0].main == "clear"){
    weatherImage.src = "/images/clear.png";
}
else if(data.weather[0].main == "drizzle"){
    weatherImage.src = "/images/drizzle.png";
}
else if(data.weather[0].main == "mist"){
    weatherImage.src = "/images/mist.png";
}
else if(data.weather[0].main == "rain"){
    weatherImage.src = "/images/rain.png";
}
else if(data.weather[0].main == "snow"){
    weatherImage.src = "/images/snow.png";
}
else if(data.weather[0].main == "wind"){
    weatherImage.src = "/images/wind.png";
} 
//makes the info visible after the button has been clicked  
document.querySelector(".weather-info").style.display = "block";
    

 };

 //button event that calls the weather function when the button is clicked
 searchButton,addEventListener("click", ()=>{
    checkWeather(searchInput.value);
 });




 

 






