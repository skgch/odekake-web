<template>
  <v-card v-if="selectedVisitedPlace">
    <v-card-media
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      height="200px"
    ></v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ selectedVisitedPlace.place.name }}</h3>
        <div><v-icon>event</v-icon>{{ selectedVisitedPlace.date }}</div>
        <div><v-icon>schedule</v-icon>{{ selectedVisitedPlace.stayingTime }}</div>
        <div>{{ selectedVisitedPlace.comments }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'trip-details',

  data () {
    return {
      selectedVisitedPlace: null
    }
  },

  computed: {
    place () {
      return this.$store.state.place
    }
  },

  watch: {
    place: {
      handler () {
        this.selectedVisitedPlace = this.$store.state.visitedPlaces.find(e => {
          return e.place.place_id === this.place.place_id
        })
      },
      deep: true
    }
  }

}
</script>
