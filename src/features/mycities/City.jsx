import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useWeather } from '../../hooks/useWeather';
import IconButton from '../../ui/IconButton';
import { getWeatherImageAndDescription } from '../../utils/helpers';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

export default function City({
  city,
  isCurrentCity,
  type,
  isSearched,
  isInMyCities,
  onSelect,
  onClick,
  moveCity,
  index,
}) {
  const { name, country, country_code, regionName, time, latitude, longitude, timezone, id } = city;
  const { data = {} } = useWeather(latitude, longitude, timezone, 3);
  const { location } = useWeatherContext();

  const {
    current: { temperature_2m: temperature, weather_code, is_day } = {},
    current_units: { temperature_2m: unit } = {},
  } = data;

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveCity(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));

  return (
    <div
      className={`noScrollbar  grid cursor-pointer  grid-cols-[80px_1fr_auto] items-center  overflow-auto rounded-xl border-primary bg-background-secondary p-3 transition-all duration-300 hover:border hover:bg-transparent ${
        type === 2
          ? 'min-w-[150px] grid-cols-none  place-items-center gap-3 px-5'
          : type === 3
            ? 'py-1'
            : 'gap-5'
      } 
      ${isCurrentCity ? 'active' : ''}
      `}
      id='city'
      ref={isSearched ? null : ref}
      style={{ opacity }}
      data-handler-id={handlerId}
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
          <h3 className={`font-semibold text-text-primary ${type === 3 ? 'text-xl' : 'text-2xl'}`}>
            {name}
          </h3>
          {location?.city === name && location?.country === country && (
            <i className='fa-solid fa-location-arrow text-lg text-text-tertiary'></i>
          )}
        </div>
        {[1, 3].includes(type) && (
          <p className='mt-1 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-2'>
            <span className='noTextWrap flex items-center gap-2 text-text-tertiary'>
              {regionName} {' - '}
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
          className={`font-medium text-text-primary ${type === 3 ? 'text-3xl' : 'text-2xl'}
        ${type !== 2 ? 'ml-10 sm:ml-5' : ''}
        `}
        >
          {temperature}
          {unit}
        </h4>
        {isInMyCities ? (
          isSearched ? (
            <span className='text-sm text-text-secondary'>Added </span>
          ) : (
            <IconButton
              className='text-text-secondary'
              onClick={(e) => {
                e.stopPropagation();
                onClick();
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
              onClick(temperature);
            }}
          >
            <i className='fa-solid fa-plus text-xs'></i>
          </IconButton>
        )}
      </div>
    </div>
  );
}
