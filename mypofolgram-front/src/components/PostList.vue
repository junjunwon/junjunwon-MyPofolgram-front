<template>
    <div id="postList">
        <div class="post" v-for="(row, index) in localPostDetails" v-bind:key="row">
            <div class="top">
                <img :src="row.userImgUrl" alt="프로필" />
                <p style="cursor: pointer">{{ row.nickName }}</p>
                <i class="fa-solid fa-ellipsis" @click="this.showModal = true"></i>
            </div>
            <div class="photoList">
                <vueper-slides class="imagesArea no-shadow" :arrows="true" :dragging-distance="40">
                    <vueper-slide class="imageArea" v-for="(img, i) in row.photoImgUrl" :key="i" :image="img">
                        <p>{{ img }}</p>
                    </vueper-slide>
                </vueper-slides>
            </div>
            <div class="bottom">
                <div class="iconList">
                    <i
                        :class="{ 'fa-solid fa-heart': true, point2: row.isLiked === 'true' }"
                        @click="changeLike(row.isLiked, index)"
                    ></i>
                    <i class="fa-solid fa-comment"></i>
                    <i class="fa-solid fa-paper-plane"></i>
                    <!-- <div>이미지 더보기 개수</div> -->
                    <i class="fa-solid fa-bookmark flexRight"></i>
                </div>
                <p class="like">좋아요 {{row.likeCount}}개</p>
                <p>
                    <span class="nickname">{{ row.nickName }}</span>
                    <span class="content"
                        >{{ row.content }}
                        <p></p>
                        <span class="hashtag" v-for="hashtag in row.hashtags" v-bind:key="hashtag">
                            <span>#{{ hashtag }}&nbsp;</span>
                        </span>
                    </span>
                </p>
                <p class="comment" @click="moveToComment(row)">댓글 {{row.commentCount}}개 모두 보기</p>
                <!-- <p class="comment" @click="setPostAndgoComment(row)">댓글 {{row.commentCount}}개 모두 보기</p> -->
                <p class="time">{{ this.calculateDate(row.createDate) }}</p>
            </div>
            <div class="commentArea">
                <i class="fa-solid fa-face-smile-wink"></i>
                <input type="text" placeholder="댓글 달기..." id="comment" />
                <div class="button" @click="createComment(row.id, $event)">게시</div>
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
    <!-- <comment v-if="changeComment === true" v-bind:postForComment="postForComment"></comment> -->
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import common from "@/utils/common";
import http from '../utils/http'
import { mapGetters, mapMutations } from "vuex";

export default {
    components: { 
        VueperSlides, 
        VueperSlide
    },
    props : ['mypostUserId'],
    data() {
        return {
            userId : '',
            localPostDetails : [],
            showModal: false,
            count: 0,
            rows: [],
            slides: [
                {
                    title: "Slide #1",
                    content: "Slide content.",
                },
                {
                    title: "Slide #2",
                    content: "Slide content2",
                },
                {
                    title: "Slide #3",
                    content: "Slide content3",
                },
            ],
            postForComment : {
                id : '',
                content : '',
                createDate : '',
                hashtags : [],
                nickName : '',
                userImgUrl : ''
            }
        };
    },
    computed : {
        ...mapGetters("userInfo", ["getterUserInfo"]),
    },
    mounted() {
        // ex) '2022-04-13'
        this.getPostInfo();
        document.addEventListener("scroll", this.scrollEvents);
    },
    methods: {
        ...mapMutations("comment",["setPostForComment"]),
        // setPostAndgoComment(row) {
        //     this.changeComment = true
        //     this.postForComment.id = row.id
        //     this.postForComment.content = row.content
        //     this.postForComment.createDate = row.createDate,
        //     this.postForComment.hashtags = row.hashtags
        //     this.postForComment.nickName = row.nickName
        //     this.postForComment.userImgUrl = row.userImgUrl
        // },
        moveToComment(row) {
            this.setPostForComment(row)
            this.$router.push({
                path: `/comment/${row.id}`
            });
        },
        async getPostInfo() {
            this.userId = this.mypostUserId
            console.log("this.userId", this.userId)
            console.log("this.mypostUserId", this.mypostUserId)
            
            await http.get("/api/post/getPostListDetail", { params: { userId: "admin" } }).then((response) => {
                console.log(response);
                this.localPostDetails = response.data.result;
                this.count = this.localPostDetails.length
            })
        },
        backgroundClick(e) {
            let target = e.target;
            let checkContain = target.classList.contains("modalWrap");

            if (checkContain) {
                const html = document.querySelector("html");
                html.style.overflow = "auto";
                this.showModal = false;
            }
        },
        scrollEvents() {
            if (this.showModal) {
                const html = document.querySelector("html");
                html.style.overflow = "hidden";
            }
        },
        changeLike(liked, index) {
            console.log('before changed liked is ', liked)
            liked = liked === 'true' ? liked = 'false' : liked = 'true'
            console.log('changed liked is ', liked)
            http.post("/api/post/saveLikeForPost", {
                userId : this.getterUserInfo.id, 
                postId : this.localPostDetails[index].id, 
                isLiked : liked})
            .then((response) => {
                if(response.data.result === true) { //성공시
                    this.localPostDetails[index].isLiked = 'true'
                    ++this.localPostDetails[index].likeCount
                } else if(response.data.result === false) { //삭제시
                    this.localPostDetails[index].isLiked = 'false'
                    --this.localPostDetails[index].likeCount
                }
                console.log('after responding isLike is ', this.localPostDetails[index].isLiked)
            })
        },
        calculateDate(date) {
            if (date === null) {
                return "!date가 null로 들어옴 확인 필요!";
            }
            return common.getDate(date);
        },
        createComment(id, e) {
            // API필요 - 파라미터(게시글 ID, 댓글)
            // 댓글내용
            let target = e.currentTarget;
            let commentInput = target.previousSibling;
            let comment = commentInput.value;
            console.log(comment);

            // api완료 시 입력창 지우는 기능 필요
            commentInput.value = "";
        },
    },
};
</script>
