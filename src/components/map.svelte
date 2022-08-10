<script lang="ts">
  import { icon, marker } from "leaflet";
  import renderMap from "../hooks/useRenderMap";
  import "leaflet/dist/leaflet.css";

  export let coords: [number, number] = [0, 0];

  const avatarView: L.Marker = marker(coords, {
    icon: icon({
      iconUrl: "avatar.png",
      iconSize: [28, 28],
    }),
  });

  let mapView: L.Map | null = null;

  const onRender = (container: HTMLDivElement) => {
    mapView = renderMap(container, coords);
    avatarView.setLatLng(coords).addTo(mapView);
    return {
      destroy: () => {
        mapView?.remove();
      },
    };
  };

  $: {
    avatarView?.setLatLng(coords);
    mapView?.setView(coords);
  }
</script>

<div class="map-container" use:onRender />

<style>
  .map-container {
    width: 100vw;
    height: 100vh;
  }
</style>
