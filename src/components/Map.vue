<template>
  <mapbox
    access-token="pk.eyJ1Ijoib3NzaWV3YXNzaWUiLCJhIjoiY2sxa3B1c3kzMDh3ZDNnbzNucW9xb29pNyJ9.9DLidkVmUWt7fUJKWHljOg"
    :map-options="{
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [5.85278, 51.8425],
      zoom: 9.2,
    }"
  />
</template>

<script>
  import Mapbox from 'mapbox-gl-vue';

  export default {
    name: 'Map',
    components: {
      Mapbox
    }
  }
</script>

<style scoped>
  li a {
    color: #adb5bd;
  }

  #map {
    width: 100%;
    height: 500px;
  }
</style>