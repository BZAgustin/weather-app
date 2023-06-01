/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


// const inputForm = document.getElementById('form-search');
const inputSearch = document.getElementById('input-search');

const myWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__["default"]();

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

updateWeather('Cordoba');

inputSearch.addEventListener('keypress', async (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    await updateWeather(inputSearch.value);
    console.log(myWeather);
  }
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMzSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEM7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQU87O0FBRTdCO0FBQ0Esa0hBQWtILFNBQVMsSUFBSSxhQUFhO0FBQzVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24sIGNvdW50cnksIGNlbHNpdXMsIGZhaHJlbmhlaXQsIHdpbmRLcGgsIFxuICAgICAgICAgICAgICB3aW5kTXBoLCB3aW5kRGlyLCBwcmVjaXBNbSwgcHJlY2lwSW4sIGh1bWlkaXR5LCBcbiAgICAgICAgICAgICAgY2xvdWRzLCB0aGVybWljQ2Vsc2l1cywgdGhlcm1pY0ZhaHJlbmhlaXQpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMuX2NvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuX2NlbHNpdXMgPSBjZWxzaXVzO1xuICAgIHRoaXMuX2ZhaHJlbmhlaXQgPSBmYWhyZW5oZWl0O1xuICAgIHRoaXMuX3dpbmRLcGggPSB3aW5kS3BoO1xuICAgIHRoaXMuX3dpbmRNcGggPSB3aW5kTXBoO1xuICAgIHRoaXMuX3dpbmREaXIgPSB3aW5kRGlyO1xuICAgIHRoaXMuX3ByZWNpcE1tID0gcHJlY2lwTW07XG4gICAgdGhpcy5fcHJlY2lwSW4gPSBwcmVjaXBJbjtcbiAgICB0aGlzLl9odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMuX2Nsb3VkcyA9IGNsb3VkcztcbiAgICB0aGlzLl90aGVybWljQ2Vsc2l1cyA9IHRoZXJtaWNDZWxzaXVzO1xuICAgIHRoaXMuX3RoZXJtaWNGYWhyZW5oZWl0ID0gdGhlcm1pY0ZhaHJlbmhlaXQ7XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcbiAgfVxuXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5XG4gIH1cblxuICBzZXQgY291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgdGhpcy5fY291bnRyeSA9IG5ld0NvdW50cnk7XG4gIH1cblxuICBnZXQgY2Vsc2l1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2Vsc2l1c1xuICB9XG5cbiAgc2V0IGNlbHNpdXModGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9jZWxzaXVzID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgZmFocmVuaGVpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFocmVuaGVpdFxuICB9XG5cbiAgc2V0IGZhaHJlbmhlaXQodGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl9mYWhyZW5oZWl0ID0gdGVtcGVyYXR1cmU7XG4gIH1cblxuICBnZXQgd2luZEtwaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2luZEtwaFxuICB9XG4gIFxuICBzZXQgd2luZEtwaChzcGVlZCkge1xuICAgIHRoaXMuX3dpbmRLcGggPSBzcGVlZDtcbiAgfVxuXG4gIGdldCB3aW5kTXBoKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kTXBoXG4gIH1cblxuICBzZXQgd2luZE1waChzcGVlZCkge1xuICAgIHRoaXMuX3dpbmRNcGggPSBzcGVlZDtcbiAgfVxuXG4gIGdldCB3aW5kRGlyKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kRGlyXG4gIH1cblxuICBzZXQgd2luZERpcihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl93aW5kRGlyID0gZGlyZWN0aW9uO1xuICB9XG4gIFxuICBnZXQgcHJlY2lwTW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWNpcE1tXG4gIH1cblxuICBzZXQgcHJlY2lwTW0oYW1vdW50KSB7XG4gICAgdGhpcy5fcHJlY2lwTW0gPSBhbW91bnQ7XG4gIH1cblxuICBnZXQgcHJlY2lwSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWNpcEluXG4gIH1cblxuICBzZXQgcHJlY2lwSW4oYW1vdW50KSB7XG4gICAgdGhpcy5fcHJlY2lwSW4gPSBhbW91bnQ7XG4gIH1cblxuICBnZXQgaHVtaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWlkaXR5XG4gIH1cblxuICBzZXQgaHVtaWRpdHkocGVyY2VudGFnZSkge1xuICAgIHRoaXMuX2h1bWlkaXR5ID0gcGVyY2VudGFnZTtcbiAgfVxuXG4gIGdldCBjbG91ZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkc1xuICB9XG5cbiAgc2V0IGNsb3VkcyhhbW91bnQpIHtcbiAgICB0aGlzLl9jbG91ZHMgPSBhbW91bnQ7XG4gIH1cblxuICBnZXQgdGhlcm1pY0NlbHNpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZXJtaWNDZWxzaXVzXG4gIH1cblxuICBzZXQgdGhlcm1pY0NlbHNpdXModGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLl90aGVybWljQ2Vsc2l1cyA9IHRlbXBlcmF0dXJlO1xuICB9XG5cbiAgZ2V0IHRoZXJtaWNGYWhyZW5oZWl0KCkge1xuICAgIHJldHVybiB0aGlzLl90aGVybWljRmFocmVuaGVpdFxuICB9XG5cbiAgc2V0IHRoZXJtaWNGYWhyZW5oZWl0KHRlbXBlcmF0dXJlKSB7XG4gICAgdGhpcy5fdGhlcm1pY0ZhaHJlbmhlaXQgPSB0ZW1wZXJhdHVyZTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiO1xuXG4vLyBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1zZWFyY2gnKTtcbmNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXNlYXJjaCcpO1xuXG5jb25zdCBteVdlYXRoZXIgPSBuZXcgV2VhdGhlcigpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbldlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTIyMzI0NGNiZGJhMTQ2NTg4NjcxNTAyMTcyMzMxMDUmcT0ke2xvY2F0aW9ufWAsIHttb2RlOiAnY29ycyd9KTtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gIHJldHVybiB3ZWF0aGVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBhd2FpdCBnZXRMb2NhdGlvbldlYXRoZXIobG9jYXRpb24pO1xuXG4gIG15V2VhdGhlci5sb2NhdGlvbiA9IHdlYXRoZXJPYmplY3QubG9jYXRpb24ubmFtZTtcbiAgbXlXZWF0aGVyLmNvdW50cnkgPSB3ZWF0aGVyT2JqZWN0LmxvY2F0aW9uLmNvdW50cnk7XG4gIG15V2VhdGhlci5jZWxzaXVzID0gd2VhdGhlck9iamVjdC5jdXJyZW50LnRlbXBfYztcbiAgbXlXZWF0aGVyLmZhaHJlbmhlaXQgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQudGVtcF9mO1xuICBteVdlYXRoZXIud2luZEtwaCA9IHdlYXRoZXJPYmplY3QuY3VycmVudC53aW5kX2twaDtcbiAgbXlXZWF0aGVyLndpbmRNcGggPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQud2luZF9tcGg7XG4gIG15V2VhdGhlci53aW5kRGlyID0gd2VhdGhlck9iamVjdC5jdXJyZW50LndpbmRfZGlyO1xuICBteVdlYXRoZXIucHJlY2lwTW0gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX21tO1xuICBteVdlYXRoZXIucHJlY2lwSW4gPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQucHJlY2lwX2luO1xuICBteVdlYXRoZXIuaHVtaWRpdHkgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuaHVtaWRpdHk7XG4gIG15V2VhdGhlci5jbG91ZHMgPSB3ZWF0aGVyT2JqZWN0LmN1cnJlbnQuY2xvdWQ7XG4gIG15V2VhdGhlci50aGVybWljQ2Vsc2l1cyA9IHdlYXRoZXJPYmplY3QuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgbXlXZWF0aGVyLnRoZXJtaWNGYWhyZW5oZWl0ID0gd2VhdGhlck9iamVjdC5jdXJyZW50LmZlZWxzbGlrZV9mO1xufVxuXG51cGRhdGVXZWF0aGVyKCdDb3Jkb2JhJyk7XG5cbmlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgYXN5bmMgKGUpID0+IHtcbiAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgdXBkYXRlV2VhdGhlcihpbnB1dFNlYXJjaC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cobXlXZWF0aGVyKTtcbiAgfVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9