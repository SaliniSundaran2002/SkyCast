import React from "react";

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
      {data.list.slice(0, 5).map((item, i) => (
        <div key={i} className="p-4 bg-white rounded shadow text-center">
          <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>{item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
