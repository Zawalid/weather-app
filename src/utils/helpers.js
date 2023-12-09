import { weatherData } from './constants';

export function formatDay(dateStr) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
  }).format(new Date(dateStr));
}

export function formatTime(timeStr, hour12) {
  if (!timeStr) return;
  return new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12,
  }).format(new Date(timeStr));
}

export function checkIfToday(dateStr) {
  const today = new Date().toLocaleDateString('en-US');
  return new Date(dateStr).toLocaleDateString('en-US') === today;
}

export function checkIfCurrentHour(timeStr) {
  const currentHour = new Date().getHours();
  return new Date(timeStr).getHours() === currentHour;
}
export function checkIfDayOrNight() {
  const currentHour = new Date().getHours();
  return currentHour >= 6 && currentHour <= 18 ? 'day' : 'night';
}

export function getTimeBaseOnTimezone(timezone, hour12) {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12,
  });
}

export function getWeatherImageAndDescription(wmoCode, isDay) {
  const weather = weatherData.get(wmoCode);
  if (weather === undefined) return;
  return isDay ? weather.day : weather.night;
}

export function isDeepEqual(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
      return false;
    }
  }
  return true;
}

const isObject = (object) => {
  return object != null && typeof object === 'object';
};
