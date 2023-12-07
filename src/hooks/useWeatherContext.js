import { useContext } from 'react';
import { weatherContext } from '../contexts/WeatherContext';

// eslint-disable-next-line react-refresh/only-export-components

export function useWeatherContext() {
  const context = useContext(weatherContext);
  return context;
}
