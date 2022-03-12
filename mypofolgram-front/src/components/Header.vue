<template>
    <div class="header">
        <h1 class="logo">
            <img src="/images/logo.png" alt="" />
        </h1>
        <div class="iconList">
            <div class="plusWrap">
                <i class="fa-solid fa-square-plus" @click="toggle"></i>
                <div class="createModal" v-if="isCreate">
                    <ul>
                        <li>
                            <span>게시물</span>
                            <i class="fa-solid fa-table-cells"></i>
                        </li>
                        <li>
                            <span>스토리</span>
                            <i class="fa-solid fa-circle-plus"></i>
                        </li>
                        <li>
                            <span>릴스</span>
                            <i class="fa-solid fa-clapperboard"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-paper-plane"></i>
            <img src="/images/example.jpeg" alt="유저이미지" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCreate: true,
        };
    },
    methods: {
        toggle() {
            console.log(this.isCreate);
            this.isCreate = !this.isCreate;
        },
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
    },
};
</script>
