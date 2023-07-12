<template>
    <article class="article-item" v-bind:class="classNames" v-if="post">
        <ArticleItemThumnail
          v-bind:title="post.title.rendered"
          v-bind:slug="'/post/' + post.slug"
          v-bind:thumbnail="post.featured_media_url"
          />
        <div class="article-item__content">
            <ArticleItemCategories
              v-if="isShowCategories"
              v-bind:categories="post.categories"
            />
            <ArticleItemStats
              v-if="isShowCategories"
              v-bind:viewCount="post.view_count"
            />
            <ArticleItemTitle
              v-bind:title="post.title.rendered"
              v-bind:slug="'/post/' + post.slug"
            />
            <ArticleItemDesc
              v-if="isShowDesc"
              v-bind:desc="post.excerpt.rendered"
            />
            <ArticleItemInfor
              v-bind="isShowAvatar"
              v-bind:userId="post.author"
              v-bind:nickname="post.author.nickname"
              v-bind:avatar="post.author_data.avatar"
            />
        </div>
    </article>
</template>
<script>
import ArticleItemThumnail from './ArticleItemThumnail.vue';
import ArticleItemTitle from './ArticleItemTitle.vue';
import ArticleItemInfor from './ArticleItemInfor.vue';
import ArticleItemCategories from './ArticleItemCategories.vue';
import  ArticleItemStats from './ArticleItemStats.vue';
import  ArticleItemDesc from './ArticleItemDesc.vue';

export default {
    components: { ArticleItemTitle, ArticleItemThumnail, ArticleItemInfor, ArticleItemCategories, ArticleItemStats, ArticleItemDesc },

    props: {
        isStyleCard: {
            type: Boolean,
            default: false
        },
        isStyleRow: {
            type: Boolean,
            default: false
        },
        isShowDesc: {
            type: Boolean,
            default: false
        },
        isShowCategories: {
            type: Boolean,
            default: false
        },
        isShowAvatar: {
            type: Boolean,
            default: true
        },
        post : {
          type: Object,
          default: null
        }
    },
    computed: {
        classNames() {
            return {
                'style-card': this.isStyleCard,
                'style-row': this.isStyleRow
            }
        },
        getSlug() {
          return 'abc';
        }
    },
}
</script>
<style>

</style>
