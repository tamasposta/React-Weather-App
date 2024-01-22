import { StyledDailyFC } from "./styles/DailyForecast.styled"
import { useEffect, useState } from "react";
import axios from "axios";

const getDate = () => {
  const today = new Date();
  const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Oktober", "November", "December"];
  const monthIndex = today.getMonth();
  const monthName = monthNames[monthIndex];
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}.${monthName}.${date}`;
}

 export default function DailyForecast() {
  const [forecastData, setForecastData] = useState(null);
  const [currentDate] = useState(getDate());


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Debrecen&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
      );
      setForecastData(response.data);
      console.log(response.data, 'Daily Forecast API Data');
      console.log(response.data.list[4], 'ötödik elem');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledDailyFC>
      <div>
      {forecastData 
      ? (
        <>
          <h3>{forecastData.list[4].main?.temp}°C</h3>
        </>
      ) 
      : (
        <p>Adatok betöltés alatt!</p>
      )}
    </div>
    <div id="current-date">
        <p>Ma</p>
        <p className="actual-date">{currentDate}</p>
      </div>
      <h2>5 napos előrejelzés</h2>
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