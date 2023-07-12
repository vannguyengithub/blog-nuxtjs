<template>
    <div class="latest-news section">
        <div class="tcl-container">
            <MainTitle title="Bài viết mới nhất"/>
            <div class="latest-news__list spacing">
                <NewsLatestCard
                  v-for="item in posts"
                  v-bind:post="item"
                  v-bind:key="item.id"
                  />
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

import MainTitle from './MainTitle.vue';
import NewsLatestCard from './NewsLatestCard.vue';

export default {
    components: { MainTitle , NewsLatestCard},

    computed: {
      ...mapState({
        // posts: function(state) {
        //   return  state.posts.lastesList
        // }

        posts: state => state.posts.lastesList
      })
    }
}
</script>
<style>
    @import url('~/assets/css/latest-news-list.css');
</style>
