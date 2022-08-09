<script lang="ts">
  import Map from "./components/map.svelte";
  import useCurrentLocation from "./hooks/useCurrentLocation";

  const { location, watcher } = useCurrentLocation();
</script>

{#if !$watcher}
  <span>Watcher is off</span>
{:else if $location.loading}
  <span>Location is loading</span>
{:else if !$location.coords}
  <span>Something went wrong</span>
{:else}
  <Map coords={[$location.coords.latitude, $location.coords.longitude]} />
{/if}

<button on:click={() => watcher.update((prev) => !prev)}
  >{$watcher ? "stop sharing location" : "start sharing location"}</button
>
