import { ActualWeatherImg, LocationH1, MainWeatherDataDiv, StyledMainWeatherData, TempH3 } from "../styles/MainWeatherData.styled"
import { MainWeatherDataProps } from "./MainWeatherData.types"
import { PropagateLoader } from "react-spinners"
import { theme } from "../../utils/themes"
import SearchInput from "./components/SearchInput"

const MainWeatherData = ({ city, setCity, weatherData, fetchWeatherData, fetchForecastData, isWeatherDataLoading }: MainWeatherDataProps) => {
  const iconUrl = `./images/icons/${weatherData?.weather?.[0]?.icon}.svg`

  return (
    <StyledMainWeatherData>
      <MainWeatherDataDiv>
        {isWeatherDataLoading && <PropagateLoader color={theme.colors.white} size={20} />}
        {weatherData
          ? (
            <>
              <ActualWeatherImg src={iconUrl} alt="mainWeatherImg" />
              <LocationH1>{weatherData.name}</LocationH1>
              <TempH3> {Math.round(weatherData.main.temp)}°C</TempH3>
              <p>Leírás: {weatherData.weather[0].description} </p>
              <p>Hőérzet: {weatherData.main.feels_like}°C</p>
              <p>Páratartalom: {weatherData.main.humidity}</p>
              <p>Szél: {Math.round(weatherData.wind.speed)} m/s</p>
            </>
          )
          : (
            <p>Kezdje el a keresést.</p>
)}
        <SearchInput
          city={city}
          setCity={setCity}
          fetchWeatherData={fetchWeatherData}
          fetchForecastData={fetchForecastData}
        />
      </MainWeatherDataDiv>
    </StyledMainWeatherData>
  );
};

export default MainWeatherData