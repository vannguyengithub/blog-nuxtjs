<template>
  <div class="admin-layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" v-bind:trigger="null" collapsible>
        <!-- <div class="logo">
        </div> -->
        <nuxt-link to="/" style="display: block;">
          <img src="/assets/images/logo.png" alt="logo" style="width: 100%; height: 80px; object-fit: contain; padding: 10px 0;">
        </nuxt-link>
        <a-menu
          theme="dark"
          mode="inline"
          v-bind:selectedKeys="selectedKeys">
          <a-menu-item key="/dashboard">
            <nuxt-link to="/dashboard">
              <a-icon type="user" />
              <span>Hồ sơ của tôi</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="/dashboard/password">
            <nuxt-link to="/dashboard/password">
              <a-icon type="key" />
              <span>Đổi mật khẩu</span>
            </nuxt-link>
          </a-menu-item>

        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="admin-layout__header">
          <a-icon
            class="trigger" v-bind:type="iconHeader"
            v-on:click="handleToggleSiedebar" />
        </a-layout-header>
        <a-layout-content
          class="admin-layout__content"
        >
          <Nuxt/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// import antDesignVue from '@/plugins/ant-design-vue';
import antDesignVue from '@/plugins/ant-design-vue';


export default {

  beforeCreate() {
    antDesignVue();
  },

  data() {
    return {
      collapsed: false,
    }
  },

  computed: {
    iconHeader() {
      return this.collapsed ? 'menu-unfold' : 'menu-fold'
    },
    selectedKeys() {
      return [ this.$route.path ]
    }
  },

  methods: {
    handleToggleSiedebar() {
      this.collapsed = !this.collapsed;
    }
  },

}
</script>

<style>
.admin-layout__header {
  background: #fff;
  padding: 0
}
.admin-layout__content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  /* min-height: 280px; */
  min-height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
