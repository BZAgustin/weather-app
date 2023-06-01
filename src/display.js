const DOM = () => {
  const inputSearch = document.getElementById('input-search');
  const city = document.getElementById('city');
  const country = document.getElementById('country');
  const temperature = document.getElementById('temperature');
  const wind = document.getElementById('wind');
  const humidity = document.getElementById('humidity');
  const precipitations = document.getElementById('precipitations');
  const clouds = document.getElementById('clouds');

  function getInput() {
    return inputSearch.value;
  }

  function updateCity(newCity) {
    city.innerHTML = newCity;
  }

  function updateCountry(newCountry) {
    country.innerHTML = newCountry;
  }

  function updateTemperature(newTemp) {
    temperature.innerHTML = newTemp;
  }

  function updateWind(newWind) {
    wind.innerHTML = newWind;
  }

  function updateHumidity(newHumidity) {
    humidity.innerHTML = newHumidity;
  }

  function updatePrecipitations(newPrecip) { 
    precipitations.innerHTML = newPrecip;
  }

  function updateClouds(newClouds) {
    clouds.innerHTML = newClouds;
  }

  return { inputSearch, getInput, updateCity, updateCountry, updateTemperature, 
           updateWind, updateHumidity, updatePrecipitations, updateClouds }
}

export default DOM;