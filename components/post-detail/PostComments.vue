<template>
  <div class="post-detail__comments">
    <PostCommentsForm
      v-if="isLogin"
      v-on:postCommentEvent="handlePostParentComment"
    />
    <div v-else>
      <p>Vui lòng <nuxt-link to="/login">đăng nhập</nuxt-link> để bình luận mới</p>
    </div>
    <p>{{ comment_count }} Bình luận</p>
    <ul class="comments">
      <!-- Comment 1 -->
      <PostCommentItem
        v-for="item in comments"
        :key="item.id"
        v-bind:comment="item"
      />
    </ul>

    <div class="text-center">
      <AppButton
        v-if="hasMoreComments"
        type="primary"
        class="btn-size-large"
        v-bind:isLoading="isLoading"
        v-on:click.native="handleLoadMore"
        >
        Tải thêm bình luận</AppButton>
    </div>

  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import PostCommentItem from './PostCommentItem.vue';
import PostCommentsForm from './PostCommentsForm.vue';

export default {
    components: { PostCommentItem, PostCommentsForm },

    props: {
      comment_count: {
        type: Number,
        default: 0
      },
      postId: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        isLoading: false,
        commentsExclude: []
      }
    },

    computed: {
      ...mapGetters({
        isLogin: 'auth/isLogin'
      }),

      ...mapState({
        wpTotal: state => state.comment.commentsPaging.wpTotal,
        curPage: state => state.comment.commentsPaging.curPage,
        comments: state => state.comment.commentsPaging.comments,
        wpTotalPages: state => state.comment.commentsPaging.wpTotalPages,
      }),

      hasMoreComments() {
        return this.curPage < this.wpTotalPages
      }
    },

    methods: {
      ...mapActions({
        actFetchCommenstList: 'comment/actFetchCommenstList',
        actPostNewComment: 'comment/actPostNewComment',
      }),
      handleLoadMore() {
        if(this.isLoading || !this.hasMoreComments) {
          return;
        }

        this.isLoading = true;
        this.actFetchCommenstList({
          curPage: this.curPage + 1,
          post: this.postId,
          exclude: this.commentsExclude
        })
        .then(() => {
          this.isLoading = false
        })
      },

      handlePostParentComment({ content, callback }) {
        this.actPostNewComment({
          content,
          post: this.postId
        })
        .then(res => {
          callback();
          if(res.ok) {
            this.commentsExclude.push(res.comment.id);
          } else {
            switch (res.error) {
              case 'comment_duplicate':
                alert ('Bình luận bị trùng vui lòng kiểm tra lại!');
              break;

              case 'comment_flood':
                alert ('Nghi vấn spam, vui lòng nhập chậm lại!');
              break;

              default:
                alert(res.error);
              break;
            }
          }
        })
      }
    },
}
</script>
<style>
@import '~/assets/css/comments.css';
</style>
