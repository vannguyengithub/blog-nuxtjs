<template>
  <div class="comments__form" v-if="currentUser">
    <div class="comments__form--control">
      <div class="comments__section--avatar">
        <nuxt-link v-bind:to="authorLink">
          <img v-bind:src="avatar" v-bind:alt="currentUser.name">
        </nuxt-link>
      </div>
      <textarea name="" v-bind:placeholder="placeholder" v-model="content"></textarea>
    </div>
    <div class="text-right">
      <AppButton
        type="primary"
        v-bind:isLoading=" isLoading"
        @click.native="handleSubmitComment"
        >
        submit</AppButton>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: {
    placeholder: {
      type: String,
      default: 'Để lại bình luận của bạn...'
    }
  },

  data() {
    return {
      content: '',
      isLoading: false
    }
  },

  computed: {
    ...mapGetters({
      avatar: 'auth/avatar'
    }),
    ...mapState({
      currentUser: state => state.auth.currentUser
    }),
    authorLink() {
      return `/user/${this.currentUser.id}`;
    }
  },
  methods: {
    handleSubmitComment() {
      const data = {
        content: this.content,
        callback: () => {
          this.content = '';
          this.isLoading = false;
        }
      }
      this.isLoading = true
      this.$emit('postCommentEvent', data)
    }

  },
}
</script>

<style>

</style>
