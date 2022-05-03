<template>
    <div class="header">
        <h1 class="logo">
            <img src="/images/logo.png" alt="" @click="moveTo('/')"/>
        </h1>
        <div class="iconList">
            <div class="plusWrap">
                <i class="fa-solid fa-square-plus" @click="toggle"></i>
                <div class="createModal" v-if="isCreate">
                    <ul>
                        <li @click="show('showRegister')">
                        <!-- <li @click="showRegister = true"> -->
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
    <!-- use the modal component, pass in the prop -->
    <new-post :show="showRegister" @close="showRegister = false">
        <template #header>
            <div class="topWithButton">
                <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
                <p class="bold">새 게시물 만들기</p>
                <i @click="onUpload" class="point">다음</i>
            </div>
        </template>
        <template #body>
            <img src="" alt="" />
            <div>사진과 동영상을 여기에 끌어다 놓으세요.</div>
            <!-- <a @click="showRegister = false" title="Button push lightblue" class="button btnPush btnLightBlue">컴퓨터에서 선택</a> -->
            <input type="file" @change="onFileSelected" ref="fileInput" class="input" />
            <br />
            <div @click="$refs.fileInput.click()" class="buttonBackground">컴퓨터에서 선택</div>
        </template>
        <template #footer>
            <div></div>
        </template>
    </new-post>
</template>

<script>
import modal from './modal.vue'

export default {
    components : {
        'newPost' : modal,
    },
    data() {
        return {
            isCreate: false,
            imgTest : "/images/example.jpeg",
            showRegister: false,
            selectedFile: null,
            showComplete : false,
        };
    },
    methods: {
        toggle() {
            this.isCreate = !this.isCreate;
        },
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
        show(type){
            this[type] = true;
            this.isCreate = false;
        }
    },
};
</script>

<style scoped>
.buttonBackground {
    width:130px;
    height:32px;
    cursor: pointer;
}
.input {
    display: none;
}
</style>
