import { useCallback, useEffect, useState } from 'react';
import { useSettings } from './useSettings';
import { toast } from 'sonner';

//! : Mixed Content: The page at 'https://weather-app-ten-umber.vercel.app/' was loaded over HTTPS, but requested an insecure resource 'http://ip-api.com/json/'. This request has been blocked; the content must be served over HTTPS.
// Get the user ip address
// async function getIp() {
//   const res = await fetch('https://api64.ipify.org');
//   const ip = await res.text();
//   return ip;
// }

// Get the location from the ip address
// async function getLocationFromIp(setIsLoading, setError, setLocation) {
//   try {
//     setIsLoading(true);
//     const ip = await getIp();
//     const res = await fetch(`http://ip-api.com/json/${ip}`);
//     const data = await res.json();
//     if (!res.ok) throw Error('Error');
//     const {
//       country,
//       countryCode,
//       regionName,
//       city,
//       lat: latitude,
//       lon: longitude,
//       timezone,
//     } = data;
//     setLocation({ country, countryCode, regionName, city, latitude, longitude, timezone });
//     setError(null);
//   } catch (err) {
//     setError(err);
//   } finally {
//     setIsLoading(false);
//   }
// }

async function getLocationFromIp(setIsLoading, setError, setLocation) {
  try {
    setIsLoading(true);
    const res = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client');
    const data = await res.json();
    if (!res.ok) throw Error('Error');
    const {
      countryName: country,
      countryCode,
      principalSubdivision: regionName,
      city,
      latitude,
      longitude,
      localityInfo: { informative },
    } = data;

    setLocation({
      country,
      countryCode,
      regionName,
      city,
      latitude,
      longitude,
      timezone: informative.find((item) => item.description === 'time zone')?.name,
    });
    setError(null);
  } catch (err) {
    setError(err);
  } finally {
    setIsLoading(false);
  }
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
      toast.error('Something went wrong, please try again later');
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
