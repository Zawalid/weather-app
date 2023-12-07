import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function Hour({ time, weatherCode, isDay, temperature, windSpeed }) {
  return (
    <div className='flex flex-col items-center gap-3 border-r border-border pr-5 last:border-none last:pr-0'>
      <span className='text-lg noTextWrap font-bold text-text-primary'>{temperature}</span>
      <img
        src={getWeatherImageAndDescription(weatherCode, isDay)?.image}
        alt='sun'
        className='h-10 w-10'
      />
      <span className='text-sm font-medium text-text-secondary'>{windSpeed}</span>
      <span
        className='text-sm font-semibold text-text-tertiary'
        style={{
          textWrap: 'nowrap',
        }}
      >
        {time}
      </span>
    </div>
  );
}
