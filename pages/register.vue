<template>
  <main class="login">
    <div class="spacing"></div>
    <div class="tcl-container">
      <div class="tcl-row">
        <div class="tcl-col-12 tcl-col-sm-6 block-center">
          <h1 class="form-title text-center">Đăng ký</h1>
          <div class="form-login-register">
            <form action="">
              <div class="form-control">
                <label for="">Username</label>
                <input
                  v-model="username"
                  type="text"
                  placeholder="Enter Username ..."
                >
              </div>
              <div class="form-control">
                <label for="">Email</label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter Email ..."
                >
              </div>
              <div class="form-control">
                <label for="">Nickname</label>
                <input
                  v-model="nickname"
                  type="nickname"
                  placeholder="Enter nickname ..."
                >
              </div>
              <div class="form-control">
                <label for="">Password</label>
                <i
                  class="toggle-password ion-eye"
                  v-bind:class="togglePassword"
                  v-on:click="handleShowPassword"
                >
                </i>
                <input
                  v-model="password"
                  :type="typePassword"
                  placeholder="Enter Password ..."
                >
              </div>
              <div class="d-flex tcl-jc-between tcl-ais-center">
                <AppButton
                  type="primary"
                  class="btn-size-large"
                  v-bind:isLoading="isLoading"
                  @click.native="handleSubmit"
                  >
                  Đăng ký
                </AppButton>
                <nuxt-link to="/login">Đã có tài khoản?</nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="spacing"></div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
export default ({
  layout(context) {
    let userAgent = '';
    if (context.req) {
      userAgent = context.req.headers['user-agent']
    } else {
      userAgent = navigator.userAgent
    }
    if (/mobile/i.test(userAgent)) {
      return 'mobile';
    }
    return 'default';
  },

  data() {
    return {
      isLoading: false,
      username: '',
      password: '',
      email: '',
      nickname: '',
      isShowPassword: false
    }
  },

  computed: {
    typePassword() {
      if (this.isShowPassword) {
        return 'text';
      }
      return 'password'
    },

    togglePassword() {
      return {
        'icon-eye': !this.isShowPassword,
        'ion-eye-disabled': this.isShowPassword,
      }
    },

    handleShowPassword() {
      this.isShowPassword = !this.isShowPassword;
    }
  },

  methods: {
    ...mapActions({
      actRegister: 'auth/actRegister'
    }),

    handleSubmit(e) {
      e.preventDefault();

      this.isLoading = true;

      this.actRegister({
        email: this.email,
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      })
      .then(res => {
        if( res.ok ) {
          alert('Đăng ký thành công');
          this.$router.push('/');
        } else {
          alert("Đăng ký thất bại" + ' ' + res.error);
        }

        this.isLoading = false;
      })
    }
  },


})
</script>

<style>
@import '~/assets/css/login.css';
</style>
