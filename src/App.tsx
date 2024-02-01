import { useState } from "react";
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MainWeatherData from './components/MainWeatherData';
import DailyForecast from './components/DailyForecast';

const theme = {
  colors: {
    body: 'linear-gradient(#2dd6fc, #4342ca)',
    blockbg: 'rgba(30, 50, 150, 0.6)',
    whitetp: 'rgba(255, 255, 255, 0.2)'
  },

  border: {
    brwhite: '2px solid white;',
    brradius: '10px'
  },

  mobile: '1024px'
}

const App = () => {
  const [city, setCity] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className='mainContainer'>
          <GlobalStyles />
          <MainWeatherData city={city} setCity={setCity}/>
          <DailyForecast city={city} />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App