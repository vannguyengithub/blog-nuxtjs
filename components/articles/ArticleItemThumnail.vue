<template>
    <div class="article-item__thumbnail">
        <nuxt-link v-bind:to="slug">
            <img v-if="typeof thumbnail === 'string'" v-bind:src="thumbnail" v-bind:alt="title">
            <img v-else src="/assets/images/emty-tho-sua-bep.jpg" v-bind:alt="title">
        </nuxt-link>
    </div>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: [String, Boolean],
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
}
</script>
<style>

</style>
