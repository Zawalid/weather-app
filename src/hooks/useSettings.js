import { useContext } from 'react';
import { settingsContext } from '../contexts/SettingsContext';

export function useSettings() {
  const context = useContext(settingsContext);

  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
}
