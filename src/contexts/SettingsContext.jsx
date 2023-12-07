import { createContext, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useQueryClient } from '@tanstack/react-query';

export const settingsContext = createContext();

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorageState('settings', {
    temperatureUnit: 'celsius',
    windSpeedUnit: 'kmh',
    pressureUnit: 'hPa',
    precipitationUnit: 'mm',
    distanceUnit: 'Km',
    is12HourFormat: true,
    isLocationAccess: true,
  });
  const [temperatureUnit, setTemperatureUnit] = useState(settings.temperatureUnit);
  const [windSpeedUnit, setWindSpeedUnit] = useState(settings.windSpeedUnit);
  const [pressureUnit, setPressureUnit] = useState(settings.pressureUnit);
  const [precipitationUnit, setPrecipitationUnit] = useState(settings.precipitationUnit);
  const [distanceUnit, setDistanceUnit] = useState(settings.distanceUnit);
  const [is12HourFormat, setIs12HourFormat] = useState(settings.is12HourFormat);
  const [isLocationAccess, setIsLocationAccess] = useState(settings.isLocationAccess);

  const queryClient = useQueryClient();

  useEffect(() => {
    setSettings({
      temperatureUnit,
      windSpeedUnit,
      precipitationUnit,
      pressureUnit,
      distanceUnit,
      is12HourFormat,
      isLocationAccess,
    });
    queryClient.invalidateQueries();
  }, [
    temperatureUnit,
    windSpeedUnit,
    pressureUnit,
    precipitationUnit,
    distanceUnit,
    setSettings,
    is12HourFormat,
    isLocationAccess,
    queryClient,
  ]);

  return (
    <settingsContext.Provider
      value={{
        temperatureUnit,
        setTemperatureUnit,
        windSpeedUnit,
        setWindSpeedUnit,
        pressureUnit,
        setPressureUnit,
        precipitationUnit,
        setPrecipitationUnit,
        distanceUnit,
        setDistanceUnit,
        is12HourFormat,
        setIs12HourFormat,
        isLocationAccess,
        setIsLocationAccess,
      }}
    >
      {children}
    </settingsContext.Provider>
  );
}
