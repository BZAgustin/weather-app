/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  const error = document.getElementById('error-message');

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

  function showError(err) {
    error.innerHTML = 'Location not found'
    console.log(err);
  }

  function clearError() {
    error.innerHTML = ''
  }

  return { inputSearch, toggleSystem, getInput, refresh, showError, clearError }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/iconManager.js":
/*!****************************!*\
  !*** ./src/iconManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const iconManager = () => {
  const myIcons = {
    day: './assets/day.png',
    night: './assets/night.png',
    north: './assets/N.png',
    northEast: './assets/NE.png',
    east: './assets/E.png',
    southEast: './assets/SE.png',
    south: './assets/S.png',
    southWest: './assets/SW.png',
    west: './assets/W.png',
    northWest: './assets/NW.png',
    toggleLeft: './assets/toggleLeft.png',
    toggleRight: './assets/toggleRight.png'
  }

  const daytime = document.getElementById('daytime');
  const windDirection = document.getElementById('wind-direction');

  function setDaytime(time) {
    if(time === 1) {
      daytime.src = myIcons.day;
    } else {
      daytime.src = myIcons.night;
    }
  }

  function setWindDirection(direction) {
    switch(direction) {
      case 'N' :
        windDirection.src = myIcons.north;
        break;
      case 'NNE':
        windDirection.src = myIcons.north;
        break;
      case 'NE':
        windDirection.src = myIcons.northEast;
        break;
      case 'ENE':
        windDirection.src = myIcons.northEast;
        break;
      case 'E':
        windDirection.src = myIcons.east;
        break;
      case 'ESE':
        windDirection.src = myIcons.east;
        break;
      case 'SE':
        windDirection.src = myIcons.southEast;
        break;
      case 'SSE':
        windDirection.src = myIcons.southEast;
        break;
      case 'S':
        windDirection.src = myIcons.south;
        break;
      case 'SSW':
        windDirection.src = myIcons.south;
        break;
      case 'SW':
        windDirection.src = myIcons.southWest;
        break;
      case 'WSW':
        windDirection.src = myIcons.southWest;
        break;
      case 'W':
        windDirection.src = myIcons.west;
        break;
      case 'WNW':
        windDirection.src = myIcons.west;
        break;
      case 'NW':
        windDirection.src = myIcons.northWest;
        break;
      case 'NNW':
        windDirection.src = myIcons.northWest;
        break;
      default:
        windDirection.src = '';
        break;
    }
  }

  return { myIcons, setDaytime, setWindDirection }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconManager);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
class Weather {
  constructor(location, country, celsius, fahrenheit, time, windKph, windMph,
              windDir, precipMm, precipIn, humidity, clouds, isDay, condition, system = 0) {

    this._location = location;
    this._country = country;
    this._celsius = celsius;
    this._fahrenheit = fahrenheit;
    this._time = time;
    this._windKph = windKph;
    this._windMph = windMph;
    this._windDir = windDir;
    this._precipMm = precipMm;
    this._precipIn = precipIn;
    this._humidity = humidity;
    this._clouds = clouds;
    this._isDay = isDay;
    this._condition = condition;
    this._system = system;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  get country() {
    return this._country
  }

  set country(newCountry) {
    this._country = newCountry;
  }

  get celsius() {
    return this._celsius
  }

  set celsius(temperature) {
    this._celsius = temperature;
  }

  get fahrenheit() {
    return this._fahrenheit
  }

  set fahrenheit(temperature) {
    this._fahrenheit = temperature;
  }

  get time() {
    return this._time;
  }

  set time(newTime) {
    this._time = newTime;
  }

  get windKph() {
    return this._windKph
  }
  
  set windKph(speed) {
    this._windKph = speed;
  }

  get windMph() {
    return this._windMph
  }

  set windMph(speed) {
    this._windMph = speed;
  }

  get windDir() {
    return this._windDir
  }

  set windDir(direction) {
    this._windDir = direction;
  }
  
  get precipMm() {
    return this._precipMm
  }

  set precipMm(amount) {
    this._precipMm = amount;
  }

  get precipIn() {
    return this._precipIn
  }

  set precipIn(amount) {
    this._precipIn = amount;
  }

  get humidity() {
    return this._humidity
  }

  set humidity(percentage) {
    this._humidity = percentage;
  }

  get clouds() {
    return this._clouds
  }

  set clouds(amount) {
    this._clouds = amount;
  }

  get isDay() {
    return this._isDay;
  }

  set isDay(time) {
    this._isDay = time;
  }

  get condition() {
    return this._condition;
  }

  set condition(condition) {
    this._condition = condition;
  }

  get system() {
    return this._system;
  }

  set system(newSystem) {
    this._system = newSystem;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _iconManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconManager */ "./src/iconManager.js");




const myWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__["default"]();
const display = (0,_display__WEBPACK_IMPORTED_MODULE_1__["default"])();
const icons = (0,_iconManager__WEBPACK_IMPORTED_MODULE_2__["default"])();

async function getLocationWeather(location) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=223244cbdba14658867150217233105&q=${location}`, {mode: 'cors'});
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXpCO0FBQ0E7QUFDQSxvSEFBb0gsU0FBUyxJQUFJLGFBQWE7QUFDOUk7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtGQUFrRixHQUFHLG9GQUFvRjs7QUFFcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsa0JBQWtCLFFBQVEsZ0JBQWdCO0FBQ3hHLE9BQU8sbUJBQW1CLFVBQVUsbUJBQW1CLFFBQVEsbUJBQW1CLE9BQU8saUJBQWlCO0FBQzFHLFFBQVEsb0JBQW9CO0FBQzVCLElBQUk7QUFDSiw4REFBOEQscUJBQXFCLFFBQVEsZ0JBQWdCO0FBQzNHLE9BQU8sbUJBQW1CLFNBQVMsbUJBQW1CLFFBQVEsbUJBQW1CLE9BQU8saUJBQWlCO0FBQ3pHLFFBQVEsb0JBQW9CO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaWNvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTSA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtc2VhcmNoJyk7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG4gIGNvbnN0IHByZWNpcGl0YXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWNpcGl0YXRpb25zJyk7XG4gIGNvbnN0IGNsb3VkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG91ZHMnKTtcbiAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25kaXRpb24tdGV4dCcpO1xuICBjb25zdCBjb3VudHJ5VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5LXRpbWUnKTtcbiAgY29uc3QgdG9nZ2xlU3lzdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zeXN0ZW0nKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbWVzc2FnZScpO1xuXG4gIGZ1bmN0aW9uIGdldElucHV0KCkge1xuICAgIHJldHVybiBpbnB1dFNlYXJjaC52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNpdHkobmV3Q2l0eSkge1xuICAgIGNpdHkuaW5uZXJIVE1MID0gbmV3Q2l0eTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvdW50cnkobmV3Q291bnRyeSkge1xuICAgIGNvdW50cnkuaW5uZXJIVE1MID0gbmV3Q291bnRyeTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRlbXBlcmF0dXJlKG5ld1RlbXApIHtcbiAgICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBuZXdUZW1wO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlV2luZChuZXdXaW5kKSB7XG4gICAgd2luZC5pbm5lckhUTUwgPSBuZXdXaW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUHJlY2lwaXRhdGlvbnMobmV3UHJlY2lwKSB7IFxuICAgIHByZWNpcGl0YXRpb25zLmlubmVySFRNTCA9IG5ld1ByZWNpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUh1bWlkaXR5KG5ld0h1bWlkaXR5KSB7XG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gbmV3SHVtaWRpdHk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDbG91ZHMobmV3Q2xvdWRzKSB7XG4gICAgY2xvdWRzLmlubmVySFRNTCA9IG5ld0Nsb3VkcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbmRpdGlvbihuZXdDb25kaXRpb24pIHtcbiAgICBjb25kaXRpb25UZXh0LmlubmVySFRNTCA9IG5ld0NvbmRpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvdW50cnlUaW1lKG5ld1RpbWUpIHtcbiAgICBjb3VudHJ5VGltZS5pbm5lckhUTUwgPSBuZXdUaW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmcmVzaChteUNpdHksIG15Q291bnRyeSwgbXlUZW1wLCBteVRpbWUsIG15V2luZCwgbXlQcmVjcywgbXlIdW1pZGl0eSwgbXlDbG91ZHMsIG15Q29uZGl0aW9uKSB7XG4gICAgdXBkYXRlQ2l0eShteUNpdHkpO1xuICAgIHVwZGF0ZUNvdW50cnkobXlDb3VudHJ5KTtcbiAgICB1cGRhdGVUZW1wZXJhdHVyZShteVRlbXApO1xuICAgIHVwZGF0ZUNvdW50cnlUaW1lKG15VGltZSk7XG4gICAgdXBkYXRlV2luZChteVdpbmQpO1xuICAgIHVwZGF0ZVByZWNpcGl0YXRpb25zKG15UHJlY3MpO1xuICAgIHVwZGF0ZUh1bWlkaXR5KG15SHVtaWRpdHkpO1xuICAgIHVwZGF0ZUNsb3VkcyhteUNsb3Vkcyk7XG4gICAgdXBkYXRlQ29uZGl0aW9uKG15Q29uZGl0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dFcnJvcihlcnIpIHtcbiAgICBlcnJvci5pbm5lckhUTUwgPSAnTG9jYXRpb24gbm90IGZvdW5kJ1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckVycm9yKCkge1xuICAgIGVycm9yLmlubmVySFRNTCA9ICcnXG4gIH1cblxuICByZXR1cm4geyBpbnB1dFNlYXJjaCwgdG9nZ2xlU3lzdGVtLCBnZXRJbnB1dCwgcmVmcmVzaCwgc2hvd0Vycm9yLCBjbGVhckVycm9yIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImNvbnN0IGljb25NYW5hZ2VyID0gKCkgPT4ge1xuICBjb25zdCBteUljb25zID0ge1xuICAgIGRheTogJy4vYXNzZXRzL2RheS5wbmcnLFxuICAgIG5pZ2h0OiAnLi9hc3NldHMvbmlnaHQucG5nJyxcbiAgICBub3J0aDogJy4vYXNzZXRzL04ucG5nJyxcbiAgICBub3J0aEVhc3Q6ICcuL2Fzc2V0cy9ORS5wbmcnLFxuICAgIGVhc3Q6ICcuL2Fzc2V0cy9FLnBuZycsXG4gICAgc291dGhFYXN0OiAnLi9hc3NldHMvU0UucG5nJyxcbiAgICBzb3V0aDogJy4vYXNzZXRzL1MucG5nJyxcbiAgICBzb3V0aFdlc3Q6ICcuL2Fzc2V0cy9TVy5wbmcnLFxuICAgIHdlc3Q6ICcuL2Fzc2V0cy9XLnBuZycsXG4gICAgbm9ydGhXZXN0OiAnLi9hc3NldHMvTlcucG5nJyxcbiAgICB0b2dnbGVMZWZ0OiAnLi9hc3NldHMvdG9nZ2xlTGVmdC5wbmcnLFxuICAgIHRvZ2dsZVJpZ2h0OiAnLi9hc3NldHMvdG9nZ2xlUmlnaHQucG5nJ1xuICB9XG5cbiAgY29uc3QgZGF5dGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXl0aW1lJyk7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1kaXJlY3Rpb24nKTtcblxuICBmdW5jdGlvbiBzZXREYXl0aW1lKHRpbWUpIHtcbiAgICBpZih0aW1lID09PSAxKSB7XG4gICAgICBkYXl0aW1lLnNyYyA9IG15SWNvbnMuZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXl0aW1lLnNyYyA9IG15SWNvbnMubmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0V2luZERpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdOJyA6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdOTkUnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTkUnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGhFYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VORSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aEVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5lYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VTRSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5lYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NFJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLnNvdXRoRWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTU0UnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGhFYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1MnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU1NXJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLnNvdXRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NXJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLnNvdXRoV2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdXU1cnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGhXZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMud2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdXTlcnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMud2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdOVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aFdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTk5XJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoV2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBteUljb25zLCBzZXREYXl0aW1lLCBzZXRXaW5kRGlyZWN0aW9uIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaWNvbk1hbmFnZXI7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbiwgY291bnRyeSwgY2Vsc2l1cywgZmFocmVuaGVpdCwgdGltZSwgd2luZEtwaCwgd2luZE1waCxcbiAgICAgICAgICAgICAgd2luZERpciwgcHJlY2lwTW0sIHByZWNpcEluLCBodW1pZGl0eSwgY2xvdWRzLCBpc0RheSwgY29uZGl0aW9uLCBzeXN0ZW0gPSAwKSB7XG5cbiAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMuX2NvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuX2NlbHNpdXMgPSBjZWxzaXVzO1xuICAgIHRoaXMuX2ZhaHJlbmhlaXQgPSBmYWhyZW5oZWl0O1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHRoaXMuX3dpbmRLcGggPSB3aW5kS3BoO1xuICAgIHRoaXMuX3dpbmRNcGggPSB3aW5kTXBoO1xuICAgIHRoaXMuX3dpbmREaXIgPSB3aW5kRGlyO1xuICAgIHRoaXMuX3ByZWNpcE1tID0gcHJlY2lwTW07XG4gICAgdGhpcy5fcHJlY2lwSW4gPSBwcmVjaXBJbjtcbiAgICB0aGlzLl9odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMuX2Nsb3VkcyA9IGNsb3VkcztcbiAgICB0aGlzLl9pc0RheSA9IGlzRGF5O1xuICAgIHRoaXMuX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICB0aGlzLl9zeXN0ZW0gPSBzeXN0ZW07XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcbiAgfVxuXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5XG4gIH1cblxuICBzZXQgY291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgdGhpcy5fY291bnRyeSA9IG5ld0NvdW50cnk7XG4gIH1cblxuICBnZXQgY2Vsc2l1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2Vsc2l1c1xuICB9XG5cbiAgc2V0IGNlbHNpdXModGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9jZWxzaXVzID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgZmFocmVuaGVpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFocmVuaGVpdFxuICB9XG5cbiAgc2V0IGZhaHJlbmhlaXQodGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9mYWhyZW5oZWl0ID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuXG4gIHNldCB0aW1lKG5ld1RpbWUpIHtcbiAgICB0aGlzLl90aW1lID0gbmV3VGltZTtcbiAgfVxuXG4gIGdldCB3aW5kS3BoKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kS3BoXG4gIH1cbiAgXG4gIHNldCB3aW5kS3BoKHNwZWVkKSB7XG4gICAgdGhpcy5fd2luZEtwaCA9IHNwZWVkO1xuICB9XG5cbiAgZ2V0IHdpbmRNcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmRNcGhcbiAgfVxuXG4gIHNldCB3aW5kTXBoKHNwZWVkKSB7XG4gICAgdGhpcy5fd2luZE1waCA9IHNwZWVkO1xuICB9XG5cbiAgZ2V0IHdpbmREaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmREaXJcbiAgfVxuXG4gIHNldCB3aW5kRGlyKGRpcmVjdGlvbikge1xuICAgIHRoaXMuX3dpbmREaXIgPSBkaXJlY3Rpb247XG4gIH1cbiAgXG4gIGdldCBwcmVjaXBNbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlY2lwTW1cbiAgfVxuXG4gIHNldCBwcmVjaXBNbShhbW91bnQpIHtcbiAgICB0aGlzLl9wcmVjaXBNbSA9IGFtb3VudDtcbiAgfVxuXG4gIGdldCBwcmVjaXBJbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlY2lwSW5cbiAgfVxuXG4gIHNldCBwcmVjaXBJbihhbW91bnQpIHtcbiAgICB0aGlzLl9wcmVjaXBJbiA9IGFtb3VudDtcbiAgfVxuXG4gIGdldCBodW1pZGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtaWRpdHlcbiAgfVxuXG4gIHNldCBodW1pZGl0eShwZXJjZW50YWdlKSB7XG4gICAgdGhpcy5faHVtaWRpdHkgPSBwZXJjZW50YWdlO1xuICB9XG5cbiAgZ2V0IGNsb3VkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWRzXG4gIH1cblxuICBzZXQgY2xvdWRzKGFtb3VudCkge1xuICAgIHRoaXMuX2Nsb3VkcyA9IGFtb3VudDtcbiAgfVxuXG4gIGdldCBpc0RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEYXk7XG4gIH1cblxuICBzZXQgaXNEYXkodGltZSkge1xuICAgIHRoaXMuX2lzRGF5ID0gdGltZTtcbiAgfVxuXG4gIGdldCBjb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbjtcbiAgfVxuXG4gIHNldCBjb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgdGhpcy5fY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0IHN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3lzdGVtO1xuICB9XG5cbiAgc2V0IHN5c3RlbShuZXdTeXN0ZW0pIHtcbiAgICB0aGlzLl9zeXN0ZW0gPSBuZXdTeXN0ZW07XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IGljb25NYW5hZ2VyIGZyb20gXCIuL2ljb25NYW5hZ2VyXCI7XG5cbmNvbnN0IG15V2VhdGhlciA9IG5ldyBXZWF0aGVyKCk7XG5jb25zdCBkaXNwbGF5ID0gRE9NKCk7XG5jb25zdCBpY29ucyA9IGljb25NYW5hZ2VyKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0yMjMyNDRjYmRiYTE0NjU4ODY3MTUwMjE3MjMzMTA1JnE9JHtsb2NhdGlvbn1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB3ZWF0aGVyO1xuICB9IGNhdGNoKGVycikge1xuICAgIGRpc3BsYXkuc2hvd0Vycm9yKGVycik7XG4gICAgcmV0dXJuIG15V2VhdGhlcjtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbik7XG4gICAgY29uc3QgY291bnRyeVRpbWUgPSBgJHtuZXcgRGF0ZSh3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bmV3IERhdGUod2VhdGhlck9iamVjdC5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcblxuICAgIG15V2VhdGhlci5sb2NhdGlvbiA9IHdlYXRoZXJPYmplY3QubG9jYXRpb24ubmFtZTtcbiAgICBteVdlYXRoZXIuY291bnRyeSA9IHdlYXRoZXJPYmplY3QubG9jYXRpb24uY291bnRyeTtcbiAgICBteVdlYXRoZXIuY2Vsc2l1cyA9IHdlYXRoZXJPYmplY3QuY3VycmVudC50ZW1wX2M7XG4gICAgbXlXZWF0aGVyLnRpbWUgPSBjb3VudHJ5VGltZTtcbiAgICBteVdlYXRoZXIuZmFocmVuaGVpdCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC50ZW1wX2Y7XG4gICAgbXlXZWF0aGVyLndpbmRLcGggPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9rcGg7XG4gICAgbXlXZWF0aGVyLndpbmRNcGggPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9tcGg7XG4gICAgbXlXZWF0aGVyLndpbmREaXIgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9kaXI7XG4gICAgbXlXZWF0aGVyLnByZWNpcE1tID0gd2VhdGhlck9iamVjdC5jdXJyZW50LnByZWNpcF9tbTtcbiAgICBteVdlYXRoZXIucHJlY2lwSW4gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX2luO1xuICAgIG15V2VhdGhlci5odW1pZGl0eSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5odW1pZGl0eTtcbiAgICBteVdlYXRoZXIuY2xvdWRzID0gd2VhdGhlck9iamVjdC5jdXJyZW50LmNsb3VkO1xuICAgIG15V2VhdGhlci5pc0RheSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5pc19kYXk7XG4gICAgbXlXZWF0aGVyLmNvbmRpdGlvbiA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICAgIGRpc3BsYXkuY2xlYXJFcnJvcigpO1xuICB9IGNhdGNoKGVycikge1xuICAgIGRpc3BsYXkuc2hvd0Vycm9yKGVycik7XG4gIH1cbnJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVJY29ucyh0aW1lLCB3aW5kKSB7XG4gIGljb25zLnNldERheXRpbWUodGltZSk7XG4gIGljb25zLnNldFdpbmREaXJlY3Rpb24od2luZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5ld1dlYXRoZXIobmV3TG9jYXRpb24pIHtcbiAgYXdhaXQgdXBkYXRlV2VhdGhlcihuZXdMb2NhdGlvbik7XG4gIGlmKG15V2VhdGhlci5zeXN0ZW0gPT09IDApIHtcbiAgICBkaXNwbGF5LnJlZnJlc2gobXlXZWF0aGVyLmxvY2F0aW9uLCBteVdlYXRoZXIuY291bnRyeSwgYCR7bXlXZWF0aGVyLmNlbHNpdXN9wrBDYCwgYCR7bXlXZWF0aGVyLnRpbWV9IEhTYCxcbiAgICBgJHtteVdlYXRoZXIud2luZEtwaH0gS20vSGAsIGAke215V2VhdGhlci5wcmVjaXBNbX1tbWAsIGAke215V2VhdGhlci5odW1pZGl0eX0lYCwgYCR7bXlXZWF0aGVyLmNsb3Vkc30lYCwgXG4gICAgYCgke215V2VhdGhlci5jb25kaXRpb259KWApO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkucmVmcmVzaChteVdlYXRoZXIubG9jYXRpb24sIG15V2VhdGhlci5jb3VudHJ5LCBgJHtteVdlYXRoZXIuZmFocmVuaGVpdH3CsEZgLCBgJHtteVdlYXRoZXIudGltZX0gSFNgLFxuICAgIGAke215V2VhdGhlci53aW5kTXBofSBNUEhgLCBgJHtteVdlYXRoZXIucHJlY2lwSW59aW5gLCBgJHtteVdlYXRoZXIuaHVtaWRpdHl9JWAsIGAke215V2VhdGhlci5jbG91ZHN9JWAsIFxuICAgIGAoJHtteVdlYXRoZXIuY29uZGl0aW9ufSlgKTtcbiAgfVxuXG4gIHVwZGF0ZUljb25zKG15V2VhdGhlci5pc0RheSwgbXlXZWF0aGVyLndpbmREaXIpO1xufVxuXG5uZXdXZWF0aGVyKCdDb3Jkb2JhJyk7XG5cbmRpc3BsYXkuaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuZXdXZWF0aGVyKGRpc3BsYXkuZ2V0SW5wdXQoKSk7XG4gIH1cbn0pO1xuXG5kaXNwbGF5LnRvZ2dsZVN5c3RlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYobXlXZWF0aGVyLnN5c3RlbSA9PT0gMCkge1xuICAgIG15V2VhdGhlci5zeXN0ZW0gPSAxO1xuICAgIGRpc3BsYXkudG9nZ2xlU3lzdGVtLnNyYyA9IGljb25zLm15SWNvbnMudG9nZ2xlUmlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgbXlXZWF0aGVyLnN5c3RlbSA9IDA7XG4gICAgZGlzcGxheS50b2dnbGVTeXN0ZW0uc3JjID0gaWNvbnMubXlJY29ucy50b2dnbGVMZWZ0O1xuICB9XG5cbiAgbmV3V2VhdGhlcihteVdlYXRoZXIubG9jYXRpb24pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=