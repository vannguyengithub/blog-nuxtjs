<template>
    <button
        v-if="!href"
        v-bind:class="classNames">
        <slot />
        <AppLoadingSvg v-if="isLoading"/>
    </button>
    <nuxt-link
        v-else
        v-bind:to="href"
        v-bind:class="classNames">
        <slot />
        <AppLoadingSvg v-if="isLoading"/>
    </nuxt-link>
</template>
<script>
import AppLoadingSvg from './AppLoadingSvg.vue';

export default {
    props: {
        href: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "default"
        },
        isLoading: {
          type: Boolean,
          default: false
        }
    },
    computed: {
        classNames() {
            return {
                "btn": true,
                "btn-default": this.type === "default",
                "btn-category": this.type === "category",
                "btn-primary": this.type === "primary"
            };
        }
    },
    components: { AppLoadingSvg }
}
</script>
<style>
@import url('~/assets/css/button.css');
</style>
