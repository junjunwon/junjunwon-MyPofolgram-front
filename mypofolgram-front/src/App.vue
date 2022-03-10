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

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },

    computed:{
        showHeader(){
            let hidePaths = ["/mypage"];
            hidePaths = hidePaths.filter((e) => this.$route.path.startsWith(e));
            return hidePaths.length ===0;
        },
        showFooter(){
            let hidePaths = ["/mypage/modify"];
            hidePaths = hidePaths.filter((e) => this.$route.path.startsWith(e));
            return hidePaths.length ===0;
        }
    }
};
</script>
