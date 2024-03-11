<template>
    <div class="wrapper-content">
      <TheHeader/>
      <div v-if="openModalSale" class="modal-contact">
       <div class="modal-content">
          <div class="modal-content-box">
            <div class="btn-close">
              <button type="button" v-on:click="hanldCloseModal">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
            </div>
            <div class="sale-body">
              <a href="https://www.facebook.com/thosuabep" class="hotline__facebook__link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 44C10 24.2 27 8 48 8C69 8 86 24.2 86 44C86 63.8 69 80 48 80C44.4 80 40.8 79.4 37.6 78.6L22 88V70.2C14.6 63.6 10 54.4 10 44ZM44 34L24 56L42 46L52 56L72 34L54 44L44 34Z" fill="#101010"/>
                </svg>
                <div class="hotline__text">
                  Hỗ trợ trực tuyến
                </div>
              </a>

              <div class="contact-phone">
                <ul>
                    <li>
                      <div>
                        <b style="margin-right: 8px;">
                          Số điện thoại:
                        </b>
                      <a href="tel:+84798914136">
                        0798914136
                      </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b style="margin-right: 8px;">Địa chỉ:</b>
                         231/27 Kha Vạn Cân , Phường Hiệp Bình Chánh, TP Thủ Đức, TP HCM
                      </div>
                    </li>
                </ul>
              </div>

              <div style="text-align: center;">
                <a href="https://www.facebook.com/thosuabep" target="_blank">
                  <img src="/assets/images/logo.png" alt="NuxtBlog Logo" style="width: 120px; height: 120px; object-fit: contain;">
                </a>
              </div>
            </div>
          </div>
       </div>
      </div>
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
    components: { ScrollTop },
    data() {
      return {
        openModalSale: true,
      }
    },
    methods: {
      hanldCloseModal() {
        this.openModalSale = false
      }
    }
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

.modal-contact {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, .5);
  padding: 16px;
}
.modal-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content-box {
  position: relative;
  max-width: 500px;
  background-color: #fff;
  border-radius: 20px;
  padding: 16px;
}
.btn-close {
  position: absolute;
  right: 0;
  top: 0;
}
.btn-close button {
  border: none;
  background: none;
  padding: 12px;
}
.sale-body {
  padding-top: 40px;
}
.contact-phone  {
  margin-top: 20px;
}
.contact-phone ul {
  list-style: none;
  padding: 0;
}
</style>
