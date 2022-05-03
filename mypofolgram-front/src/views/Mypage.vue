<template>
    <div class="mypage">
        <div class="mypageHeader">
            <h2 class="nickname" v-text="getterUserInfo.userId"></h2>
            <dis class="right">
                <i class="fa-solid fa-square-plus" id="createModal" @click="checkModal($event)"></i>
                <i class="fa-solid fa-bars" id="settingModal" @click="checkModal($event)"></i>
            </dis>
        </div>
        <div class="top">
            <div>
                <img :src=getterUserInfo.userImgUrl alt="" />
            </div>
            <div>
                <p>게시물</p>
                <span v-text="getterUserInfo.postCnt"></span>
            </div>
            <div @click="gotoFollowWhen('follower', follow.followerCount > 0)">
                <p>팔로워</p>
                <span v-text="follow.followerCount"></span>
            </div>
            <div @click="gotoFollowWhen('following', follow.followingCount > 0)">
                <p>팔로잉</p>
                <span v-text="follow.followingCount"></span>
            </div>
        </div>
        <!-- <div class="modify" @click="moveTo('/mypage/modify')">프로필 편집</div> -->
        <div class="modify" @click="this.$router.push({ name: 'modify'})">프로필 편집</div>

        <div class="mypost" v-if="!isEmpty">
            <div v-for="(post) in localPosts" class="post" v-bind:key="post">
            <!-- <div class="post"> -->
                <img :src=post.imgUrl alt="" @click="test"/>
            </div>
            
        </div>
        <div v-else class="empty">
            <div>
                <i class="fa-solid fa-camera"></i>
                <h3>게시물 없음</h3>
            </div>
        </div>
        <div v-if="createModal" class="bottomModal">
            <p class="modalTitle">만들기</p>
            <ul>
                <li id="show-modal" @click="showRegister = true">
                    <i class="fa-solid fa-table-cells"></i>
                    <p>게시물</p>
                    <!-- <button id="show-modal" @click="showRegister = true">Show Modal</button> -->
                </li>
                <li id="show-modal" @click="showDeveloping = true">
                    <i class="fa-solid fa-clapperboard"></i>
                    <p>릴스</p>
                </li>
                <li id="show-modal" @click="showDeveloping = true">
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>스토리</p>
                </li>
                <li id="show-modal" @click="showDeveloping = true">
                    <i class="fa-brands fa-gratipay"></i>
                    <p>스토리 하이라이트</p>
                </li>
                <li id="show-modal" @click="showDeveloping = true">
                    <i class="fa-solid fa-satellite-dish"></i>
                    <p>라이브 방송</p>
                </li>
                <li id="show-modal" @click="showDeveloping = true">
                    <i class="fa-solid fa-book-open"></i>
                    <p>가이드</p>
                </li>
            </ul>
        </div>
        <div v-if="settingModal" class="bottomModal">
            <ul>
                <li @click="checkLogout">
                    <i class="fa-solid fa-gear"></i>
                    <p>로그아웃</p>
                </li>
                <li>
                    <i class="fa-solid fa-gear"></i>
                    <p>설정</p>
                </li>
                <li>
                    <i class="fa-solid fa-clock"></i>
                    <p>내 활동</p>
                </li>
                <li>
                    <i class="fa-solid fa-clock"></i>
                    <p>보관</p>
                </li>
                <li>
                    <i class="fa-solid fa-qrcode"></i>
                    <p>QR 코드</p>
                </li>
                <li>
                    <i class="fa-solid fa-bookmark"></i>
                    <p>저장됨</p>
                </li>
                <li>
                    <i class="fa-solid fa-list"></i>
                    <p>친한 친구</p>
                </li>
                <li>
                    <i class="fa-solid fa-star"></i>
                    <p>즐겨찾기</p>
                </li>
                <li>
                    <i class="fa-brands fa-gratipay"></i>
                    <p>코로나19 정보 센터</p>
                </li>
            </ul>
        </div>
        <!-- use the modal component, pass in the prop -->
        <new-post :show="showRegister" @close="showRegister = false">
            <template #header>
                <div class="topWithButton">
                    <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
                    <p class="bold">새 게시물 만들기</p>
                    <i @click="onUpload" class="point">다음</i>
                </div>
            </template>
            <template #body>
                <img src="" alt="" />
                <div>사진과 동영상을 여기에 끌어다 놓으세요.</div>
                <!-- <a @click="showRegister = false" title="Button push lightblue" class="button btnPush btnLightBlue">컴퓨터에서 선택</a> -->
                 <input type="file" @change="onFileSelected" ref="fileInput" class="input" />
                <br />
                <div @click="$refs.fileInput.click()" class="buttonBackground">컴퓨터에서 선택</div>
            </template>
            <template #footer>
                <div></div>
            </template>
        </new-post>
        <confirm-modal :show="showDeveloping" @close="showDeveloping = false">
            <template #header>
                <div class="topWithButton">
                    <p class="bold">확인창</p>
                </div>
            </template>
            <template #body>
                <div>
                    <div>개발중입니다. </div>
                </div>
            </template>
            <template #footer>
                <div>
                    
                </div>
            </template>
        </confirm-modal>
    </div>
