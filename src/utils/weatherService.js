// src/utils/weatherService.js
export const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();
  
    const forecastRes = await fetch(forecastURL);
    const forecastData = await forecastRes.json();
  
    return { weatherData, forecastData };
  };
  