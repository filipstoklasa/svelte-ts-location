import { map, tileLayer } from "leaflet";

const urlTemplate =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  options = {
    subdomains: "abcd",
    maxZoom: 30,
  };

const renderMap = (
  container: HTMLDivElement,
  coords: [number, number] = [0, 0]
) => {
  const mapContainer = map(container).setView(coords, 15);
  tileLayer(urlTemplate, options).addTo(mapContainer);

  return mapContainer;
};

export default renderMap;
