<template>
    <div class="topBack">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <p>{{getterUserInfo.userId}}</p>
    </div>
    <div class="follow">
        <ul class="followMenu">
            <li @click="viewPage = 'follower'" :class="{on:viewPage === 'follower'}">{{followerCnt}} 팔로워</li>
            <li @click="viewPage = 'following'" :class="{on:viewPage === 'following'}">{{followeeCnt}} 팔로잉</li>
        </ul>
    </div>

    <Follower v-if="viewPage === 'follower'" v-bind:followerList="follow.followerList" />
    <Following v-if="viewPage === 'following'" v-bind:followeeList="follow.followeeList" />
</template>

<script>
import axios from "axios"
import Follower from "@/views/Follower.vue";
import Following from "@/views/Following.vue";
import { mapGetters } from 'vuex'
export default{
    components:{
        Follower,
        Following
    },
    props : {
        follow : {
            type: Object
        },
    },
    data(){
        return{
            viewPage:"",
            localFollow : {
                followCnt : [],
                followeeList : [],
                followerList : []
            },
            userId : 'woq2611',
            followeeCnt : 0,
            followerCnt : 0
        }
    },
    created() {
        this.localFollow = this.$route.params.follow
        console.log('this follow after creating follow components is ')
        console.log(this.localFollow    )
        // axios.get('/user/getFollowList', {params : {userId : this.userId}})
        // .then((response) => {
        //     this.follow = response.data.result
        //     console.log('this.follow')
        //     console.log(this.follow)
        //     this.followerCnt = this.follow.followCnt[0]
        //     this.followeeCnt = this.follow.followCnt[1]
        // })
        // follower/following Count vuex로 얻기? 
    },
    computed : {
        ...mapGetters('userInfo', ['getterUserInfo']),
    },
    mounted() {
        this.viewPage = this.$route.params.page;
    }

}
</script>
