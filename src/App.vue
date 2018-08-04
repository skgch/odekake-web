<template>
  <v-app>
    <v-toolbar app class="blue accent-2"/>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-content>
      <google-map/>
    </v-content>
  </v-app>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'App',
  components: {
    GoogleMap
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
