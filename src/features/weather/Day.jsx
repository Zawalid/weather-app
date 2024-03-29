import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function Day({ day, weatherCode, temperature }) {
  const description = getWeatherImageAndDescription(weatherCode)?.description;
  const isDay = new Date().getHours() > 6 && new Date().getHours() < 18;
  return (
    <div className='grid grid-cols-[50px_1fr_1fr] items-center justify-between gap-3 border-b border-border pb-2 last:border-none last:pb-0'>
      <span className='noTextWrap text-sm  text-text-secondary'>{day}</span>
      <div className='grid grid-cols-[50px_1fr] items-center gap-4'>
        <img
          src={getWeatherImageAndDescription(weatherCode, isDay)?.image}
          alt={description}
          className='w-full'
        />
        <span className='text-sm font-bold text-text-primary'>{description}</span>
      </div>
      <p className='justify-self-end'>
        <span className='noTextWrap font-semibold text-text-primary '>{temperature.max}</span>
        <span className='noTextWrap text-sm text-text-secondary'>/{temperature.min}</span>
      </p>
    </div>
  );
}
