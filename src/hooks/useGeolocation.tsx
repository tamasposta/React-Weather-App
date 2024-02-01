import { useEffect, useState } from 'react'

const useGeolocation = () => {
    const [location, setLocation] = useState({ 
        loaded: false,
        coordinates: { lat: "", long: "" } 
    })
    // amíg a látogató nem ad engedélyt, a location és longitude nem lesz meg, default value üres
  
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude,
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        })
    }

    useEffect(() => {
        if( !("Geolocation" in navigator) ){
            onError({
                code: 0,
                message: "Geolocation not supported",
            },)
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
  
  return location
}

export default useGeolocation