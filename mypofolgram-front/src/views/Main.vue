<template>
    <div>
        <StoryList />
        <PostList />
    </div>
</template>

<script>
import StoryList from "@/components/StoryList.vue";
import PostList from "@/components/PostList.vue";

export default {
    components: {
        StoryList,
        PostList
    },
};
</script>
