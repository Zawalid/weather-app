import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from '@/ui/Loader';
import { useRef } from 'react';
import { useMyCities } from '../../hooks/useMyCities';
import { getWeatherImageAndDescription } from '../../utils/helpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useSettings } from '../../hooks/useSettings';
import { LocationMarker } from './LocationMarker';
import { CitiesConnection } from './CitiesConnection';
import { MarkerIcon } from './MarkerIcon';

const locationFallback = [51.505, -0.09]; // London

export default function Map() {
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { myCities, setIsAsideOpen } = useMyCities();
  const { location: currLoc } = useWeatherContext();
  const {
    isLocationAccess,
    defaultLocation,
    mapZoomLevel,
    enableTouchZoom,
    enableScrollZoom,
    enableDoubleClickZoom,
  } = useSettings();

  const { latitude, longitude } = location.state || {};

  const initialLocation = isLocationAccess
    ? [currLoc?.latitude, currLoc?.longitude]
    : defaultLocation
      ? [defaultLocation?.latitude, defaultLocation?.longitude]
      : locationFallback;

  const positions = myCities.map((city) => [city.latitude, city.longitude]);

  if (!initialLocation?.[0]) return <Loader />;
  return (
    <div className='relative h-full overflow-hidden rounded-xl'>
      <MapContainer
        center={initialLocation}
        zoom={mapZoomLevel}
        className='h-full'
        placeholder={
          <p className='text-xl text-text-primary'>
            <noscript>You need to enable JavaScript to see this map.</noscript>
          </p>
        }
        touchZoom={enableTouchZoom}
        scrollWheelZoom={enableScrollZoom}
        doubleClickZoom={enableDoubleClickZoom}
        ref={ref}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' />
        {myCities.map((city) => {
          const { name, country, weather_code, is_day, timezone, latitude, longitude, id } = city;
          return (
            <Marker key={id} position={[latitude, longitude]} icon={MarkerIcon()}>
              <Popup aut>
                <div className='flex flex-col items-center'>
                  <span className='text-lg font-semibold text-text-primary'>{name}</span>
                  <span className='text-sm text-text-secondary'>{country}</span>
                  <img
                    src={getWeatherImageAndDescription(weather_code, is_day)?.image}
                    alt={getWeatherImageAndDescription(weather_code, is_day)?.description}
                    className='h-[50px] w-[50px]'
                  />
                  <span className='text-xl text-text-primary'>{city.temperature}°C</span>
                  <button
                    className='mt-2 rounded-md  border border-border px-2 py-1 text-xs hover:border-background-secondary hover:bg-background-secondary'
                    onClick={() => {
                      navigate(`/app/mycities/${name}`, {
                        state: {
                          latitude,
                          longitude,
                          timezone,
                          city: name,
                        },
                      });
                      setTimeout(() => setIsAsideOpen(true), 500);
                    }}
                  >
                    Show Forecast
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
        {latitude && longitude && <ChangeCenter position={[latitude, longitude]} />}
        <div className='absolute bottom-7 right-3 z-[9999] flex flex-col gap-[1px]'>
          <LocationMarker />
          <CitiesConnection positions={positions} />
        </div>
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.flyTo(position, map.getZoom());
  return null;
}
