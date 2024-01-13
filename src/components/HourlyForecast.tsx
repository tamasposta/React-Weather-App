import { StyledHourlyFC } from "./styles/HourlyForecast.styled"

export default function HourlyForecast() {
  return (
    <StyledHourlyFC>
    <div id="hourly-forecast-upper">
      <p>Ma</p>
      <p className="actual-date">January, 01.</p>
    </div>
    <div id="hourly-forecast-lower">
      <div className="hourly-data">
        <p className="hourly-degree">5°C</p>
        <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
        <p className="actual-hour">15:00</p>
      </div>
    </div>
    </StyledHourlyFC> 
  )
}

// Feladat: Megjeleníteni az órás időjárás adatokat Carousel formában mobilon, gépen pedig Flexbox-ban
// Szükség lesz:
// - Carousel és Flexbox kiépítése
// - Az API-ból dinamikusan megjeleníteni az adatokat mapping-gel