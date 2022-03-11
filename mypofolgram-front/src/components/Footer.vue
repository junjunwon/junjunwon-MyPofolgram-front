<template>
    <div class="footer">
        <i class="fa-solid fa-house" @click="moveTo('/')"></i>
        <i class="fa-solid fa-magnifying-glass" @click="moveTo('/search')"></i>
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
