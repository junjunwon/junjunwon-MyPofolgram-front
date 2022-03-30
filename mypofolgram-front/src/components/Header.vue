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
                        <li @click="postModal=true">
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
            <i class="fa-solid fa-heart" @click="moveTo('/activity')"></i>
            <i class="fa-solid fa-paper-plane"></i>
            <img @click="moveTo('/mypage')" src="/images/example.jpeg" alt="유저이미지" />
        </div>
    </div>
    <div v-if="postModal">
        <span>게시물 생성 모달</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCreate: false,
            postModal:false,
        };
    },
    methods: {
        toggle() {
            this.isCreate = !this.isCreate;
            if(this.isCreate == false){
                this.postModal = false;
            }
        },
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
    },
};
</script>
