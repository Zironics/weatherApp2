/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);


let weathericon = document.querySelector(".weathericon > img");
let weatherdesc= document.querySelector(".desc");
let cityName=document.querySelector(".name");


async function getData(loc) {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=91d292578f4eb268f32c22e1219e7566&units=metric`);
    let data= await response.json();
    console.log(data);
    if(data.cod==404 || data.cod==400) { alert("error city doesnt exist"); }
    else{
    let informations=processData(data);
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let respons = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly,current&cnt=6&appid=91d292578f4eb268f32c22e1219e7566&units=metric`);
    let data2= await respons.json();
    console.log(data2);
    parseInformation(informations);
    return data;
    }
}

function processData(data){
    let location={}
    location.name=data.name;
    location.temp=data.main.temp;
    location.weather=data.weather.main;
    location.humidity=data.main.humidity;
    location.mintemp=Math.round(data.main.temp_min);
    location.maxtemp=Math.round(data.main.temp_max);
    location.temp=Math.round(data.main.temp);
    location.description=data.weather[0].description;
    location.feels=(Math.round(data.main.feels_like * 100)/100).toFixed(1);
    location.humid=data.main.humidity;
    location.wind=(Math.round((data.wind.speed)*(0.001*3600) * 100)/100).toFixed(1);
    let iconId= data.weather[0].icon;
    location.iconUrl=`http://openweathermap.org/img/wn/${iconId}@2x.png`;
    return location;
}

function parseInformation(information) {
    cityName.textContent=information.name;
    weathericon.src=information.iconUrl;
    weatherdesc.textContent=information.description;
    /* if(information.description.length>10){
        weatherdesc.setAttribute("style","font-size:18px");
    } */
    let mintemp=document.querySelector(".min");
    let maxtemp=document.querySelector(".max");
    let temp=document.querySelector(".temp");
    let feels=document.querySelector(".feels");
    let wind=document.querySelector(".wind");
    let humid=document.querySelector(".humid");
    
    feels.textContent=information.feels;
    wind.textContent=information.wind;
    humid.textContent=information.humid;
    mintemp.textContent=information.mintemp + "°C";
    maxtemp.textContent=information.maxtemp+"°C";
    temp.textContent=information.temp+"°C";

    
}
let inputfield=document.querySelector("input");
let searchButton=document.querySelector("button");

inputfield.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        let value=inputfield.value;
        clearInputs();
        getData(value);
    }
});

function clearInputs(){
    inputfield.value="";
}

searchButton.addEventListener("click",function(e){
    let value=inputfield.value;
    clearInputs();
    getData(value);
});

