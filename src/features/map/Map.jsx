import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from '@/ui/Loader';
import { useRef, useState } from 'react';
import IconButton from '../../ui/IconButton';
import { useMyCities } from '../../hooks/useMyCities';
import { getWeatherImageAndDescription } from '../../utils/helpers';
import { toast } from 'sonner';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Map() {
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { myCities, setIsAsideOpen } = useMyCities();
  const { latitude, longitude } = location.state || {};

  const positions = myCities.map((city) => [city.latitude, city.longitude]);

  console.log(latitude, longitude);

  if (!location) return <Loader />;
  return (
    <div className='relative h-full overflow-hidden rounded-xl'>
      <MapContainer
        center={[myCities[0]?.latitude, myCities[0]?.longitude]}
        zoom={13}
        scrollWheelZoom={true}
        className='h-full'
        placeholder={
          <p className='text-xl text-text-primary'>
            <noscript>You need to enable JavaScript to see this map.</noscript>
          </p>
        }
        touchZoom={true}
        doubleClickZoom={true}
        ref={ref}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' />
        {myCities.map((city) => {
          const { name, country, weather_code, is_day, timezone, latitude, longitude, id } = city;
          return (
            <Marker key={id} position={[latitude, longitude]}>
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
                    className='mt-2 hover:border-background-secondary  rounded-md border border-border px-2 py-1 text-xs hover:bg-background-secondary'
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

export function ChangeCenter({ position }) {
  const map = useMap();
  map.flyTo(position, map.getZoom());
  return null;
}

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const handleButtonClick = () => {
    map.locate();
  };

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
    locationerror() {
      toast.error('Location access denied. Please enable location access in your browser.');
    },
  });

  return (
    <>
      <IconButton
        type={1}
        className=' w-[30px] border-border bg-background-primary text-text-primary '
        onClick={handleButtonClick}
      >
        <i className='fa-solid fa-location-arrow '></i>
      </IconButton>
      {position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </>
  );
}

function CitiesConnection({ positions }) {
  const [showPolyline, setShowPolyline] = useState();

  return (
    <>
      <IconButton
        type={1}
        className=' w-[30px] border-border bg-background-primary text-text-primary '
        onClick={() => setShowPolyline(!showPolyline)}
      >
        <i className='fa-solid fa-map-signs '></i>
      </IconButton>
      {showPolyline && <Polyline positions={positions} />}
    </>
  );
}
