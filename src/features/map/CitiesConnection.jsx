import { Polyline } from 'react-leaflet';
import { useState } from 'react';
import IconButton from '../../ui/IconButton';

export function CitiesConnection({ positions }) {
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
