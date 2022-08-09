/**
 * @param locationCB Callback to set the current coords of user
 * @returns destroy method
 */
export const getGeoPosition = (
  locationCB: (coords: GeolocationCoordinates) => void
) => {
  const watchId = navigator.geolocation.watchPosition(
    (location) => {
      const { coords } = location;
      locationCB(coords);
    },
    (error) => {
      throw error;
    },
    { enableHighAccuracy: true }
  );

  return () => navigator.geolocation.clearWatch(watchId);
};
