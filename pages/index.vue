<template>
  <main>
    <Banner />
    <NewsLatest/>

    <NewsPopular />

    <ArticlesList />

  </main>
</template>

<script>
import Banner from '../components/Banner.vue';
export default {
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

    async asyncData({ store }) {
        await Promise.all([
            store.dispatch("posts/actFetchLatestPosts"),
            store.dispatch("posts/actFetchPopularPosts"),
            store.dispatch("posts/actFetchArticlesList")
        ]);
    },
    components: { Banner }
}
</script>
