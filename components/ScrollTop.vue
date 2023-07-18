<template>
  <div>
    <button v-if="showButton" @click="scrollToTop" class="scroll-to-top-btn">
      <i class="ion-chevron-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      if (window.pageYOffset > 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
.scroll-to-top-btn {
  position: fixed;
  bottom: 100px;
  right: 37px;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}
</style>
