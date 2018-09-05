<template>
  <div>
    <v-btn flat @click.stop="dialog = true">save place</v-btn>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Visited Place</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Place Name" v-model="place.name" disabled></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  :return-value.sync="visitedPlace.date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="visitedPlace.date"
                    label="Date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="visitedPlace.date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(visitedPlace.date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <v-select :items="times" v-model="visitedPlace.stayingTime" label="Staying Time"></v-select>
              </v-flex>
              <v-flex xs12>
                <v-textarea label="Comments" v-model="visitedPlace.comments"></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VisitedPlaceDetails from '@/models/visited-place-details'

export default {
  name: 'place-button',

  data () {
    return {
      dialog: false,
      menu: false,
      times: ['less than 30min', '30min', '1hour', '2hours', '3hours', 'more than 5hours', 'all day'],
      visitedPlace: new VisitedPlaceDetails(this.$store.state.place, '', '', '')
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
        const target = this.$store.state.visitedPlaces.find(e => {
          return this.place.place_id === e.place.place_id
        })
        if (target) {
          this.visitedPlace = target
        } else {
          this.visitedPlace = new VisitedPlaceDetails(this.$store.state.place, '', '', '')
        }
      },
      deep: true
    }
  },

  methods: {
    save () {
      this.$store.commit('addOrUpdateVisitedPlace', this.visitedPlace)
      this.dialog = false
    }
  }
}
</script>
