<script>
import MapTW from "../components/MapTW.vue";

export default {
  components: {
    MapTW,
  }
}
</script>

<template>
  <main class="weatherMap">
    <MapTW />
  </main>
</template>

<style scoped>
.weatherMap {
  background-color: rgb(5, 5, 60);
}
</style>
