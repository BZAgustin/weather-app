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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

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
              clouds, thermicCelsius, thermicFahrenheit) {
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
    this._thermicCelsius = thermicCelsius;
    this._thermicFahrenheit = thermicFahrenheit;
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

  get thermicCelsius() {
    return this._thermicCelsius
  }

  set thermicCelsius(temperature) {
    this._thermicCelsius = temperature;
  }

  get thermicFahrenheit() {
    return this._thermicFahrenheit
  }

  set thermicFahrenheit(temperature) {
    this._thermicFahrenheit = temperature;
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



const myWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__["default"]();
const display = (0,_display__WEBPACK_IMPORTED_MODULE_1__["default"])();

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBOztBQUVBLGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDOUNsQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDM0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0o7O0FBRTVCLHNCQUFzQixnREFBTztBQUM3QixnQkFBZ0Isb0RBQUc7O0FBRW5CO0FBQ0Esa0hBQWtILFNBQVMsSUFBSSxhQUFhO0FBQzVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pELHdCQUF3QixrQkFBa0I7QUFDMUMsa0NBQWtDLG1CQUFtQjtBQUNyRCwwQkFBMEIsaUJBQWlCO0FBQzNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBET00gPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXNlYXJjaCcpO1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXBpdGF0aW9ucycpO1xuICBjb25zdCBjbG91ZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvdWRzJyk7XG5cbiAgZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIGlucHV0U2VhcmNoLnZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2l0eShuZXdDaXR5KSB7XG4gICAgY2l0eS5pbm5lckhUTUwgPSBuZXdDaXR5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgY291bnRyeS5pbm5lckhUTUwgPSBuZXdDb3VudHJ5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmUobmV3VGVtcCkge1xuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IG5ld1RlbXA7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVXaW5kKG5ld1dpbmQpIHtcbiAgICB3aW5kLmlubmVySFRNTCA9IG5ld1dpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVIdW1pZGl0eShuZXdIdW1pZGl0eSkge1xuICAgIGh1bWlkaXR5LmlubmVySFRNTCA9IG5ld0h1bWlkaXR5O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUHJlY2lwaXRhdGlvbnMobmV3UHJlY2lwKSB7IFxuICAgIHByZWNpcGl0YXRpb25zLmlubmVySFRNTCA9IG5ld1ByZWNpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNsb3VkcyhuZXdDbG91ZHMpIHtcbiAgICBjbG91ZHMuaW5uZXJIVE1MID0gbmV3Q2xvdWRzO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5wdXRTZWFyY2gsIGdldElucHV0LCB1cGRhdGVDaXR5LCB1cGRhdGVDb3VudHJ5LCB1cGRhdGVUZW1wZXJhdHVyZSwgXG4gICAgICAgICAgIHVwZGF0ZVdpbmQsIHVwZGF0ZUh1bWlkaXR5LCB1cGRhdGVQcmVjaXBpdGF0aW9ucywgdXBkYXRlQ2xvdWRzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24sIGNvdW50cnksIGNlbHNpdXMsIGZhaHJlbmhlaXQsIHdpbmRLcGgsIFxuICAgICAgICAgICAgICB3aW5kTXBoLCB3aW5kRGlyLCBwcmVjaXBNbSwgcHJlY2lwSW4sIGh1bWlkaXR5LCBcbiAgICAgICAgICAgICAgY2xvdWRzLCB0aGVybWljQ2Vsc2l1cywgdGhlcm1pY0ZhaHJlbmhlaXQpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMuX2NvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuX2NlbHNpdXMgPSBjZWxzaXVzO1xuICAgIHRoaXMuX2ZhaHJlbmhlaXQgPSBmYWhyZW5oZWl0O1xuICAgIHRoaXMuX3dpbmRLcGggPSB3aW5kS3BoO1xuICAgIHRoaXMuX3dpbmRNcGggPSB3aW5kTXBoO1xuICAgIHRoaXMuX3dpbmREaXIgPSB3aW5kRGlyO1xuICAgIHRoaXMuX3ByZWNpcE1tID0gcHJlY2lwTW07XG4gICAgdGhpcy5fcHJlY2lwSW4gPSBwcmVjaXBJbjtcbiAgICB0aGlzLl9odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMuX2Nsb3VkcyA9IGNsb3VkcztcbiAgICB0aGlzLl90aGVybWljQ2Vsc2l1cyA9IHRoZXJtaWNDZWxzaXVzO1xuICAgIHRoaXMuX3RoZXJtaWNGYWhyZW5oZWl0ID0gdGhlcm1pY0ZhaHJlbmhlaXQ7XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcbiAgfVxuXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5XG4gIH1cblxuICBzZXQgY291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgdGhpcy5fY291bnRyeSA9IG5ld0NvdW50cnk7XG4gIH1cblxuICBnZXQgY2Vsc2l1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2Vsc2l1c1xuICB9XG5cbiAgc2V0IGNlbHNpdXModGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9jZWxzaXVzID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgZmFocmVuaGVpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFocmVuaGVpdFxuICB9XG5cbiAgc2V0IGZhaHJlbmhlaXQodGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9mYWhyZW5oZWl0ID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgd2luZEtwaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZEtwaFxuICB9XG4gIFxuICBzZXQgd2luZEtwaChzcGVlZCkge1xuICAgIHRoaXMuX3dpbmRLcGggPSBzcGVlZDtcbiAgfVxuXG4gIGdldCB3aW5kTXBoKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kTXBoXG4gIH1cblxuICBzZXQgd2luZE1waChzcGVlZCkge1xuICAgIHRoaXMuX3dpbmRNcGggPSBzcGVlZDtcbiAgfVxuXG4gIGdldCB3aW5kRGlyKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kRGlyXG4gIH1cblxuICBzZXQgd2luZERpcihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl93aW5kRGlyID0gZGlyZWN0aW9uO1xuICB9XG4gIFxuICBnZXQgcHJlY2lwTW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWNpcE1tXG4gIH1cblxuICBzZXQgcHJlY2lwTW0oYW1vdW50KSB7XG4gICAgdGhpcy5fcHJlY2lwTW0gPSBhbW91bnQ7XG4gIH1cblxuICBnZXQgcHJlY2lwSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWNpcEluXG4gIH1cblxuICBzZXQgcHJlY2lwSW4oYW1vdW50KSB7XG4gICAgdGhpcy5fcHJlY2lwSW4gPSBhbW91bnQ7XG4gIH1cblxuICBnZXQgaHVtaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWlkaXR5XG4gIH1cblxuICBzZXQgaHVtaWRpdHkocGVyY2VudGFnZSkge1xuICAgIHRoaXMuX2h1bWlkaXR5ID0gcGVyY2VudGFnZTtcbiAgfVxuXG4gIGdldCBjbG91ZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkc1xuICB9XG5cbiAgc2V0IGNsb3VkcyhhbW91bnQpIHtcbiAgICB0aGlzLl9jbG91ZHMgPSBhbW91bnQ7XG4gIH1cblxuICBnZXQgdGhlcm1pY0NlbHNpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZXJtaWNDZWxzaXVzXG4gIH1cblxuICBzZXQgdGhlcm1pY0NlbHNpdXModGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl90aGVybWljQ2Vsc2l1cyA9IHRlbXBlcmF0dXJlO1xuICB9XG5cbiAgZ2V0IHRoZXJtaWNGYWhyZW5oZWl0KCkge1xuICAgIHJldHVybiB0aGlzLl90aGVybWljRmFocmVuaGVpdFxuICB9XG5cbiAgc2V0IHRoZXJtaWNGYWhyZW5oZWl0KHRlbXBlcmF0dXJlKSB7XG4gICAgdGhpcy5fdGhlcm1pY0ZhaHJlbmhlaXQgPSB0ZW1wZXJhdHVyZTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IG15V2VhdGhlciA9IG5ldyBXZWF0aGVyKCk7XG5jb25zdCBkaXNwbGF5ID0gRE9NKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MjIzMjQ0Y2JkYmExNDY1ODg2NzE1MDIxNzIzMzEwNSZxPSR7bG9jYXRpb259YCwge21vZGU6ICdjb3JzJ30pO1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBcbiAgcmV0dXJuIHdlYXRoZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbik7XG5cbiAgbXlXZWF0aGVyLmxvY2F0aW9uID0gd2VhdGhlck9iamVjdC5sb2NhdGlvbi5uYW1lO1xuICBteVdlYXRoZXIuY291bnRyeSA9IHdlYXRoZXJPYmplY3QubG9jYXRpb24uY291bnRyeTtcbiAgbXlXZWF0aGVyLmNlbHNpdXMgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQudGVtcF9jO1xuICBteVdlYXRoZXIuZmFocmVuaGVpdCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC50ZW1wX2Y7XG4gIG15V2VhdGhlci53aW5kS3BoID0gd2VhdGhlck9iamVjdC5jdXJyZW50LndpbmRfa3BoO1xuICBteVdlYXRoZXIud2luZE1waCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC53aW5kX21waDtcbiAgbXlXZWF0aGVyLndpbmREaXIgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9kaXI7XG4gIG15V2VhdGhlci5wcmVjaXBNbSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5wcmVjaXBfbW07XG4gIG15V2VhdGhlci5wcmVjaXBJbiA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5wcmVjaXBfaW47XG4gIG15V2VhdGhlci5odW1pZGl0eSA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5odW1pZGl0eTtcbiAgbXlXZWF0aGVyLmNsb3VkcyA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5jbG91ZDtcbiAgbXlXZWF0aGVyLnRoZXJtaWNDZWxzaXVzID0gd2VhdGhlck9iamVjdC5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICBteVdlYXRoZXIudGhlcm1pY0ZhaHJlbmhlaXQgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIGRpc3BsYXkudXBkYXRlQ2l0eShteVdlYXRoZXIubG9jYXRpb24pO1xuICBkaXNwbGF5LnVwZGF0ZUNvdW50cnkobXlXZWF0aGVyLmNvdW50cnkpO1xuICBkaXNwbGF5LnVwZGF0ZVRlbXBlcmF0dXJlKGAke215V2VhdGhlci5jZWxzaXVzfcKwYCk7XG4gIGRpc3BsYXkudXBkYXRlV2luZChgJHtteVdlYXRoZXIud2luZEtwaH1rcGhgKTtcbiAgZGlzcGxheS51cGRhdGVQcmVjaXBpdGF0aW9ucyhgJHtteVdlYXRoZXIucHJlY2lwTW19bW1gKTtcbiAgZGlzcGxheS51cGRhdGVDbG91ZHMoYCR7bXlXZWF0aGVyLmNsb3Vkc30lYCk7XG59XG5cbnVwZGF0ZVdlYXRoZXIoJ0NvcmRvYmEnKTtcblxuZGlzcGxheS5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGFzeW5jIChlKSA9PiB7XG4gIGlmKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IHVwZGF0ZVdlYXRoZXIoZGlzcGxheS5nZXRJbnB1dCgpKTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG4gIH1cbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==