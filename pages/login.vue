<template>
  <main class="login">
    <div class="spacing"></div>
    <div class="tcl-container">
      <div class="tcl-row">
        <div class="tcl-col-12 tcl-col-sm-6 block-center">
          <h1 class="form-title text-center">Đăng nhập</h1>
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
                  Đăng nhập
                </AppButton>
                <!-- <button class="btn btn-primary btn-size-large">Submit</button> -->
                <nuxt-link to="/register">Đăng ký</nuxt-link>
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
export default {
  middleware: 'notAuthenticated',

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
    }

  },

  methods: {
    ...mapActions({
      actLogin: 'auth/actLogin'
    }),

    handleSubmit(e) {
      // ngăn chặn trang web load lại
      e.preventDefault();

      this.isLoading = true;

      if (this.username && this.password) {
        this.actLogin({
          username: this.username,
          password: this.password,
        })
        .then(res => {
          if (res.ok) {
            alert('Đăng nhập thành công');
            this.$router.push('/');
          } else {
            alert('Đăng nhập thất bại');
            // switch (res.error) {
            //   case '[jwt_auth] incorrect_password':
            //     alert ('Mật khẩu không hợp lệ!');
            //     break;

            //   case '[jwt_auth] invalid_username':
            //     alert ('Username không hợp lệ!');
            //     break;

            //   default:
            //     alert('Đăng nhập thất bại!');
            //     break;
            // }
          }
          this.isLoading = false;
        })
      }
    },
    handleShowPassword() {
      this.isShowPassword = !this.isShowPassword;
    }
  }

}
</script>

<style>
@import '~/assets/css/login.css';
</style>
