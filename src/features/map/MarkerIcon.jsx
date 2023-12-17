import L  from 'leaflet';

export function MarkerIcon(url) {
    return new L.icon({
      iconUrl: url,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });
  }
