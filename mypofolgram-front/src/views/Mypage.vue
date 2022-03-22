<template>
    <div class="mypage">
        <div class="mypageHeader">
            <h2 class="nickname">eunj_eong</h2>
            <dis class="right">
                <i class="fa-solid fa-square-plus" @click="createModal = !createModal"></i>
                <i class="fa-solid fa-bars"></i>
            </dis>
        </div>
        <div class="top">
            <div>
                <img src="/images/example.jpeg" alt="고양이" />
            </div>
            <div>
                <p>게시물</p>
                <span>65</span>
            </div>
            <div @click="gotoFollowWhen('follower', user.followerCount > 0)">
                <p>팔로워</p>
                <span>{{user.followerCount}}</span>
            </div>
            <div @click="gotoFollowWhen('following', user.followingCount > 0)">
                <p>팔로잉</p>
                <span>{{user.followingCount}}</span>
            </div>
        </div>
        <div class="modify" @click="moveTo('/mypage/modify')">프로필 편집</div>
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
        <div v-if="createModal" class="bottomModal">
            <p>만들기</p>
            <ul>
                <li>게시물</li>
                <li>릴스</li>
                <li>스토리</li>
                <li>스토리 하이라이트</li>
                <li>라이브 방송</li>
                <li>가이드</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isEmpty:false,
            createModal:false,
            user:{
                followerCount:1,
                followingCount:1,
            },
        }
    },

    mounted(){
        // follower/following Count vuex로 얻기?
    },

    methods:{
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
        gotoFollowWhen(menu, hasData) {
            if (!hasData) return;
            this.$router.push({ path: `/mypage/follow/${menu}` });
        },
    }
}
</script>
