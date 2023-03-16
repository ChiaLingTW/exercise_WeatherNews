import { createRouter, createWebHistory } from 'vue-router'
import WeatherMap from "../views/WeatherMap.vue"
import WeatherNews from "../views/WeatherNews.vue"
import NewsArticle from "../components/NewsArticle.vue"
import Astronomical from "../views/Astronomical.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: WeatherMap
    },
    {
      path: '/weather/map',
      name: 'WeatherMap',
      component: WeatherMap
    },
    {
      path: '/weather/news',
      name: 'WeatherNews',
      component: WeatherNews
    },
    {
      path: '/weather/news/article',
      name: 'NewsArticle',
      component: NewsArticle
    },
    {
      path: '/weather/astronomical',
      name: 'Astronomical',
      component: Astronomical
    },
  ]
})

export default router
