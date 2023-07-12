<template>
  <div class="tcl-col-2">
    <!-- Logo -->
    <div
      class="header-logo"
      :class="{'scaleLogo': isScrolled}"
    >
      <a href="/" style="display: block; width: 100%; height: 100%;">
        <img src="/assets/images/logo.png" alt="Go to homepage" width="100%" height="100%" style="object-fit: contain;">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check the scroll position and update the isScrolled flag accordingly
      this.isScrolled = window.scrollY > 0;
    }
  }
}
</script>
<style>
.scaleLogo {
  transform: scale(1.4);
  transition: all .5s;
}
@media (max-width: 768px) {
  .scaleLogo {
    transform: scale(1.1);
  }
}
</style>
