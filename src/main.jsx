import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./action";
// import store from "./store";
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state);

  // console.log(weatherData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity("")
  };
  return (
    <div id="main">
        <h1 id="heading">Weather in</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          id="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <button type="submit" id="button">get temp</button> */}
      </form>
      
    <div id="heading2">
    <div>
        
        <p id="place">{weatherData.weatherData.place}</p>
        <hr id="line" />
        </div>
        <div id="tempDdescription">
      
        <p id="temp">{weatherData.weatherData.temp}{"°C"}</p>
        <p id="description">{weatherData.weatherData.description}</p>
        </div>
    
        <div id="minMax">
        <p>{"Max:"}{weatherData.weatherData.maxTemp}{"°C"}</p>
          <p style={{marginTop:"-17px"}}>{"Min:"}{weatherData.weatherData.minTemp}{"°C"}</p>
        </div>
    
       
        <p><FontAwesomeIcon  id="icon" icon={ faCloudSunRain } bounce /></p>
    
          
       <div id="feel">
       <p id="feelsLike">{weatherData.weatherData.feelsLike}{"°C"}</p>
         <p style={{marginTop:"-50px", fontSize:"small"}}>Feels Like</p>
       </div>
          <div id="humid">
          <p id="humidity">{weatherData.weatherData.humidity}{"%"}</p>
          <p style={{marginTop:"-50px", fontSize:"small"}}>Humidity</p>
          </div>
          
    </div>
     <div style={{marginBottom:"25px"}}>

     </div>
    </div>
  );
};
export default Weather;
