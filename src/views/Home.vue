<template>
  <div class="home">
    <UserLog></UserLog>
    <Post></Post>
  </div>
  <router-view></router-view>
</template>

<script>
import UserLog from "../components/LognIn/UserLog.vue"
import Post from "../components/Post.vue"

export default {
  name: 'Home',
  components: {
    UserLog,
    Post
}
}
</script>
