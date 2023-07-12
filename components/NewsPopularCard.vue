<template>
    <div class="popular-news__list--card" v-if="post">
        <ArticleItem
            isShowDesc
            isShowCategories
            v-bind:isStyleCard="isStyleCard"
            v-bind:isStyleRow="isStyleRow"
            v-bind:post="post"
        />
    </div>
</template>
<script>
import ArticleItem from './articles/ArticleItem.vue';

export default {
    components: { ArticleItem },
    props: {
        isStyleCard: {
            type: Boolean,
            default: false
        },
        isStyleRow: {
            type: Boolean,
            default: false
        },
        post: {
          type: Object,
          default: null
        },
    },

}
</script>
<style>

</style>
