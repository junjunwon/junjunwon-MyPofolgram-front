<template>
    <div v-if="changeComment === true" class="topBack">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <p>댓글</p>
        <i class="fa-solid fa-paper-plane right"></i>
    </div>
    <div id="commentList">
        <div class="content">
            <img :src="this.userImgUrl" alt="프로필" />
            <div class="area">
                <b>{{ this.nickName }}</b>
                <span>{{ this.content }}</span
                >
                <p></p>
                <span class="hashtag" v-for="hashtag in this.hashtags" v-bind:key="hashtag">
                    <span>#{{ hashtag }}&nbsp;</span>
                </span>
                <p class="time">{{ this.calculateDate(this.createDate) }}</p>
            </div>
        </div>

        <div class="comment" v-for="row in localCommentList" v-bind:key="row">
            <img :src="row.userImgUrl" alt="프로필" />
            <div class="area">
                <b>{{ row.nickName }}</b>
                <span>{{ row.comment }}</span>
                <p class="time">{{ this.calculateDate(row.createDate) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import common from "@/utils/common";
import http from "../utils/http";
import { mapGetters } from "vuex";

export default {
    // props: ['postForComment'],
    data() {
        return {
            localCommentList : [],
            changeComment : true,
            postId: "",
            body: "",
            userImgUrl: "",
            nickName: "",
            createDate: "",
            hashtags: [],
            rows: [],
        };
    },
    mounted() {
        // this.postId = this.$route.params.id;
        this.getComments();
    },
    computed : {
        ...mapGetters("comment", ["getterPostForComment"]),
    },
    methods: {
        // api 호출시 파라미터로 게시글 아이디 전달
        getComments() {
            let response = {
                body: "여기완전 맛집",
                nickName: "게시물 작성자",
                userImgUrl: "/images/example.jpeg",
                createDate: "2022/04/05",
                hashtags: ["압구정 맛집", "압구정", "김치찌개 맛집"],
                rows: [
                    {
                        id: 1, //댓글 아이디
                        nickName: "eunjeong",
                        userImgUrl: "/images/example.jpeg",
                        comment: "인정인정",
                        createDate: "2022/04/10",
                    },
                    {
                        id: 2, //댓글 아이디
                        nickName: "nick",
                        userImgUrl: "/images/example.jpeg",
                        comment: "@eunjeong",
                        createDate: "2022/04/11",
                    },
                    {
                        id: 3, //댓글 아이디
                        nickName: "name",
                        userImgUrl: "/images/example.jpeg",
                        comment: "",
                        createDate: "2022/04/1",
                    },
                ],
            };
            http.get("/api/post/getCommentList", {params : {postId : "1"}})
            .then((response) => {
                this.localCommentList = response.data.result
            })
            this.content = this.getterPostForComment.content;
            this.body = this.getterPostForComment.body;
            this.nickName = this.getterPostForComment.nickName;
            this.userImgUrl = this.getterPostForComment.userImgUrl;
            this.createDate = this.getterPostForComment.createDate;
            this.hashtags = this.getterPostForComment.hashtags;
            // this.rows = response.rows;
        },
        calculateDate(date) {
            return common.getDate(date);
        },
    },
};
</script>
