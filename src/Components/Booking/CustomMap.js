import React, { useEffect, useState } from 'react'
import { Box, Skeleton } from '@mui/material';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
const CustomMap = ({ origin, destination }) => {

    console.log('from map')
    console.log(destination)

    const API_KEY = process.env.REACT_APP_API_KEY;
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY,
        libraries: ['places'],
        region: "ae",
    })
    const center = { lat: 25.2048, lng: 55.2708 }
    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)

    async function calculateRoute() {
        if (origin === '' || destination === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: origin,
            destination: destination,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)

    }
    useEffect(() => {
        calculateRoute()
    },[origin])

    if (!isLoaded) {
        return <Skeleton />
    }

    return (
        <>

            <GoogleMap center={center} zoom={10}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}>
                <Marker position={center} />
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>


        </>
    )
}

export default CustomMap