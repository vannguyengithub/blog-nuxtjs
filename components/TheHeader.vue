<template>
    <header id="header" class="header-pc">
      <div class="tcl-container">
        <div class="tcl-row tcl-no-gutters header">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenus/>
        </div>
      </div>
    </header>
</template>
<script>

import HeaderLogo from './HeaderLogo.vue';
import HeaderMenus from './HeaderMenus.vue';
import HeaderSearch from './HeaderSearch.vue';
import MainMenus from './MainMenus.vue';

export default {
    components: { MainMenus, HeaderLogo, HeaderSearch, HeaderMenus },

}
</script>
<style>
    @import url('~/assets/css/header.css');

</style>
