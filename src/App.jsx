import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSearch = async (city) => {
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();

    setWeather(weatherData);
    setForecast(forecastData);
  };

  const getWeatherByLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();
      setWeather(weatherData);
      setForecast(forecastData);
    });
  };

  // 🌙 Manage dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return (
    <div
      className="min-h-screen p-4 transition-all duration-300
                 bg-gradient-to-r from-blue-300 to-purple-400 text-black 
                 dark:bg-gray-900 dark:text-white"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Weather App</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-white dark:text-gray-900"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
