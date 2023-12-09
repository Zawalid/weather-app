import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useQueryClient } from '@tanstack/react-query';
import { FONT_SIZES } from '../utils/constants';
import { checkIfDayOrNight } from '../utils/helpers';

export const settingsContext = createContext();

export default function SettingsProvider({ children }) {
  // Todo set a default settings constant in constants.js and a reset function
  const [settings, setSettings] = useLocalStorageState('settings', {
    temperatureUnit: 'celsius',
    windSpeedUnit: 'kmh',
    pressureUnit: 'hPa',
    precipitationUnit: 'mm',
    distanceUnit: 'Km',
    is12HourFormat: true,
    isLocationAccess: true,
    defaultLocation: null,
    daysForeCast: '7 Days',
    hoursForeCast: '12 Hours',
  });
  const [temperatureUnit, setTemperatureUnit] = useState(settings.temperatureUnit);
  const [windSpeedUnit, setWindSpeedUnit] = useState(settings.windSpeedUnit);
  const [pressureUnit, setPressureUnit] = useState(settings.pressureUnit);
  const [precipitationUnit, setPrecipitationUnit] = useState(settings.precipitationUnit);
  const [distanceUnit, setDistanceUnit] = useState(settings.distanceUnit);
  const [is12HourFormat, setIs12HourFormat] = useState(settings.is12HourFormat);
  const [isLocationAccess, setIsLocationAccess] = useState(settings.isLocationAccess);
  const [defaultLocation, setDefaultLocation] = useState(settings.defaultLocation);
  const [daysForeCast, setDaysForeCast] = useState(settings.daysForeCast);
  const [hoursForeCast, setHoursForeCast] = useState(settings.hoursForeCast);

  const [appearance, setAppearance] = useLocalStorageState('appearance', {
    theme: 'System',
    fontSize: 'Default',
    enableAnimations: true,
    autoDayNightMode: false,
  });

  const [theme, setTheme] = useState(appearance.theme);
  const [fontSize, setFontSize] = useState(appearance.fontSize);
  const [enableAnimations, setEnableAnimations] = useState(appearance.enableAnimations);
  const [autoDayNightMode, setAutoDayNightMode] = useState(appearance.autoDayNightMode);

  const queryClient = useQueryClient();

  const changeTheme = useCallback(() => {
    if (theme !== 'System') {
      document.documentElement.className = ['System Dark', 'Dark'].includes(theme)
        ? 'dark'
        : 'light';
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? setTheme('System Dark')
        : setTheme('System Light');
    }
  }, [theme]);

  // Set theme
  useEffect(() => {
    changeTheme();
  }, [changeTheme]);

  // Set auto day night mode
  useEffect(() => {
    if (autoDayNightMode) {
      checkIfDayOrNight() === 'night'
        ? (document.documentElement.className = 'dark')
        : (document.documentElement.className = 'light');
    } else changeTheme();
  }, [autoDayNightMode, changeTheme]);

  // Set font size
  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZES[fontSize];
  }, [fontSize]);

  // Update settings
  useEffect(() => {
    setSettings({
      temperatureUnit,
      windSpeedUnit,
      precipitationUnit,
      pressureUnit,
      distanceUnit,
      is12HourFormat,
      isLocationAccess,
      defaultLocation,
      daysForeCast,
      hoursForeCast,
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
    defaultLocation,
    queryClient,
    daysForeCast,
    hoursForeCast,
  ]);

  // Update appearance
  useEffect(() => {
    setAppearance({ theme, fontSize, enableAnimations, autoDayNightMode });
  }, [theme, fontSize, enableAnimations, autoDayNightMode, setAppearance]);

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
        defaultLocation,
        setDefaultLocation,
        daysForeCast,
        setDaysForeCast,
        hoursForeCast,
        setHoursForeCast,
        // -------------------
        theme,
        setTheme,
        fontSize,
        setFontSize,
        enableAnimations,
        setEnableAnimations,
        autoDayNightMode,
        setAutoDayNightMode,
      }}
    >
      {children}
    </settingsContext.Provider>
  );
}
