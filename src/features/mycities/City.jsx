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
  const { name, country, country_code,  time, latitude, longitude, timezone, id } = city;
  const { data = {} } = useWeather(latitude, longitude, timezone, 3);
  const { location } = useWeatherContext();

  const {
    current: { temperature_2m: temperature, weather_code, is_day } = {},
    current_units: { temperature_2m: unit } = {},
  } = data;

  const dragRef = useRef(null);
  const previewRef = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!previewRef.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = previewRef.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveCity(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'card',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;
  drag(dragRef);
  drop(preview(previewRef));
  return (
    <div className={`relative flex  gap-1 ${type === 2 ? 'flex-col-reverse' : ''}`}>
      {!isSearched && (
        <button
          ref={dragRef}
          className='m-auto w-fit cursor-grab rounded-md px-2 hover:bg-settings-active'
        >
          <i className='fa-solid fa-grip-lines text-lg text-text-primary'></i>
        </button>
      )}
      <div
        className={`noScrollbar grid flex-1 cursor-pointer grid-cols-[50px_1fr_auto] items-center overflow-auto rounded-xl  border-primary bg-background-secondary p-3 text-center transition-all duration-300 hover:border gap-5 hover:bg-transparent sm:grid-cols-[80px_1fr_auto] ${
          type === 2 ? 'cityType2' : ''
        } 
      ${isCurrentCity ? 'active' : ''}
      `}
        id='city'
        ref={isSearched ? null : previewRef}
        style={{ opacity }}
        data-handler-id={handlerId}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        <img
          src={getWeatherImageAndDescription(weather_code, is_day)?.image}
          alt={getWeatherImageAndDescription(weather_code, is_day)?.description}
          className='w-[50px] h-[50px] sm:w-20 sm:h-20'
        />

        <div>
          <div className='flex items-center gap-3'>
            <h3
              className={`text-xl font-semibold text-text-primary ${
                type === 3 ? '' : 'sm:text-2xl'
              }`}
            >
              {name}
            </h3>
            {location?.city === name && location?.country === country && (
              <i className='fa-solid fa-location-arrow text-lg text-text-tertiary'></i>
            )}
          </div>
          {[1, 3].includes(type) && (
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
    </div>
  );
}
