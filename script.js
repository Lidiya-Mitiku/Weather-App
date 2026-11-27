  const apiKey= "3ad64722c1ede668cce9eddf725794c1";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox=document.querySelector(".search input");;

        const searchBtn=document.querySelector(".search button");

        const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
             
            if(response.status == 404){
                document.querySelector(".error").style.display="block";
                  document.querySelector(".weather").style.display="none";
            }else{

           var data = await response.json();
      //      console.log(data);
            
            document.querySelector(".city").innerHTML=data.name;
             document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="c.jpg";
            }
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="c.jpg";
            }
             else if(data.weather[0].main=="Rain"){
                weatherIcon.src="c.jpg";
            }
             else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="c.jpg";
            }
             else if(data.weather[0].main=="Mist"){
                weatherIcon.src="c.jpg";
            }
           
            document.querySelector(".weather").style.display="block";
             document.querySelector(".error").style.display="none";
            }
           
            
        }


        searchBtn.addEventListener("click",()=>{
             checkWeather(searchBox.value);
  
        })
