<template>
    <div>
        <StoryList />
        <PostList />
    </div>
</template>

<script>
import StoryList from "@/components/StoryList.vue";
import PostList from "@/components/PostList.vue";
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
  // created() {
  //     axios.post('/axiosTest', null, {
  //       params : {
  //         testValue : this.testValue
  //       }
  //     })
  //   .then((response) => {
  //     console.log('response is ' + response)
  //   })
  //   .catch((error) => {
  //     console.log('error is ' + error)
  //   })
  // }
}
</script>
