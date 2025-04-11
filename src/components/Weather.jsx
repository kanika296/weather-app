import React, { useEffect, useState, useRef } from 'react'
import './Weather.css';
import searchIcon from '../assets/search.png';
import clearIcon from '../assets/clear.png';
import humidity from '../assets/humidity.png';
import windIcon from '../assets/wind.png';
import cloud from '../assets/cloud.png';
import rain from '../assets/rain.png';
import drizzle from '../assets/drizzle.png';
import snow from '../assets/snow.png';
const Weather = () => {
    const inputRef = useRef();
    const [weatherData, setWeather] = useState(false);
    const allIcons = {
        1000: clearIcon,
        1003: cloud,
        1006: cloud,
        1009: cloud,
        1030: rain,
        1063: rain,
        1180: rain,
        1183: rain,
        1186: drizzle,
        1189: drizzle,
        1192: drizzle,
        1195: drizzle,
        1198: rain,
        1201: drizzle,
        1240: rain,
        1243: drizzle,
        1246: drizzle,
        1273: rain,
        1276: drizzle,
        1066: snow,
        1114: snow,
        1117: snow,
        1150: drizzle,
        1153: drizzle,
        1156: drizzle,
        1159: drizzle,
        1168: drizzle,
        1171: drizzle,
        1210: snow,
        1213: snow,
        1216: snow,
        1219: snow,
        1222: snow,
        1225: snow,
        1255: rain,
        1258: snow,
        1135: humidity,
    }

    const search = async (city) => {
        if(city === ""){
            alert('Please enter a city');
            return;
        }
        try{
            const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${city}&aqi=yes`;
            const response = await fetch(url);
            const data = await response.json();
            if(!response.ok){
                    alert(data.error.message);
                    return;
            }
            const icon = allIcons[data.current.condition.code] || clearIcon;;
            console.log(data);
            setWeather({
                humidity: data.current.humidity,
                wind: data.current.wind_kph,
                temp: Math.floor(data.current.temp_c),
                location: data.location.name,
                icon: icon,
            });
        }catch{
            setWeather(false);
            console.log("Error in fetching the weather data");
        }
    }
    useEffect(() => {
        search('New York');
    }, []);

  return (
    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputRef} type='text' placeholder='Search'></input>
            <img src={searchIcon} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>   
        {weatherData?<>
            <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherData.temp}</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity} alt="" className=''/>
                <div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={windIcon} alt="" className=''/>
                <div>
                    <p>{weatherData.wind}</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
        </>:<></> }
    </div>
  )
}

export default Weather
// http://api.weatherapi.com/v1/current.json?key={}=London&aqi=yes