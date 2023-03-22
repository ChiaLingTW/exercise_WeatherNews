<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/NewsArticle.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/weather/news">天氣新聞</RouterLink>
      <RouterLink to="/weather/map">即時天氣地圖</RouterLink>
      <RouterLink to="/weather/astronomical">氣象常識</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer>
    <section class="row footerSection">
      <div class="col-12 col-lg-7 footerLink">
        <a href="#" class="">About Us</a>
        <a href="#" class="">Privacy</a>
        <a href="#" class="">Terms and Conditions</a>
      </div>
      <div class="col-12 col-lg-5 footerCopyright">
        <span>2023 © Weather Map News All Rights Reserved</span>
      </div>
    </section>
  </footer>
</template>

<style scoped>
header {
  height: 70px;
  background-color: rgb(200, 200, 245);
  display: flex;
  text-align: center;
  align-items: center;
}

nav {
  width: 100%;
  font-size: 18px;
}

nav a.router-link-exact-active {
  color: rgb(82, 82, 185);
  font-weight: bold;
}

nav a:hover,
nav a.router-link-exact-active:hover {
  color: rgb(82, 82, 185);
  background-color: rgba(255, 255, 255, 0.7);
}

nav a {
  display: inline-block;
  padding: 5px 2rem;
}


/* 頁尾 */
footer {
  background-color: rgb(82, 82, 185);
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
}

footer a {
  color: rgba(244, 244, 244, 1);
  padding: 0px 30px;
}

footer a:hover {
  color: rgb(82, 82, 185);
  background-color: rgba(255, 255, 255, 0.7);
}

.footerSection {
  width: 950px;
  color: rgb(244, 244, 244);
  font-size: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.footerLink {
  padding: 5px 0px;
  text-align: left;
}

.footerCopyright {
  padding: 5px 30px;
  text-align: right;
}

@media screen and (max-width:992px) {
  .footerSection {
    width: 100%;
  }

  .footerLink,
  .footerCopyright {
    text-align: center;
  }
}

@media (max-width: 768px) {
  header {
    height: 50px;
  }

  nav {
    font-size: 14px;
  }
}
</style>
