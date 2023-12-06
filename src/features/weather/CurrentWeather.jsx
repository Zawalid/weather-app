import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function CurrentWeather({
  location: { city, country, regionName, countryCode },
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
          {precipitationProbability !== undefined && (
            <p className='text-sm  text-text-secondary'>
              Chance of rain: {precipitationProbability}%
            </p>
          )}

          {country && (
            <div className='mb-3 flex gap-1 flex-col sm:flex-row'>
              <span className='flex items-center gap-2 text-sm text-text-tertiary sm:mr-2 sm:border-r sm:border-text-secondary sm:pr-2 sm:text-base '>
                {regionName}
              </span>
              <span className=' flex items-center gap-2 text-sm text-text-tertiary sm:text-base '>
                {country || 'Unknown'}
                <img
                  src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                  alt={countryCode}
                  className='w-5'
                />
              </span>
            </div>
          )}
        </div>
        <div className='flex flex-col'>
          <h1 className='mb-2 text-3xl font-bold text-text-primary sm:text-4xl'>{temperature}</h1>
          <span className=' font-medium text-text-tertiary'>
            {getWeatherImageAndDescription(weatherCode, isDay)?.description}
          </span>
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
