import { useAutoAnimate } from '@formkit/auto-animate/react';
import { getTimeBaseOnTimezone } from '../../utils/helpers';
import City from './City';
import { useLocation, useNavigate, useOutletContext, useSearchParams } from 'react-router-dom';

export default function Cities({ type, cities, isMyCities, onAdd, onRemove }) {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [searchParams] = useSearchParams();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { myCities } = useOutletContext();

  return (
    <div className={`flex gap-3 ${type === 2 ? 'flex-wrap' : 'flex-col'}`} ref={parent}>
      {cities?.map((city) => {
        const { id, name, timezone, latitude, longitude, admin1: province } = city;
        const updatedCity = {
          ...city,
          province,
          time: getTimeBaseOnTimezone(timezone, true), // Todo Use Hour-12 based on user preference
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
              });
            }}
            onClick={() => (isMyCities ? onRemove(id) : onAdd(city))}
          />
        );
      })}
    </div>
  );
}
