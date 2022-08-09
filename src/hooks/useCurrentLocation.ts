import { watcher } from "../store/watcher";
import { location } from "../store/location";
import { getGeoPosition } from "../utils/geolocation";

export const useCurrentLocation = () => {
  let destroyRef: () => void = null;

  const cancelWatchPosition = () => {
    destroyRef();
    destroyRef = null;
    location.reset();
  };

  watcher.state.subscribe((isWatching) => {
    if (isWatching) {
      location.setLoading(true);
      destroyRef = getGeoPosition(location.setLocation);
    } else {
      if (destroyRef) {
        cancelWatchPosition();
      }
    }
  });

  return {
    location: location.state,
    watcher: watcher.state,
  };
};

export default useCurrentLocation;
