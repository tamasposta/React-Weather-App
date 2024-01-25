import { createContext, useContext, useState, ReactNode } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

interface GeocodingContextType {
  location: Location | null;
  setGeocodingInfo: (latitude: number, longitude: number) => void;
}

export const GeocodingContext = createContext<GeocodingContextType | undefined>(undefined);

export const GeocodingProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null);

  const setGeocodingInfo = (latitude: number, longitude: number) => {
    setLocation({ latitude, longitude });
  };

  return (
    <GeocodingContext.Provider value={{ location, setGeocodingInfo }}>
      {children}
    </GeocodingContext.Provider>
  );
};

export const useGeocoding = () => {
  const context = useContext(GeocodingContext) as GeocodingContextType;
  if (context === undefined) {
    throw new Error("useGeocoding must be used within a GeocodingProvider");
  }
  return context;
};
