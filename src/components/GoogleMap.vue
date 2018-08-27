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
      placesService: null,
      visitedPlacesMarker: null
    }
  },

  computed: {
    visitedPlaces () {
      return this.$store.state.visitedPlaces
    }
  },

  watch: {
    visitedPlaces: {
      handler () {
        this.showVisitedPlacesOnMap()
      },
      deep: true
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
              console.log(place)
              this.$store.commit('setPlace', place)
            }
          })
        }
      })
    },
    showVisitedPlacesOnMap () {
      if (this.visitedPlacesMarker) this.visitedPlacesMarker.setMap(null)
      this.visitedPlaces.forEach(e => {
        const id = e.place.place_id
        this.placesService.getDetails({ placeId: id }, (place, status) => {
          if (status === 'OK') {
            this.visitedPlacesMarker = new google.maps.Marker({
              position: place.geometry.location,
              map: this.map,
              icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            })
          }
        })
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
