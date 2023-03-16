<script>
import LatestNews from '../components/LatestNews.vue';
import TrendingTopics from '../components/TrendingTopics.vue';

export default {
  components: {
    LatestNews,
    TrendingTopics,
  },
  data() {
    return {
      latestList: [
        {
          id: 1,
          latestTitle: "明高溫破30度！週末變天情況一次看",
          reporter: "張志浩",
          latestDate: "2023年3月16日",
          latestCover: "../assets/news/y-news-cocktail.webp",
        },
        {
          id: 2,
          latestTitle: "今日夜溫差11度！ 週六北東轉濕涼「這天再回暖」",
          reporter: "謝文哲",
          latestDate: "2023年3月15日",
          latestCover: "../assets/news/y-news-cocktail.webp",
        },
        {
          id: 3,
          latestTitle: "玉山無雪！鄭明典證實今年冬天「正常偏暖」 週末變天降雨範圍曝光",
          reporter: "鄭伊珊、余苓瑀",
          latestDate: "2023年3月14日",
          latestCover: "../assets/news/y-news-cocktail.webp",
        },
        {
          id: 4,
          latestTitle: "迎風面水氣稍增北北基偶飄雨 短期內春雨訊號仍不明顯",
          reporter: "吳姝叡",
          latestDate: "2023年3月10日",
          latestCover: "../assets/news/y-news-cocktail.webp",
        },
      ],
      topicList: [
        {
          id: 1,
          topicTitle: "暖陽發威熱炸！入夜急墜15度 南台灣降雨機率曝",
          topicDesc: "最近幾天各地都是晴朗溫暖的好天氣，氣象局指出，明（17）日持續回暖，僅東半部偶有降雨，中南部高溫飆破30度，各地日夜溫差可達15度，未來一周大致天氣穩定。值得注意的是，有專家表示，缺水的中南部短期內不會出現較大雨勢的訊號，未來10天的雨量未達20毫米，短期內也沒有較大雨勢的訊號。",
          topicCover: "",
        },
        {
          id: 2,
          topicTitle: "好天氣持續！明天更溫暖「各地高溫逾26度」 這天恐有雨",
          topicDesc: "太陽公公賞臉，已經好幾天都是晴朗溫暖的好天氣！氣象粉專「天氣風險 WeatherRisk」提醒，明（17）日將比今天更溫暖。此外，明晨要留意西半部易起霧，週六（18日）東北季風增強、北部轉涼；週日（19日）漸回溫，北部晚有短暫雨，下週一（20）至三（22日），偏南到西南風強。",
          topicCover: "",
        },
        {
          id: 3,
          topicTitle: "迎風面雲多局部雨 西半部日夜溫差大",
          topicDesc: "中央氣象局表示，今(16)日迎風面水氣增加，除了東半部仍有局部短暫雨之外，桃園以北地區及北部山區降雨機率也提高，整天都有飄雨機會，新竹以南則為晴到多雲的天氣。",
          topicCover: "",
        },
      ],
    };
  },
}
</script>

<template>
  <div class="container">
    <main class="row">
      <section class="col-12 col-lg-7 latestNews">
        <LatestNews v-for="item in latestList" v-bind:key="item.id" v-bind:latestTitle="item.latestTitle"
          v-bind:reporter="item.reporter" v-bind:latestDate="item.latestDate" v-bind:src="item.latestCover" />
      </section>
      <section class="col-12 col-lg-5 trendingTopics">
        <h4>熱門新聞</h4>
        <TrendingTopics v-for="item in topicList" v-bind:key="item.id" v-bind:topicTitle="item.topicTitle"
          v-bind:topicDesc="item.topicDesc" v-bind:src="item.topicCover"/>
      </section>
    </main>
  </div>
</template>

<style scoped>
section {
  margin-top: 1rem;
}

h4 {
  color: rgb(82, 82, 185);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 992px) {
  .latestNews {
    padding-bottom: 1rem;
    border-bottom: 2px solid rgb(200, 200, 245);
  }

  .trendingTopics {
    padding-top: 1rem;
  }
}
</style>