<template>
  <div>
    <a-row v-bind:gutter="30">
      <a-col v-bind:span="12">
        <a-form
          v-bind:form="form"
          v-bind:wrapper-col="{ span: 16 }"
          v-bind:label-col="{ span: 8 }"
          v-on:submit="handleSubmit"
        >
          <!-- email -->
          <a-form-item label="Email">
            <a-input
              v-decorator="[
                'email',
                {
                  initialValue: currentUser.email
                }
              ]"
              v-bind:disabled="true"
            />
          </a-form-item>

          <!-- Username -->
          <a-form-item label="Username">
            <a-input
              v-decorator="[
                'user_name',
                {
                  initialValue: currentUser.user_name
                }
              ]"
              v-bind:disabled="true"
            />
          </a-form-item>

          <!-- Nickname -->
          <a-form-item label="Nickname">
            <a-input
              v-decorator="['nickname', {
                  rules: [
                    { required: true, message: 'nickname bắc buộc!' }
                  ],
                  initialValue: currentUser.nickname
                }
              ]"
              v-bind:disabled="false"
            />
          </a-form-item>

          <!-- Full name -->
          <a-form-item label="Họ và tên">
            <a-input
              v-decorator="['fullname', {
                  rules: [
                    { required: true, message: 'fullname bắc buộc!' }
                  ],
                  initialValue: fullname
                }
              ]"
              v-bind:disabled="false"
            />
          </a-form-item>

          <a-form-item label="Giới thiệu bản thân">
            <a-textarea
              placeholder="Controlled autosize"
              v-decorator="['description', {
                  initialValue: currentUser.description
                }
              ]"
              v-bind:auto-size="{ minRows: 5 }"
            />
          </a-form-item>

          <!-- button -->
          <a-form-item v-bind:wrapper-col="{ span: 16, offset: 8 }">
            <a-button type="primary" html-type="submit" v-bind:loading="loading">
              Cập nhật thông tin
            </a-button>
          </a-form-item>

        </a-form>
      </a-col>
      <!--  -->
      <a-col v-bind:span="12">
        <div>
          <p>Tải lên ảnh đại diện</p>
        </div>

        <a-upload
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          v-bind:show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          v-bind:customRequest="handleCustomRequest"
        >
          <img v-if="getAvatar" v-bind:src="getAvatar" alt="avatar" />
          <div v-else>
            <a-icon v-bind:type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>

      </a-col>
    </a-row>
  </div>
</template>
<script>

import { mapState, mapActions } from 'vuex';
export default {
  layout: 'admin',

  data() {
    return {
      loading: false,
      // imageUrl: '',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      fileUpload: {
        file: null,
        base64: ''
      }
    };
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser
    }),

    fullname() {
      return this.currentUser.first_name + ' ' + this.currentUser.last_name;
    },

    getAvatar() {
      if (this.fileUpload.base64) {
        return this.fileUpload.base64;
      }
      if (this.currentUser.simple_local_avatar) {
        return this.currentUser.simple_local_avatar.full
      }
      return ''
    }
  },

  methods: {
    ...mapActions({
      'actUploadProfile': 'auth/actUploadProfile'
    }),

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { first_name, last_name } = this.splitFullName(values.fullname);
          const data = {
            file: this.fileUpload.file,
            first_name,
            last_name,
            nickname: values.nickname,
            description: values.description,
          }
          this.loading = true;
          this.actUploadProfile(data)
            .then(res => {
              if (res.ok) {
                this.fileUpload = {
                  file: null,
                  base64: ''
                }
                this.$notification.success({
                  message: 'Success!',
                  description: 'Cập nhật profile thành công!'
                });
              } else {
                this.$notification.error({
                  message: 'Có lỗi xảy ra!',
                  description: res.error
                });
              }
              this.loading = false;
            })
        }
      });
    },

    splitFullName(fullNameStr) {
      var arrFullName = fullNameStr.split(' ').filter(str => str !== '');
      var first_name = arrFullName.pop();
      var last_name = arrFullName.join(' ');
      return {
        first_name,
        last_name
      }
    },

    validateImages(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$notification.error({
          message: 'Bạn chỉ có thể tải lên tệp JPG!',
        });
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$notification.error({
          message: 'Hình ảnh phải nhỏ hơn 2MB!',
        });
        return false;
      }
      return true;
    },

    handleCustomRequest({ file }) {
      if (this.validateImages(file) === false ) {
        return;
      }
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.fileUpload = {
          file: file,
          base64: reader.result
        }
      });
      reader.readAsDataURL(file);
    }
  },

}
</script>
<style>

</style>
