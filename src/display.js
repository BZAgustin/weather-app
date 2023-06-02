const DOM = () => {
  const inputSearch = document.getElementById('input-search');
  const city = document.getElementById('city');
  const country = document.getElementById('country');
  const temperature = document.getElementById('temperature');
  const wind = document.getElementById('wind');
  const humidity = document.getElementById('humidity');
  const precipitations = document.getElementById('precipitations');
  const clouds = document.getElementById('clouds');
  const conditionText = document.getElementById('condition-text');
  const countryTime = document.getElementById('country-time');
  const toggleSystem = document.getElementById('toggle-system');

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

  function updatePrecipitations(newPrecip) { 
    precipitations.innerHTML = newPrecip;
  }

  function updateHumidity(newHumidity) {
    humidity.innerHTML = newHumidity;
  }

  function updateClouds(newClouds) {
    clouds.innerHTML = newClouds;
  }

  function updateCondition(newCondition) {
    conditionText.innerHTML = newCondition;
  }

  function updateCountryTime(newTime) {
    countryTime.innerHTML = newTime;
  }

  function refresh(myCity, myCountry, myTemp, myTime, myWind, myPrecs, myHumidity, myClouds, myCondition) {
    updateCity(myCity);
    updateCountry(myCountry);
    updateTemperature(myTemp);
    updateCountryTime(myTime);
    updateWind(myWind);
    updatePrecipitations(myPrecs);
    updateHumidity(myHumidity);
    updateClouds(myClouds);
    updateCondition(myCondition);
  }

  return { inputSearch, toggleSystem, getInput, refresh }
}

export default DOM;