<template>
  <v-app>
    <tool-bar/>
    <info-drawer/>
    <v-content>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="map">
              <google-map/>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <trip-details/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import TripDetails from '@/components/TripDetails'
import ToolBar from '@/components/ToolBar'
import InfoDrawer from '@/components/InfoDrawer'

export default {
  name: 'App',
  components: {
    GoogleMap,
    TripDetails,
    ToolBar,
    InfoDrawer
  }
}
</script>

<style>
.map {
  height: 500px;
}
</style>
