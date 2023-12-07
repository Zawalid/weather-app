import { createContext, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeoLocation';
import { useWeather } from '../hooks/useWeather';
import { useGetWeatherData } from '../hooks/useGetWeatherData';

export const weatherContext = createContext();

export default function WeatherProvider({ children }) {
  const {
    location,
    isLoading: locationLoading,
    error: locationError,
    getPosition,
  } = useGeolocation();

  const fallBackTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const {
    isLoading: dataLoading,
    error: dataError,
    data,
  } = useWeather(
    location?.latitude,
    location?.longitude,
    location?.timezone || fallBackTimezone,
    7,
  );

  const { weatherCode, isDay, currentForecast, dailyForecast, hourlyForecast } =
    useGetWeatherData(data, 7);

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  return (
    <weatherContext.Provider
      value={{
        location,
        locationLoading,
        locationError,
        dataLoading,
        dataError,
        weatherCode,
        isDay,
        currentForecast,
        hourlyForecast,
        dailyForecast,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}

