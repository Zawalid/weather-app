import { useCallback } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { getTimeBaseOnTimezone, isTouchDevice } from '../../utils/helpers';
import City from './City';
import { useSettings } from '../../hooks/useSettings';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useMyCities } from '../../hooks/useMyCities';

export default function Cities({ type, cities, setCities, source }) {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [searchParams] = useSearchParams();
  const [parent] = useAutoAnimate({
    duration: 500,
  });
  const { setIsAsideOpen } = useMyCities();
  const { is12HourFormat, enableAnimations, addToSearchHistory, enableSearchHistory } =
    useSettings();
  const { updateCities } = useMyCities();

  const moveCity = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCities = (prev) => {
        const newCities = [...prev];
        const [draggedItem] = newCities.splice(dragIndex, 1);
        newCities.splice(hoverIndex, 0, draggedItem);
        return newCities;
      };
      setCities(dragCities);
      updateCities(dragCities);
    },
    [setCities, updateCities],
  );

  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <div
        className={`gap-3 ${
          type === 2 ? 'grid grid-cols-[repeat(auto-fit,minmax(170px,auto))]' : 'flex flex-col'
        }`}
        ref={enableAnimations ? parent : null}
      >
        {cities?.map((city, index) => {
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
              source={source}
              onSelect={() => {
                const cityParam = searchParams.get('city');
                const url =
                  source === 'mycities'
                    ? `/app/mycities/${name}`
                    : source === 'map'
                      ? `/app/map/${name}`
                      : cityParam
                        ? `/app/search/${name}?city=${cityParam}`
                        : `/app/search/${name}`;

                navigate(url, {
                  state: {
                    latitude,
                    longitude,
                    timezone,
                    city: searchParams.get('city'),
                  },
                  replace: true,
                });

                if (source === 'search' && enableSearchHistory) addToSearchHistory(updatedCity);
                setIsAsideOpen(source !== 'map');
              }}
              moveCity={moveCity}
              index={index}
            />
          );
        })}
      </div>
    </DndProvider>
  );
}
