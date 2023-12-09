import { useCallback, useEffect, useState } from 'react';
import { useSettings } from './useSettings';

// Get the user ip address
async function getIp() {
  const res = await fetch('https://api64.ipify.org');
  const ip = await res.text();
  return ip;
}

// Get the location from the ip address
async function getLocationFromIp(setIsLoading, setError, setLocation) {
  try {
    setIsLoading(true);
    const ip = await getIp();
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();
    if (!res.ok) throw Error('Error');
    const {
      country,
      countryCode,
      regionName,
      city,
      lat: latitude,
      lon: longitude,
      timezone,
    } = data;
    setLocation({ country, countryCode, regionName, city, latitude, longitude, timezone });
    setError(null);
  } catch (err) {
    setError(err);
  } finally {
    setIsLoading(false);
  }
}

async function getLocationFromBrowser(setIsLoading, setError, setLocation) {
  if (!navigator.geolocation) setError('Your browser does not support geolocation');
  setIsLoading(true);
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      setIsLoading(false);
    },
    (error) => {
      setError(error.message);
      setIsLoading(false);
    },
  );
}

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState();
  const [error, setError] = useState(null);
  const { isLocationAccess, defaultLocation } = useSettings();

  const getPosition = useCallback(async () => {
    try {
      isLocationAccess
        ? await getLocationFromIp(setIsLoading, setError, setLocation)
        : !defaultLocation && setError('No access granted');
    } catch (error) {
      console.error(error.message);
      await getLocationFromBrowser(setIsLoading, setError, setLocation);
    }
  }, [isLocationAccess, defaultLocation]);

  useEffect(() => {
    if (!isLocationAccess && defaultLocation) {
      const {
        name: city,
        latitude,
        longitude,
        timezone,
        country,
        country_code: countryCode,
        admin1: regionName,
      } = defaultLocation || {};

      setLocation({
        city,
        latitude,
        longitude,
        timezone,
        country,
        countryCode,
        regionName,
      });
      setError(null);
    }
  }, [isLocationAccess, defaultLocation]);

  return { isLoading, location, error, getPosition };
}
