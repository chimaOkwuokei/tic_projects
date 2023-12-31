
let weather = {
    apiKey: "7f34eac609ccf87b99b0a7ba4d85e341",


    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid=" 
        + this.apiKey

        )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
        
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        const faren = ((temp *(9/5)) + 32);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp +"°C";

       
        document.querySelector(".faren").innerText = faren +"°F";

        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed +"km/h";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText =  description;
       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
        document.querySelector(".weather").classList.remove("loading")                                   
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

 document.querySelector('.search button').addEventListener("click",function(){
        weather.search();
 });

 document.querySelector('.search-bar').addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Lagos")
///https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=7f34eac609ccf87b99b0a7ba4d85e341