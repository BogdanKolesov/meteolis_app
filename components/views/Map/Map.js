import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const API_KEY = 'e94ebc5805584dd3962102719232005';

const Map = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=latitude,longitude`
                );
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.log('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {weatherData.length > 0 && (
                <MapView style={{ flex: 1 }} initialRegion={{
                    latitude: weatherData[0].location.lat,
                    longitude: weatherData[0].location.lon,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    {weatherData.map((data, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: data.location.lat,
                                longitude: data.location.lon,
                            }}
                            title={data.location.name}
                            description={data.current.condition.text}
                        />
                    ))}
                </MapView>
            )}
        </View>
    );
};


export default Map;
