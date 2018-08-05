<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'google-map',

  data () {
    return {
      map: null,
      marker: null,
      placesService: null
    }
  },

  mounted () {
    this.initMap()
  },

  methods: {
    initMap () {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.501527, lng: -0.1921837 },
        zoom: 14,
        gestureHandling: 'greedy'
      })

      this.placesService = new google.maps.places.PlacesService(this.map)

      this.map.addListener('click', event => {
        console.log(event)
        if (this.marker) this.marker.setMap(null)
        this.marker = new google.maps.Marker({
          position: event.latLng,
          map: this.map
        })

        if (event.placeId) {
          console.log('You clicked on place:' + event.placeId)
          event.stop()
          this.placesService.getDetails({ placeId: event.placeId }, (place, status) => {
            if (status === 'OK') {
              console.log(place.name)
              console.log(place.formatted_address)
              this.$store.commit('setPlaceName', place.name)
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
#map {
  height: 100%;
  background: gray;
}
</style>
