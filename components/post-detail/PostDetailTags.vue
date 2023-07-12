<template>
  <div class="post-detail__tags">
    <h2>Tags</h2>
    <ul>
      <li
        class="item"
        v-for="item in listTags"
        v-bind:key="item.id"
      >
          <AppButton type="category" v-bind:href="getSlug(item)">{{ item.name }}</AppButton>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      listTags: []
    }
  },

  methods: {
    getSlug(item) {
      return 'tag/' + item.slug;
    }
  },

  async fetch() {
    // chạy sau khi component được khởi tạo

    if (!this.post) {
      return;
    }

    try {
      const res = await this.$store.dispatch('tags/actFetchListTags', {
        include: this.post.tags
      })

      if (res.ok) {
        this.listTags = res.data
      }
    } catch(e) {

    }
  }
}
</script>
