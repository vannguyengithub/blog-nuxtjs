<template>
    <div class="article-item__info" v-if="isShowAvatar">
        <div class="article-item__author-image">
            <nuxt-link aria-label="John Doe" v-bind:to="getUserUrl">
                <img v-bind:src="getUserAvatar" v-bind:alt="nickname">
            </nuxt-link>
        </div>
        <div class="article-item__info-right">
            <div class="article-item__author-name">
                <nuxt-link v-bind:to="getUserUrl"><strong>{{ nickname }}</strong></nuxt-link>
            </div>
            <div class="article-item__datetime">
                <div class="date">{{ dataTime.format }}</div>
                <div class="time">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                        class="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                        </path>
                    </svg>
                    {{ dataTime.relative }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    props: {
        isShowAvatar: {
            type: Boolean,
            default: true
        },
        created: {
          type: String,
          default: null
        },
        avatar: {
          type: String,
          default: ''
        },
        nickname: {
          type: String,
          default: ''
        },
        userId: {
          type: Number,
          default: 0
        }
    },
    data() {
        return {
            defaultCreated: null
        };
    },
    computed: {
      dataTime() {
        let created = this.created || this.defaultCreated;
        let createdDayjs = this.$dayjs(created);

        return {
          format: createdDayjs.format('DD/MM/YYYY'),
          relative: createdDayjs.fromNow(),
        }
      },
      getUserUrl() {
        return `/user/`+ this.userId
      },
      getUserAvatar() {
        if(this.avatar) {
          return this.avatar;
        }

        const num = (this.userId % 4) + 1;
        return `/assets/images/avatar${num}.jpg`;
      }
    },

    mounted() {
        if (!this.created) {
            this.defaultCreated = new Date().toISOString();
        }
    },
}

</script>
<style>

</style>
