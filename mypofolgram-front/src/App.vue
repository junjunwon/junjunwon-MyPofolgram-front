<template>
    <div>
        <Header v-if="showHeader"/>
        <router-view />
        <Footer v-if="showFooter"/>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { mapActions } from 'vuex'

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    created() {
        this.getUserInfo()
    },
    computed:{
        showHeader(){
            let hidePaths = ["/mypage", "/activity", "/comment"];
            hidePaths = hidePaths.filter((e) => this.$route.path.startsWith(e));
            return hidePaths.length ===0;
        },
        showFooter(){
            let hidePaths = ["/mypage/modify", "/comment"];
            hidePaths = hidePaths.filter((e) => this.$route.path.startsWith(e));
            return hidePaths.length ===0;
        }
    },
    methods : {
        ...mapActions('userInfo', ['getUserInfo'])
    }
};
</script>
