<template>
  <div class="post-author" v-if="post">
    <div class="post-author__bg-avatar">
      <nuxt-link v-bind:to="authorLink" class="post-author__avatar">
        <img
          v-bind:src="getAvatar"
          alt="avatar"
        >
      </nuxt-link>
    </div>
    <div class="post-author__nickname">
      <a href="#">{{ post.author_data.nickname }}</a>
    </div>
    <p class="post-author__desc" v-text="post.author_data.description"></p>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  // props: {
  //   post: {
  //     type: Object,
  //     default: null
  //   }
  // }
  computed: {
    ...mapState({
      post: state => state.posts.postDetail
    }),
    authorLink() {
      return `/user/${this.post.author}`
    },
    getAvatar() {
      if (this.post.author_data.avatar) {
        return this.post.author_data.avatar;
      }

      // kh có ảnh
      const userId = this.post.author;
      return `/assets/images/avatar${userId % 4 + 1}.jpg`;
    }
  }
}
</script>
<style>
@import '~assets/css/post-author.css';
</style>
