<template>
  <div>
    <a-row v-bind:gutter="30">
      <!--  -->
      <a-col v-bind:span="18">
        <!--  -->
        <a-form
          v-bind:form="form"
          v-bind:wrapper-col="{ span: 18 }"
          v-bind:label-col="{ span: 6 }"
          v-on:submit="handleSubmit"
        >
          <!-- start: password old -->
          <a-form-item label="Password" has-feedback>
            <a-input-password
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Mat khau cu bac buot phai nhap!',
                    },

                  ],
                },
              ]"
            />
          </a-form-item>
          <!-- end: password old -->

          <!-- start: password -->
          <a-form-item label="New Password" has-feedback>
            <a-input-password
              v-decorator="[
                'new_password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Mat khau moi la bac buoc!',
                    },
                    {
                      validator: validateToConfirmPassword,
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
          <!-- end: password -->

          <!-- start: confirm pass -->
          <a-form-item label="Confirm New Password" has-feedback>
            <a-input-password
              v-decorator="[
                'confirm_new_password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Vui long nhap lai mat khau moi!',
                    },
                    {
                      validator: compareToNewPassword,
                    },
                  ],
                },
              ]"
            v-on:blur="handleConfirmBlur"
            />
          </a-form-item>
          <!-- end: confirm pass -->

          <!-- button -->
          <a-form-item v-bind:wrapper-col="{ span: 18, offset: 6 }">
            <a-button type="primary" html-type="submit" v-bind:loading="loading">
              Đổi mật khẩu
            </a-button>
          </a-form-item>

        </a-form>
        <!--  -->
      </a-col>
      <!--  -->
    </a-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  layout: 'admin',

  data() {
    return {
      isTouchedConfirmValue : false,
      form: this.$form.createForm(this, { name: 'coordinated' }),
      loading: false,
    }
  },

  methods: {
    ...mapActions({
      actChangePassword: 'auth/actChangePassword'
    }),

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.loading = true;
          this.actChangePassword(values)
            .then(res => {
              this.loading = false;
              if (res.ok) {
                this.$notification.success({
                  message: 'Success!',
                  description: 'Doi mat khau thanh cong!'
                });
                this.form.resetFields();
              } else {
                this.$notification.error({
                  message: 'Có lỗi xảy ra!',
                  description: res.error
                });
              }
            })
        }
      });
    },

    handleConfirmBlur(e) {
      const value = e.target.value;
      this.isTouchedConfirmValue = this.isTouchedConfirmValue || !!value;
      // sự kiện blur mô tả sự việc người dùng đã nhấn chuột vào ô input
      // -> sau đó nhấn chuột ra ngoài -> sự kiện blur nó sẽ kích hoạt
    },

    compareToNewPassword(rule, confirm_new_password, callback) {
      const form = this.form;
      if (confirm_new_password && confirm_new_password !== form.getFieldValue('new_password')) {
        callback('Mat khau khong khop!');
      } else {
        callback();
      }
    },

    validateToConfirmPassword(rule, new_password, callback) {
      const form = this.form;
      if (new_password && this.isTouchedConfirmValue) {
        form.validateFields(['confirm_new_password'], { force: true });
      }
      callback();
    },

  },
}
</script>
<style>

</style>
