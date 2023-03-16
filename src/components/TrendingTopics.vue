<script>
export default {
    props: ["topicTitle", "topicDesc", "topicCover"],
};
</script>

<template>
    <a href="/weather/news/article" title="點擊進入">
        <div class="d-flex flex-wrap TrendingTopics">
            <div class="col-4 col-lg-6 TopicImg">
                <img src="../assets/news/y-news-climate-change.webp" alt="cover">
            </div>
            <div class="col-8 col-lg-6 TopicText">
                <h4>{{ topicTitle }}</h4>
                <p>{{ topicDesc }}</p>
            </div>
        </div>
    </a>
</template>
  
<style scoped>
.TrendingTopics {
    color: black;
    font-size: 14px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgb(200, 200, 245);
}

.TopicImg {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
}

.TopicImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.TopicText {
    padding: 0px 10px;
}

.TopicText h4 {
    color: rgb(82, 82, 185);
    font-size: 18px;
    font-weight: bold;
}

.TopicText p {
    color: rgb(160, 160, 160);
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    box-sizing: border-box;
}

@media screen and (max-width:992px) {
    .TopicImg {
        width: 150px;
        height: 100%;
    }

    .TopicText p {
        -webkit-line-clamp: 3;
    }
}
</style>