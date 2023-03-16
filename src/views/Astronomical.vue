<script>
import QQaa from "../components/QQaa.vue";

export default {
  components: {
    QQaa,
  },
}
</script>

<template>
  <div class="container">
    <main class="row">
      <section>
        <h4>天氣現象</h4>
        <QQaa />
      </section>
      <section>
        <h4>人工增雨</h4>
        <QQaa />
      </section>
    </main>
  </div>
</template>
  
<style scoped>
section {
  margin-top: 1rem;
}
</style>
  