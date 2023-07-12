export default {
  setLatestList(state, data) {
    state.lastesList = data;
  },

  setPopularList(state, data) {
    state.popularList = data;
  },

  setCategoriesList(state, categories) {
    // array -> hash { key: value }
    // key -> categoryId, value -> object categories
    let hashCategories = {};

    categories.forEach((category) => {
      const categoryId = category.id;
      hashCategories[categoryId] = category;
    })
    state.hashCategories = hashCategories;
  },

  setArticlesList(state, { curPage,wpTotal,wpTotalPages, articles }) {
    const data = {
      curPage,
      wpTotal,
      wpTotalPages,
      articles,
    };

    if(curPage > 1) {
      data.articles = [
        ...state.articlesPaging.articles,
        ...articles,
      ];
    }

    state.articlesPaging = data;
  },

  setPostDetail(state, data) {
    state.postDetail = data;
  },

  setRelatedPosts(state, data) {
    state.relatedPosts = data;
  },

  increaseCommentCount(postsState) {
    if(postsState.postDetail) {
      postsState.postDetail = {
        ...postsState.postDetail,
        comment_count: postsState.postDetail.comment_count + 1
      }
    }
  },

}
