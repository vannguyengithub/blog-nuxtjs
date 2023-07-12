<template>
  <no-ssr>
    <main class="post-detail">
      <div class="spacing"></div>

      <!-- Post Detail Head -->
      <PostDetailHead v-bind:post="post"/>
      <!-- End Post Detail Head -->

      <div class="spacing"></div>

      <!-- Post Detail Wrapper Content -->
      <div class="post-detail__fluid">
          <div class="tcl-container">
            <div class="post-detail__wrapper">
              <!-- Post Detail Content -->
              <PostDetailContent v-bind:post="post"/>
              <!-- End Post Detail Content -->

              <!-- Post Detail Sidebar -->
              <PostDetailSidebar v-bind:post="post"/>
              <!-- End Post Detail Sidebar -->

            </div>
          </div>
        </div>
        <!-- End Post Detail Wrapper Content -->

        <div class="spacing"></div>
    </main>
  </no-ssr>
</template>
<script>
import { mapState } from 'vuex';
import PostDetailContent from '../../components/post-detail/PostDetailContent.vue';
import PostDetailHead from '../../components/post-detail/PostDetailHead.vue';
import PostDetailSidebar from '../../components/post-detail/PostDetailSidebar.vue';


export default {
    components: { PostDetailHead, PostDetailSidebar, PostDetailContent },

    layout(context) {
      let userAgent = '';
      if (context.req) {
        userAgent = context.req.headers['user-agent']
      } else {
        userAgent = navigator.userAgent
      }
      if (/mobile/i.test(userAgent)) {
        return 'mobile';
      }
      return 'default';
    },

    validate ({ params, query }) {
      if(!params.slug || !params.slug.trim()) {
        return false;
      }
      return true;
    },

    data() {
      return {
        idTimeOut: null
      }
    },

    async asyncData({ params, store}) {
      const slug = params.slug;
      const res = await store.dispatch('posts/actFetchArticleBySlug', { slug });
      if(res.ok) {
        const postDetail = res.post;
        const post = postDetail.id;
        const authorId = postDetail.author;
        await Promise.all([
          store.dispatch('comment/actFetchCommenstList', { post }),
          store.dispatch('posts/actFetchRelatedPosts', { authorId })
        ]);
      }
    },

    computed: {
      ...mapState({
        post: state => state.posts.postDetail
      })
    },

    mounted () {
      this.idTimeOut = setTimeout(() => {
        if (this.post) {
          this.$wpApi.post('/post-views-counter/view-post', {
            id: this.post.id
          })
        }
      }, 10000);
    },

    destroyed () {
      if (this.idTimeOut) {
        clearTimeout(this.idTimeOut)
      }
    },

}
</script>
<style>
@import url('~/assets/css/post-detail.css');
</style>
