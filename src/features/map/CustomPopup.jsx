import { Popup } from 'react-leaflet';
import { getWeatherImageAndDescription } from '../../utils/helpers';
import { useMyCities } from '../../hooks/useMyCities';
import { useWeather } from '../../hooks/useWeather';
import { useCustomNavigate } from '../../hooks/useCustomNavigate';

export function CustomPopup({ reference, city }) {
  const navigate = useCustomNavigate();
  const { setIsAsideOpen } = useMyCities();
  const { name, country, timezone, latitude, longitude } = city;
  const { data = {} } = useWeather(latitude, longitude, timezone);
  const { current: { temperature_2m: temperature, weather_code, is_day } = {} } = data;

  return (
    <Popup ref={reference}
    closeButton={false}
    >
      <div className='flex flex-col items-center'>
        <span className='text-xl font-semibold text-text-primary'>{name}</span>
        <span className='text-sm text-text-secondary'>{country}</span>
        <img
          src={getWeatherImageAndDescription(weather_code, is_day)?.image}
          alt={getWeatherImageAndDescription(weather_code, is_day)?.description}
          className='h-[50px] w-[50px]' />
        <span className='text-xl text-text-primary'>{temperature}°C</span>
        <button
          className='mt-2 rounded-md  border border-border px-2 py-1 text-xs hover:border-background-secondary hover:bg-background-secondary'
          onClick={() => {
            navigate(`/app/mycities/${name}`, {
              latitude,
              longitude,
              timezone,
              city: name,
            });
            setTimeout(() => setIsAsideOpen(true), 500);
          }}
        >
          Show Forecast
        </button>
      </div>
    </Popup>
  );
}
