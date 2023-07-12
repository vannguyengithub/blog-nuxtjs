<template>
  <ul v-bind:class="classRoot">
    <li v-for="item in menuItems" v-bind:key="item.id">
      <nuxt-link
        v-if="!item.url.startsWith('http')"
        v-bind:to="item.url"
        v-bind:tittle="item.url"
        >{{ item.title }}</nuxt-link>
      <a
        v-else
        target="_blank"
        v-bind:href="item.url"
        v-bind:title="item.url"
        >{{ item.title }}</a>
      <!-- <MainMenusMenus
        v-if="item.child_items.length !== 0"
        v-bind:menuItemsItems="item.child_items"
      /> -->
      <main-menus
        v-if="item.child_items.length !== 0"
        v-bind:menuItems="item.child_items"
        v-bind:isRoot="false"
      />
    </li>
  </ul>
</template>
<script>
// import MainMenusMenus from './MainMenusMenus.vue';

  export default {
    name: 'main-menus',
    props: {
        isRoot: {
          type: Boolean,
          default: false
        },
        menuItems: {
            type: Array,
            default: []
        },
    },
    computed: {
      classRoot() {
        return {
          'header-nav__lists' : this.isRoot === true
        }
      }
    },
    // components: { MainMenusMenus }
}
</script>
