function temperature(){
    const inputCity = document.getElementById('city-name');
    const value = inputCity.value;
    inputCity.value = '';

    const key = '4f3543805b7f1892b10150a6b6e86679';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => updateTemp(data))
}
function updateTemp(temparature) {
    console.log(temparature);
    const parentCall1 = document.getElementById('update-weather');
    parentCall1.textContent='';
    const div1 = document.createElement('div');
    div1.classList.add('col');
    div1.innerHTML=`
        <h5><span class="card-title fs-4 fw-bold">${temparature.name}</span>,
        <span class="card-title fs-4 fw-bold">${temparature.sys.country}</span></h5>
        <img src="http://openweathermap.org/img/wn/${temparature.weather[0].icon}.png">
        <h3 class="card-title">${temparature.main.temp}°C</h3>
        <h4 class="card-title">${temparature.weather[0].main}</h4>
        <h6 class="card-title">${temparature.weather[0].description}</h6>
    `
    parentCall1.appendChild(div1);

    const parentCall2 = document.getElementById('update-temp');
    parentCall2.textContent='';
    const div2 = document.createElement('div');
    div2.classList.add('col');

    // time conversion
    const date = temparature.dt;
    const today = new Date(date * 1000);

    const todayRise = temparature.sys.sunrise;
    const rise = new Date(todayRise * 1000)
    const sunrise = rise.toLocaleTimeString();

    const todaySet = temparature.sys.sunset;
    const set = new Date(todaySet * 1000)
    const sunset = set.toLocaleTimeString()

    div2.innerHTML = `
        <span class="card-title text-warning">Date :<h6 class="text-white">${today}</h6></span>
        <span class="card-title text-warning">Sunrise :<h6 class="text-white">${sunrise}</h6></span>
        <span class="card-title text-warning">Sunset :<h6 class="text-white">${sunset}</h6></span>
        <span class="card-title text-warning">Min-temp :<h6 class="text-white">${temparature.main.temp_min}°C</h6></span>
        <span class="card-title text-warning">Max-temp :<h6 class="text-white">${temparature.main.temp_max}°C</h6></span>
    `
    parentCall2.appendChild(div2);

    const div3 = document.createElement('div');
    div3.classList.add('col');
    div3.innerHTML = `
        <span class="card-title text-warning">Cloudiness :<h6 class="text-white">${temparature.clouds.all}%</h6></span>
        <span class="card-title text-warning">Pressure :<h6 class="text-white">${temparature.main.pressure} hPa</h6></span>
        <span class="card-title text-warning">Humidity :<h6 class="text-white">${temparature.main.humidity}%</h6></span>
        <span class="card-title text-warning">Wind-Speed :<h6 class="text-white">${temparature.wind.speed} m/s</h6></span>
        <span class="card-title text-warning">Longitude :<h6 class="text-white">${temparature.coord.lon}</h6></span>
        <span class="card-title text-warning">Latitude :<h6 class="text-white">${temparature.coord.lat}</h6></span>
    `
    parentCall2.appendChild(div3);
}






























