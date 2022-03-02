<template>
    <div>
        <Header />
        <section>메인화면에 출력된 리스트</section>
        <Footer />
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
};
</script>
