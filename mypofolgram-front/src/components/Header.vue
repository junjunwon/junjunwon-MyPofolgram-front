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
                        <li @click="showRegister = true;">
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
    <!-- <div v-if="postModal">
        <span>게시물 생성 모달</span>
    </div> -->

    <!-- Mypage.vue에서 준호님 작업한 부분 가져다쓰기 -->
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
// import confirmModal from './confirmModal.vue'

export default {
    components : {
        'newPost' : modal,
        // 'confirmModal' : confirmModal
    },
    data() {
        return {
            isCreate: false,
            // postModal: false,
            // showRegister: false,
            // test: "",
            imgTest : "/images/example.jpeg",
            showRegister: false,
            // showDeveloping : false,
            selectedFile: null,
            showComplete : false,
            // localPosts : []
        };
    },
    methods: {
        toggle() {
            this.isCreate = !this.isCreate;
            // if (this.isCreate == false) {
            //     this.postModal = false;
            // }
        },
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
        test(){
            console.log("왜..?");
            this.showRegister = true;
            console.log(this.showRegister);
        }
    },
};
</script>
