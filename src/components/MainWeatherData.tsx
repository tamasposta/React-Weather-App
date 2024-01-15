import { StyledMainWeatherData } from "./styles/MainWeatherData.styled"

export default function MainWeatherData() {
  return (
    <StyledMainWeatherData>
          <img src="src/images/sun+rain.png" alt="" className="actual-weather-img" />
          <h1 className="location">Debrecen</h1>
          <h3 className="actual-degree">5°C</h3>
          <p className="max-min-degree">Max: 8°C | Min: 1°C</p>
    </StyledMainWeatherData>
  )
}

// Feladat: Block formátumban megjeleníteni az img-et dinamikusan, a helyzetet, a hőmérsékletet és a min-max hőmérsékletet