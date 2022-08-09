import { writable, type Writable } from "svelte/store";
import type { TLocation, TCoordinates } from "./types";

const initialState: TLocation = { coords: null, loading: false };

class Location {
  readonly state: Writable<TLocation>;
  constructor() {
    this.state = writable(initialState);
  }

  public reset = () => {
    this.state.set(initialState);
  };

  public setLocation = ({ latitude, longitude }: TCoordinates) => {
    this.state.set({
      coords: {
        latitude,
        longitude,
      },
      loading: false,
    });
  };

  public setLoading = (loading: boolean) => {
    this.state.update((prev) => ({ ...prev, loading }));
  };
}

export default new Location();
