import Weather from "./weather";
import DOM from "./display";
import iconManager from "./iconManager";

const myWeather = new Weather();
const display = DOM();
const icons = iconManager();

async function getLocationWeather(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=223244cbdba14658867150217233105&q=${location}`, {mode: 'cors'});
    const weather = await response.json();

    return weather;
  } catch(err) {
    display.showError(err);
    return myWeather;
  }
}

async function updateWeather(location) {
  try {
    const weatherObject = await getLocationWeather(location);
    const countryTime = `${new Date(weatherObject.location.localtime).getHours().toString().padStart(2, '0')}:${new Date(weatherObject.location.localtime).getMinutes().toString().padStart(2, '0')}`;

    myWeather.location = weatherObject.location.name;
    myWeather.country = weatherObject.location.country;
    myWeather.celsius = weatherObject.current.temp_c;
    myWeather.time = countryTime;
    myWeather.fahrenheit = weatherObject.current.temp_f;
    myWeather.windKph = weatherObject.current.wind_kph;
    myWeather.windMph = weatherObject.current.wind_mph;
    myWeather.windDir = weatherObject.current.wind_dir;
    myWeather.precipMm = weatherObject.current.precip_mm;
    myWeather.precipIn = weatherObject.current.precip_in;
    myWeather.humidity = weatherObject.current.humidity;
    myWeather.clouds = weatherObject.current.cloud;
    myWeather.isDay = weatherObject.current.is_day;
    myWeather.condition = weatherObject.current.condition.text;

    display.clearError();
  } catch(err) {
    display.showError(err);
  }
return null;
}

function updateIcons(time, wind) {
  icons.setDaytime(time);
  icons.setWindDirection(wind);
}

async function newWeather(newLocation) {
  await updateWeather(newLocation);
  if(myWeather.system === 0) {
    display.refresh(myWeather.location, myWeather.country, `${myWeather.celsius}°C`, `${myWeather.time} HS`,
    `${myWeather.windKph} Km/H`, `${myWeather.precipMm}mm`, `${myWeather.humidity}%`, `${myWeather.clouds}%`, 
    `(${myWeather.condition})`);
  } else {
    display.refresh(myWeather.location, myWeather.country, `${myWeather.fahrenheit}°F`, `${myWeather.time} HS`,
    `${myWeather.windMph} MPH`, `${myWeather.precipIn}in`, `${myWeather.humidity}%`, `${myWeather.clouds}%`, 
    `(${myWeather.condition})`);
  }

  updateIcons(myWeather.isDay, myWeather.windDir);
}

newWeather('Cordoba');

display.inputSearch.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    newWeather(display.getInput());
  }
});

display.toggleSystem.addEventListener('click', () => {
  if(myWeather.system === 0) {
    myWeather.system = 1;
    display.toggleSystem.src = icons.myIcons.toggleRight;
  } else {
    myWeather.system = 0;
    display.toggleSystem.src = icons.myIcons.toggleLeft;
  }

  newWeather(myWeather.location);
});
