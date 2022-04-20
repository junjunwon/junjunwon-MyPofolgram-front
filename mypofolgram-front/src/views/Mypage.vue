<template>
    <div class="mypage">
        <div class="mypageHeader">
            <h2 class="nickname" v-text="user.userId"></h2>
            <dis class="right">
                <i class="fa-solid fa-square-plus" id="createModal" @click="checkModal($event)"></i>
                <i class="fa-solid fa-bars" id="settingModal" @click="checkModal($event)"></i>
            </dis>
        </div>
        <div class="top">
            <div>
                <img :src=imgTest alt="고양이" />
            </div>
            <div>
                <p>게시물</p>
                <span v-text="user.postCnt"></span>
            </div>
            <div @click="gotoFollowWhen('follower', user.followerCnt > 0)">
                <p>팔로워</p>
                <span v-text="user.followerCnt"></span>
            </div>
            <div @click="gotoFollowWhen('following', user.followeeCnt > 0)">
                <p>팔로잉</p>
                <span v-text="user.followeeCnt"></span>
            </div>
        </div>
        <!-- <div class="modify" @click="moveTo('/mypage/modify')">프로필 편집</div> -->
        <div class="modify" @click="this.$router.push({ name: 'modify'})">프로필 편집</div>

        <div class="mypost" v-if="!isEmpty">
            <div class="post">
                <img src="/images/example.jpeg" alt="고양이" />
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
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

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
            // user: {
            //     followerCount: 1,
            //     followingCount: 1,
            // },
            // props 테스트
            test: "",

            imgTest : "/images/example.jpeg",
            showRegister: false,
            showDeveloping : false,
            selectedFile: null,
            showComplete : false,
            follow : {
                followCnt : [],
                followeeList : [],
                followerList : []
            },
            localPosts : []
        };
    },
    created() {
        this.user = this.getterUserInfo
        // this.getFollowList()
        // this.getPostList()
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
        ...mapActions('userInfo', ['getUserInfo']),
        // async getFollowList() {
        //     console.log('befroe follow list axios is ')
        //     console.log(this.user.userId)
        //     await axios.get('/user/getFollowList', {params : {userId : this.user.userId}})
        //         .then((response) => {
        //             this.follow = response.data.result
        //             console.log('this follow after gettingfollowList is ')
        //             console.log(this.follow)
        //         })
        // },
        async getPostList() {
            await axios.get("/post/getPostList", {params : {userId : this.user.userId}})
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
            console.log(event)
            this.selectedFile = event.target.files[0]
        },
        async onUpload() {
            const fd = new FormData()
            let isCheck = this.checkFile(fd)
            console.log('check is :'+isCheck)
            if(!isCheck) return
            console.log('stil??')
            fd.append('imageTest', this.selectedFile, this.selectedFile.name)

            await axios.post('', fd, {
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