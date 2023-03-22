<template>
    <div class="qaArea">
        <button class="qaTitle" v-on:click="qaClick()">🔍{{ qaTitle }}</button>
        <div class="qaAnswer" v-show="showAnswer">
            <p>{{ qaAnswer }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id", "qaTitle", "qaAnswer"],
    data() {
        return {
            showAnswer: false,
        }
    },
    methods: {
        qaClick() {
            // alert("OK");
            this.showAnswer = !this.showAnswer
        },
    }
};

</script>
  
<style scoped>
.qaArea {
    margin-bottom: 1rem;
}

.qaTitle {
    width: 100%;
    background-color: rgb(245, 245, 245);
    font-weight: bold;
    text-align: left;
    padding: 10px 20px;
    border: none;
    border-radius: 10px 10px 0px 0px;
    transition: 0.5s;
}

.qaTitle:hover {
    background-color: rgba(200, 200, 245, 0.7);
    transition: 0.5s;
}

.qaAnswer {
    background-color: rgb(245, 245, 245);
    text-align: left;
    padding: 10px 20px;
    border-radius: 0px 0px 10px 10px;
    border-top: 3px dotted lightgrey;
}
</style>