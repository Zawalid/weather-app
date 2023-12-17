import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Loader from '@/ui/Loader';
import 'leaflet/dist/leaflet.css';
import { useMyCities } from '../../hooks/useMyCities';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import { useSettings } from '../../hooks/useSettings';
import { LocationMarker } from './LocationMarker';
import { CitiesConnection } from './CitiesConnection';
import ZoomControl from './ZoomControl';
import CustomMarker from './CustomMarker';

const locationFallback = [51.505, -0.09]; // London

export default function Map() {
  const ref = useRef();
  const location = useLocation();
  const { myCities } = useMyCities();
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
          return (
            <CustomMarker
              key={city.id}
              map={ref.current}
              city={city}
              position={[city.latitude, city.longitude]}
              isActive={city.latitude === latitude && city.longitude === longitude}
            />
          );
        })}

        {latitude && longitude && <ChangeCenter position={[latitude, longitude]} />}
        <div className='absolute bottom-7 right-3 z-[9999] flex flex-col gap-2'>
          <ZoomControl />
          <div className='flex flex-col gap-1'>
            <LocationMarker />
            <CitiesConnection positions={positions} />
          </div>
        </div>
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.flyTo(position, 13);
  return null;
}
