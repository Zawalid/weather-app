import { useCallback, useState } from 'react';

// Get the user ip address
async function getIp() {
  const res = await fetch('https://api64.ipify.org');
  const ip = await res.text();
  return ip;
}

// Get the location from the ip address
async function getLocationFromIp() {
  const ip = await getIp();
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  const { country, countryCode, regionName, city, lat: latitude, lon: longitude, timezone } = data;
  return { country, countryCode, regionName, city, latitude, longitude, timezone };
}

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(defaultPosition);
  const [error, setError] = useState(null);

  const getPosition = useCallback(async () => {
    // Use the IP address to get the location if there is something wrong with the api use the browser geolocation
    try {
      setIsLoading(true);
      const location = await getLocationFromIp();
      setLocation(location);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
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
  }, []);

  return { isLoading, location, error, getPosition };
}
