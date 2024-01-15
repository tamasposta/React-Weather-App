import { StyledDailyFC } from "./styles/DailyForecast.styled"

export default function DailyForecast() {
  return (
    <StyledDailyFC>
      <h2>8 days forecast</h2>
      <div id="daily-forecast-table">
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
        <div className="daily-forecast-table-element">
          <h4 className="daily-forecast-date">01.15 H</h4>
          <img src="src/images/moon-cloud-mid-rain.png" alt="" className="daily-forecast-img" />
          <h5 className="rain-mm">5mm</h5>
          <h3 className="daily-forecast-upper-degree">9°C</h3>
          <h4 className="daily-forecast-lower-degree">2°C</h4>
        </div>
      </div>
    </StyledDailyFC>
  )
}

//Feladat: Táblázatos formában megjeleníteni a 8 napos előrejelzést. Szükség lesz ehhez:
// - egy 3 oszlopos Flexbox-ra, aminek 8 sora van
// - dinamikusan megjeleníteni a hőmérsékletet, időjárás ikont és a dátumot vagy hét napját
// - mapping function kell valószínűleg