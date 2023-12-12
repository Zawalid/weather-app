import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Cities from './Cities';
import { useSettings } from '../../hooks/useSettings';
import ErrorMessage from '../../ui/ErrorMessage';
import { confirmDeletion } from '../../utils/helpers';
import Actions from './Actions';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import ViewController from '../../ui/ViewController';
import CountriesFilter from './CountriesFilter';

export default function MyCities() {
  const [citiesView, setCitiesView] = useLocalStorageState('myCitiesView', 1);
  const { myCities, setMyCities } = useOutletContext();
  const [filteredCities, setFilteredCities] = useState(myCities);
  const countries = [...new Set(myCities.map((city) => city.country))];
  const [selectedCountries, setSelectedCountries] = useState(countries);

  const navigate = useNavigate();
  const [parent] = useAutoAnimate({
    duration: 400,
  });
  const { enableAnimations, enableDeleteConfirmations } = useSettings();

  useEffect(() => {
    if (!myCities.length) navigate({ replace: true, state: null });
  }, [myCities, navigate]);

  useEffect(() => {
    setFilteredCities(
      selectedCountries
        .map((country) => myCities.filter((city) => city.country === country))
        .flat(),
    );
  }, [selectedCountries, myCities]);

  function toggleCountry(country) {
    selectedCountries.includes(country)
      ? setSelectedCountries((prev) => prev.filter((c) => c !== country))
      : setSelectedCountries((prev) => [...prev, country]);
  }

  if (!myCities.length) return <ErrorMessage type='noCities' />;

  return (
    <div className='relative h-full' ref={enableAnimations ? parent : null}>
      <ViewController view={citiesView} setView={setCitiesView}>
        <div className='flex gap-3'>
          <CountriesFilter
            countries={countries}
            selectedCountries={selectedCountries}
            onToggle={toggleCountry}
            selectAll={() => setSelectedCountries(countries)}
            unselectAll={() => setSelectedCountries([])}
          />
          <Actions
            setMyCities={setMyCities}
            filteredCities={filteredCities}
            setFilteredCities={setFilteredCities}
          />
        </div>
      </ViewController>

      <Cities
        type={citiesView}
        cities={filteredCities}
        setCities={setFilteredCities}
        isMyCities={true}
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
