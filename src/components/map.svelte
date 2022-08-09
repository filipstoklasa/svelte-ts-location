<script lang="ts">
  import { marker, map } from "leaflet";
  import renderMap from "../hooks/useRenderMap";
  import "leaflet/dist/leaflet.css";

  export let coords: [number, number] = [0, 0];

  let avatarView: L.Marker = marker([0, 0]);
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
    width: 530px;
    height: 300px;
  }
</style>
