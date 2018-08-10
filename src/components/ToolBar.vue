<template>
  <v-toolbar app class="blue accent-2">
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click.stop="dialog = true">new trip</v-btn>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">New Trip</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Title" v-model="title" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Country" v-model="country" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="City" v-model="city" required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-menu
                    ref="from"
                    :close-on-content-click="false"
                    v-model="from"
                    :nudge-right="40"
                    :return-value.sync="fromDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="fromDate"
                      label="From"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="fromDate" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="from = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.from.save(fromDate)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex>
                  <v-menu
                    ref="to"
                    :close-on-content-click="false"
                    v-model="to"
                    :nudge-right="40"
                    :return-value.sync="toDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="toDate"
                      label="To"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="toDate" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="to = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.to.save(toDate)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Trip from '@/models/trip'

export default {
  data () {
    return {
      dialog: false,
      from: false,
      to: false,
      title: '',
      country: '',
      city: '',
      fromDate: null,
      toDate: null
    }
  },

  methods: {
    save () {
      const trip = new Trip(this.title, this.country, this.city, this.fromDate, this.toDate)
      this.$store.commit('setTrip', trip)
      this.dialog = false
      this.title = ''
      this.country = ''
      this.city = ''
      this.fromDate = null
      this.toDate = null
    }
  }
}
</script>
