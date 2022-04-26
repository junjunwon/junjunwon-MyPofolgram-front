<template>
    <div class="storyView" v-bind:style="{ backgroundImage: 'url(' + imgUrl + ')' }">
        <!-- <div>인스타 스토리 클릭시 출력 : {{ id }}</div> -->
        <!-- <img :src="imgUrl" alt="" /> -->

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            imgUrl: "",
        };
    },
    mounted() {
        this.getStoryId();
    },
    methods: {
        getStoryId() {
            this.id = this.$route.params.id;
            console.log("스토리 id : " + this.id);

            // 스토리 아이디에 대한 이미지? 동영상을 API로 가져오는게 맞지않나 생각중,,,,,,
            if (this.id.length !== 0) {
                this.getStoryUrl();
            }
        },
        getStoryUrl() {
            // 위 주석처럼 여기서 API호출?
            this.imgUrl = "/images/example.jpeg";
        },
    },
};
</script>
