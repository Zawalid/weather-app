import { useWeatherContext } from '../../contexts/WeatherContext';
import { useWeather } from '../../hooks/useWeather';
import { getWeatherImageAndDescription } from '../../utils/helpers';

export default function City({
  city,
  isCurrentCity,
  type,
  isSearched,
  isInMyCities,
  onSelect,
  onClick,
}) {
  const { name, country, country_code, province, time, latitude, longitude, timezone } = city;
  const { data = {} } = useWeather(latitude, longitude, timezone, 3);
  const { location } = useWeatherContext();

  const {
    current: { temperature_2m: temperature, weather_code, is_day } = {},
    current_units: { temperature_2m: unit } = {},
  } = data;

  return (
    <div className='flex items-center gap-2'>
      <div
        className={`noScrollbar grid flex-1 cursor-pointer grid-cols-[80px_1fr_auto]  items-center overflow-auto rounded-xl border-primary bg-background-secondary p-3 transition-colors duration-300 hover:border  hover:bg-transparent ${
          type === 2
            ? 'min-w-[150px] grid-cols-none  place-items-center gap-3 px-5'
            : type === 3
              ? 'py-1'
              : 'gap-5'
        } 
      ${isCurrentCity ? 'active' : ''}
      `}
        id='city'
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        <div className={type === 3 ? 'h-full w-16' : 'h-full w-20'}>
          <img
            src={getWeatherImageAndDescription(weather_code, is_day)?.image}
            alt={getWeatherImageAndDescription(weather_code, is_day)?.description}
            className='w-full'
          />
        </div>

        <div>
          <div className='flex items-center gap-3'>
            <h3
              className={`font-semibold text-text-primary ${type === 3 ? 'text-xl' : 'text-2xl'}`}
            >
              {name}
            </h3>
            {location?.city === name && location?.country === country && (
              <i className='fa-solid fa-location-arrow text-lg text-text-tertiary'></i>
            )}
          </div>
          {[1, 3].includes(type) && (
            <p className='mt-1 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-2'>
              <span className='flex items-center gap-2 text-text-tertiary' id='province-country'>
                {province} {' - '}
                {country}
                <img
                  src={`https://flagsapi.com/${country_code}/flat/64.png`}
                  alt={country_code}
                  className='w-5'
                />
              </span>
              <span className='text-xs text-text-secondary sm:border-l  sm:pl-2  sm:text-sm'>
                {time}
              </span>
            </p>
          )}
        </div>
        <div className='flex flex-col items-end gap-1'>
          <span
            className={`font-medium text-text-primary ${type === 3 ? 'text-3xl' : 'text-2xl'}
        ${type !== 2 ? 'ml-10 sm:ml-5' : ''}
        `}
          >
            {temperature}
            {unit}
          </span>
          {isInMyCities ? (
            isSearched ? (
              <span className='text-sm text-text-secondary'>Added </span>
            ) : (
              <button
                className='grid h-6 w-6 place-content-center rounded-full border border-text-secondary font-bold text-text-secondary hover:border-none  hover:bg-primary hover:text-white'
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                -
              </button>
            )
          ) : (
            <button
              className='grid h-6 w-6 place-content-center rounded-full border border-text-secondary font-bold text-text-secondary hover:border-none  hover:bg-primary hover:text-white'
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
