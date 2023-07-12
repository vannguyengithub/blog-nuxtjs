<template>
    <ul class="article-item__categories">
        <li v-for="item in categories" v-bind:key="item.id">
            <AppButton type="category" v-bind:href="getSlug(item)">{{ item.name }}</AppButton>
        </li>
    </ul>
</template>
<script>
import AppButton from '../AppButton.vue';

export default {
    components: { AppButton },
    props: {
      categories: {
        type: Array,
        default: []
      },
    },
    methods: {
      getSlug(item) {
        return '/category/' + item.slug;
      }
    },
}
</script>
<style>

</style>
