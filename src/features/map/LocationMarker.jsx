import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import IconButton from '../../ui/IconButton';
import { toast } from 'sonner';
import { MarkerIcon } from './MarkerIcon';

export function LocationMarker() {
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
        <Marker position={position} icon={MarkerIcon()}>
          <Popup>
            <span className='text-center text-base text-text-primary'>Here you are !</span>
          </Popup>
        </Marker>
      )}
    </>
  );
}
