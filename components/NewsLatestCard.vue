<template>
    <div class="latest-news__card" v-if="post">
        <ArticleItem v-bind:post="post"/>
    </div>
</template>
<script>
import ArticleItem from './articles/ArticleItem.vue';
export default {
    components: { ArticleItem},

    props: {
      post: {
        type: Object, 
        default: null
      },
    },
}
</script>
<style>
    @import url('~/assets/css/article-item.css');
</style>
