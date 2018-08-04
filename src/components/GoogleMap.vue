<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'google-map',

  mounted () {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 61.180059, lng: -149.822075 },
      zoom: 14
    })
  }
}
</script>

<style scoped>
  #map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>
