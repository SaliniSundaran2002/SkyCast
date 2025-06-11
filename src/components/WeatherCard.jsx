import React from 'react'

const WeatherCard = ({ weather }) => {
    if (!weather || !weather.weather || weather.weather.length === 0) return null;
  
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <p className="text-xl">{weather.main.temp}°C</p>
      </div>
    );
  };
  

export default WeatherCard