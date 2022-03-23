import { useState } from 'react';

function WeatherWrapper({ icons, data }) {
    const [dateTime] = useState(new Date());
    const dayOfWeekName = (day) => {
        const dayOfWeekArray = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        return dayOfWeekArray[day];
      }

    const newImages = data.slice(0,5).map((element, index) => {
        return (
            <span className='weatherWrapper' id={index === 0 ? 'todaysWeatherItem' : ''} key={index}>
                <span className='dayOfWeek'>{dayOfWeekName(dateTime.getDay() + index)}</span>
                <img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} key={index} alt={element.weather[0].description}/>
                <span className='minTemp'>{Math.round(element.temp.min)}&#176;</span>
                <span className='maxTemp'>{Math.round(element.temp.max)}&#176;</span>
            </span>
    )});

    // Tried to cut down on rerenders by using the original object array (instead of looping through to build a new array)
    // const images = icons.map((element, index) => {
    //     return (
    //         <span className='weatherWrapper' id={index === 0 ? 'todaysWeatherItem' : ''} key={index}>
    //             <span className='dayOfWeek'>{dayOfWeekName(element.weekday)}</span>
    //             <img src={`http://openweathermap.org/img/wn/${element.icon}@2x.png`} key={index} alt={element.alt}/>
    //             <span className='minTemp'>{Math.round(element.min)}&#176;</span>
    //             <span className='maxTemp'>{Math.round(element.max)}&#176;</span>
    //         </span>);
    //    });

    return (

        <div className='container'>
            {/* {images} */}
            {newImages}
        </div>
    );
}

export default WeatherWrapper;