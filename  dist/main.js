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
    northWest: './assets/NW.png'
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
              windDir, precipMm, precipIn, humidity, clouds, isDay, condition) {

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
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=223244cbdba14658867150217233105&q=${location}`, {mode: 'cors'});
  const weather = await response.json();
  
  return weather;
}

async function updateWeather(location) {
  const weatherObject = await getLocationWeather(location);
  const countryTime = `${new Date(weatherObject.location.localtime).getHours().toString().padStart(2, '0')}:${new Date(weatherObject.location.localtime).getMinutes().toString().padStart(2, '0')}`;

  myWeather.location = weatherObject.location.name;
  myWeather.country = weatherObject.location.country;
  myWeather.celsius = weatherObject.current.temp_c;
  myWeather.fahrenheit = weatherObject.current.temp_f;
  myWeather.time = countryTime;
  myWeather.windKph = weatherObject.current.wind_kph;
  myWeather.windMph = weatherObject.current.wind_mph;
  myWeather.windDir = weatherObject.current.wind_dir;
  myWeather.precipMm = weatherObject.current.precip_mm;
  myWeather.precipIn = weatherObject.current.precip_in;
  myWeather.humidity = weatherObject.current.humidity;
  myWeather.clouds = weatherObject.current.cloud;
  myWeather.isDay = weatherObject.current.is_day;
  myWeather.condition = weatherObject.current.condition.text;
}

function updateIcons(time, wind) {
  icons.setDaytime(time);
  icons.setWindDirection(wind);
}

async function newWeather(newLocation) {
  await updateWeather(newLocation);
  display.refresh(myWeather.location, myWeather.country, `${myWeather.celsius}°C`, `${myWeather.time} HS`,`${myWeather.windKph}`,
               `${myWeather.precipMm}mm`, `${myWeather.humidity}%`, `${myWeather.clouds}%`, `(${myWeather.condition})`);
  updateIcons(myWeather.isDay, myWeather.windDir);
}

newWeather('Cordoba');

display.inputSearch.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    newWeather(display.getInput());
  }
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvRjs7QUFFbE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsa0JBQWtCLFFBQVEsZ0JBQWdCLE9BQU8sa0JBQWtCO0FBQy9ILGtCQUFrQixtQkFBbUIsUUFBUSxtQkFBbUIsT0FBTyxpQkFBaUIsUUFBUSxvQkFBb0I7QUFDcEg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaWNvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTSA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtc2VhcmNoJyk7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG4gIGNvbnN0IHByZWNpcGl0YXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWNpcGl0YXRpb25zJyk7XG4gIGNvbnN0IGNsb3VkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG91ZHMnKTtcbiAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25kaXRpb24tdGV4dCcpO1xuICBjb25zdCBjb3VudHJ5VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5LXRpbWUnKTtcbiAgY29uc3QgdG9nZ2xlU3lzdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zeXN0ZW0nKTtcblxuICBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gaW5wdXRTZWFyY2gudmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaXR5KG5ld0NpdHkpIHtcbiAgICBjaXR5LmlubmVySFRNTCA9IG5ld0NpdHk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb3VudHJ5KG5ld0NvdW50cnkpIHtcbiAgICBjb3VudHJ5LmlubmVySFRNTCA9IG5ld0NvdW50cnk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUZW1wZXJhdHVyZShuZXdUZW1wKSB7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gbmV3VGVtcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVdpbmQobmV3V2luZCkge1xuICAgIHdpbmQuaW5uZXJIVE1MID0gbmV3V2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByZWNpcGl0YXRpb25zKG5ld1ByZWNpcCkgeyBcbiAgICBwcmVjaXBpdGF0aW9ucy5pbm5lckhUTUwgPSBuZXdQcmVjaXA7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVIdW1pZGl0eShuZXdIdW1pZGl0eSkge1xuICAgIGh1bWlkaXR5LmlubmVySFRNTCA9IG5ld0h1bWlkaXR5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2xvdWRzKG5ld0Nsb3Vkcykge1xuICAgIGNsb3Vkcy5pbm5lckhUTUwgPSBuZXdDbG91ZHM7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb25kaXRpb24obmV3Q29uZGl0aW9uKSB7XG4gICAgY29uZGl0aW9uVGV4dC5pbm5lckhUTUwgPSBuZXdDb25kaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb3VudHJ5VGltZShuZXdUaW1lKSB7XG4gICAgY291bnRyeVRpbWUuaW5uZXJIVE1MID0gbmV3VGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZnJlc2gobXlDaXR5LCBteUNvdW50cnksIG15VGVtcCwgbXlUaW1lLCBteVdpbmQsIG15UHJlY3MsIG15SHVtaWRpdHksIG15Q2xvdWRzLCBteUNvbmRpdGlvbikge1xuICAgIHVwZGF0ZUNpdHkobXlDaXR5KTtcbiAgICB1cGRhdGVDb3VudHJ5KG15Q291bnRyeSk7XG4gICAgdXBkYXRlVGVtcGVyYXR1cmUobXlUZW1wKTtcbiAgICB1cGRhdGVDb3VudHJ5VGltZShteVRpbWUpO1xuICAgIHVwZGF0ZVdpbmQobXlXaW5kKTtcbiAgICB1cGRhdGVQcmVjaXBpdGF0aW9ucyhteVByZWNzKTtcbiAgICB1cGRhdGVIdW1pZGl0eShteUh1bWlkaXR5KTtcbiAgICB1cGRhdGVDbG91ZHMobXlDbG91ZHMpO1xuICAgIHVwZGF0ZUNvbmRpdGlvbihteUNvbmRpdGlvbik7XG4gIH1cblxuICByZXR1cm4geyBpbnB1dFNlYXJjaCwgdG9nZ2xlU3lzdGVtLCBnZXRJbnB1dCwgcmVmcmVzaCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJjb25zdCBpY29uTWFuYWdlciA9ICgpID0+IHtcbiAgY29uc3QgbXlJY29ucyA9IHtcbiAgICBkYXk6ICcuL2Fzc2V0cy9kYXkucG5nJyxcbiAgICBuaWdodDogJy4vYXNzZXRzL25pZ2h0LnBuZycsXG4gICAgbm9ydGg6ICcuL2Fzc2V0cy9OLnBuZycsXG4gICAgbm9ydGhFYXN0OiAnLi9hc3NldHMvTkUucG5nJyxcbiAgICBlYXN0OiAnLi9hc3NldHMvRS5wbmcnLFxuICAgIHNvdXRoRWFzdDogJy4vYXNzZXRzL1NFLnBuZycsXG4gICAgc291dGg6ICcuL2Fzc2V0cy9TLnBuZycsXG4gICAgc291dGhXZXN0OiAnLi9hc3NldHMvU1cucG5nJyxcbiAgICB3ZXN0OiAnLi9hc3NldHMvVy5wbmcnLFxuICAgIG5vcnRoV2VzdDogJy4vYXNzZXRzL05XLnBuZydcbiAgfVxuXG4gIGNvbnN0IGRheXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5dGltZScpO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtZGlyZWN0aW9uJyk7XG5cbiAgZnVuY3Rpb24gc2V0RGF5dGltZSh0aW1lKSB7XG4gICAgaWYodGltZSA9PT0gMSkge1xuICAgICAgZGF5dGltZS5zcmMgPSBteUljb25zLmRheTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5dGltZS5zcmMgPSBteUljb25zLm5pZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFdpbmREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnTicgOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTk5FJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ05FJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoRWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFTkUnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGhFYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuZWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFU0UnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuZWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTRSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aEVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU1NFJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLnNvdXRoRWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLnNvdXRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NTVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aFdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnV1NXJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLnNvdXRoV2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLndlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnV05XJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLndlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTlcnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGhXZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ05OVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aFdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbXlJY29ucywgc2V0RGF5dGltZSwgc2V0V2luZERpcmVjdGlvbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGljb25NYW5hZ2VyOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24sIGNvdW50cnksIGNlbHNpdXMsIGZhaHJlbmhlaXQsIHRpbWUsIHdpbmRLcGgsIHdpbmRNcGgsXG4gICAgICAgICAgICAgIHdpbmREaXIsIHByZWNpcE1tLCBwcmVjaXBJbiwgaHVtaWRpdHksIGNsb3VkcywgaXNEYXksIGNvbmRpdGlvbikge1xuXG4gICAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLl9jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLl9jZWxzaXVzID0gY2Vsc2l1cztcbiAgICB0aGlzLl9mYWhyZW5oZWl0ID0gZmFocmVuaGVpdDtcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICB0aGlzLl93aW5kS3BoID0gd2luZEtwaDtcbiAgICB0aGlzLl93aW5kTXBoID0gd2luZE1waDtcbiAgICB0aGlzLl93aW5kRGlyID0gd2luZERpcjtcbiAgICB0aGlzLl9wcmVjaXBNbSA9IHByZWNpcE1tO1xuICAgIHRoaXMuX3ByZWNpcEluID0gcHJlY2lwSW47XG4gICAgdGhpcy5faHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLl9jbG91ZHMgPSBjbG91ZHM7XG4gICAgdGhpcy5faXNEYXkgPSBpc0RheTtcbiAgICB0aGlzLl9jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcbiAgfVxuXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5XG4gIH1cblxuICBzZXQgY291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgdGhpcy5fY291bnRyeSA9IG5ld0NvdW50cnk7XG4gIH1cblxuICBnZXQgY2Vsc2l1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2Vsc2l1c1xuICB9XG5cbiAgc2V0IGNlbHNpdXModGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9jZWxzaXVzID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgZmFocmVuaGVpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFocmVuaGVpdFxuICB9XG5cbiAgc2V0IGZhaHJlbmhlaXQodGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9mYWhyZW5oZWl0ID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuXG4gIHNldCB0aW1lKG5ld1RpbWUpIHtcbiAgICB0aGlzLl90aW1lID0gbmV3VGltZTtcbiAgfVxuXG4gIGdldCB3aW5kS3BoKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kS3BoXG4gIH1cbiAgXG4gIHNldCB3aW5kS3BoKHNwZWVkKSB7XG4gICAgdGhpcy5fd2luZEtwaCA9IHNwZWVkO1xuICB9XG5cbiAgZ2V0IHdpbmRNcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmRNcGhcbiAgfVxuXG4gIHNldCB3aW5kTXBoKHNwZWVkKSB7XG4gICAgdGhpcy5fd2luZE1waCA9IHNwZWVkO1xuICB9XG5cbiAgZ2V0IHdpbmREaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmREaXJcbiAgfVxuXG4gIHNldCB3aW5kRGlyKGRpcmVjdGlvbikge1xuICAgIHRoaXMuX3dpbmREaXIgPSBkaXJlY3Rpb247XG4gIH1cbiAgXG4gIGdldCBwcmVjaXBNbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlY2lwTW1cbiAgfVxuXG4gIHNldCBwcmVjaXBNbShhbW91bnQpIHtcbiAgICB0aGlzLl9wcmVjaXBNbSA9IGFtb3VudDtcbiAgfVxuXG4gIGdldCBwcmVjaXBJbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlY2lwSW5cbiAgfVxuXG4gIHNldCBwcmVjaXBJbihhbW91bnQpIHtcbiAgICB0aGlzLl9wcmVjaXBJbiA9IGFtb3VudDtcbiAgfVxuXG4gIGdldCBodW1pZGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtaWRpdHlcbiAgfVxuXG4gIHNldCBodW1pZGl0eShwZXJjZW50YWdlKSB7XG4gICAgdGhpcy5faHVtaWRpdHkgPSBwZXJjZW50YWdlO1xuICB9XG5cbiAgZ2V0IGNsb3VkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWRzXG4gIH1cblxuICBzZXQgY2xvdWRzKGFtb3VudCkge1xuICAgIHRoaXMuX2Nsb3VkcyA9IGFtb3VudDtcbiAgfVxuXG4gIGdldCBpc0RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEYXk7XG4gIH1cblxuICBzZXQgaXNEYXkodGltZSkge1xuICAgIHRoaXMuX2lzRGF5ID0gdGltZTtcbiAgfVxuXG4gIGdldCBjb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbjtcbiAgfVxuXG4gIHNldCBjb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgdGhpcy5fY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyXCI7XG5pbXBvcnQgRE9NIGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBpY29uTWFuYWdlciBmcm9tIFwiLi9pY29uTWFuYWdlclwiO1xuXG5jb25zdCBteVdlYXRoZXIgPSBuZXcgV2VhdGhlcigpO1xuY29uc3QgZGlzcGxheSA9IERPTSgpO1xuY29uc3QgaWNvbnMgPSBpY29uTWFuYWdlcigpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbldlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTIyMzI0NGNiZGJhMTQ2NTg4NjcxNTAyMTcyMzMxMDUmcT0ke2xvY2F0aW9ufWAsIHttb2RlOiAnY29ycyd9KTtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gIHJldHVybiB3ZWF0aGVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBhd2FpdCBnZXRMb2NhdGlvbldlYXRoZXIobG9jYXRpb24pO1xuICBjb25zdCBjb3VudHJ5VGltZSA9IGAke25ldyBEYXRlKHdlYXRoZXJPYmplY3QubG9jYXRpb24ubG9jYWx0aW1lKS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtuZXcgRGF0ZSh3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuXG4gIG15V2VhdGhlci5sb2NhdGlvbiA9IHdlYXRoZXJPYmplY3QubG9jYXRpb24ubmFtZTtcbiAgbXlXZWF0aGVyLmNvdW50cnkgPSB3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLmNvdW50cnk7XG4gIG15V2VhdGhlci5jZWxzaXVzID0gd2VhdGhlck9iamVjdC5jdXJyZW50LnRlbXBfYztcbiAgbXlXZWF0aGVyLmZhaHJlbmhlaXQgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQudGVtcF9mO1xuICBteVdlYXRoZXIudGltZSA9IGNvdW50cnlUaW1lO1xuICBteVdlYXRoZXIud2luZEtwaCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC53aW5kX2twaDtcbiAgbXlXZWF0aGVyLndpbmRNcGggPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9tcGg7XG4gIG15V2VhdGhlci53aW5kRGlyID0gd2VhdGhlck9iamVjdC5jdXJyZW50LndpbmRfZGlyO1xuICBteVdlYXRoZXIucHJlY2lwTW0gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX21tO1xuICBteVdlYXRoZXIucHJlY2lwSW4gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX2luO1xuICBteVdlYXRoZXIuaHVtaWRpdHkgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuaHVtaWRpdHk7XG4gIG15V2VhdGhlci5jbG91ZHMgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuY2xvdWQ7XG4gIG15V2VhdGhlci5pc0RheSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5pc19kYXk7XG4gIG15V2VhdGhlci5jb25kaXRpb24gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUljb25zKHRpbWUsIHdpbmQpIHtcbiAgaWNvbnMuc2V0RGF5dGltZSh0aW1lKTtcbiAgaWNvbnMuc2V0V2luZERpcmVjdGlvbih3aW5kKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmV3V2VhdGhlcihuZXdMb2NhdGlvbikge1xuICBhd2FpdCB1cGRhdGVXZWF0aGVyKG5ld0xvY2F0aW9uKTtcbiAgZGlzcGxheS5yZWZyZXNoKG15V2VhdGhlci5sb2NhdGlvbiwgbXlXZWF0aGVyLmNvdW50cnksIGAke215V2VhdGhlci5jZWxzaXVzfcKwQ2AsIGAke215V2VhdGhlci50aW1lfSBIU2AsYCR7bXlXZWF0aGVyLndpbmRLcGh9YCxcbiAgICAgICAgICAgICAgIGAke215V2VhdGhlci5wcmVjaXBNbX1tbWAsIGAke215V2VhdGhlci5odW1pZGl0eX0lYCwgYCR7bXlXZWF0aGVyLmNsb3Vkc30lYCwgYCgke215V2VhdGhlci5jb25kaXRpb259KWApO1xuICB1cGRhdGVJY29ucyhteVdlYXRoZXIuaXNEYXksIG15V2VhdGhlci53aW5kRGlyKTtcbn1cblxubmV3V2VhdGhlcignQ29yZG9iYScpO1xuXG5kaXNwbGF5LmlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmV3V2VhdGhlcihkaXNwbGF5LmdldElucHV0KCkpO1xuICB9XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9