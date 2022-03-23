function WeatherWrapper({ icons }) {

    const dayOfWeekName = (day) => {
        const dayOfWeekArray = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        return dayOfWeekArray[day];
      }

    const images = icons.map((element, index) => {
        return (
            <span className='weatherWrapper' id={index === 0 ? 'todaysWeatherItem' : ''} key={index}>
                <span className='dayOfWeek'>{dayOfWeekName(element.weekday)}</span>
                <img src={`http://openweathermap.org/img/wn/${element.icon}@2x.png`} key={index} alt={element.alt}/>
                <span className='minTemp'>{Math.round(element.min)}&#176;</span>
                <span className='maxTemp'>{Math.round(element.max)}&#176;</span>
            </span>);
       });

    return (

        <div className='container'>
            {images}
        </div>
    );
}

export default WeatherWrapper;