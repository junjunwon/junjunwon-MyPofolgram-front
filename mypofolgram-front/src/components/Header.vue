<template>
    <div class="header">
        <h1 class="logo">
            <img src="/images/logo.png" alt="" @click="moveTo('/')" />
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
    <new-post :show="showRegister" @close="close('showRegister')">
        <template #header>
            <div class="topWithButton">
                <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
                <p class="bold">새 게시물 만들기</p>
                <i @click="onUpload" class="point">다음</i>
            </div>
        </template>
        <template #body>
            <div v-if="!files.length">
                <div>사진과 동영상을 여기에 끌어다 놓으세요.</div>
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

                <br />
                <div @click="$refs.fileInput.click()" class="buttonBackground">컴퓨터에서 선택</div>
            </div>
            <div v-else class="imagesWrap">
                <div v-for="(file, index) in files" :key="index">
                    <img :src="file.preview" />
                </div>
            </div>
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
            // 업로드용 파일들
            files: [],
            filesPreview: [],
            uploadImageIndex: 0, // 이미지 업로드를 위한 변수
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
        close(type) {
            switch (type) {
                case "showRegister":
                    this[type] = false;
                    this.files = [];
                    this.filesPreview = [];
                    this.uploadImageIndex = 0;
                    break;
                default:
                    console.log("close 함수 실행");
            }
        },
        uploadImage() {
            let num = -1;
            for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
                this.files = [
                    ...this.files,
                    //이미지 업로드
                    {
                        //실제 파일
                        file: this.$refs.fileInput.files[i],
                        //이미지 프리뷰
                        preview: URL.createObjectURL(this.$refs.fileInput.files[i]),
                    },
                ];
                num = i;
                //이미지 업로드용 프리뷰
                this.filesPreview = [...this.filesPreview, { file: URL.createObjectURL(this.$refs.fileInput.files[i]) }];
            }
            this.uploadImageIndex = num + 1; //이미지 index의 마지막 값 + 1 저장

            // 업로드 API - FormData에 담아서,,?
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
    /* height: 100%; */
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}
</style>
