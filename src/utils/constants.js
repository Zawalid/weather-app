import Sun from '../assets/sun.png';

// Todo : Look for better images

export const weatherData = new Map([
  [
    0,
    {
      day: {
        description: 'Sunny',
        image: Sun,
      },
      night: {
        description: 'Clear',
        image: Sun,
      },
    },
  ],
  [
    1,
    {
      day: {
        description: 'Mainly Sunny',
        image: Sun,
      },
      night: {
        description: 'Mainly Clear',
        image: Sun,
      },
    },
  ],
  [
    2,
    {
      day: {
        description: 'Partly Cloudy',
        image: 'https://openweathermap.org/img/wn/02d.png',
      },
      night: {
        description: 'Partly Cloudy',
        image: 'https://openweathermap.org/img/wn/02n.png',
      },
    },
  ],
  [
    3,
    {
      day: {
        description: 'Cloudy',
        image: 'https://openweathermap.org/img/wn/03d.png',
      },
      night: {
        description: 'Cloudy',
        image: 'https://openweathermap.org/img/wn/03n.png',
        // image : Sun
      },
    },
  ],
  [
    45,
    {
      day: {
        description: 'Foggy',
        image: 'https://openweathermap.org/img/wn/50d.png',
      },
      night: {
        description: 'Foggy',
        image: 'https://openweathermap.org/img/wn/50n.png',
      },
    },
  ],
  [
    48,
    {
      day: {
        description: 'Rime Fog',
        image: 'https://openweathermap.org/img/wn/50d.png',
      },
      night: {
        description: 'Rime Fog',
        image: 'https://openweathermap.org/img/wn/50n.png',
      },
    },
  ],
  [
    51,
    {
      day: {
        description: 'Light Drizzle',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Light Drizzle',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    53,
    {
      day: {
        description: 'Drizzle',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Drizzle',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    55,
    {
      day: {
        description: 'Heavy Drizzle',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Heavy Drizzle',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    56,
    {
      day: {
        description: 'Light Freezing Drizzle',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Light Freezing Drizzle',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    57,
    {
      day: {
        description: 'Freezing Drizzle',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Freezing Drizzle',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    61,
    {
      day: {
        description: 'Light Rain',
        image: 'https://openweathermap.org/img/wn/10d.png',
      },
      night: {
        description: 'Light Rain',
        image: 'https://openweathermap.org/img/wn/10n.png',
      },
    },
  ],
  [
    63,
    {
      day: {
        description: 'Rain',
        image: 'https://openweathermap.org/img/wn/10d.png',
      },
      night: {
        description: 'Rain',
        image: 'https://openweathermap.org/img/wn/10n.png',
      },
    },
  ],
  [
    65,
    {
      day: {
        description: 'Heavy Rain',
        image: 'https://openweathermap.org/img/wn/10d.png',
      },
      night: {
        description: 'Heavy Rain',
        image: 'https://openweathermap.org/img/wn/10n.png',
      },
    },
  ],
  [
    66,
    {
      day: {
        description: 'Light Freezing Rain',
        image: 'https://openweathermap.org/img/wn/10d.png',
      },
      night: {
        description: 'Light Freezing Rain',
        image: 'https://openweathermap.org/img/wn/10n.png',
      },
    },
  ],
  [
    67,
    {
      day: {
        description: 'Freezing Rain',
        image: 'https://openweathermap.org/img/wn/10d.png',
      },
      night: {
        description: 'Freezing Rain',
        image: 'https://openweathermap.org/img/wn/10n.png',
      },
    },
  ],
  [
    71,
    {
      day: {
        description: 'Light Snow',
        image: 'https://openweathermap.org/img/wn/13d.png',
      },
      night: {
        description: 'Light Snow',
        image: 'https://openweathermap.org/img/wn/13n.png',
      },
    },
  ],
  [
    73,
    {
      day: {
        description: 'Snow',
        image: 'https://openweathermap.org/img/wn/13d.png',
      },
      night: {
        description: 'Snow',
        image: 'https://openweathermap.org/img/wn/13n.png',
      },
    },
  ],
  [
    75,
    {
      day: {
        description: 'Heavy Snow',
        image: 'https://openweathermap.org/img/wn/13d.png',
      },
      night: {
        description: 'Heavy Snow',
        image: 'https://openweathermap.org/img/wn/13n.png',
      },
    },
  ],
  [
    77,
    {
      day: {
        description: 'Snow Grains',
        image: 'https://openweathermap.org/img/wn/13d.png',
      },
      night: {
        description: 'Snow Grains',
        image: 'https://openweathermap.org/img/wn/13n.png',
      },
    },
  ],
  [
    80,
    {
      day: {
        description: 'Light Showers',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Light Showers',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    81,
    {
      day: {
        description: 'Showers',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Showers',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    82,
    {
      day: {
        description: 'Heavy Showers',
        image: 'https://openweathermap.org/img/wn/09d.png',
      },
      night: {
        description: 'Heavy Showers',
        image: 'https://openweathermap.org/img/wn/09n.png',
      },
    },
  ],
  [
    85,
    {
      day: {
        description: 'Light Snow Showers',
        image: 'https://openweathermap.org/img/wn/13d.png',
      },
      night: {
        description: 'Light Snow Showers',
        image: 'https://openweathermap.org/img/wn/13n.png',
      },
    },
  ],
  [
    86,
    {
      day: {
        description: 'Snow Showers',
        image: 'https://openweathermap.org/img/wn/13d.png',
      },
      night: {
        description: 'Snow Showers',
        image: 'https://openweathermap.org/img/wn/13n.png',
      },
    },
  ],
  [
    95,
    {
      day: {
        description: 'Thunderstorm',
        image: 'https://openweathermap.org/img/wn/11d.png',
      },
      night: {
        description: 'Thunderstorm',
        image: 'https://openweathermap.org/img/wn/11n.png',
      },
    },
  ],
  [
    96,
    {
      day: {
        description: 'Light Thunderstorms With Hail',
        image: 'https://openweathermap.org/img/wn/11d.png',
      },
      night: {
        description: 'Light Thunderstorms With Hail',
        image: 'https://openweathermap.org/img/wn/11n.png',
      },
    },
  ],
  [
    99,
    {
      day: {
        description: 'Thunderstorm With Hail',
        image: 'https://openweathermap.org/img/wn/11d.png',
      },
      night: {
        description: 'Thunderstorm With Hail',
        image: 'https://openweathermap.org/img/wn/11n.png',
      },
    },
  ],
]);

export const FONT_SIZES = {
  Default: '16px',
  Small: '14px',
  Medium: '18px',
  Large: '20px',
};
