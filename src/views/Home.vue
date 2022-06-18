<template>
  <div class="home">
    <!--<router-link to="/Log1"><UserLog></UserLog></router-link>-->
    <UserLog></UserLog>
    <Post></Post>
  </div>
  <router-view></router-view>
</template>

<script>
import UserLog from "../components/LognIn/UserLog.vue"
import Post from "../components/Post.vue"
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    UserLog,
    Post
}
}
</script>
