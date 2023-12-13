import { useCallback } from 'react';
import { useLocation, useNavigate, useOutletContext, useSearchParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { getTimeBaseOnTimezone, isTouchDevice } from '../../utils/helpers';
import City from './City';
import { useSettings } from '../../hooks/useSettings';
import { TouchBackend } from 'react-dnd-touch-backend';

export default function Cities({ type, cities, setCities, isMyCities, onAdd, onRemove }) {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [searchParams] = useSearchParams();
  const [parent] = useAutoAnimate({
    duration: 500,
  });
  const { myCities, setIsAsideOpen } = useOutletContext();
  const { is12HourFormat, enableAnimations, addToSearchHistory, enableSearchHistory } =
    useSettings();

  const moveCity = useCallback(
    (dragIndex, hoverIndex) => {
      setCities((prevCities) => {
        const newCities = [...prevCities];
        const [draggedItem] = newCities.splice(dragIndex, 1);
        newCities.splice(hoverIndex, 0, draggedItem);
        return newCities;
      });
    },
    [setCities],
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
              isSearched={!isMyCities}
              isInMyCities={myCities?.some((city) => city.id === id)}
              onSelect={() => {
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

                if (!isMyCities && enableSearchHistory) addToSearchHistory(updatedCity);
                setIsAsideOpen(true);
              }}
              onClick={(temperature) => (isMyCities ? onRemove(id) : onAdd(city, temperature))}
              moveCity={moveCity}
              index={index}
            />
          );
        })}
      </div>
    </DndProvider>
  );
}
