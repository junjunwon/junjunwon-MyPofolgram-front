<template>
    <div class="mypage">
        <div class="mypageHeader">
            <h2 class="nickname">eunj_eong</h2>
            <dis class="right">
                <i class="fa-solid fa-square-plus"></i>
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
                <span>10</span>
            </div>
            <div @click="gotoFollowWhen('following', user.followingCount > 0)">
                <p>팔로잉</p>
                <span>122</span>
            </div>
        </div>
        <div class="modify">프로필 편집</div>
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
    </div>
</template>

<script>
export default{
    data(){
        return{
            isEmpty:false,
            user:{
                followerCount:1,
                followingCount:1
            },
        }
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
