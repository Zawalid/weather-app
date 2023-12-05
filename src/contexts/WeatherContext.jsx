import { createContext, useContext, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeoLocation';
import { useWeather } from '../hooks/useWeather';
import { useGetWeatherData } from '../hooks/useGetWeatherData';

const weatherContext = createContext();

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

  const {
    temperature,
    weatherCode,
    isDay,
    temperatureUnit,
    daysForecast,
    hourlyForecast,
    precipitationProbability,
  } = useGetWeatherData(data, location?.timezone || fallBackTimezone, 7);

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
        temperature,
        weatherCode,
        isDay,
        temperatureUnit,
        daysForecast,
        hourlyForecast,
        precipitationProbability,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeatherContext() {
  const context = useContext(weatherContext);
  return context;
}
