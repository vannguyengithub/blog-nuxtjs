<template>
  <div class="popular-news section bg-white-blue" v-if="posts.length !== 0">
    <!-- posts.length !== 0 -->
    <div class="tcl-container">
          <MainTitle title="Bài viết phổ biến" v-bind:isViewMore="true" viewMoreText="Xem thêm" viewMoreLink="/"/>

          <div class="popular-news__list spacing">
              <div class="popular-news__list--left">
                  <div class="popular-news__list--row">
                      <NewsPopularCard
                        v-bind:post="posts[0]"
                        v-bind:isStyleCard="true"/>
                      <NewsPopularCard
                        v-bind:post="posts[1]"
                        v-bind:isStyleCard="true"/>
                  </div>
              </div>
              <div class="popular-news__list--right">
                  <div class="popular-news__list--row">
                      <NewsPopularCard
                        v-bind:post="posts[2]"
                        v-bind:isStyleCard="true"
                        v-bind:isStyleRow="true"/>
                  </div>
              </div>
          </div>

      </div>
  </div>
</template>
<script>
import NewsPopularCard from './NewsPopularCard.vue';
import { mapState, mapGetters } from 'vuex';
export default {
    components: { NewsPopularCard },
    computed: {
      // ...mapState({
      //   posts: state => state.posts.popularList
      // }),

      ...mapGetters ({
        posts: 'posts/getPopularList'
      })
    },
}
</script>
<style>
    @import url('~/assets/css/popular-news-list.css');
</style>
