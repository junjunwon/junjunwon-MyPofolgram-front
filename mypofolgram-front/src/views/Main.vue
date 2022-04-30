<template>
    <div>
        <StoryList />
        <PostList />
    </div>
</template>

<script>
import StoryList from "@/components/StoryList.vue";
import PostList from "@/components/PostList.vue";
import { mapMutations, mapActions } from 'vuex'
// import axios from 'axios'

export default {
  components: {
    StoryList,
    PostList
  },
  data() {
    return {
      testValue : 'test'
    }
  },
  created() {
      let userId = sessionStorage.getItem('userId');
      this.setUserId(userId)
      this.getUserInfo()
  },
  computed : {
  },
  methods : {
    ...mapMutations('userInfo', ['setUserId']),
    ...mapActions('userInfo', ['getUserInfo'])
  }
}
</script>
