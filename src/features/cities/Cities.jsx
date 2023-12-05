import { getTimeBaseOnTimezone } from '../../utils/helpers';
import City from './City';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Cities({ type, cities }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <div className={`flex gap-3 ${type === 2 ? 'flex-wrap' : 'flex-col'}`}>
      {cities?.map((city) => {
        const { id, name, country, country_code, timezone, latitude, longitude } = city;
        return (
          <City
            key={id}
            city={{
              name,
              country,
              country_code,
              time: getTimeBaseOnTimezone(timezone, true), // Todo Use Hour-12 based on user preference
              temperature: '20',
              timezone,
              latitude,
              longitude,
            }}
            isCurrentCity={
              +searchParams.get('lat') === latitude && +searchParams.get('lon') === longitude
            }
            type={type}
            onClick={() => {
              navigate(
                `/app/search/${name}?city=${searchParams.get(
                  'city',
                )}&lat=${latitude}&lon=${longitude}&timezone=${timezone}`,
              );
            }}
          />
        );
      })}
    </div>
  );
}
