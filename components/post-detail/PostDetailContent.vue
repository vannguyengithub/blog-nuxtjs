<template>
  <div class="post-detail__content" v-if="post">
    <div class="thumbnail">
      <img v-bind:src="post.featured_media_url" alt="blog-title">
    </div>

    <div class="content-padding">
      <!-- Post Detail rich text editor -->
      <div class="rte" v-html="post.content.rendered"></div>
      <!-- End Post Detail rich text editor -->

      <!-- Post Detail Tags -->
      <PostDetailTags v-bind:post="post"/>
      <!-- End Post Detail Tags -->

      <!-- Post Detail Comments -->
      <PostComments
        v-bind:comment_count="post.comment_count"
        v-bind:postId="post.id"
      />
      <!-- End Post Detail Comments -->
    </div>
  </div>
</template>

<script>
import PostComments from './PostComments.vue';
import PostDetailTags from './PostDetailTags.vue';

export default {
    components: { PostDetailTags, PostComments },

    props: {
      post: {
        type: Object,
        default: null
      }
    }
}
</script>
<style>
@import url("~/assets/css/comments.css");
</style>
