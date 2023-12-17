import { Polyline } from 'react-leaflet';
import { useState } from 'react';
import CustomTippy from '../../ui/CustomTippy';

export function CitiesConnection({ positions }) {
  const [showPolyline, setShowPolyline] = useState();

  if (positions.length < 2) return null;
  return (
    <>
      <CustomTippy
        content='Show connection'
        className='rounded-lg bg-background-secondary px-2 py-1'
        arrow={false}
      >
        <button
          className='grid h-[30px] w-[30px] place-content-center rounded-md bg-background-primary text-text-primary hover:bg-background-secondary focus:bg-background-secondary'
          onClick={() => setShowPolyline(!showPolyline)}
        >
          <i className='fa-solid fa-map-signs '></i>
        </button>
      </CustomTippy>
      {showPolyline && <Polyline positions={positions} />}
    </>
  );
}
