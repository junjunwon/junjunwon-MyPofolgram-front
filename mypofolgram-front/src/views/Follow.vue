<template>
    <div class="follow">
        <ul class="followMenu">
            <li @click="viewPage = 'follower'" :class="{on:viewPage === 'follower'}">{{followerCount}} 팔로워</li>
            <li @click="viewPage = 'following'" :class="{on:viewPage === 'following'}">{{followingCount}} 팔로잉</li>
        </ul>
    </div>

    <Follower v-if="viewPage === 'follower'"/>
    <Following v-if="viewPage === 'following'"/>
</template>

<script>
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
            followerCount:1,
            followingCount:3,
        }
    },

    mounted(){
        this.viewPage = this.$route.params.page;
        // follower/following Count vuex로 얻기? 
    }

}
</script>