getData("London");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsSUFBSTtBQUN2RjtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLElBQUksT0FBTyxJQUFJO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxPQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmb3JtYXRJU08gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxubGV0IHdlYXRoZXJpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyaWNvbiA+IGltZ1wiKTtcclxubGV0IHdlYXRoZXJkZXNjPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NcIik7XHJcbmxldCBjaXR5TmFtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVcIik7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2MpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2N9JkFQUElEPTkxZDI5MjU3OGY0ZWIyNjhmMzJjMjJlMTIxOWU3NTY2JnVuaXRzPW1ldHJpY2ApO1xyXG4gICAgbGV0IGRhdGE9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYoZGF0YS5jb2Q9PTQwNCB8fCBkYXRhLmNvZD09NDAwKSB7IGFsZXJ0KFwiZXJyb3IgY2l0eSBkb2VzbnQgZXhpc3RcIik7IH1cclxuICAgIGVsc2V7XHJcbiAgICBsZXQgaW5mb3JtYXRpb25zPXByb2Nlc3NEYXRhKGRhdGEpO1xyXG4gICAgbGV0IGxhdCA9IGRhdGEuY29vcmQubGF0O1xyXG4gICAgbGV0IGxvbiA9IGRhdGEuY29vcmQubG9uO1xyXG4gICAgbGV0IHJlc3BvbnMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzLGhvdXJseSxjdXJyZW50JmNudD02JmFwcGlkPTkxZDI5MjU3OGY0ZWIyNjhmMzJjMjJlMTIxOWU3NTY2JnVuaXRzPW1ldHJpY2ApO1xyXG4gICAgbGV0IGRhdGEyPSBhd2FpdCByZXNwb25zLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEyKTtcclxuICAgIHBhcnNlSW5mb3JtYXRpb24oaW5mb3JtYXRpb25zKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKXtcclxuICAgIGxldCBsb2NhdGlvbj17fVxyXG4gICAgbG9jYXRpb24ubmFtZT1kYXRhLm5hbWU7XHJcbiAgICBsb2NhdGlvbi50ZW1wPWRhdGEubWFpbi50ZW1wO1xyXG4gICAgbG9jYXRpb24ud2VhdGhlcj1kYXRhLndlYXRoZXIubWFpbjtcclxuICAgIGxvY2F0aW9uLmh1bWlkaXR5PWRhdGEubWFpbi5odW1pZGl0eTtcclxuICAgIGxvY2F0aW9uLm1pbnRlbXA9TWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pO1xyXG4gICAgbG9jYXRpb24ubWF4dGVtcD1NYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCk7XHJcbiAgICBsb2NhdGlvbi50ZW1wPU1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xyXG4gICAgbG9jYXRpb24uZGVzY3JpcHRpb249ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgbG9jYXRpb24uZmVlbHM9KE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UgKiAxMDApLzEwMCkudG9GaXhlZCgxKTtcclxuICAgIGxvY2F0aW9uLmh1bWlkPWRhdGEubWFpbi5odW1pZGl0eTtcclxuICAgIGxvY2F0aW9uLndpbmQ9KE1hdGgucm91bmQoKGRhdGEud2luZC5zcGVlZCkqKDAuMDAxKjM2MDApICogMTAwKS8xMDApLnRvRml4ZWQoMSk7XHJcbiAgICBsZXQgaWNvbklkPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcclxuICAgIGxvY2F0aW9uLmljb25Vcmw9YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbklkfUAyeC5wbmdgO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUluZm9ybWF0aW9uKGluZm9ybWF0aW9uKSB7XHJcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudD1pbmZvcm1hdGlvbi5uYW1lO1xyXG4gICAgd2VhdGhlcmljb24uc3JjPWluZm9ybWF0aW9uLmljb25Vcmw7XHJcbiAgICB3ZWF0aGVyZGVzYy50ZXh0Q29udGVudD1pbmZvcm1hdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgIC8qIGlmKGluZm9ybWF0aW9uLmRlc2NyaXB0aW9uLmxlbmd0aD4xMCl7XHJcbiAgICAgICAgd2VhdGhlcmRlc2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImZvbnQtc2l6ZToxOHB4XCIpO1xyXG4gICAgfSAqL1xyXG4gICAgbGV0IG1pbnRlbXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5cIik7XHJcbiAgICBsZXQgbWF4dGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heFwiKTtcclxuICAgIGxldCB0ZW1wPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcclxuICAgIGxldCBmZWVscz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzXCIpO1xyXG4gICAgbGV0IHdpbmQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xyXG4gICAgbGV0IGh1bWlkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRcIik7XHJcbiAgICBcclxuICAgIGZlZWxzLnRleHRDb250ZW50PWluZm9ybWF0aW9uLmZlZWxzO1xyXG4gICAgd2luZC50ZXh0Q29udGVudD1pbmZvcm1hdGlvbi53aW5kO1xyXG4gICAgaHVtaWQudGV4dENvbnRlbnQ9aW5mb3JtYXRpb24uaHVtaWQ7XHJcbiAgICBtaW50ZW1wLnRleHRDb250ZW50PWluZm9ybWF0aW9uLm1pbnRlbXAgKyBcIsKwQ1wiO1xyXG4gICAgbWF4dGVtcC50ZXh0Q29udGVudD1pbmZvcm1hdGlvbi5tYXh0ZW1wK1wiwrBDXCI7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50PWluZm9ybWF0aW9uLnRlbXArXCLCsENcIjtcclxuXHJcbiAgICBcclxufVxyXG5sZXQgaW5wdXRmaWVsZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbmxldCBzZWFyY2hCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuXHJcbmlucHV0ZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmdW5jdGlvbihlKXtcclxuICAgIGlmKGUua2V5PT09XCJFbnRlclwiKXtcclxuICAgICAgICBsZXQgdmFsdWU9aW5wdXRmaWVsZC52YWx1ZTtcclxuICAgICAgICBjbGVhcklucHV0cygpO1xyXG4gICAgICAgIGdldERhdGEodmFsdWUpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFySW5wdXRzKCl7XHJcbiAgICBpbnB1dGZpZWxkLnZhbHVlPVwiXCI7XHJcbn1cclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcclxuICAgIGxldCB2YWx1ZT1pbnB1dGZpZWxkLnZhbHVlO1xyXG4gICAgY2xlYXJJbnB1dHMoKTtcclxuICAgIGdldERhdGEodmFsdWUpO1xyXG59KTtcclxuXHJcbmdldERhdGEoXCJMb25kb25cIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==