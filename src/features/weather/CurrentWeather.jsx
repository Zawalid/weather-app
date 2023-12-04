import Sun from '@/assets/sun.png';
import { getWeatherIcon } from '../../utils/helpers';

export default function CurrentWeather({
  city,
  temperature,
  weatherCode,
  transparent,
  imageClass,
}) {
  return (
    <div className={`flex items-center justify-between ${transparent ? 'px-0' : 'px-3 sm:px-8'} `}>
      <div className='flex flex-col justify-between gap-5 sm:gap-8'>
        <div>
          <h2 className='mb-2 text-3xl font-bold text-text-primary sm:text-4xl'>{city}</h2>
          <p className='text-xs text-text-secondary sm:text-sm'>Chance of rain: 0% </p>
        </div>
        <h1 className='text-4xl font-bold text-text-primary sm:text-5xl'>{temperature}</h1>
      </div>
      {/* <img src={Sun} alt='sun' className={imageClass} /> */}
      <span className='text-9xl font-bold text-text-primary'>{getWeatherIcon(weatherCode)}</span>
    </div>
  );
}
