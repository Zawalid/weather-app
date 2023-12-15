import { createContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export const MyCitiesContext = createContext();

export default function MyCitiesProvider({ children }) {
  const [myCities, setMyCities] = useLocalStorageState('myCities', []);

  function addCity(city) {
    setMyCities((prev) => [...prev, city]);
  }
  function removeCity(id) {
    setMyCities((prev) => prev.filter((c) => c.id !== id));
  }
  function updateCities(cities) {
    setMyCities(cities);
  }

  return (
    <MyCitiesContext.Provider
      value={{
        myCities,
        addCity,
        removeCity,
        updateCities,
      }}
    >
      {children}
    </MyCitiesContext.Provider>
  );
}


