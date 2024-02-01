import { StyledMainWeatherData } from "./styles/MainWeatherData.styled"
import axios from "axios"
import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";

const MainWeatherData = ({ city, setCity }) => {
  const location = useGeolocation();
  const [weatherData, setWeatherData] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
       city
        ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.long}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location, city]);
// useEffect-nél a []-n belül lehet megadni dependenciát, ami azt jelenti, hogy ha az változik, akkor az előző függvényt újra lefuttatja

  const handleInputChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };

  const iconUrl = `./src/images/icons/${weatherData?.weather?.[0]?.icon}.svg`;                  

  return (
    <StyledMainWeatherData>
    <div>
      {weatherData 
      ? (
        <>
          <img src={iconUrl} alt="" className="actual-weather-img" />
          <h1 className="location">{weatherData.name}</h1>
          <h3> {Math.round(weatherData.main.temp)}°C</h3>
          <p>Leírás: {weatherData.weather[0].description} </p>
          <p>Hőérzet: {weatherData.main.feels_like}°C</p>
          <p>Páratartalom: {weatherData.main.humidity}</p>
          <p>Szél: {Math.round(weatherData.wind.speed)} m/s</p>
        </>
      ) 
      : (
        <p>Adatok betöltés alatt...</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Írd be a város nevét..."
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">🔍 KERESÉS</button>
      </form>
    </div>
    </StyledMainWeatherData>
  );
};

export default MainWeatherData;