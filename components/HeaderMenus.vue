<template>
  <div class="tcl-col-6">
    <button class="navbar-mobile">
      <i
        class=""
        v-bind:class="toggleIconMenu"
        v-on:click="handleClickShowMenu"
      >
      </i>
    </button>
    <!-- Nav -->
    <!-- start: nav mobile -->
    <div class="header-nav" v-if="isShowMenu">
      <main-menus v-bind:isRoot="true" v-bind:menuItems="mainMenuItems" />
      <ul class="header-nav__lists">
        <li
          v-if="isLogin" class="user">
          <nuxt-link to="/dashboard">
            <i class="icons ion-person" v-if="!currentUser.simple_local_avatar.full"></i>
            <img v-else :src="currentUser.simple_local_avatar.full" alt="" width="30" height="30" style="border-radius: 999px; border: 1px solid gray; overflow: hidden;">
            {{ currentUser.name }}
          </nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/dashboard">
                Thông tin
              </nuxt-link>
            </li>
            <li v-on:click="handleLogout" style="cursor: pointer;">
              Đăng xuất
            </li>
          </ul>
        </li>
        <li
          v-else class="user">
          <nuxt-link to="/login">
            <i class="icons ion-person"></i>
             Tài khoản
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- end: nav mobile -->

    <!-- start: nav pc -->
    <div class="header-nav header-nav-pc">
      <main-menus v-bind:isRoot="true" v-bind:menuItems="mainMenuItems" />
      <ul class="header-nav__lists">
        <li
          v-if="isLogin" class="user">
          <nuxt-link to="/dashboard">
            <i class="icons ion-person" v-if="!currentUser.simple_local_avatar || !currentUser.simple_local_avatar.full"></i>
            <img v-else :src="currentUser.simple_local_avatar.full" alt="" width="30" height="30" style="border-radius: 999px; border: 1px solid gray; overflow: hidden;">
            {{ currentUser.name }}
          </nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/dashboard">
                Thông tin
              </nuxt-link>
            </li>
            <li v-on:click="handleLogout" style="cursor: pointer;">
              Đăng xuất
            </li>
          </ul>
        </li>
        <li
          v-else class="user">
          <nuxt-link to="/login">
            <i class="icons ion-person"></i>
             Tài khoản
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- end: nav pc -->

  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex';
export default {

  data() {
    return {
      isShowMenu: false,
    }
  },

  computed: {
    ...mapGetters([
      'mainMenuItems'
    ]),
    ...mapGetters({
      isLogin: 'auth/isLogin'
    }),
    ...mapState({
      currentUser: state => state.auth.currentUser
    }),

    toggleIconMenu() {
      return {
        'ion-navicon-round': !this.isShowMenu,
        'ion-close-round': this.isShowMenu,
      }
    },
  },

  methods: {
    ...mapActions({
      actLogout: 'auth/actLogout',
    }),

    handleLogout() {
      this.actLogout();
      this.$router.push('/login');
    },

    handleClickShowMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
}
</script>
<style>
.header-nav-pc {
  display: flex;
}
@media (max-width: 600px) {
  .header-nav-pc {
    display: none !important;
  }
}
</style>
