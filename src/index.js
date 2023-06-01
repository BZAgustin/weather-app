import Weather from "./weather";
import DOM from "./display";

const myWeather = new Weather();
const display = DOM();

async function getLocationWeather(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=223244cbdba14658867150217233105&q=${location}`, {mode: 'cors'});
  const weather = await response.json();
  
  return weather;
}

async function updateWeather(location) {
  const weatherObject = await getLocationWeather(location);

  myWeather.location = weatherObject.location.name;
  myWeather.country = weatherObject.location.country;
  myWeather.celsius = weatherObject.current.temp_c;
  myWeather.fahrenheit = weatherObject.current.temp_f;
  myWeather.windKph = weatherObject.current.wind_kph;
  myWeather.windMph = weatherObject.current.wind_mph;
  myWeather.windDir = weatherObject.current.wind_dir;
  myWeather.precipMm = weatherObject.current.precip_mm;
  myWeather.precipIn = weatherObject.current.precip_in;
  myWeather.humidity = weatherObject.current.humidity;
  myWeather.clouds = weatherObject.current.cloud;
  myWeather.thermicCelsius = weatherObject.current.feelslike_c;
  myWeather.thermicFahrenheit = weatherObject.current.feelslike_f;
}

function updateDisplay() {
  display.updateCity(myWeather.location);
  display.updateCountry(myWeather.country);
  display.updateTemperature(`${myWeather.celsius}°`);
  display.updateWind(`${myWeather.windKph}kph`);
  display.updatePrecipitations(`${myWeather.precipMm}mm`);
  display.updateClouds(`${myWeather.clouds}%`);
}

updateWeather('Cordoba');

display.inputSearch.addEventListener('keypress', async (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    await updateWeather(display.getInput());
    updateDisplay();
  }
})

