import { useEffect, useState } from 'react'

export interface Coordinates {
    lat: number | null;
    long: number | null;
}

interface ErrorDetails {
    code: number;
    message: string;
}

interface LocationData {
    loaded: boolean;
    coordinates?: Coordinates;
    error?: ErrorDetails;
}

const useGeolocation = () => {
    const [location, setLocation] = useState<LocationData>({
        loaded: false,
        coordinates: { lat: null, long: null }
    })

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude,
            }
        })
    }

    const onError = (error: GeolocationPositionError) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        })
    }

    useEffect(() => {
        if (!("Geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
                PERMISSION_DENIED: 1,
                POSITION_UNAVAILABLE: 2,
                TIMEOUT: 3
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location
}

export default useGeolocation