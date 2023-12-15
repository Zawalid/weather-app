import { useContext } from 'react';
import { MyCitiesContext } from '../contexts/MyCitiesContext';

export function useMyCities() {
  const context = useContext(MyCitiesContext);

  if (context === undefined) {
    throw new Error('useMyCities must be used within a SettingsProvider');
  }

  return context;
}
