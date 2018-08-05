<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-content class="title">
            {{ placeName }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'info-drawer',

  data () {
    return {
    }
  },

  computed: {
    placeName () {
      return this.$store.state.placeName
    }
  }
}
</script>
