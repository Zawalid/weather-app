import { useLocation } from 'react-router-dom';
import { Aside as SettingsAside } from '../features/settings/Aside';
import { Aside as WeatherAside } from '../features/weather/Aside';
import { Aside as MapAside } from '../features/map/Aside';
import CityWeather from '../features/weather/CityWeather';

export default function Aside() {
  const currentTab = useLocation().pathname.split('/')[2];

  return currentTab === 'weather' ? (
    <WeatherAside />
  ) : currentTab === 'mycities' || currentTab === 'search' ? (
    <CityWeather />
  ) : currentTab === 'settings' ? (
    <SettingsAside/>
  ) : currentTab === 'map' ? (
    <MapAside />
  ) : null;
}
