import { useAutoAnimate } from '@formkit/auto-animate/react';
import { getTimeBaseOnTimezone } from '../../utils/helpers';
import City from './City';
import { useLocation, useNavigate, useOutletContext, useSearchParams } from 'react-router-dom';
import { useSettings } from '../../hooks/useSettings';

export default function Cities({ type, cities, isMyCities, onAdd, onRemove }) {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [searchParams] = useSearchParams();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { myCities } = useOutletContext();
  const { is12HourFormat, enableAnimations, addToSearchHistory ,enableSearchHistory} = useSettings();

  return (
    <div
      className={`gap-3 ${type === 2 ? 'grid grid-cols-4' : 'flex flex-col'}`}
      ref={enableAnimations ? parent : null}
    >
      {cities?.map((city) => {
        const { id, name, timezone, latitude, longitude, admin1: regionName } = city;
        const updatedCity = {
          ...city,
          regionName,
          time: getTimeBaseOnTimezone(timezone, is12HourFormat),
        };
        return (
          <City
            key={id}
            city={updatedCity}
            isCurrentCity={+location?.latitude === latitude && +location?.longitude === longitude}
            type={type}
            isSearched={!isMyCities}
            isInMyCities={myCities?.some((city) => city.id === id)}
            onSelect={() => {
              //? Alternative
              // const locationQuery = `lat=${latitude}&lon=${longitude}&timezone=${timezone}`;
              // const url = isMyCities
              //   ? `/app/cities/${name}?${locationQuery}`
              //   : `/app/search/${name}?city=${searchParams.get('city')}&${locationQuery}`;
              // navigate(url);

              const url = isMyCities
                ? `/app/mycities/${name}`
                : `/app/search/${name}?city=${searchParams.get('city')}`;
              navigate(url, {
                state: {
                  latitude,
                  longitude,
                  timezone,
                  city: searchParams.get('city'),
                },
                replace: true,
              });

              if(!isMyCities && enableSearchHistory) addToSearchHistory(updatedCity);
            }}
            onClick={() => (isMyCities ? onRemove(id) : onAdd(city))}
          />
        );
      })}
    </div>
  );
}
