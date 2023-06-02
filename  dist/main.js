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
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=223244cbdba14658867150217233105&q=${location}`, {mode: 'cors'});
  const weather = await response.json();
  
  return weather;
}

async function updateWeather(location) {
  const weatherObject = await getLocationWeather(location);
  const countryTime = `${new Date(weatherObject.location.localtime).getHours().toString().padStart(2, '0')}:${new Date(weatherObject.location.localtime).getMinutes().toString().padStart(2, '0')}`;

  myWeather.location = weatherObject.location.name;
  myWeather.country = weatherObject.location.country;
  myWeather.time = countryTime;
  myWeather.humidity = weatherObject.current.humidity;
  myWeather.clouds = weatherObject.current.cloud;
  myWeather.isDay = weatherObject.current.is_day;
  myWeather.condition = weatherObject.current.condition.text;
  myWeather.celsius = weatherObject.current.temp_c;
  myWeather.fahrenheit = weatherObject.current.temp_f;
  myWeather.windKph = weatherObject.current.wind_kph;
  myWeather.windMph = weatherObject.current.wind_mph;
  myWeather.windDir = weatherObject.current.wind_dir;
  myWeather.precipMm = weatherObject.current.precip_mm;
  myWeather.precipIn = weatherObject.current.precip_in;
}

function updateIcons(time, wind) {
  icons.setDaytime(time);
  icons.setWindDirection(wind);
}

async function newWeather(newLocation) {
  await updateWeather(newLocation);
  if(myWeather.system === 0) {
    display.refresh(myWeather.location, myWeather.country, `${myWeather.celsius}°C`, `${myWeather.time} HS`,
    `${myWeather.windKph} KPH`, `${myWeather.precipMm}mm`, `${myWeather.humidity}%`, `${myWeather.clouds}%`, 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUNwRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDdEYxQjtBQUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzdJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDSjtBQUNZOztBQUV4QyxzQkFBc0IsZ0RBQU87QUFDN0IsZ0JBQWdCLG9EQUFHO0FBQ25CLGNBQWMsd0RBQVc7O0FBRXpCO0FBQ0Esa0hBQWtILFNBQVMsSUFBSSxhQUFhO0FBQzVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsa0ZBQWtGLEdBQUcsb0ZBQW9GOztBQUVsTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQThELGtCQUFrQixRQUFRLGdCQUFnQjtBQUN4RyxPQUFPLG1CQUFtQixTQUFTLG1CQUFtQixRQUFRLG1CQUFtQixPQUFPLGlCQUFpQjtBQUN6RyxRQUFRLG9CQUFvQjtBQUM1QixJQUFJO0FBQ0osOERBQThELHFCQUFxQixRQUFRLGdCQUFnQjtBQUMzRyxPQUFPLG1CQUFtQixTQUFTLG1CQUFtQixRQUFRLG1CQUFtQixPQUFPLGlCQUFpQjtBQUN6RyxRQUFRLG9CQUFvQjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ljb25NYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBET00gPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXNlYXJjaCcpO1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXBpdGF0aW9ucycpO1xuICBjb25zdCBjbG91ZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvdWRzJyk7XG4gIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uLXRleHQnKTtcbiAgY29uc3QgY291bnRyeVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeS10aW1lJyk7XG4gIGNvbnN0IHRvZ2dsZVN5c3RlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc3lzdGVtJyk7XG5cbiAgZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIGlucHV0U2VhcmNoLnZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2l0eShuZXdDaXR5KSB7XG4gICAgY2l0eS5pbm5lckhUTUwgPSBuZXdDaXR5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgY291bnRyeS5pbm5lckhUTUwgPSBuZXdDb3VudHJ5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmUobmV3VGVtcCkge1xuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IG5ld1RlbXA7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVXaW5kKG5ld1dpbmQpIHtcbiAgICB3aW5kLmlubmVySFRNTCA9IG5ld1dpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQcmVjaXBpdGF0aW9ucyhuZXdQcmVjaXApIHsgXG4gICAgcHJlY2lwaXRhdGlvbnMuaW5uZXJIVE1MID0gbmV3UHJlY2lwO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlSHVtaWRpdHkobmV3SHVtaWRpdHkpIHtcbiAgICBodW1pZGl0eS5pbm5lckhUTUwgPSBuZXdIdW1pZGl0eTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNsb3VkcyhuZXdDbG91ZHMpIHtcbiAgICBjbG91ZHMuaW5uZXJIVE1MID0gbmV3Q2xvdWRzO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ29uZGl0aW9uKG5ld0NvbmRpdGlvbikge1xuICAgIGNvbmRpdGlvblRleHQuaW5uZXJIVE1MID0gbmV3Q29uZGl0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ291bnRyeVRpbWUobmV3VGltZSkge1xuICAgIGNvdW50cnlUaW1lLmlubmVySFRNTCA9IG5ld1RpbWU7XG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoKG15Q2l0eSwgbXlDb3VudHJ5LCBteVRlbXAsIG15VGltZSwgbXlXaW5kLCBteVByZWNzLCBteUh1bWlkaXR5LCBteUNsb3VkcywgbXlDb25kaXRpb24pIHtcbiAgICB1cGRhdGVDaXR5KG15Q2l0eSk7XG4gICAgdXBkYXRlQ291bnRyeShteUNvdW50cnkpO1xuICAgIHVwZGF0ZVRlbXBlcmF0dXJlKG15VGVtcCk7XG4gICAgdXBkYXRlQ291bnRyeVRpbWUobXlUaW1lKTtcbiAgICB1cGRhdGVXaW5kKG15V2luZCk7XG4gICAgdXBkYXRlUHJlY2lwaXRhdGlvbnMobXlQcmVjcyk7XG4gICAgdXBkYXRlSHVtaWRpdHkobXlIdW1pZGl0eSk7XG4gICAgdXBkYXRlQ2xvdWRzKG15Q2xvdWRzKTtcbiAgICB1cGRhdGVDb25kaXRpb24obXlDb25kaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5wdXRTZWFyY2gsIHRvZ2dsZVN5c3RlbSwgZ2V0SW5wdXQsIHJlZnJlc2ggfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiY29uc3QgaWNvbk1hbmFnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG15SWNvbnMgPSB7XG4gICAgZGF5OiAnLi9hc3NldHMvZGF5LnBuZycsXG4gICAgbmlnaHQ6ICcuL2Fzc2V0cy9uaWdodC5wbmcnLFxuICAgIG5vcnRoOiAnLi9hc3NldHMvTi5wbmcnLFxuICAgIG5vcnRoRWFzdDogJy4vYXNzZXRzL05FLnBuZycsXG4gICAgZWFzdDogJy4vYXNzZXRzL0UucG5nJyxcbiAgICBzb3V0aEVhc3Q6ICcuL2Fzc2V0cy9TRS5wbmcnLFxuICAgIHNvdXRoOiAnLi9hc3NldHMvUy5wbmcnLFxuICAgIHNvdXRoV2VzdDogJy4vYXNzZXRzL1NXLnBuZycsXG4gICAgd2VzdDogJy4vYXNzZXRzL1cucG5nJyxcbiAgICBub3J0aFdlc3Q6ICcuL2Fzc2V0cy9OVy5wbmcnLFxuICAgIHRvZ2dsZUxlZnQ6ICcuL2Fzc2V0cy90b2dnbGVMZWZ0LnBuZycsXG4gICAgdG9nZ2xlUmlnaHQ6ICcuL2Fzc2V0cy90b2dnbGVSaWdodC5wbmcnXG4gIH1cblxuICBjb25zdCBkYXl0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXRpbWUnKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLWRpcmVjdGlvbicpO1xuXG4gIGZ1bmN0aW9uIHNldERheXRpbWUodGltZSkge1xuICAgIGlmKHRpbWUgPT09IDEpIHtcbiAgICAgIGRheXRpbWUuc3JjID0gbXlJY29ucy5kYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheXRpbWUuc3JjID0gbXlJY29ucy5uaWdodDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ04nIDpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ05ORSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdORSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aEVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRU5FJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoRWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLmVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRVNFJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLmVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU0UnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGhFYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NTRSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aEVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTU1cnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU1cnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGhXZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1dTVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aFdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy53ZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1dOVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy53ZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ05XJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoV2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdOTlcnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGhXZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG15SWNvbnMsIHNldERheXRpbWUsIHNldFdpbmREaXJlY3Rpb24gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpY29uTWFuYWdlcjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uLCBjb3VudHJ5LCBjZWxzaXVzLCBmYWhyZW5oZWl0LCB0aW1lLCB3aW5kS3BoLCB3aW5kTXBoLFxuICAgICAgICAgICAgICB3aW5kRGlyLCBwcmVjaXBNbSwgcHJlY2lwSW4sIGh1bWlkaXR5LCBjbG91ZHMsIGlzRGF5LCBjb25kaXRpb24sIHN5c3RlbSA9IDApIHtcblxuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5fY291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy5fY2Vsc2l1cyA9IGNlbHNpdXM7XG4gICAgdGhpcy5fZmFocmVuaGVpdCA9IGZhaHJlbmhlaXQ7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgdGhpcy5fd2luZEtwaCA9IHdpbmRLcGg7XG4gICAgdGhpcy5fd2luZE1waCA9IHdpbmRNcGg7XG4gICAgdGhpcy5fd2luZERpciA9IHdpbmREaXI7XG4gICAgdGhpcy5fcHJlY2lwTW0gPSBwcmVjaXBNbTtcbiAgICB0aGlzLl9wcmVjaXBJbiA9IHByZWNpcEluO1xuICAgIHRoaXMuX2h1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy5fY2xvdWRzID0gY2xvdWRzO1xuICAgIHRoaXMuX2lzRGF5ID0gaXNEYXk7XG4gICAgdGhpcy5fY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuX3N5c3RlbSA9IHN5c3RlbTtcbiAgfVxuXG4gIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cblxuICBzZXQgbG9jYXRpb24obmV3TG9jYXRpb24pIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuICB9XG5cbiAgZ2V0IGNvdW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50cnlcbiAgfVxuXG4gIHNldCBjb3VudHJ5KG5ld0NvdW50cnkpIHtcbiAgICB0aGlzLl9jb3VudHJ5ID0gbmV3Q291bnRyeTtcbiAgfVxuXG4gIGdldCBjZWxzaXVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jZWxzaXVzXG4gIH1cblxuICBzZXQgY2Vsc2l1cyh0ZW1wZXJhdHVyZSkge1xuICAgIHRoaXMuX2NlbHNpdXMgPSB0ZW1wZXJhdHVyZTtcbiAgfVxuXG4gIGdldCBmYWhyZW5oZWl0KCkge1xuICAgIHJldHVybiB0aGlzLl9mYWhyZW5oZWl0XG4gIH1cblxuICBzZXQgZmFocmVuaGVpdCh0ZW1wZXJhdHVyZSkge1xuICAgIHRoaXMuX2ZhaHJlbmhlaXQgPSB0ZW1wZXJhdHVyZTtcbiAgfVxuXG4gIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG5cbiAgc2V0IHRpbWUobmV3VGltZSkge1xuICAgIHRoaXMuX3RpbWUgPSBuZXdUaW1lO1xuICB9XG5cbiAgZ2V0IHdpbmRLcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmRLcGhcbiAgfVxuICBcbiAgc2V0IHdpbmRLcGgoc3BlZWQpIHtcbiAgICB0aGlzLl93aW5kS3BoID0gc3BlZWQ7XG4gIH1cblxuICBnZXQgd2luZE1waCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZE1waFxuICB9XG5cbiAgc2V0IHdpbmRNcGgoc3BlZWQpIHtcbiAgICB0aGlzLl93aW5kTXBoID0gc3BlZWQ7XG4gIH1cblxuICBnZXQgd2luZERpcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZERpclxuICB9XG5cbiAgc2V0IHdpbmREaXIoZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fd2luZERpciA9IGRpcmVjdGlvbjtcbiAgfVxuICBcbiAgZ2V0IHByZWNpcE1tKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVjaXBNbVxuICB9XG5cbiAgc2V0IHByZWNpcE1tKGFtb3VudCkge1xuICAgIHRoaXMuX3ByZWNpcE1tID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0IHByZWNpcEluKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVjaXBJblxuICB9XG5cbiAgc2V0IHByZWNpcEluKGFtb3VudCkge1xuICAgIHRoaXMuX3ByZWNpcEluID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0IGh1bWlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1pZGl0eVxuICB9XG5cbiAgc2V0IGh1bWlkaXR5KHBlcmNlbnRhZ2UpIHtcbiAgICB0aGlzLl9odW1pZGl0eSA9IHBlcmNlbnRhZ2U7XG4gIH1cblxuICBnZXQgY2xvdWRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHNcbiAgfVxuXG4gIHNldCBjbG91ZHMoYW1vdW50KSB7XG4gICAgdGhpcy5fY2xvdWRzID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0IGlzRGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc0RheTtcbiAgfVxuXG4gIHNldCBpc0RheSh0aW1lKSB7XG4gICAgdGhpcy5faXNEYXkgPSB0aW1lO1xuICB9XG5cbiAgZ2V0IGNvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZGl0aW9uO1xuICB9XG5cbiAgc2V0IGNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICB0aGlzLl9jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICBnZXQgc3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zeXN0ZW07XG4gIH1cblxuICBzZXQgc3lzdGVtKG5ld1N5c3RlbSkge1xuICAgIHRoaXMuX3N5c3RlbSA9IG5ld1N5c3RlbTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgaWNvbk1hbmFnZXIgZnJvbSBcIi4vaWNvbk1hbmFnZXJcIjtcblxuY29uc3QgbXlXZWF0aGVyID0gbmV3IFdlYXRoZXIoKTtcbmNvbnN0IGRpc3BsYXkgPSBET00oKTtcbmNvbnN0IGljb25zID0gaWNvbk1hbmFnZXIoKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0yMjMyNDRjYmRiYTE0NjU4ODY3MTUwMjE3MjMzMTA1JnE9JHtsb2NhdGlvbn1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIFxuICByZXR1cm4gd2VhdGhlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gYXdhaXQgZ2V0TG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uKTtcbiAgY29uc3QgY291bnRyeVRpbWUgPSBgJHtuZXcgRGF0ZSh3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bmV3IERhdGUod2VhdGhlck9iamVjdC5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcblxuICBteVdlYXRoZXIubG9jYXRpb24gPSB3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLm5hbWU7XG4gIG15V2VhdGhlci5jb3VudHJ5ID0gd2VhdGhlck9iamVjdC5sb2NhdGlvbi5jb3VudHJ5O1xuICBteVdlYXRoZXIudGltZSA9IGNvdW50cnlUaW1lO1xuICBteVdlYXRoZXIuaHVtaWRpdHkgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuaHVtaWRpdHk7XG4gIG15V2VhdGhlci5jbG91ZHMgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuY2xvdWQ7XG4gIG15V2VhdGhlci5pc0RheSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5pc19kYXk7XG4gIG15V2VhdGhlci5jb25kaXRpb24gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIG15V2VhdGhlci5jZWxzaXVzID0gd2VhdGhlck9iamVjdC5jdXJyZW50LnRlbXBfYztcbiAgbXlXZWF0aGVyLmZhaHJlbmhlaXQgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQudGVtcF9mO1xuICBteVdlYXRoZXIud2luZEtwaCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC53aW5kX2twaDtcbiAgbXlXZWF0aGVyLndpbmRNcGggPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9tcGg7XG4gIG15V2VhdGhlci53aW5kRGlyID0gd2VhdGhlck9iamVjdC5jdXJyZW50LndpbmRfZGlyO1xuICBteVdlYXRoZXIucHJlY2lwTW0gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX21tO1xuICBteVdlYXRoZXIucHJlY2lwSW4gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX2luO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVJY29ucyh0aW1lLCB3aW5kKSB7XG4gIGljb25zLnNldERheXRpbWUodGltZSk7XG4gIGljb25zLnNldFdpbmREaXJlY3Rpb24od2luZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5ld1dlYXRoZXIobmV3TG9jYXRpb24pIHtcbiAgYXdhaXQgdXBkYXRlV2VhdGhlcihuZXdMb2NhdGlvbik7XG4gIGlmKG15V2VhdGhlci5zeXN0ZW0gPT09IDApIHtcbiAgICBkaXNwbGF5LnJlZnJlc2gobXlXZWF0aGVyLmxvY2F0aW9uLCBteVdlYXRoZXIuY291bnRyeSwgYCR7bXlXZWF0aGVyLmNlbHNpdXN9wrBDYCwgYCR7bXlXZWF0aGVyLnRpbWV9IEhTYCxcbiAgICBgJHtteVdlYXRoZXIud2luZEtwaH0gS1BIYCwgYCR7bXlXZWF0aGVyLnByZWNpcE1tfW1tYCwgYCR7bXlXZWF0aGVyLmh1bWlkaXR5fSVgLCBgJHtteVdlYXRoZXIuY2xvdWRzfSVgLCBcbiAgICBgKCR7bXlXZWF0aGVyLmNvbmRpdGlvbn0pYCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheS5yZWZyZXNoKG15V2VhdGhlci5sb2NhdGlvbiwgbXlXZWF0aGVyLmNvdW50cnksIGAke215V2VhdGhlci5mYWhyZW5oZWl0fcKwRmAsIGAke215V2VhdGhlci50aW1lfSBIU2AsXG4gICAgYCR7bXlXZWF0aGVyLndpbmRNcGh9IE1QSGAsIGAke215V2VhdGhlci5wcmVjaXBJbn1pbmAsIGAke215V2VhdGhlci5odW1pZGl0eX0lYCwgYCR7bXlXZWF0aGVyLmNsb3Vkc30lYCwgXG4gICAgYCgke215V2VhdGhlci5jb25kaXRpb259KWApO1xuICB9XG5cbiAgdXBkYXRlSWNvbnMobXlXZWF0aGVyLmlzRGF5LCBteVdlYXRoZXIud2luZERpcik7XG59XG5cbm5ld1dlYXRoZXIoJ0NvcmRvYmEnKTtcblxuZGlzcGxheS5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGlmKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1dlYXRoZXIoZGlzcGxheS5nZXRJbnB1dCgpKTtcbiAgfVxufSk7XG5cbmRpc3BsYXkudG9nZ2xlU3lzdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZihteVdlYXRoZXIuc3lzdGVtID09PSAwKSB7XG4gICAgbXlXZWF0aGVyLnN5c3RlbSA9IDE7XG4gICAgZGlzcGxheS50b2dnbGVTeXN0ZW0uc3JjID0gaWNvbnMubXlJY29ucy50b2dnbGVSaWdodDtcbiAgfSBlbHNlIHtcbiAgICBteVdlYXRoZXIuc3lzdGVtID0gMDtcbiAgICBkaXNwbGF5LnRvZ2dsZVN5c3RlbS5zcmMgPSBpY29ucy5teUljb25zLnRvZ2dsZUxlZnQ7XG4gIH1cblxuICBuZXdXZWF0aGVyKG15V2VhdGhlci5sb2NhdGlvbik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==