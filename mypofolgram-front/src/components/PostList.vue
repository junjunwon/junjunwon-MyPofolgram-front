<template>
    <div id="postList">
        <!-- <div class="post">
        <div class="top">
            <img src="/images/example.jpeg" alt="프로필">
            <p>eunj_eong</p>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div class="photoList">
            <img src="/images/example.jpeg" alt="">
        </div>
        <div class="bottom">
            <div class="iconList">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-paper-plane"></i>
                <div>
                    이미지 더보기 개수
                </div>
                <i class="fa-solid fa-bookmark flexRight"></i>
            </div>
            <p class="like">좋아요 123,456개</p>
            <p>
                <span class="nickname">eunj_eong</span>
                <span class="content">내용이 들어갑니다.
                    <span class="hashtag">#해시태그</span>
                </span>
            </p>
            <p class="comment">댓글 23,123개 모두 보기</p>
            <p class="time">15시간 전</p>
        </div>
        <div class="commentArea">
            <i class="fa-solid fa-face-smile-wink"></i>
            <input type="text" placeholder="댓글 달기...">
            <div class="button">
                게시
            </div>
        </div>
    </div> -->

        <div class="post" v-for="(row, index) in rows" v-bind:key="row">
            <div class="top">
                <img :src="row.userImgUrl" alt="프로필" />
                <p>{{ row.nickName }}</p>
                <i class="fa-solid fa-ellipsis" @click="this.showModal = true;"></i>
            </div>
            <div class="photoList">
                <vueper-slides class="imagesArea no-shadow">
                    <vueper-slide class="imageArea"
                        v-for="(img, i) in row.imgUrl"
                        :key="i"
                        :image="img"
                        >
                        <p>{{img}}</p>
                    </vueper-slide>
                </vueper-slides>
            </div>
            <div class="bottom">
                <div class="iconList">
                    <i
                        :class="{ 'fa-solid fa-heart': true, point2: row.liked === true }"
                        @click="changeLike(row.liked, index)"
                    ></i>
                    <i class="fa-solid fa-comment"></i>
                    <i class="fa-solid fa-paper-plane"></i>
                    <div>이미지 더보기 개수</div>
                    <i class="fa-solid fa-bookmark flexRight"></i>
                </div>
                <p class="like">좋아요 123,456개</p>
                <p>
                    <span class="nickname">eunj_eong</span>
                    <span class="content"
                        >{{ row.content }}
                        <p></p>
                        <span class="hashtag" v-for="hashtag in row.hashtags" v-bind:key="hashtag">
                            <span>#{{ hashtag }}&nbsp;</span>
                        </span>
                    </span>
                </p>
                <p class="comment" @click="moveToComment(row.id)">댓글 {{row.commentCount}}개 모두 보기</p>
                <p class="time">{{ this.calculateDate(row.createDate) }}</p>
            </div>
            <div class="commentArea">
                <i class="fa-solid fa-face-smile-wink"></i>
                <input type="text" placeholder="댓글 달기..." />
                <div class="button">게시</div>
            </div>
        </div>

        <div class="modalWrap" v-if="showModal" v-on:click="backgroundClick">
            <div class="bottomModal" id="modal" style="width=600px">
                <div class="flexbox">
                    <div>
                        <p><i class="fa-solid fa-arrow-up-from-bracket"></i></p>
                        공유
                    </div>
                    <div>
                        <p><i class="fa-solid fa-link"></i></p>
                        링크
                    </div>
                    <div class="point2">
                        <p><i class="fa-solid fa-exclamation point2"></i></p>
                        신고
                    </div>
                </div>
                <div>이 게시물이 표시되는 이유</div>
                <div>
                    <ul>
                        <li>즐겨찾기에 추가</li>
                        <li>숨기기</li>
                        <li>팔로우 취소</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import common from "@/utils/common";

export default {
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            showModal: false,
            count: 0,
            rows: [],
            slides: [
                {
                title: 'Slide #1',
                content: 'Slide content.'
                },
                {
                title: 'Slide #2',
                content: 'Slide content2'
                },
                {
                title: 'Slide #3',
                content: 'Slide content3'
                },
            ]
        };
    },
    mounted() {
        // ex) '2022-04-13'
        this.getPostInfo();
        document.addEventListener('scroll', this.scrollEvents);
    },
    methods: {
        moveToComment(id) {
            this.$router.push({ path: `/comment/${id}` });
        },
        getPostInfo() {
            // 포스트정보 가져오는 api호출, 기본 오름차순(최신순)
            let response = {
                count: 5,
                rows: [
                    // 포스트 관련된 정보 + 포스트 작성자 정보
                    {
                        id: 5, //포스트 아이디
                        nickName: "eunjeong", //Users 테이블
                        userImgUrl: "/images/example.jpeg",
                        // imgUrl: "/images/example.jpeg",
                        imgUrl: [
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                        ],
                        content: "압구정 김치찌개",
                        createDate: "2022-04-01", //포스트 생성일
                        commentCount: 30,
                        liked: true,
                        hashtags: [
                            //HashTag 테이블
                            "압구정 맛집",
                            "압구정",
                            "김치찌개 맛집",
                        ],
                    },
                    {
                        id: 4,
                        nickName: "eunjeong444",
                        userImgUrl: "/images/example.jpeg",
                        imgUrl: [
                            "/images/example.jpeg",
                        ],
                        content: "압구정 김치찌개444",
                        createDate: "2022-04-01",
                        commentCount: 10,
                        liked: true,
                        hashtags: ["압구정 맛집", "압구정", "김치찌개 맛집"],
                    },
                    {
                        id: 3,
                        nickName: "eunjeong333",
                        userImgUrl: "/images/example.jpeg",
                        imgUrl: [
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                        ],
                        content: "압구정 김치찌개333",
                        createDate: "2022-04-01",
                        commentCount: 10,
                        liked: false,
                        hashtags: ["압구정 맛집", "압구정", "김치찌개 맛집"],
                    },
                    {
                        id: 2,
                        nickName: "eunjeong222",
                        userImgUrl: "/images/example.jpeg",
                        imgUrl: [
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                            "/images/example.jpeg",
                        ],
                        content: "압구정 김치찌개222",
                        createDate: "2022-04-01",
                        commentCount: 3,
                        liked: false,
                        hashtags: ["압구정 맛집", "압구정", "김치찌개 맛집"],
                    },
                    {
                        id: 1,
                        nickName: "eunjeong111",
                        userImgUrl: "/images/example.jpeg",
                        imgUrl: [
                            "/images/example.jpeg",
                        ],
                        content: "압구정 김치찌개111",
                        createDate: "2022-04-01",
                        commentCount: 8,
                        liked: true,
                        hashtags: ["압구정 맛집", "압구정", "김치찌개 맛집"],
                    },
                ],
            };
            this.count = response.count;
            this.rows = response.rows;
        },
        backgroundClick(e) {
            let target = e.target;
            let checkContain = target.classList.contains("modalWrap");

            if (checkContain) {
                const html = document.querySelector('html');
                html.style.overflow = 'auto';
                this.showModal = false;
            }
        },
        scrollEvents() {
            if(this.showModal){
                const html = document.querySelector('html');
                html.style.overflow = 'hidden';
            }
        },
        changeLike(liked, index) {
            if (liked) {
                this.rows[index].liked = false;
            } else {
                this.rows[index].liked = true;
            }
        },
        calculateDate(date) {
            return common.getDate(date);
        },
    },
};
</script>
