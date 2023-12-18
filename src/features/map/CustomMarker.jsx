import { useEffect, useRef, useState } from 'react';
import { Marker } from 'react-leaflet';
import { MarkerIcon } from './MarkerIcon';
import { useCustomNavigate } from '../../hooks/useCustomNavigate';
import { CustomPopup } from './CustomPopup';


export default function CustomMarker({ isActive, position, city, map }) {
  const [refReady, setRefReady] = useState(false);
  let popupRef = useRef();
  const navigate = useCustomNavigate();

  useEffect(() => {
    if (!map) return;
    if (refReady && isActive) {
      popupRef.openOn(map);
    }
  }, [isActive, refReady, map]);

  return (
    <Marker
      position={position}
      icon={MarkerIcon('/marker.png')}
      keyboard={true}
      title={city.name}
      eventHandlers={{
        click: () => {
          navigate(city.name, {
            latitude: city.latitude,
            longitude: city.longitude,
          });
        },
        popupclose: () => window.location.pathname.includes('map') && navigate('/map'),
      }}
    >
      <CustomPopup
        reference={(r) => {
          popupRef = r;
          setRefReady(true);
        }}
        city={city}
      />
    </Marker>
  );
}
