<template>
  <div class="post-detail__side">

    <PostDetailAuthor v-bind:post="post"/>

    <div class="spacing"></div>

    <PostRelatedAuthor v-bind:post="post"/>

  </div>
</template>
<script>
import PostDetailAuthor from './PostDetailAuthor.vue';
import PostRelatedAuthor from './PostRelatedAuthor.vue';

export default {
    components: { PostDetailAuthor, PostRelatedAuthor },

    props: {
      post: {
        type: Object,
        default: null
      }
    }

}
</script>
