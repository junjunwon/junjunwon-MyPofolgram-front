<template>
    <div>인스타 스토리 클릭시 출력 : {{ id }}</div>
</template>

<script>
export default {
    data() {
        return {
            id: "",
        };
    },
    mounted() {
        this.getStoryId();
    },
    methods: {
        getStoryId() {
            this.id = this.$route.params.id;
            console.log("스토리 id : " + this.id);
        },
    },
};
</script>
