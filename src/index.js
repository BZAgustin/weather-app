import Weather from "./weather";
import DOM from "./display";
import iconManager from "./iconManager";

const myWeather = new Weather();
const display = DOM();
const icons = iconManager();

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
  myWeather.isDay = weatherObject.current.is_day;
}

function updateIcons(time) {
  icons.setDaytime(time);
}

async function newWeather(newLocation) {
  await updateWeather(newLocation);
  display.refresh(myWeather.location, myWeather.country, `${myWeather.celsius}°C`, `${myWeather.windKph} kph`,
               `${myWeather.precipMm}mm`, `${myWeather.humidity}%`, `${myWeather.clouds}%`);
  updateIcons(myWeather.isDay);
}

newWeather('Cordoba');

display.inputSearch.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    newWeather(display.getInput());
  }
});

