import { StyledHourlyFC } from "./styles/HourlyForecast.styled"
import { useState } from "react";
import { fetchWeatherApi } from 'openmeteo';

const getDate = () => {
  const today = new Date();
  const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Oktober", "November", "December"];
  const monthIndex = today.getMonth();
  const monthName = monthNames[monthIndex];
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}.${monthName}.${date}`;
}
	
// const params = {
// 	"latitude": 47.5317,
// 	"longitude": 21.6244,
// 	"daily": ["temperature_2m_max", "temperature_2m_min", "precipitation_sum", "wind_speed_10m_max"],
// 	"timezone": "auto",
// 	"forecast_days": 14
// };
// const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, params);

// // Helper function to form time ranges
// const range = (start: number, stop: number, step: number) =>
// 	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// // Process first location. Add a for-loop for multiple locations or weather models
// const response = responses[0];

// // Attributes for timezone and location
// const utcOffsetSeconds = response.utcOffsetSeconds();
// const timezone = response.timezone();
// const timezoneAbbreviation = response.timezoneAbbreviation();
// const latitude = response.latitude();
// const longitude = response.longitude();

// const daily = response.daily()!;

// // Note: The order of weather variables in the URL query and the indices below need to match!
// const weatherData = {

// 	daily: {
// 		time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
// 			(t) => new Date((t + utcOffsetSeconds) * 1000)
// 		),
// 		temperature2mMax: daily.variables(0)!.valuesArray()!,
// 		temperature2mMin: daily.variables(1)!.valuesArray()!,
// 		precipitationSum: daily.variables(2)!.valuesArray()!,
// 		windSpeed10mMax: daily.variables(3)!.valuesArray()!,
// 	},

// };

// // `weatherData` now contains a simple structure with arrays for datetime and weather data
// for (let i = 0; i < weatherData.daily.time.length; i++) {
// 	console.log(
// 		weatherData.daily.time[i].toISOString(),
// 		weatherData.daily.temperature2mMax[i],
// 		weatherData.daily.temperature2mMin[i],
// 		weatherData.daily.precipitationSum[i],
// 		weatherData.daily.windSpeed10mMax[i]
// 	);
// }

// console.log(weatherData.daily, 'Ez lenne a jó')

const HourlyForecast = () => {
  const [currentDate] = useState(getDate());
  const [weatherData] = useState(null)

  return (
    <StyledHourlyFC>
      <>
      <div id="current-date">
        <p>Ma</p>
        <p className="actual-date">{currentDate}</p>
        </div>
        <div>
      {weatherData?.daily.map(() => (
        <p>Hello</p>
      ))}
      </div>
      </>
       {/* <div id="hourly-forecast-lower">
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
           </div> */}
      {/* //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">02:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">03:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">04:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">05:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">06:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">07:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">08:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">09:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">10:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">11:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">12:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">13:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">14:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">15:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">16:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">17:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">18:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">19:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">20:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">21:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">22:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">23:00</p>
      //     </div>
      //   </div>
      //   <div className="hourly-forecast-lower-column">
      //     <div className="hourly-data">
      //       <p className="hourly-degree">5°C</p>
      //       <img src="src/images/moon-cloud-mid-rain.png" alt="" className="hourly-weather-img" />
      //       <p className="actual-hour">24:00</p>
      //     </div>
      //   </div> 
      // </div> */}
    </StyledHourlyFC>
  )
}

export default HourlyForecast

// Feladat: Megjeleníteni az órás időjárás adatokat Carousel formában mobilon, gépen pedig Flexbox-ban
// Szükség lesz:
// - Carousel és Flexbox kiépítése
// - Az API-ból dinamikusan megjeleníteni az adatokat mapping-gel