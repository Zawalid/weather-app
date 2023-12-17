import { useEffect, useMemo, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Cities from './Cities';
import { useSettings } from '../../hooks/useSettings';
import ErrorMessage from '../../ui/ErrorMessage';
import { confirmDeletion } from '../../utils/helpers';
import Actions from './Actions';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useMyCities } from '../../hooks/useMyCities';
import ViewController from '../../ui/ViewController';
import CountriesFilter from './CountriesFilter';
import { useCustomNavigate } from '../../hooks/useCustomNavigate';

export default function MyCities() {
  const [citiesView, setCitiesView] = useLocalStorageState('myCitiesView', 1);
  const { myCities, setMyCities } = useMyCities();
  const [filteredCities, setFilteredCities] = useState(myCities);
  const countries = useMemo(() => [...new Set(myCities.map((city) => city.country))], [myCities]);
  const [selectedCountries, setSelectedCountries] = useState(countries);

  const navigate = useCustomNavigate();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations, enableDeleteConfirmations } = useSettings();

  useEffect(() => {
    if (!myCities.length) navigate();
  }, [myCities, navigate]);

  function toggleCountry(country) {
    const filter = (selected) =>
      setFilteredCities(
        selected.map((country) => myCities.filter((city) => city.country === country)).flat(),
      );

    selectedCountries.includes(country)
      ? setSelectedCountries((prev) => {
          const countries = prev.filter((c) => c !== country);
          filter(countries);
          return countries;
        })
      : setSelectedCountries((prev) => {
          const countries = [...prev, country];
          filter(countries);
          return countries;
        });
  }

  if (!myCities.length) return <ErrorMessage type='noCities' />;

  return (
    <div className='relative h-full space-y-5' ref={enableAnimations ? parent : null}>
      <ViewController view={citiesView} setView={setCitiesView}>
        <div className='flex gap-3'>
          <CountriesFilter
            countries={countries}
            selectedCountries={selectedCountries}
            onToggle={toggleCountry}
            selectAll={() => setSelectedCountries(countries)}
            unselectAll={() => setSelectedCountries([])}
          />
          <Actions filteredCities={filteredCities} setFilteredCities={setFilteredCities} />
        </div>
      </ViewController>

      <Cities
        type={citiesView}
        cities={filteredCities}
        setCities={setFilteredCities}
        source='mycities'
        onRemove={(id) =>
          enableDeleteConfirmations
            ? confirmDeletion('Are you sure you want to remove this city?', 'Remove', () =>
                setMyCities((prev) => prev.filter((city) => city.id !== id)),
              )
            : setMyCities((prev) => prev.filter((city) => city.id !== id))
        }
      />
    </div>
  );
}
