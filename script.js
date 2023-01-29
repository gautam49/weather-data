let weather ={
  "apiKey":"59ae2a7d4629941c9df3fe8070aa8f08",
  fetchWeather: function(city){
    console.log(city); 
    fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + ""
      ).then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
      const {name} = data;
      const { icon , description } =data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name,icon,description,temp,humidity,speed)
      let actualTemp = temp / 10 ;
      document.querySelector(".city").innerHTML = "Weather in " + name;
      document.querySelector(".description").innerHTML =  description;
      document.querySelector(".temp").innerHTML = Math.ceil(actualTemp)+"°C";
      document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%";
      document.querySelector(".wind").innerHTML = "wind speed: " + speed + "km/hr";
      
  },
  search:function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
    
  }
 
 }
 function fetchWeather(){
     weather.search()
 }
 