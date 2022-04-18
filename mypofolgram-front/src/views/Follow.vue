<template>
    <div class="topBack">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <p>{{userId}}</p>
    </div>
    <div class="follow">
        <ul class="followMenu">
            <li @click="viewPage = 'follower'" :class="{on:viewPage === 'follower'}">{{follow.followCnt[0]}} 팔로워</li>
            <li @click="viewPage = 'following'" :class="{on:viewPage === 'following'}">{{follow.followCnt[1]}} 팔로잉</li>
        </ul>
    </div>

    <Follower v-if="viewPage === 'follower'" v-bind:followerList="follow.followerList" />
    <Following v-if="viewPage === 'following'" v-bind:followeeList="follow.followeeList" />
</template>

<script>
import axios from "axios"
import Follower from "@/views/Follower.vue";
import Following from "@/views/Following.vue";

export default{
    components:{
        Follower,
        Following
    },

    data(){
        return{
            viewPage:"",
            follow : [],
            userId : 'woq2611'
        }
    },
    created() {
        axios.get('/user/getFollowList', {params : {userId : this.userId}})
        .then((response) => {
            this.follow = response.data.result
            console.log(this.follow)
        })
        // follower/following Count vuex로 얻기? 
    },
    mounted() {
        this.viewPage = this.$route.params.page;
    }

}
</script>
