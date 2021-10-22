let weatherResponseElement =  $('.weatherResponse');
let weatherElement = $('.weather');
let tempElement = $('.temp');

function getWeather() {
    clear();
    let cityName = $('#cityName').val();
    let YOUR_TOKEN = 'cf2ed3b8147a7' + 'a0b66ef919de877808f';
    let apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + YOUR_TOKEN;
    $.getJSON(apiCall, weatherCallback);

    function weatherCallback(weatherData) {
        let cityName = weatherData.name;
        let country = weatherData.sys.country;
        let temperature = weatherData.main.temp;
        let description = weatherData.weather[0].description;
        let wind = weatherData.wind.speed;
        let temperaturesFull = temperature-273.15;
        let temperatures = Math.round(temperaturesFull, 2);

        let weatherClearSky = "<lottie-player src='https://assets2.lottiefiles.com/private_files/lf30_moaf5wp5.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherBrokenClouds = "<lottie-player src='https://assets8.lottiefiles.com/private_files/lf30_ykkzuozu.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherScatteredClouds = "<lottie-player src='https://assets3.lottiefiles.com/private_files/lf30_nx7kptft.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherModerateRain = "<lottie-player src='https://assets3.lottiefiles.com/packages/lf20_bco9p3ju.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherFewClouds = "<lottie-player src='https://assets10.lottiefiles.com/packages/lf20_KUFdS6.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherShowerRain = "<lottie-player src='https://assets8.lottiefiles.com/packages/lf20_bco9p3ju.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherLightRain = "<lottie-player src='https://assets4.lottiefiles.com/private_files/lf30_jr9yjlcf.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherOvercastClouds = "<lottie-player src='https://assets3.lottiefiles.com/private_files/lf30_nx7kptft.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";
        let weatherMist = "<lottie-player src='https://assets7.lottiefiles.com/temp/lf20_kOfPKE.json'  background='transparent'  speed='1'  style='width: 200px; height: 200px;'  loop  autoplay></lottie-player>";

        tempElement.append(temperatures + "&deg;");
        $('#checkForm').css({'display': 'none'});
        weatherElement.css({'display': 'block'});
        tempElement.css({'display': 'block'});


        weatherResponseElement.html('');
        weatherResponseElement.append("The weather in " + cityName + " " + "("+ country + ")" + " is currently " + description + " and the " + "windspeed is " + wind + "km/h. ");
        if(description === "clear sky") {
            weatherElement.append(weatherClearSky);
        } else if (description === "broken clouds") {
            weatherElement.append(weatherBrokenClouds);
        } else if (description === "scattered clouds") {
            weatherElement.append(weatherScatteredClouds);
        } else if (description === "moderate rain") {
            weatherElement.append(weatherModerateRain);
        } else if (description === "few clouds") {
            weatherElement.append(weatherFewClouds);
        } else if (description === "shower rain") {
            weatherElement.append(weatherShowerRain);
        } else if (description === "light rain") {
            weatherElement.append(weatherLightRain);
        } else if (description === "overcast clouds") {
            weatherElement.append(weatherOvercastClouds);
        } else if (description === "mist") {
            weatherElement.append(weatherMist);
        }
    }
}
function clear() {
    weatherResponseElement.html('');
}
function reset() {
    weatherResponseElement.html('');
    $('#checkForm').css({'display': 'flex'});
    weatherElement.empty();
    tempElement.empty();
}
