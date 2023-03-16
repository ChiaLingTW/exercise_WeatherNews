<script>
export default {
    props: ["latestTitle", "reporter", "latestDate", "latestCover"],
};
</script>

<template>
    <a href="/weather/news/article" title="點擊進入">
        <div class="LatestNews">
            <h1>{{ latestTitle }}</h1>
            <span>{{ latestDate }}｜記者：{{ reporter }}</span><br>
            <img v-bind:src="latestCover" alt="cover"><br>
            <div class="readmore">
                <span>詳細閱讀</span>
            </div>
        </div>
    </a>
</template>
  
<style scoped>
.LatestNews {
    color: black;
    font-size: 16px;
    padding: 20px;
    margin-bottom: 1rem;
    /* border: 3px solid rgb(200, 200, 245); */
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgb(200, 200, 245);
}

h1 {
    color: rgb(82, 82, 185);
    font-size: 30px;
    font-weight: bold;
}

.readmore {
    text-align: right;
}

.readmore>span {
    background-color: rgba(200, 200, 245, 0.7);
    padding: 10px 20px;
    border-radius: 10px;
    transition: 0.5s;
}

.readmore>span:hover {
    color: white;
    background-color: rgba(82, 82, 185, 0.7);
    padding: 10px 20px;
    border-radius: 10px;
    transition: 0.5s;
}

@media (max-width: 768px) {
    .LatestNews {
        font-size: 12px;
    }

    h1 {
        font-size: 22px;
    }
}
</style>