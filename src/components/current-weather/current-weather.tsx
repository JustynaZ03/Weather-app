import "./current-weather.scss";
import { DataofWeather } from "../../types/types";

export const CurrentWeather = (data: DataofWeather) => {
  return (
    <div className="current-weather">
      <div className="current-weather__container">
        <div className="current-weather__container-top">
          <span className="current-weather__container-city-span">
            {data.city}
          </span>
        </div>
        <div className="current-weather__container-center">
          <span className="current-weather__container-weather-span">
            {Math.round(data.main.temp)}°C
          </span>
          <img
            alt="weather"
            className="current-weather__container-weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="current-weather__container-bottom">
          <span className="current-weather__container-temperature-span">
            {data.weather[0].description}
          </span>
        </div>
      </div>
    </div>
  );
};
