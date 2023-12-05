import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function Day({ day, weatherCode, temperature }) {
  const description = getWeatherImageAndDescription(weatherCode)?.description;
  return (
    <div className='grid grid-cols-[50px_1fr_1fr] items-center justify-between gap-3 border-b border-border pb-2 last:border-none last:pb-0'>
      <span className='text-sm  text-text-secondary'>{day}</span>
      <div className='grid grid-cols-[50px_1fr] items-center gap-4'>
        <img
          src={getWeatherImageAndDescription(weatherCode)?.image}
          alt={description}
          className='w-full'
        />
        <span className='text-sm font-bold text-text-primary'>{description}</span>
      </div>
      <p className='justify-self-end'>
        <span className='font-semibold text-text-primary '>{temperature.max}</span>
        <span className='text-sm  text-text-secondary'>/{temperature.min}</span>
      </p>
    </div>
  );
}
