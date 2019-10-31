<template>
  <mapbox
    access-token="pk.eyJ1Ijoib3NzaWV3YXNzaWUiLCJhIjoiY2sxa3B1c3kzMDh3ZDNnbzNucW9xb29pNyJ9.9DLidkVmUWt7fUJKWHljOg"
    :map-options="{
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [5.85278, 51.8425],
        zoom: 10,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      @map-load="loaded"
      @map-zoomend="zoomend"
      @map-click:points="clicked"
      @geolocate-error="geolocateError"
      @geolocate-geolocate="geolocate"
  />
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
 
export default {
  components: { Mapbox },
  methods: {
    loaded(map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [5.868610, 51.827221],
                },
                properties: {
                  title: 'Technovium',
                  icon: 'school',
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': '{icon}-11',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#ffffff'
        },
      })
    },
    zoomend(map, e) {
      console.log('Map zoomed')
    },
    clicked(map, e) {
      const title = e.features[0].properties.title
      console.log(title)
    },
    geolocateError(control, positionError) {
      console.log(positionError)
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${position.coords.longitude}`
      )
    },
  },
}
</script>

<style scoped>
  li a {
    color: #adb5bd;
  }

  #map {
    width: 100%;
    height: 600px;
  }
</style>