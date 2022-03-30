<template>
    <div class="mypage">
        <div class="mypageHeader">
            <h2 class="nickname" v-text="users.userId"></h2>
            <dis class="right">
                <!-- <i class="fa-solid fa-square-plus" @click="createModal = !createModal"></i> -->
                <i class="fa-solid fa-square-plus" id="createModal" @click="checkModal($event)"></i>
                <i class="fa-solid fa-bars" id="settingModal" @click="checkModal($event)"></i>
            </dis>
        </div>
        <div class="top">
            <div>
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
            <div>
                <p>게시물</p>
                <span v-text="users.countBoard"></span>
            </div>
            <div @click="gotoFollowWhen('follower', user.followerCount > 0)">
                <p>팔로워</p>
                <span v-text="users.follower"></span>
            </div>
            <div @click="gotoFollowWhen('following', user.followingCount > 0)">
                <p>팔로잉</p>
                <span v-text="users.follow"></span>
            </div>
        </div>
        <!-- <div class="modify" @click="moveTo('/mypage/modify')">프로필 편집</div> -->
        <div class="modify" @click="this.$router.push({ name: 'modify', params: users })">프로필 편집</div>

        <div class="mypost" v-if="!isEmpty">
            <div class="post">
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
            <div class="post">
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
            <div class="post">
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
            <div class="post">
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
            <div class="post">
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
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
        <div v-if="createModal" class="bottomModal" style="bottom:100px">
            <p class="modalTitle">만들기</p>
            <ul>
                <li>
                    <i class="fa-solid fa-table-cells"></i>
                    <p>게시물</p>
                </li>
                <li>
                    <i class="fa-solid fa-clapperboard"></i>
                    <p>릴스</p>
                </li>
                <li>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>스토리</p>
                </li>
                <li>
                    <i class="fa-brands fa-gratipay"></i>
                    <p>스토리 하이라이트</p>
                </li>
                <li>
                    <i class="fa-solid fa-satellite-dish"></i>
                    <p>라이브 방송</p>
                </li>
                <li>
                    <i class="fa-solid fa-book-open"></i>
                    <p>가이드</p>
                </li>
            </ul>
        </div>
        <div v-if="settingModal" class="bottomModal" style="bottom:150px">
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
    </div>
</template>

<script>
import axios from "axios";
export default {
    components: {},
    data() {
        return {
            isEmpty: false,
            createModal: false,
            settingModal: false,
            users: {},
            user: {
                followerCount: 1,
                followingCount: 1,
            },
            // props 테스트
            test: "",
        };
    },
    mounted() {
        this.getData();
        // follower/following Count vuex로 얻기?
    },
    methods: {
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
        gotoFollowWhen(menu, hasData) {
            if (!hasData) return;
            this.$router.push({ path: `/mypage/follow/${menu}` });
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
        async getData() {
            const response = await axios.get("/user/getProfileInfo", { params: { userId: "jh.won" } });
            this.users = response.data.result;
        },
    },
};
</script>
