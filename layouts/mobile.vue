<template>
  <div class="wrapper-content layout-mobile">
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
.layout-mobile .header-search {
  display: flex;
  align-items: center;
}
.layout-mobile .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.layout-mobile .header .tcl-col-2 {
  max-width: 60px;
}
.layout-mobile .header .tcl-col-4 {
  flex: 1;
  max-width: 100%;
}
.layout-mobile .header .tcl-col-6 {
  max-width: 24px;
}
.layout-mobile .header-logo {
  width: 60px;
  height: 60px;
}
.navbar-mobile {
  display: none;
}
.layout-mobile .navbar-mobile {
  outline: none;
  border: none;
  background: transparent;
}
.layout-mobile .navbar-mobile i {
  font-size: 24px;
}
@media (max-width: 600px) {
  .layout-mobile .navbar-mobile {
    display: block;
  }
  .layout-mobile .header-nav {
    display: block;
    position: fixed;
    top: 114px;
    background: #fff;
    left: 0;
    right: 0;
    padding: 20px 0;
  }
  .layout-mobile .header-nav .header-nav__lists {
    display: block;
  }
}
</style>
