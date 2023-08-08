<template>
    <header id="header" class="header-pc">
      <div class="hotline">
        <div class="hotline__phone hotline__text">Hotline: 0798914136</div>
        <div class="hotline__facebook">
          <a href="https://www.facebook.com/thosuabep" class="hotline__facebook__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 44C10 24.2 27 8 48 8C69 8 86 24.2 86 44C86 63.8 69 80 48 80C44.4 80 40.8 79.4 37.6 78.6L22 88V70.2C14.6 63.6 10 54.4 10 44ZM44 34L24 56L42 46L52 56L72 34L54 44L44 34Z" fill="#101010"/>
            </svg>
            <div class="hotline__text">
              Hỗ trợ trực tuyến
            </div>
          </a>
        </div>
      </div>
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
  .hotline {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding: 4px 28px;
    /* background: #101010; */
  }
  .hotline__facebook__link {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .hotline__facebook__link svg {
    width: 20px;
    height: 20px;
  }
  .hotline__text {
    font-size: 12px;
    line-height: 24px;
    color: #b3b3b3;
  }
  @media (max-width: 768px) {
    .hotline {
      justify-content: center;
    }
  }
</style>
