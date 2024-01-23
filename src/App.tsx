import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MoodImg from './components/MoodImg';
import MainWeatherData from './components/MainWeatherData';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

const theme = {
  colors: {
    body: 'linear-gradient(#2dd6fc, #4342ca)',
    blockbg: 'rgba(30, 50, 150, 0.6)'
  },

  border: {
    brwhite: '2px solid white;',
    brradius: '10px'
  },
  
  mobile: '1024px'
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className='mainContainer'>
          <GlobalStyles />
          <MainWeatherData />
          <DailyForecast />
          {/* <HourlyForecast /> 
          <MoodImg />*/}
        </div>
      </>
    </ThemeProvider>
  )
}

export default App