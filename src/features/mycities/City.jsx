import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useWeather } from '../../hooks/useWeather';
import IconButton from '../../ui/IconButton';
import { getWeatherImageAndDescription, isTouchDevice, normalizeString } from '../../utils/helpers';
import { useMyCities } from '../../hooks/useMyCities';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

export default function City({ city, isCurrentCity, type, source, onSelect, moveCity, index }) {
  const { name, country, country_code, time, latitude, longitude, timezone, id } = city;
  const { data = {} } = useWeather(latitude, longitude, timezone, 3);
  const { location } = useWeatherContext();
  const { myCities, addCity, removeCity } = useMyCities();
  const isInMyCities = myCities?.some((city) => city.id === id);

  const {
    current: { temperature_2m: temperature, weather_code, is_day } = {},
    current_units: { temperature_2m: unit } = {},
  } = data;

  const { dragRef, previewRef, opacity, handlerId } = useDragAndDrop(id, index, moveCity);

  const actionButton = isInMyCities ? (
    source.includes('search') ? (
      <span className='text-sm text-text-secondary'>Added </span>
    ) : (
      <IconButton
        className='text-text-secondary'
        onClick={(e) => {
          e.stopPropagation();
          removeCity(id);
        }}
      >
        <i className='fa-solid fa-minus text-xs'></i>
      </IconButton>
    )
  ) : (
    <IconButton
      className='text-text-secondary'
      onClick={(e) => {
        e.stopPropagation();
        addCity({ ...city, temperature });
      }}
    >
      <i className='fa-solid fa-plus text-xs'></i>
    </IconButton>
  );

  return (
    <div className={`relative flex  gap-1 ${type === 2 ? 'flex-col-reverse' : ''}`}>
      {source === 'mycities' && (
        <button
          ref={dragRef}
          className='m-auto w-fit cursor-grab rounded-md px-2 hover:bg-settings-active'
        >
          {isTouchDevice() ? (
            <i className='fa-solid fa-up-down-left-right text-lg text-text-primary'></i>
          ) : (
            <i className='fa-solid fa-grip-vertical text-lg text-text-primary'></i>
          )}
        </button>
      )}
      <div
        className={`noScrollbar grid flex-1 cursor-pointer grid-cols-[50px_1fr_auto] items-center gap-5 overflow-auto  rounded-xl border-primary bg-background-secondary p-3 text-center transition-all duration-300 hover:border hover:bg-transparent
        ${type === 2 ? 'cityType2' : ''} 
        ${type === 3 ? '' : ' sm:grid-cols-[80px_1fr_auto] '} 
      ${isCurrentCity ? 'active' : ''}
      `}
        id='city'
        ref={source.includes('search') ? null : previewRef}
        style={{ opacity }}
        data-handler-id={handlerId}
        onClick={(e) => {
          e.stopPropagation();
          source !== 'map' && onSelect(); // Todo : Change the select function in the map
        }}
      >
        <img
          src={getWeatherImageAndDescription(weather_code, is_day)?.image}
          alt={getWeatherImageAndDescription(weather_code, is_day)?.description}
          className={`h-[50px] w-[50px]
          ${type === 3 ? '' : 'sm:h-20 sm:w-20'}
          `}
        />

        <div>
          <div className='flex items-center gap-3'>
            <h3
              className={`noTextWrap text-xl
              font-semibold text-text-primary ${type === 3 ? '' : 'sm:text-2xl'}`}
            >
              {name}
            </h3>
            {normalizeString(location?.city) === normalizeString(name) &&
              normalizeString(location?.country) === normalizeString(country) && (
                <i className='fa-solid fa-location-arrow text-lg text-text-tertiary'></i>
              )}
          </div>
          {type === 1 && (
            <p className='mt-1 flex flex-col items-start gap-1 text-sm sm:flex-row sm:items-center sm:gap-2'>
              <span className='noTextWrap flex items-center gap-2 text-text-tertiary'>
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
        <div className={`flex flex-col gap-1 ${type === 2 ? 'items-center' : 'items-end'}`}>
          <h4
            className={`font-medium text-text-primary ${type === 1 ? 'text-3xl' : 'text-2xl'}
        ${type !== 2 ? 'ml-10 sm:ml-5' : ''}
        `}
          >
            {temperature}
            {unit}
          </h4>
          {source !== 'map' && actionButton}
        </div>
      </div>
    </div>
  );
}
