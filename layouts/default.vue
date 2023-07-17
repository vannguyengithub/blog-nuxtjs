<template>


    <div class="wrapper-content">
      <TheHeader/>
      <Nuxt/>
      <TheFooter/>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div>
      <ScrollToTop/>
    </div>
</template>
<script>
import ScrollToTop from '../components/scrollToTop.vue';
export default {
    components: { ScrollToTop }
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
