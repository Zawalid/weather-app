import { useLocation } from 'react-router-dom';
import { useMyCities } from '@/hooks/useMyCities';
import { Aside as SettingsAside } from '../features/settings/Aside';
import { Aside as WeatherAside } from '../features/weather/Aside';
import CityWeather from '../features/weather/CityWeather';
import Cities from '../features/mycities/Cities';
import ErrorMessage from './ErrorMessage';

export default function Aside({ seeMore, setIsAsideOpen }) {
  const currentTab = useLocation().pathname.split('/')[2];
  const { myCities } = useMyCities();

  return currentTab === 'weather' ? (
    <WeatherAside seeMore={seeMore} />
  ) : currentTab === 'mycities' || currentTab === 'search' ? (
    <CityWeather setIsAsideOpen={setIsAsideOpen} />
  ) : currentTab === 'settings' ? (
    <SettingsAside setIsAsideOpen={setIsAsideOpen} />
  ) : currentTab === 'map' ? (
    !myCities.length ? (
      <ErrorMessage type='noCities' />
    ) : (
      <Cities cities={myCities} source='map' type={3} />
    )
  ) : null;
}
