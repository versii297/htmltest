window.addEventListener('load', ()=> {
  let long;
  let lat;
  let tempDescription = document.querySelector('.temp-description');
  let tempDegree = document.querySelector('.temp-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let icon = document.querySelector('.icon');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;

      
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&units=metric&appid=0fb2c3c779924b6da6ce1deb3efd9eab`;
      
      fetch(api)
      .then(response => { 
        return response.json();
      })
      .then(data => {  
        // set DOM elements from API
        tempDegree.textContent = `${data.current.temp}°`;
        tempDescription.textContent = data.current.weather[0].description;
        locationTimezone.textContent = data.timezone;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png" alt="icon">`;
        console.log(data);
      });
    });  
  } 
});

