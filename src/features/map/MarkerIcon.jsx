import L  from 'leaflet';
import MarkerImg from '@/assets/marker.png';

export function MarkerIcon() {
    return new L.icon({
      iconUrl: MarkerImg,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });
  }
