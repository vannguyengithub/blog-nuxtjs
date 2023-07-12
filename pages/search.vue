<template>
  <div class="articles-list section">
    <div class="tcl-container">
      <!-- Main Title -->
      <MainTitle
        isSearchTitle="true"
        v-bind:title="title"
        />
      <!-- End Main Title -->

      <!-- article list -->
      <div class="tcl-row tcl-jc-center" v-for="item in articles" :key="item.id">
        <div class="tcl-col-12 tcl-col-md-8">
          <ArticleItem
            isShowDesc
            isShowCategories
            isStyleCard
            v-bind:post="item"
          />
        </div>
      </div>

      <div class="text-center">
        <AppButton
          v-if="hasMoreArticles"
          type="primary"
          class="btn-size-large"
          v-bind:isLoading="isLoading"
          @click.native="handleLoadMore">
          Tải thêm</AppButton>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import ArticleItem from '../components/articles/ArticleItem.vue';
import MainTitle from '../components/MainTitle.vue';


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

    // lắng nghe sự thay đổi thằng q
    watchQuery: ['q'],

    validate ({ query }) {
      if(!query.q || !query.q.trim()) {
        return false;
      }
      return true;
    },

    async asyncData({ store, query }) {
      const queryStr = query.q;
      await store.dispatch('posts/actFetchArticlesList', {
        search: queryStr
      })

      return {
        querySearch: queryStr
      }
    },

    components: { MainTitle, ArticleItem },
    computed: {
      ...mapState({
        wpTotal: state => state.posts.articlesPaging.wpTotal,
        curPage: state => state.posts.articlesPaging.curPage,
        wpTotalPages: state => state.posts.articlesPaging.wpTotalPages,
        // articles: state => state.posts.articlesPaging.articles,
      }),
      hasMoreArticles() {
        return this.curPage < this.wpTotalPages
      },

      title() {
        return ` Khoảng ${this.wpTotal} kết quả tới từ khóa "${this.querySearch}" `;
      },

      ...mapGetters ({
        articles: 'posts/getArticleList'
      })

    },
    data() {
      return {
        isLoading: false,
        querySearch: ''
      }
    },
    methods: {
      ...mapActions({
        actFetchArticlesList: 'posts/actFetchArticlesList'
      }),
      handleLoadMore(e) {
        if(this.isLoading || !this.hasMoreArticles) {
          return;
        }

        this.isLoading = true;
        this.actFetchArticlesList({
          curPage: this.curPage + 1,
          search: this.querySearch
        })
        .then(() => {
          this.isLoading = false
        })
      }
    },
}
</script>
