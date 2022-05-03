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
            <div>사진과 동영상을 여기에 끌어다 놓으세요.</div>
            <!-- <a @click="showRegister = false" title="Button push lightblue" class="button btnPush btnLightBlue">컴퓨터에서 선택</a> -->
            <!-- <input type="file" @change="onFileSelected" ref="fileInput" class="input" /> -->
            <input
                ref="fileInput"
                id="input"
                type="file"
                name="image"
                accept="image/*"
                multiple="multiple"
                class="input"
                @change="uploadImage()"
            />

            <div v-if="this.images.length" class="imagesWrap">
                <img :src="this.images" />
            </div>

            <br />
            <div @click="$refs.fileInput.click()" class="buttonBackground">컴퓨터에서 선택</div>
        </template>
        <template #footer>
            <div></div>
        </template>
    </new-post>
</template>

<script>
import modal from "./modal.vue";
// import axios from 'axios'

export default {
    components: {
        newPost: modal,
    },
    data() {
        return {
            isCreate: false,
            imgTest: "/images/example.jpeg",
            showRegister: false,
            selectedFile: null,
            showComplete: false,
            images: "",
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
        show(type) {
            this[type] = true;
            this.isCreate = false;
        },
        uploadImage() {
            let form = new FormData();
            // let image = document.getElementById("input").files[0];
            let image = this.$refs["fileInput"].files[0];

            // image를 찾지못하는(null) 원인을 먼저 찾아야함.
            // console.log(image);

            form.append("fileInput", image);

            // 업로드 api를 실행한 후 이미지 경로를 받아야함
            this.images = "/images/example.jpeg";

            // 업로드 API
            // axios
            //     .post("/upload", form, {
            //         header: { "Content-Type": "multipart/form-data" },
            //     })
            //     .then(({ data }) => {
            //         this.images = data;
            //     })
            //     .catch((err) => console.log(err));
        },
    },
};
</script>

<style scoped>
.buttonBackground {
    width: 130px;
    height: 32px;
    cursor: pointer;
}
.input {
    display: none;
}
.imagesWrap {
    width: 550px;
    height: 556px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
}
.imagesWrap img {
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 20px 20px;
}
</style>
