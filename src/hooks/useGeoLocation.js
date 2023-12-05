import { useCallback, useState } from 'react';

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(defaultPosition);
  const [error, setError] = useState(null);

  const getPosition = useCallback(async () => {
    // Use the IP address to get the location if there is something wrong with the api use the browser geolocation
    try {
      const location = await getLocationFromIp();
      setLocation(location);
      return;
    } catch (error) {
      console.log(error);
      if (!navigator.geolocation) return setError('Your browser does not support geolocation');
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
  }, []);

  return { isLoading, location, error, getPosition };
}

async function getLocationFromIp() {
  const res = await fetch('https://ip.guide');
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  const {
    location,
    network: {
      autonomous_system: { country: countryCode },
    },
  } = data;

  return {
    ...location,
    countryCode,
  };
}
