<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'google-map',

  data () {
    return {
      map: null,
      marker: null
    }
  },

  mounted () {
    this.initMap()
  },

  methods: {
    initMap () {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.501527, lng: -0.1921837 },
        zoom: 14
      })

      this.map.addListener('click', event => {
        console.log(event)
        if (this.marker) this.marker.setMap(null)
        this.marker = new google.maps.Marker({
          position: event.latLng,
          map: this.map
        })
      })
    }
  }
}
</script>

<style scoped>
  #map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>