</template>

<script>

import modal from '../components/modal.vue'
import confirmModal from '../components/confirmModal.vue'
// import axios from 'axios'
import http from '../utils/http'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    components : {
        'newPost' : modal,
        'confirmModal' : confirmModal
    },        
    data() {

        return {
            isEmpty: false,
            createModal: false,
            settingModal: false,
            user: {},
            userId : '',
            follow: {
                followerCount: 0,
                followingCount: 0,
                followeeList : [],
                followerList : []
            },
            // props 테스트
            showRegister: false,
            showDeveloping : false,
            selectedFile: null,
            showComplete : false,
            localPosts : []
        };
    },
    created() {
        this.userId = sessionStorage.getItem('userId');
        this.setUserId(this.userId)
        this.getUserInfo()
        this.getFollowList()
        this.getPostList()
    },
    computed : {
        ...mapGetters('userInfo', ['getterUserInfo']),
    },
    watch: {
    }, 
    mounted() {
        // follower/following Count vuex로 얻기?
    },
    methods: {
        ...mapMutations('userInfo', ['setUserId']),
        ...mapActions('userInfo', ['getUserInfo']),
        ...mapActions('auth', ['logout']),
        async getFollowList() {
            await http.get('/api/user/getFollowList', {params : {userId : this.userId}})
                .then((response)=> {
                    this.follow.followerCount = response.data.result.followCnt[0];
                    this.follow.followingCount = response.data.result.followCnt[1];
                    this.follow.followeeList = response.data.result.followeeList;
                    this.follow.followerList = response.data.result.followerList;
                })
        },
        async getPostList() {
            await http.get("/api/post/getPostList", {params : {userId : this.userId}})
            .then((response) => {
                this.localPosts = response.data.result
            })
        },
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
        gotoFollowWhen(menu, hasData) {
            if (!hasData) return;
            this.$router.push({ path: `/mypage/follow/${menu}` });
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        async onUpload() {
            const fd = new FormData()
            let isCheck = this.checkFile(fd)
            if(!isCheck) return
            fd.append('imageTest', this.selectedFile, this.selectedFile.name)

            await http.post('', fd, {
                onUploadProgress : uploadEvent => {
                    console.log('Upload Progress : '+ Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%') //hold number and byte how much we upload
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(
                // this.showRegister = false
            )
        },
        checkFile(fd) {
            if(fd !== null) return true
            return false
        },
        checkModal(e){
            let target = e.currentTarget.id;
            if(target === "createModal"){
                this.settingModal = false;
                this.createModal = !this.createModal;
            }else{
                this.createModal = false;
                this.settingModal = !this.settingModal;
            }
        },
        checkLogout() {
            this.logout()
            this.$router.push({
                path : '/login'
            })
        },
        test() {
            alert("Test")
        }
    },
};
</script>
<style scoped>
.buttonBackground {
    width:130px;
    height:32px;
    cursor: pointer;
}
.input {
    display: none;
}
</style>