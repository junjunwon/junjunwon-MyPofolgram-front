<template>
    <div>
        <!-- MypostList body -->
        <TitleHeader></TitleHeader>
        <!-- header component -->
        <PostList v-bind:mypostUserId="userId"></PostList>
    </div>
</template>

<script>
import PostList from '../../components/PostList.vue'
import TitleHeader from '../../components/TitleHeader.vue'
export default {
    name : 'MyPostList',
    data() { 
        return {
            userId : ''
        }
    },
    mounted() {
        this.userId = sessionStorage.getItem("userId");
    },
    components : {
        PostList,
        TitleHeader
    },
}
</script>