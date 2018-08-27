<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list v-if="place">
        <v-list-tile>
          <v-list-tile-avatar>
            <img :src="place.icon"/>
          </v-list-tile-avatar>
          <v-list-tile-content class="title">
            {{ place.name }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list v-if="place">
      <v-list-tile>{{ place.formatted_address }}</v-list-tile>
      <v-list-tile>{{ place.website }}</v-list-tile>
      <v-list-tile>{{ place.formatted_phone_number }}</v-list-tile>
      <v-list-group>
        <v-list-tile slot="activator">
          <v-list-tile-title>opening hours</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          v-for=" period in periods"
          :key="period.open.day"
        >
         {{getDay(period.open.day)}} : {{ period.open.time }} ~ {{ period.close.time }}
        </v-list-tile>
      </v-list-group>
      <v-list-tile>
        <place-button></place-button>
      </v-list-tile>
    </v-list>
    <v-divider/>
    <v-toolbar flat v-if="trip">
      <v-list>
        <v-list-tile class="title">{{ trip.title }}</v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list flat v-if="trip">
      <v-list-tile>Country: {{ trip.country }}</v-list-tile>
      <v-list-tile>City: {{ trip.city }}</v-list-tile>
      <v-list-tile>{{ trip.fromDate }} ~ {{ trip.toDate }}</v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import PlaceButton from '@/components/PlaceButton'

export default {
  name: 'info-drawer',

  components: {
    PlaceButton
  },

  data () {
    return {
    }
  },

  computed: {
    place () {
      return this.$store.state.place
    },
    periods () {
      return this.place.opening_hours ? this.place.opening_hours.periods : null
    },
    trip () {
      return this.$store.state.trip
    }
  },

  methods: {
    getDay (number) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      return days[number]
    }
  }
}
</script>
