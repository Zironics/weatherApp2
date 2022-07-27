import {formatInTimeZone} from 'date-fns-tz';
import formatISO from 'date-fns/formatISO';
import './style.css';
import windimg from './images/wind.svg'
import humidimg from './images/humidity.svg'

let weathericon = document.querySelector(".weathericon > img");
let weatherdesc= document.querySelector(".desc");
let cityName=document.querySelector(".name");
let windImg=document.querySelector('#windImg');
let humidImg=document.querySelector('#humidImg');

windImg.src=windimg;
humidImg.src=humidimg;

async function getData(loc) {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=91d292578f4eb268f32c22e1219e7566&units=metric`);
    let data= await response.json();
    console.log(data);
    if(data.cod==404 || data.cod==400) { alert("error city doesnt exist"); }
    else{
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let respons = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly,current&cnt=6&appid=91d292578f4eb268f32c22e1219e7566&units=metric`);
    let data2= await respons.json();
    console.log(data2);
    let informations=processData(data,data2);
    parseInformation(informations);
    return data;
    }
}

function processData(data,data2){
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
    location.timeZone=data2.timezone;
    let d=new Date();
    let s=formatInTimeZone(d,location.timeZone, 'yyyy-MM-dd HH:mm:ss');
    let time=exatractTime(s);
    location.month=convertToMonthText(time.month);
    let d2=new Date(s);
    location.day=convertToDayText(d2.getDay());
    location.hour=time.hour;
    location.min=time.min;
    location.year=time.year;
    location.dayNum=time.day;
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
    let day=document.querySelector(".day");
    let time=document.querySelector(".time");
    
    feels.textContent=information.feels;
    wind.textContent=information.wind;
    humid.textContent=information.humid;
    mintemp.textContent=information.mintemp + "°C";
    maxtemp.textContent=information.maxtemp+"°C";
    temp.textContent=information.temp+"°C";
    day.textContent=information.day+", "+information.dayNum+" "+information.month+" "
                    +information.year;
    time.textContent=information.hour+":"+information.min;    
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

function exatractTime(string){
    let dat={}
    dat.year=string.slice(0,4);
    dat.month=parseInt(string.slice(5,7));
    dat.day=string.slice(8,10);
    dat.hour=string.slice(11,13);
    dat.min=string.slice(14,16);
    return dat;
}


function convertToDayText(num){
    switch(num) {
        case 0: return 'Sun';
        case 1: return 'Mon';
        case 2: return 'Tue';
        case 3: return 'Wed';
        case 4: return 'Thu';
        case 5: return 'Fri';
        case 6: return 'Sat';
    }
}

function convertToMonthText(num) {
    switch(num){
        case 1: return 'Jan';
        case 2: return 'Feb';
        case 3: return 'Mar';
        case 4: return 'Apr';
        case 5: return 'May';
        case 6: return 'Jun';
        case 7: return 'Jul';
        case 8: return 'Aug';
        case 9: return 'Sep';
        case 10: return 'Oct';
        case 11: return 'Nov';
        case 12: return 'Dec';
    }
}