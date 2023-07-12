<template>
  <div class="comments__section" v-if="comment">
    <div class="comments__section--avatar">
      <nuxt-link v-bind:to="authorLink">
        <img v-bind:src="getAvatar" v-bind:alt="comment.author_data.nickname">
      </nuxt-link>
    </div>
    <div class="comments__section--content">
      <nuxt-link
        v-bind:to="authorLink"
        class="comments__section--user"
      >
      {{ comment.author_data.nickname }}
      </nuxt-link>
      <p class="comments__section--time">{{ $dayjs(comment.date).fromNow() }}</p>
      <p class="comments__section--text" v-html="comment.content.rendered"></p>
      <i
        class="ion-reply comments__section--reply"
        v-if="isParent"
        v-bind:title="isLogin ? 'Trả lời bình luận' : 'Đăng nhập để trả lời bình luận'"
        v-on:click="handleShowReply"
      ></i>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    comment: {
      type: Object,
      default: null
    },
    isParent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/isLogin'
    }),

    authorLink() {
      return `/user/${this.comment.author}`;
    },
    getAvatar() {
      if(this.comment.author_data.avatar) {
        return this.comment.author_data.avatar
      }

      const userId = this.comment.author;
      return `/assets/images/avatar${userId % 4 + 1}.jpg`;
    }
  },
  methods: {
    handleShowReply() {
      this.$emit('replyEvent');
    }
  },
}
</script>
