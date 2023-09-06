import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const apiKey = '117bfe6be263d54afb55f47b46b6daf1';
    const city = 'London'; // can replace with the desired location

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error fetching weather data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp-273)}°C</p>
          <p>Feels Like: {Math.round(weatherData.main.feels_like-273)}°C</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Pressure: {weatherData.main.pressure}</p>
          <p>Min Temperature: {Math.round(weatherData.main.temp_max-273)}°C</p>
          <p>Max Temperature: {Math.round(weatherData.main.temp_min-273)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Wind: {weatherData.wind.speed}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;

