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

  function refresh(myCity, myCountry, myTemp, myWind, myPrecs, myHumidity, myClouds, myCondition) {
    updateCity(myCity);
    updateCountry(myCountry);
    updateTemperature(myTemp);
    updateWind(myWind);
    updatePrecipitations(myPrecs);
    updateHumidity(myHumidity);
    updateClouds(myClouds);
    updateCondition(myCondition);
  }

  return { inputSearch, getInput, refresh }
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
  constructor(location, country, celsius, fahrenheit, windKph, 
              windMph, windDir, precipMm, precipIn, humidity, 
              clouds, isDay, condition) {
    this._location = location;
    this._country = country;
    this._celsius = celsius;
    this._fahrenheit = fahrenheit;
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
  myWeather.isDay = weatherObject.current.is_day;
  myWeather.condition = weatherObject.current.condition.text;
}

function updateIcons(time, wind) {
  icons.setDaytime(time);
  icons.setWindDirection(wind);
}

async function newWeather(newLocation) {
  await updateWeather(newLocation);
  display.refresh(myWeather.location, myWeather.country, `${myWeather.celsius}°C`, `${myWeather.windKph}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQzdEbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3BGMUI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDSjtBQUNZOztBQUV4QyxzQkFBc0IsZ0RBQU87QUFDN0IsZ0JBQWdCLG9EQUFHO0FBQ25CLGNBQWMsd0RBQVc7O0FBRXpCO0FBQ0Esa0hBQWtILFNBQVMsSUFBSSxhQUFhO0FBQzVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELGtCQUFrQixRQUFRLGtCQUFrQjtBQUN4RyxrQkFBa0IsbUJBQW1CLFFBQVEsbUJBQW1CLE9BQU8saUJBQWlCLFFBQVEsb0JBQW9CO0FBQ3BIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ljb25NYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBET00gPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXNlYXJjaCcpO1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXBpdGF0aW9ucycpO1xuICBjb25zdCBjbG91ZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvdWRzJyk7XG4gIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uLXRleHQnKTtcblxuICBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gaW5wdXRTZWFyY2gudmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaXR5KG5ld0NpdHkpIHtcbiAgICBjaXR5LmlubmVySFRNTCA9IG5ld0NpdHk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb3VudHJ5KG5ld0NvdW50cnkpIHtcbiAgICBjb3VudHJ5LmlubmVySFRNTCA9IG5ld0NvdW50cnk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUZW1wZXJhdHVyZShuZXdUZW1wKSB7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gbmV3VGVtcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVdpbmQobmV3V2luZCkge1xuICAgIHdpbmQuaW5uZXJIVE1MID0gbmV3V2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByZWNpcGl0YXRpb25zKG5ld1ByZWNpcCkgeyBcbiAgICBwcmVjaXBpdGF0aW9ucy5pbm5lckhUTUwgPSBuZXdQcmVjaXA7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVIdW1pZGl0eShuZXdIdW1pZGl0eSkge1xuICAgIGh1bWlkaXR5LmlubmVySFRNTCA9IG5ld0h1bWlkaXR5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2xvdWRzKG5ld0Nsb3Vkcykge1xuICAgIGNsb3Vkcy5pbm5lckhUTUwgPSBuZXdDbG91ZHM7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb25kaXRpb24obmV3Q29uZGl0aW9uKSB7XG4gICAgY29uZGl0aW9uVGV4dC5pbm5lckhUTUwgPSBuZXdDb25kaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoKG15Q2l0eSwgbXlDb3VudHJ5LCBteVRlbXAsIG15V2luZCwgbXlQcmVjcywgbXlIdW1pZGl0eSwgbXlDbG91ZHMsIG15Q29uZGl0aW9uKSB7XG4gICAgdXBkYXRlQ2l0eShteUNpdHkpO1xuICAgIHVwZGF0ZUNvdW50cnkobXlDb3VudHJ5KTtcbiAgICB1cGRhdGVUZW1wZXJhdHVyZShteVRlbXApO1xuICAgIHVwZGF0ZVdpbmQobXlXaW5kKTtcbiAgICB1cGRhdGVQcmVjaXBpdGF0aW9ucyhteVByZWNzKTtcbiAgICB1cGRhdGVIdW1pZGl0eShteUh1bWlkaXR5KTtcbiAgICB1cGRhdGVDbG91ZHMobXlDbG91ZHMpO1xuICAgIHVwZGF0ZUNvbmRpdGlvbihteUNvbmRpdGlvbik7XG4gIH1cblxuICByZXR1cm4geyBpbnB1dFNlYXJjaCwgZ2V0SW5wdXQsIHJlZnJlc2ggfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiY29uc3QgaWNvbk1hbmFnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG15SWNvbnMgPSB7XG4gICAgZGF5OiAnLi9hc3NldHMvZGF5LnBuZycsXG4gICAgbmlnaHQ6ICcuL2Fzc2V0cy9uaWdodC5wbmcnLFxuICAgIG5vcnRoOiAnLi9hc3NldHMvTi5wbmcnLFxuICAgIG5vcnRoRWFzdDogJy4vYXNzZXRzL05FLnBuZycsXG4gICAgZWFzdDogJy4vYXNzZXRzL0UucG5nJyxcbiAgICBzb3V0aEVhc3Q6ICcuL2Fzc2V0cy9TRS5wbmcnLFxuICAgIHNvdXRoOiAnLi9hc3NldHMvUy5wbmcnLFxuICAgIHNvdXRoV2VzdDogJy4vYXNzZXRzL1NXLnBuZycsXG4gICAgd2VzdDogJy4vYXNzZXRzL1cucG5nJyxcbiAgICBub3J0aFdlc3Q6ICcuL2Fzc2V0cy9OVy5wbmcnXG4gIH1cblxuICBjb25zdCBkYXl0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXRpbWUnKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLWRpcmVjdGlvbicpO1xuXG4gIGZ1bmN0aW9uIHNldERheXRpbWUodGltZSkge1xuICAgIGlmKHRpbWUgPT09IDEpIHtcbiAgICAgIGRheXRpbWUuc3JjID0gbXlJY29ucy5kYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheXRpbWUuc3JjID0gbXlJY29ucy5uaWdodDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ04nIDpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ05ORSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdORSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5ub3J0aEVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRU5FJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoRWFzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLmVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRVNFJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLmVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU0UnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGhFYXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NTRSc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aEVhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTU1cnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU1cnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMuc291dGhXZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1dTVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy5zb3V0aFdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy53ZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1dOVyc6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gbXlJY29ucy53ZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ05XJzpcbiAgICAgICAgd2luZERpcmVjdGlvbi5zcmMgPSBteUljb25zLm5vcnRoV2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdOTlcnOlxuICAgICAgICB3aW5kRGlyZWN0aW9uLnNyYyA9IG15SWNvbnMubm9ydGhXZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHdpbmREaXJlY3Rpb24uc3JjID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG15SWNvbnMsIHNldERheXRpbWUsIHNldFdpbmREaXJlY3Rpb24gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpY29uTWFuYWdlcjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uLCBjb3VudHJ5LCBjZWxzaXVzLCBmYWhyZW5oZWl0LCB3aW5kS3BoLCBcbiAgICAgICAgICAgICAgd2luZE1waCwgd2luZERpciwgcHJlY2lwTW0sIHByZWNpcEluLCBodW1pZGl0eSwgXG4gICAgICAgICAgICAgIGNsb3VkcywgaXNEYXksIGNvbmRpdGlvbikge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5fY291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy5fY2Vsc2l1cyA9IGNlbHNpdXM7XG4gICAgdGhpcy5fZmFocmVuaGVpdCA9IGZhaHJlbmhlaXQ7XG4gICAgdGhpcy5fd2luZEtwaCA9IHdpbmRLcGg7XG4gICAgdGhpcy5fd2luZE1waCA9IHdpbmRNcGg7XG4gICAgdGhpcy5fd2luZERpciA9IHdpbmREaXI7XG4gICAgdGhpcy5fcHJlY2lwTW0gPSBwcmVjaXBNbTtcbiAgICB0aGlzLl9wcmVjaXBJbiA9IHByZWNpcEluO1xuICAgIHRoaXMuX2h1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy5fY2xvdWRzID0gY2xvdWRzO1xuICAgIHRoaXMuX2lzRGF5ID0gaXNEYXk7XG4gICAgdGhpcy5fY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuXG4gIHNldCBsb2NhdGlvbihuZXdMb2NhdGlvbikge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbmV3TG9jYXRpb247XG4gIH1cblxuICBnZXQgY291bnRyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRyeVxuICB9XG5cbiAgc2V0IGNvdW50cnkobmV3Q291bnRyeSkge1xuICAgIHRoaXMuX2NvdW50cnkgPSBuZXdDb3VudHJ5O1xuICB9XG5cbiAgZ2V0IGNlbHNpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbHNpdXNcbiAgfVxuXG4gIHNldCBjZWxzaXVzKHRlbXBlcmF0dXJlKSB7XG4gICAgdGhpcy5fY2Vsc2l1cyA9IHRlbXBlcmF0dXJlO1xuICB9XG5cbiAgZ2V0IGZhaHJlbmhlaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhaHJlbmhlaXRcbiAgfVxuXG4gIHNldCBmYWhyZW5oZWl0KHRlbXBlcmF0dXJlKSB7XG4gICAgdGhpcy5fZmFocmVuaGVpdCA9IHRlbXBlcmF0dXJlO1xuICB9XG5cbiAgZ2V0IHdpbmRLcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmRLcGhcbiAgfVxuICBcbiAgc2V0IHdpbmRLcGgoc3BlZWQpIHtcbiAgICB0aGlzLl93aW5kS3BoID0gc3BlZWQ7XG4gIH1cblxuICBnZXQgd2luZE1waCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZE1waFxuICB9XG5cbiAgc2V0IHdpbmRNcGgoc3BlZWQpIHtcbiAgICB0aGlzLl93aW5kTXBoID0gc3BlZWQ7XG4gIH1cblxuICBnZXQgd2luZERpcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZERpclxuICB9XG5cbiAgc2V0IHdpbmREaXIoZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fd2luZERpciA9IGRpcmVjdGlvbjtcbiAgfVxuICBcbiAgZ2V0IHByZWNpcE1tKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVjaXBNbVxuICB9XG5cbiAgc2V0IHByZWNpcE1tKGFtb3VudCkge1xuICAgIHRoaXMuX3ByZWNpcE1tID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0IHByZWNpcEluKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVjaXBJblxuICB9XG5cbiAgc2V0IHByZWNpcEluKGFtb3VudCkge1xuICAgIHRoaXMuX3ByZWNpcEluID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0IGh1bWlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1pZGl0eVxuICB9XG5cbiAgc2V0IGh1bWlkaXR5KHBlcmNlbnRhZ2UpIHtcbiAgICB0aGlzLl9odW1pZGl0eSA9IHBlcmNlbnRhZ2U7XG4gIH1cblxuICBnZXQgY2xvdWRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHNcbiAgfVxuXG4gIHNldCBjbG91ZHMoYW1vdW50KSB7XG4gICAgdGhpcy5fY2xvdWRzID0gYW1vdW50O1xuICB9XG5cbiAgZ2V0IGlzRGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc0RheTtcbiAgfVxuXG4gIHNldCBpc0RheSh0aW1lKSB7XG4gICAgdGhpcy5faXNEYXkgPSB0aW1lO1xuICB9XG5cbiAgZ2V0IGNvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZGl0aW9uO1xuICB9XG5cbiAgc2V0IGNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICB0aGlzLl9jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IGljb25NYW5hZ2VyIGZyb20gXCIuL2ljb25NYW5hZ2VyXCI7XG5cbmNvbnN0IG15V2VhdGhlciA9IG5ldyBXZWF0aGVyKCk7XG5jb25zdCBkaXNwbGF5ID0gRE9NKCk7XG5jb25zdCBpY29ucyA9IGljb25NYW5hZ2VyKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MjIzMjQ0Y2JkYmExNDY1ODg2NzE1MDIxNzIzMzEwNSZxPSR7bG9jYXRpb259YCwge21vZGU6ICdjb3JzJ30pO1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBcbiAgcmV0dXJuIHdlYXRoZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbik7XG5cbiAgbXlXZWF0aGVyLmxvY2F0aW9uID0gd2VhdGhlck9iamVjdC5sb2NhdGlvbi5uYW1lO1xuICBteVdlYXRoZXIuY291bnRyeSA9IHdlYXRoZXJPYmplY3QubG9jYXRpb24uY291bnRyeTtcbiAgbXlXZWF0aGVyLmNlbHNpdXMgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQudGVtcF9jO1xuICBteVdlYXRoZXIuZmFocmVuaGVpdCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC50ZW1wX2Y7XG4gIG15V2VhdGhlci53aW5kS3BoID0gd2VhdGhlck9iamVjdC5jdXJyZW50LndpbmRfa3BoO1xuICBteVdlYXRoZXIud2luZE1waCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC53aW5kX21waDtcbiAgbXlXZWF0aGVyLndpbmREaXIgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9kaXI7XG4gIG15V2VhdGhlci5wcmVjaXBNbSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5wcmVjaXBfbW07XG4gIG15V2VhdGhlci5wcmVjaXBJbiA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5wcmVjaXBfaW47XG4gIG15V2VhdGhlci5odW1pZGl0eSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5odW1pZGl0eTtcbiAgbXlXZWF0aGVyLmNsb3VkcyA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5jbG91ZDtcbiAgbXlXZWF0aGVyLmlzRGF5ID0gd2VhdGhlck9iamVjdC5jdXJyZW50LmlzX2RheTtcbiAgbXlXZWF0aGVyLmNvbmRpdGlvbiA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSWNvbnModGltZSwgd2luZCkge1xuICBpY29ucy5zZXREYXl0aW1lKHRpbWUpO1xuICBpY29ucy5zZXRXaW5kRGlyZWN0aW9uKHdpbmQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBuZXdXZWF0aGVyKG5ld0xvY2F0aW9uKSB7XG4gIGF3YWl0IHVwZGF0ZVdlYXRoZXIobmV3TG9jYXRpb24pO1xuICBkaXNwbGF5LnJlZnJlc2gobXlXZWF0aGVyLmxvY2F0aW9uLCBteVdlYXRoZXIuY291bnRyeSwgYCR7bXlXZWF0aGVyLmNlbHNpdXN9wrBDYCwgYCR7bXlXZWF0aGVyLndpbmRLcGh9YCxcbiAgICAgICAgICAgICAgIGAke215V2VhdGhlci5wcmVjaXBNbX1tbWAsIGAke215V2VhdGhlci5odW1pZGl0eX0lYCwgYCR7bXlXZWF0aGVyLmNsb3Vkc30lYCwgYCgke215V2VhdGhlci5jb25kaXRpb259KWApO1xuICB1cGRhdGVJY29ucyhteVdlYXRoZXIuaXNEYXksIG15V2VhdGhlci53aW5kRGlyKTtcbn1cblxubmV3V2VhdGhlcignQ29yZG9iYScpO1xuXG5kaXNwbGF5LmlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmV3V2VhdGhlcihkaXNwbGF5LmdldElucHV0KCkpO1xuICB9XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9