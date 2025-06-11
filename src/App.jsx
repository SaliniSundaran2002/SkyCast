import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const backgroundImages = {
    Clear: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    Clouds: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    Rain: "https://images.unsplash.com/photo-1527766833261-b09c3163a791",
    Snow: "https://images.unsplash.com/photo-1608889176065-e640ec66c698",
    Thunderstorm: "https://images.unsplash.com/photo-1600369673162-1d0c2971e70b",
    Mist: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    Default: "404",
  };

  const weatherType = weather?.weather?.[0]?.main;
  const backgroundImageUrl =
    backgroundImages[weatherType] || backgroundImages.Default;

  return (
    <div
      className={`min-h-screen transition duration-300 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`${
          darkMode ? "bg-black/70" : "bg-white/60"
        } min-h-screen`}
      >
        <header className="p-6 text-center shadow-md bg-black/50 text-white">
          <h1 className="text-4xl font-bold mb-2">🌤️ SkyCast</h1>
          <button
            className="px-4 py-2 bg-white text-gray-800 font-semibold rounded shadow hover:bg-gray-100 transition"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="flex flex-col items-center justify-center p-8">
          <div
            className={`p-6 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } ${weather ? "animate-fade-in" : ""}`}
          >
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Enter city"
                className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={fetchWeather}
              >
                Search
              </button>
            </div>

            {weather && weather.main ? (
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">{weather.name}</h2>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="mx-auto w-20 h-20"
                />
                <p className="capitalize">
                  {weather.weather[0].description}
                </p>
                <p className="text-lg">
                  🌡 Temperature: {weather.main.temp}°C
                </p>
                <p className="text-lg">
                  💧 Humidity: {weather.main.humidity}%
                </p>
              </div>
            ) : (
              weather && (
                <p className="text-red-500 text-center">
                  City not found. Try again!
                </p>
              )
            )}
          </div>
        </main>
        <footer>
        <p className="text-sm text-center">
          Made with ❤️ by SALINI SUNDARAN
        </p>
        <div className="text-center mt-4">
          <button
            className="text-sm hover:underline transition"
            onClick={() => {
              const infoDiv = document.getElementById("infoDiv");
              if (infoDiv) infoDiv.style.display = "block";
            }}
            >
            Why SkyCast?
            </button>
            <div
            id="infoDiv"
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 text-center"
            style={{ display: "none" }}
            >
            <div
              className={`p-6 rounded-lg shadow-lg w-full max-w-md ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <h2 className="text-xl font-bold mb-4 text-center justify-center">About SkyCast</h2>
              <ul className="list-disc list-inside mb-4">
              <li>SkyCast is a weather application that allows you to search for the
              current weather conditions of any city.</li> 
              <li>It features a light/dark mode
              toggle and dynamic background images based on the weather type.</li>
              <li>SkyCast uses the OpenWeatherMap API to fetch real-time weather data.</li>
              <li>It provides details such as temperature, humidity, and weather description.</li>
              <li>SkyCast is designed with a responsive and user-friendly interface.</li>
              </ul>
              <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              onClick={() => {
                  const infoDiv = document.getElementById("infoDiv");
                  if (infoDiv) infoDiv.style.display = "none";
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        </footer>
        
      </div>
    </div>
  );
};

export default App;
