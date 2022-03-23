import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherWrapper from '../WeatherWrapper/WeatherWrapper';

function App() {

  const [weatherIconsArray, setWeatherIconsArray] = useState([]);
  const [dateTime] = useState(new Date());

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=44.9778&lon=-93.2650&exclude=current,minutely,hourly,alerts&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then((response) => {
      for (let i = 0; i < 5; i++) {
        setWeatherIconsArray(oldArray => [...oldArray, {icon: response.data.daily[i].weather[0].icon, 
          alt: response.data.daily[i].weather[0].description, 
          min: response.data.daily[i].temp.min, 
          max: response.data.daily[i].temp.max, 
          weekday: (dateTime.getDay() + i)
        }]);
      }
    }).catch((error) => {
      console.log(error);
    });
  },[dateTime])

  return (
    <div className="App">
      <header className="App-header">
        <WeatherWrapper icons={weatherIconsArray}/>
      </header>
    </div>
  );
}

export default App;
