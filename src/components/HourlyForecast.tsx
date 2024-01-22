import { StyledHourlyFC } from "./styles/HourlyForecast.styled"
import { useState } from "react";

const getDate = () => {
  const today = new Date();
  const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Oktober", "November", "December"];
  const monthIndex = today.getMonth();
  const monthName = monthNames[monthIndex];
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}.${monthName}.${date}`;
}

export default function HourlyForecast() {
  const [currentDate] = useState(getDate());

  return (
    <StyledHourlyFC>
      <div id="current-date">
        <p>Ma</p>
        <p className="actual-date">{currentDate}</p>
      </div>
      <div id="hourly-forecast-lower">
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">8°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">00:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">01:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">02:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">03:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">04:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">05:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">06:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">07:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">08:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">09:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">10:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">11:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">12:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">13:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">14:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">15:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">16:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">17:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">18:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">19:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">20:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">21:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">22:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">23:00</p>
          </div>
        </div>
        <div className="hourly-forecast-lower-column">
          <div className="hourly-data">
            <p className="hourly-degree">5°C</p>
            <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
            <p className="actual-hour">24:00</p>
          </div>
        </div>
      </div>
    </StyledHourlyFC>
  )
}

// Feladat: Megjeleníteni az órás időjárás adatokat Carousel formában mobilon, gépen pedig Flexbox-ban
// Szükség lesz:
// - Carousel és Flexbox kiépítése
// - Az API-ból dinamikusan megjeleníteni az adatokat mapping-gel