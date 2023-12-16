import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useQueryClient } from '@tanstack/react-query';
import { DEFAULT_SETTINGS, FONT_SIZES } from '../utils/constants';
import { checkIfDayOrNight, isDeepEqual, confirmDeletion } from '../utils/helpers';

export const settingsContext = createContext();

export default function SettingsProvider({ children }) {
  const { settings: st, appearance: ap } = DEFAULT_SETTINGS;
  const [isChanged, setIsChanged] = useState(false);

  const [settings, setSettings] = useLocalStorageState('settings', st);
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
  const [enableDeleteConfirmations, setEnableDeleteConfirmations] = useState(
    settings.enableDeleteConfirmations,
  );
  const [searchResultsCount, setSearchResultsCount] = useState(settings.searchResultsCount);
  const [enableSearchHistory, setEnableSearchHistory] = useState(settings.enableSearchHistory);
  const [searchHistory, setSearchHistory] = useLocalStorageState('history', []);
  const [sortCriteria, setSortCriteria] = useState(settings.sortCriteria);
  const [mapZoomLevel, setMapZoomLevel] = useState(settings.mapZoomLevel);
  const [enableTouchZoom, setEnableTouchZoom] = useState(settings.enableTouchZoom);
  const [enableScrollZoom, setEnableScrollZoom] = useState(settings.enableScrollZoom);
  const [enableDoubleClickZoom, setEnableDoubleClickZoom] = useState(
    settings.enableDoubleClickZoom,
  );

  const [appearance, setAppearance] = useLocalStorageState('appearance', ap);
  const [theme, setTheme] = useState(appearance.theme);
  const [fontSize, setFontSize] = useState(appearance.fontSize);
  const [enableAnimations, setEnableAnimations] = useState(appearance.enableAnimations);
  const [autoDayNightMode, setAutoDayNightMode] = useState(appearance.autoDayNightMode);

  const queryClient = useQueryClient();

  const changeTheme = useCallback(() => {
    if (theme === 'System')
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? (document.documentElement.className = 'dark')
        : (document.documentElement.className = 'light');
    else document.documentElement.className = theme === 'Dark' ? 'dark' : 'light';
  }, [theme]);

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
      enableDeleteConfirmations,
      searchResultsCount,
      enableSearchHistory,
      sortCriteria,
      mapZoomLevel,
      enableTouchZoom,
      enableScrollZoom,
      enableDoubleClickZoom,
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
    enableDeleteConfirmations,
    searchResultsCount,
    enableSearchHistory,
    sortCriteria,
    mapZoomLevel,
    enableTouchZoom,
    enableScrollZoom,
    enableDoubleClickZoom,
  ]);

  // Update appearance
  useEffect(() => {
    setAppearance({ theme, fontSize, enableAnimations, autoDayNightMode });
  }, [theme, fontSize, enableAnimations, autoDayNightMode, setAppearance]);

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

  // Check if settings changed
  useEffect(() => {
    if (isDeepEqual(settings, st) && isDeepEqual(appearance, ap)) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [settings, st, appearance, ap]);

  // Reset all settings
  function resetAllSettings() {
    setTemperatureUnit(st.temperatureUnit);
    setWindSpeedUnit(st.windSpeedUnit);
    setPressureUnit(st.pressureUnit);
    setPrecipitationUnit(st.precipitationUnit);
    setDistanceUnit(st.distanceUnit);
    setIs12HourFormat(st.is12HourFormat);
    setIsLocationAccess(st.isLocationAccess);
    setDefaultLocation(st.defaultLocation);
    setDaysForeCast(st.daysForeCast);
    setHoursForeCast(st.hoursForeCast);
    setEnableDeleteConfirmations(st.enableDeleteConfirmations);
    setSearchResultsCount(st.searchResultsCount);
    setEnableSearchHistory(st.enableSearchHistory);
    setSortCriteria(st.sortCriteria);
    setMapZoomLevel(st.mapZoomLevel);
    setEnableTouchZoom(st.enableTouchZoom);
    setEnableScrollZoom(st.enableScrollZoom);
    setEnableDoubleClickZoom(st.enableDoubleClickZoom);

    setTheme(ap.theme);
    setFontSize(ap.fontSize);
    setEnableAnimations(ap.enableAnimations);
    setAutoDayNightMode(ap.autoDayNightMode);
  }

  function addToSearchHistory(city) {
    if (searchHistory.some((c) => c.id === city.id)) return;
    setSearchHistory((prev) => (prev.length === 4 ? [city, ...prev.slice(0, 3)] : [city, ...prev]));
  }
  function clearSearchHistory() {
    enableDeleteConfirmations
      ? confirmDeletion('Are you sure you want to clear the history', 'Clear', () =>
          setSearchHistory([]),
        )
      : setSearchHistory([]);
  }

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
        enableDeleteConfirmations,
        setEnableDeleteConfirmations,
        searchResultsCount,
        setSearchResultsCount,
        enableSearchHistory,
        setEnableSearchHistory,
        sortCriteria,
        setSortCriteria,
        mapZoomLevel,
        setMapZoomLevel,
        enableTouchZoom,
        setEnableTouchZoom,
        enableScrollZoom,
        setEnableScrollZoom,
        enableDoubleClickZoom,
        setEnableDoubleClickZoom,
        // -------------------
        theme,
        setTheme,
        fontSize,
        setFontSize,
        enableAnimations,
        setEnableAnimations,
        autoDayNightMode,
        setAutoDayNightMode,
        // -------------------
        isChanged,
        resetAllSettings,
        searchHistory,
        addToSearchHistory,
        clearSearchHistory,
      }}
    >
      {children}
    </settingsContext.Provider>
  );
}
