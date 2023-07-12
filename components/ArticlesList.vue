<template>
    <div class="articles-list section">
        <div class="tcl-container">
            <MainTitle
                title="Danh sách bài viết"
                isViewMore
                viewMoreLink="/login"
                viewMoreText="Xem thêm"
                />
            <div class="tcl-row">
                <div class="tcl-col-12 tcl-col-md-6" v-for="item in articles" v-bind:key="item.id">
                    <ArticleItem
                      v-bind:post="item"
                      :isStyleCard="true"
                      :isShowAvatar="false"
                      />
                </div>
            </div>

            <div class="text-center">
                <AppButton
                  v-if="hasMoreArticles"
                  type="primary"
                  class="btn-size-large"
                  v-bind:isLoading=" isLoading"
                  @click.native="handleLoadMore"
                  >
                  TẢI THÊM</AppButton>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainTitle from './MainTitle.vue';
import ArticleItem from './articles/ArticleItem.vue';
export default {
    components: { MainTitle, ArticleItem},
    computed: {
      ...mapState({
        wpTotal: state => state.posts.articlesPaging.wpTotal,
        curPage: state => state.posts.articlesPaging.curPage,
        wpTotalPages: state => state.posts.articlesPaging.wpTotalPages,
        articles: state => state.posts.articlesPaging.articles,
      }),
      hasMoreArticles() {
        return this.curPage < this.wpTotalPages
      }
    },
    data() {
      return {
        isLoading: false
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
          curPage: this.curPage + 1
        })
        .then(() => {
          this.isLoading = false
        })
      }
    },
}
</script>
