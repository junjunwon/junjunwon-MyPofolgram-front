<template>
    <div>팔로워/팔로잉</div>

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
        }
    },

    mounted(){
        this.viewPage = this.$route.params.page;
    }

}
</script>
