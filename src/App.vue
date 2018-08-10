<template>
  <v-app>
    <tool-bar/>
    <info-drawer/>
    <v-content>
      <google-map/>
    </v-content>
  </v-app>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import ToolBar from '@/components/ToolBar'
import InfoDrawer from '@/components/InfoDrawer'

export default {
  name: 'App',
  components: {
    GoogleMap,
    ToolBar,
    InfoDrawer
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
