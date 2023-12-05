import { createContext, useContext, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeoLocation';
import { useWeather } from '../hooks/useWeather';
import { useGetWeatherData } from '../hooks/useGetWeatherData';

const weatherContext = createContext();

export default function WeatherProvider({ children }) {
  const {
    position,
    isLoading: locationLoading,
    error: locationError,
    getPosition,
  } = useGeolocation();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const {
    isLoading: dataLoading,
    error: dataError,
    data,
  } = useWeather(position?.lat, position?.lng, timezone, 7);

  const {
    temperature,
    weatherCode,
    isDay,
    temperatureUnit,
    daysForecast,
    hourlyForecast,
    precipitationProbability,
  } = useGetWeatherData(data, timezone, 7);

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  return (
    <weatherContext.Provider
      value={{
        position,
        locationLoading,
        locationError,
        timezone,
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
