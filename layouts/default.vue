<template>
    <div class="wrapper-content">
      <TheHeader/>
      <Nuxt/>
      <TheFooter/>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div>
      <ScrollTop/>
    </div>
</template>
<script>
import ScrollTop from '../components/ScrollTop.vue';
export default {
    components: { ScrollTop }
}
</script>
<style>
@import url('~/assets/css/main.css');

.header-pc {
  position: sticky !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}
</style>
