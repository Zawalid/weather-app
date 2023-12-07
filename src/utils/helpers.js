import { formatInTimeZone } from 'date-fns-tz';
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

//? It was useful thought
// export function getClosestTime(times, timezone) {
//   // const hours = times.map((time) => new Date(time));
//   // const currentDate = new Date();

//   // return hours.find((time) => {
//   //   return currentDate.getMinutes() > 30
//   //     ? time.getHours() === currentDate.getHours() + 1
//   //     : time.getHours() === currentDate.getHours();
//   // });

//   const hours = times
//     .map((time) => formatInTimeZone(new Date(time), timezone, 'yyyy-MM-dd HH:mm'))
//     .map((time) => new Date(time));
//   const currentDate = new Date(formatInTimeZone(new Date(), timezone, 'yyyy-MM-dd HH:mm'));

//   const closest = hours.find((time) => {
//     return currentDate.getMinutes() > 30
//       ? time.getHours() === currentDate.getHours() + 1
//       : time.getHours() === currentDate.getHours();
//   });
//   return closest;
// }
