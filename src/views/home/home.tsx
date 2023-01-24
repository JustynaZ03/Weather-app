import { useState } from "react";
import { CurrentWeather } from "../../components/current-weather";
import { Forecast } from "../../components/forecast/forecast";
import { Search } from "../../components/search";
import {
  WEATHER_API_KEY,
  WEATHER_API_URL,
} from "../../hooks/get-city/get-city";
import "./home.scss";
import { DataofWeather, DataofForecast } from "../../types/types";

export const Home = () => {
  const [currentWeather, setCurrentWeather] = useState<DataofWeather>();
  const [forecastWeather, setForecastWeather] = useState<DataofForecast>();
  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })

      .catch((error) => console.log(error));
    console.log(forecastWeather?.list[0].main.temp_max);
    console.log(forecastWeather?.list[1].main.temp_max);
  };
  return (
    <>
      <div className="home">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && (
          <CurrentWeather
            city={currentWeather?.city}
            weather={currentWeather?.weather}
            main={{
              temp: currentWeather?.main.temp,
            }}
          />
        )}
        {forecastWeather && <Forecast list={forecastWeather.list}></Forecast>}
      </div>
    </>
  );
};
