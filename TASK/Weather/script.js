const apikey = "3e80e129156de08890392b53231b0105";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";  // Fixed URL

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon=document.querySelector("weather-icon")

 
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`); // Removed space before appid
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.city.name;
    // Uncomment below to display other data like temperature, humidity, and wind speed
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp)  + "°C ";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){  

        weatherIcon.src = "images/clouds.png"; 
    }else if(data.weather[0].main == "Clear"){  

        weatherIcon.src = "images/clear.png"; 
    }else if(data.weather[0].main == "Rain"){  

        weatherIcon.src = "images/rain.png"; 
    }else if(data.weather[0].main == "Drizzle"){  

        weatherIcon.src = "images/drizzle.png"; 
    }else if(data.weather[0].main == "Mist"){  

        weatherIcon.src = "images/mist.png"; 
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
