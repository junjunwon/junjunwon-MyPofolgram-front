<template>
    <div class="storyList">
        <div class="story" v-for="row in rows" v-bind:key="row">
            <img :src="row.userImgUrl" alt="사용자프로필" :class="{ circle: row.view === false}"/>
            <p>{{ row.nickName }}</p>
        </div>
        <!-- <div class="story">
            <img src="/images/example.jpeg" alt="고양이" />
            <p>eunj_eong</p>
        </div>
        <div class="story">
            <img src="/images/example.jpeg" alt="고양이" />
            <p>eunj_eong2</p>
        </div>
        <div class="story">
            <img src="/images/example.jpeg" alt="고양이" />
            <p>long_eunj_eong2</p>
        </div>
        <div class="story">
            <img src="/images/example.jpeg" alt="고양이" />
            <p>long_eunj_eong2</p>
        </div>
        <div class="story">
            <img src="/images/example.jpeg" alt="고양이" />
            <p>long_eunj_eong2</p>
        </div>
        <div class="story">
            <img src="/images/example.jpeg" alt="고양이" />
            <p>long_eunj_eong2</p>
        </div> -->
    </div>
</template>

<script>
export default {
    date() {
        return {
            rows: [],
        };
    },
    created() {
        this.getStoryList();
    },
    methods: {
        getStoryList() {
            // 스토리리스트 가져오기
            let response = {
                rows: [
                    {
                        nickName: "eunjeong1",
                        userImgUrl: "/images/example.jpeg",
                        view: false,
                    },
                    {
                        nickName: "eunjeong2",
                        userImgUrl: "/images/example.jpeg",
                        view: false,
                    },
                    {
                        nickName: "eunjeong3",
                        userImgUrl: "/images/example.jpeg",
                        view: true,
                    },
                    {
                        nickName: "eunjeong4",
                        userImgUrl: "/images/example.jpeg",
                        view: true,
                    },
                ],
            };
            this.rows = response.rows;
        },
    },
};
</script>
