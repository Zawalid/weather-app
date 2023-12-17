import { createContext, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export const MyCitiesContext = createContext();

export default function MyCitiesProvider({ children }) {
  const [myCities, setMyCities] = useLocalStorageState('myCities', []);
  const [isAsideOpen, setIsAsideOpen] = useState(false); // I just need these to be global
  const [seeMore, setSeeMore] = useState(false);

  function addCity(city) {
    setMyCities((prev) => [...prev, city]);
  }
  function removeCity(id) {
    setMyCities((prev) => prev.filter((c) => c.id !== id));
  }
 

  return (
    <MyCitiesContext.Provider
      value={{
        myCities,
        addCity,
        removeCity,
        setMyCities,
        isAsideOpen,
        setIsAsideOpen,
        seeMore,
        setSeeMore,
      }}
    >
      {children}
    </MyCitiesContext.Provider>
  );
}
