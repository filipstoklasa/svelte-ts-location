import { watcher } from "../store/watcher";
import { location } from "../store/location";
import { getGeoPosition } from "../utils/geolocation";

export const useCurrentLocation = () => {
  let destroyRef: () => void = null;

  const cancelWatchPosition = () => {
    if (destroyRef) {
      destroyRef();
      destroyRef = null;
    }
    location.reset();
  };

  watcher.state.subscribe((isWatching) => {
    if (isWatching) {
      location.setLoading(true);
      destroyRef = getGeoPosition(location.setLocation);
    } else {
      cancelWatchPosition();
    }
  });

  return {
    location: location.state,
    watcher: watcher.state,
  };
};

export default useCurrentLocation;
