import { StyledMainWeatherData } from "../styles/MainWeatherData.styled"
import { MainWeatherDataProps } from "./MainWeatherData.types"
import { PropagateLoader } from "react-spinners"
import { theme } from "../../utils/themes"
import { useMainWeatherData } from "./hooks/useMainWeatherData"

const MainWeatherData =  ({ city, setCity }:MainWeatherDataProps) => {
  const { weatherData, iconUrl, handleSubmit, handleInputChange } = useMainWeatherData({ city, setCity });

  return (
    <StyledMainWeatherData>
    <div className="mainWeather">
      {weatherData 
      ? (
        <>
          <img src={iconUrl} alt="mainWeatherImg" className="actual-weather-img" />
          <h1 className="location">{weatherData.name}</h1>
          <h3> {Math.round(weatherData.main.temp)}°C</h3>
          <p>Leírás: {weatherData.weather[0].description} </p>
          <p>Hőérzet: {weatherData.main.feels_like}°C</p>
          <p>Páratartalom: {weatherData.main.humidity}</p>
          <p>Szél: {Math.round(weatherData.wind.speed)} m/s</p>
        </>
      ) 
      : (
        <PropagateLoader color={theme.colors.white} size={20}/>
      )}
      <form onSubmit={handleSubmit} className="cityForm">
        <input
          type="text"
          placeholder="Írd be a város nevét..."
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit" className="formButton">🔍 KERESÉS</button>
      </form>
    </div>
    </StyledMainWeatherData>
  );
};

export default MainWeatherData