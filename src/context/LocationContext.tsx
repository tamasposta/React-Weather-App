import { createContext, useState, useContext } from 'react';
import axios from "axios"

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};