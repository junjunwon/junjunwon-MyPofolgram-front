<template>
    <div class="footer">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-clapperboard"></i>
        <i class="fa-solid fa-circle-user" @click="moveTo('/mypage')"></i>
    </div>
</template>

<script>
export default {
    methods:{
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
    }
}
</script>
