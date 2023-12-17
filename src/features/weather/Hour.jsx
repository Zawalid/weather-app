import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function Hour({ time, weatherCode, isDay, temperature, windSpeed }) {
  return (
    <div className='flex flex-col items-center gap-3 border-r border-border pr-5 last:border-none last:pr-0'>
      <span className='noTextWrap text-lg font-bold text-text-primary'>{temperature}</span>
      <img
        src={getWeatherImageAndDescription(weatherCode, isDay)?.image}
        alt='sun'
        className='h-10 w-10'
      />
      <span className='noTextWrap text-sm font-medium text-text-secondary'>{windSpeed}</span>
      <span className='noTextWrap text-sm font-semibold text-text-tertiary'>{time}</span>
    </div>
  );
}
