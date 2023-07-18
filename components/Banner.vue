<template>
  <client-only>
    <div class="swiper banner__inner" ref="swiper">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <nuxt-link to="#">
            <img src="/assets/images/banner1.jpg" alt="slider">
          </nuxt-link>
        </div>
        <div class="swiper-slide">
          <nuxt-link to="#">
            <img src="/assets/images/banner2.png" alt="slider">
          </nuxt-link>
        </div>

      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </client-only>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // spaceBetween: 20,
      slidesPerView: 1,
    });
  },
};
</script>

<style>
.banner__inner {
	 overflow: hidden;
}
 .banner__inner .swiper-slide img {
	 width: 100%;
	 height: 100%;
	 object-fit: cover;
}

.swiper-button-next {
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid rgba(16,16,16,.1);
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(16,16,16,.1);
  border-radius: 999px;
}
.swiper-button-next::after {
  text-transform: none!important;
  letter-spacing: 0;
  text-transform: none;
  font-variant: normal;
  line-height: 1;
  font-size: 16px;
  color: #000;
}
.swiper-button-prev {
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid rgba(16,16,16,.1);
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(16,16,16,.1);
  border-radius: 999px;
}
.swiper-button-prev::after {
  text-transform: none!important;
  letter-spacing: 0;
  text-transform: none;
  font-variant: normal;
  line-height: 1;
  font-size: 16px;
  color: #000;
}
</style>
