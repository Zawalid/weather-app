import { useLocation } from 'react-router-dom';

import { Aside as SettingsAside } from '../features/settings/Aside';
import { Aside as WeatherAside } from '../features/weather/Aside';
import CityWeather from '../features/weather/CityWeather';

export default function Aside({ seeMore, setIsAsideOpen }) {
  const currentTab = useLocation().pathname.split('/')[2];
  return currentTab === 'weather' ? (
    <WeatherAside seeMore={seeMore} />
  ) : currentTab === 'mycities' || currentTab === 'search' ? (
    <CityWeather setIsAsideOpen={setIsAsideOpen} />
  ) : currentTab === 'settings' ? (
    <SettingsAside setIsAsideOpen={setIsAsideOpen} />
  ) : (
    <p>Map</p>
  );
}
