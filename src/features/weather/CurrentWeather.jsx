import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function CurrentWeather({
  city,
  country,
  temperature,
  precipitationProbability,
  weatherCode,
  isDay,
  transparent,
  imageClass,
}) {
  if ([temperature, weatherCode, isDay].some((prop) => prop === undefined)) return;

  return (
    <div className={`flex items-center justify-between ${transparent ? 'px-0' : 'px-3 sm:px-8'} `}>
      <div className='flex flex-col justify-between gap-5 '>
        <div>
          <h2 className='mb-2 text-4xl font-bold text-text-primary sm:text-5xl'>
            {city || 'Unknown'}
          </h2>
         {country !== 'hide' && <span className='mb-3 flex items-center gap-2  text-text-tertiary '>
            {country?.name || 'Unknown'}
            <img
              src={`https://flagsapi.com/${country?.code}/flat/64.png`}
              alt={country?.code}
              className='w-5'
            />
          </span>}
        </div>
        <div className='flex flex-col'>
          <h1 className='mb-2 text-3xl font-bold text-text-primary sm:text-4xl'>{temperature}</h1>
          {precipitationProbability !== undefined && (
            <p className='text-sm font-medium text-text-secondary '>
              Chance of rain: {precipitationProbability}%
            </p>
          )}
        </div>
      </div>
      <img
        src={getWeatherImageAndDescription(weatherCode, isDay)?.image}
        alt={getWeatherImageAndDescription(weatherCode, isDay)?.description}
        className={imageClass}
      />
    </div>
  );
}
