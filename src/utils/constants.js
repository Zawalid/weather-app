export const FONT_SIZES = {
  Default: '16px',
  Small: '14px',
  Medium: '18px',
  Large: '20px',
};

export const DEFAULT_SETTINGS = {
  settings: {
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
    enableDeleteConfirmations: false,
    searchResultsCount: 5,
    enableSearchHistory: true,
    sortCriteria: 'City Name',
    mapZoomLevel: 5,
    enableTouchZoom: true,
    enableScrollZoom: true,
    enableDoubleClickZoom: true,
  },
  appearance: {
    theme: 'System',
    fontSize: 'Default',
    enableAnimations: true,
    autoDayNightMode: false,
  },
};

export const WEATHER_DESCRIPTIONS = {
  0: 'Clear',
  1: 'Mainly Clear',
  2: 'Partly Cloudy',
  3: 'Cloudy',
  45: 'Foggy',
  48: 'Rime Fog',
  51: 'Light Drizzle',
  53: 'Drizzle',
  55: 'Heavy Drizzle',
  56: 'Light Freezing Drizzle',
  57: 'Freezing Drizzle',
  61: 'Light Rain',
  63: 'Rain',
  65: 'Heavy Rain',
  66: 'Light Freezing Rain',
  67: 'Freezing Rain',
  71: 'Light Snow',
  73: 'Snow',
  75: 'Heavy Snow',
  77: 'Snow Grains',
  80: 'Light Showers',
  81: 'Showers',
  82: 'Heavy Showers',
  85: 'Light Snow Showers',
  86: 'Snow Showers',
  95: 'Thunderstorm',
};
