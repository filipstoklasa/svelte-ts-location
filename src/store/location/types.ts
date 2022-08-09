export type TCoordinates = Pick<
  GeolocationCoordinates,
  "latitude" | "longitude"
>;
export type TLocation = { coords: TCoordinates | null; loading: boolean };
