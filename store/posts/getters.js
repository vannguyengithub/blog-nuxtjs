function mapPostCategories(post) {
   
}

export default {
  getPopularList(postState) {
    const popularList = postState.popularList;
    const hashCategories = postState.hashCategories;

    return popularList.map(post => {
      const listCategoriesId = post.categories;
      const listCategories =  listCategoriesId.map(id => {
        return hashCategories[id];
      })

      return {
        ...post,
        categories: listCategories
      }
    })
  },

  getArticleList(postState) {
    const hashCategories = postState.hashCategories;

    return postState.articlesPaging.articles.map(post => {
      const listCategoriesId = post.categories;
      const listCategories =  listCategoriesId.map(id => {
        return hashCategories[id];
      })

      return {
        ...post,
        categories: listCategories
      }
    })
  }
}
