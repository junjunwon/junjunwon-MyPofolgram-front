<template>
    <div class="modify">
        <div class="topWithButton">
            <span @click="$router.go(-1)">취소</span>
            <p>프로필 수정</p>
            <span class="point">완료</span>
        </div>
        <div class="profile">
            <img src="/images/user.png" alt="" />
            <p class="point">프로필 사진 바꾸기</p>
        </div>
        <ul class="modifyList">
            <li>
                <span>이름</span>
                <input type="text" placeholder="이름" v-model="name" @click="modifyProfile" id="name" />
            </li>
            <li>
                <span>사용자 이름</span>
                <input type="text" placeholder="사용자 이름" v-model="nickname" @click="modifyProfile" id="nickname" />
            </li>
            <li>
                <span>웹사이트</span>
                <input type="text" placeholder="웹사이트" v-model="website" />
            </li>
            <li>
                <span>소개</span>
                <input type="text" placeholder="소개" v-model="intro" @click="modifyProfile" id="intro" />
            </li>
        </ul>
        <p class="point">프로페셔널 계정으로 전환</p>
        <p class="point">개인정보 설정</p>
    </div>
</template>

<script>
export default {
    props:["user"],

    data() {
        return {
            name: "",
            nickname: "",
            website: "",
            intro: "",
        };
    },

    mounted() {
        // 저장된 정보들 가져와서 data에 넣기

        // props 테스트
        console.log(typeof(this.user));
        // console.log(JSON.stringify(this.user));
    },

    methods: {
        modifyProfile(e) {
            let id = e.target.id;
            console.log("id : " + id);
            this.$router.push({ name: "modifyProfile", params: { type: id } });
        },
    },
};
</script>
