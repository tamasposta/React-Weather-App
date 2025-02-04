import { useState } from "react";
import MainWeatherData from "../components/MainWeatherData/MainWeatherData";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import { useHome } from "../hooks/useHome";

const Home = () => {
  const [city, setCity] = useState<string>("");
  const {
    fetchWeatherData,
    weatherData,
    fetchForecastData,
    forecastData,
    isWeatherDataLoading,
    isForecastDataLoading,
  } = useHome({ city });

  return (
    <>
      <MainWeatherData
        city={city}
        setCity={setCity}
        weatherData={weatherData}
        fetchWeatherData={fetchWeatherData}
        fetchForecastData={fetchForecastData}
        isWeatherDataLoading={isWeatherDataLoading}
      />
      <DailyForecast
        city={city}
        forecastData={forecastData}
        isForecastDataLoading={isForecastDataLoading}
      />
    </>
  );
};

export default Home;
