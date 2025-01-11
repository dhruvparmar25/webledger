const apikey = "3e80e129156de08890392b53231b0105";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=navsari";  // Fixed URL

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apikey}`); // Removed space before appid
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.city.name;
    // Uncomment below to display other data like temperature, humidity, and wind speed
    document.querySelector(".temp").innerHTML = data.list[0].main.temp;
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity;
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed;
}

checkWeather();
