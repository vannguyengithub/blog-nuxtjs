export default () => {
  return {
    lastesList: [],
    popularList: [],
    hashCategories: {},
    articlesPaging: {
      curPage: 1,
      wpTotal: 0,
      wpTotalPages: 0,
      articles: [],
    },
    postDetail: null,
    relatedPosts: [],
  }
}
