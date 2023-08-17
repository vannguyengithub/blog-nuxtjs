export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Thợ Sửa Bếp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,500;0,600;0,700;1,400&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
      { rel: 'stylesheet', href: 'assets/libs/bootstrap4/bootstrap-tcl.css' },
    ],

    script: [
      {
        type: 'text/javascript',
        hid: 'fb-customer-chat',
        body: true,
        innerHTML: `
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", 111048908616013);
          chatbox.setAttribute("attribution", "biz_inbox");

          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v17.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`
      },
    ],
    __dangerouslyDisableSanitizersByTagID: { 'fb-customer-chat': ['innerHTML'] },

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  router: {
    base: '/',
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/dayjs',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://api.thosuabep.com/wp-json',
    // baseUrl: process.env.BASE_URL || 'http://learning-nuxtjs.vn/wp-api/wp-json',
    // http://learning-nuxtjs.vn/wp-api/wp-json/wp/v2
  }
}
