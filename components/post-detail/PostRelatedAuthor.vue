<template>
  <div class="related-post">
    <h2 class="related-post__head">Related Posts</h2>

    <PostRelatedCard
      v-for="item in relatedPosts"
      v-bind:key="item.id"
      v-bind:post="item"
    />

  </div>
</template>
<script>
import { mapState } from 'vuex';
import PostRelatedCard from './PostRelatedCard.vue';

export default {
  components: { PostRelatedCard },

  computed: {
    ...mapState({
      relatedPosts: state => state.posts.relatedPosts
    })
  }
}
</script>

<style>
@import url('~/assets/css/post-author.css');
</style>
<!-- @import url('../../assets/css/related-posts.css'); -->
