<template>
    <div class="wrapper-content">
        <TheHeader/>
        <Nuxt/>
        <TheFooter/>
    </div>
</template>
<script>
export default {

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
