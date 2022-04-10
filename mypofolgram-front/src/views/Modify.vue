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
                <input type="text" placeholder="이름" v-model="users.userId" id="name" @click="viewPage = 'userId'" />
            </li>
            <li>
                <span>사용자 이름</span>
                <input type="text" placeholder="사용자 이름" v-model="users.userName" id="nickname" @click="viewPage = 'userName'"/>
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
      <ModifyProfile
          v-if="viewPage === 'modifyUserId'"
          :users="users"
          :type="viewPage"
      ></ModifyProfile>
    </div>
</template>

<script>
import ModifyProfile from "./ModifyProfile"

export default {
    components : {
      ModifyProfile
    },
    data() {
        return {
            userId: "",
            userName: "",
            website: "",
            introduction: "",
            viewPage : "",
          users : {}
        };
    },
    created() {
        // 저장된 정보들 가져와서 data에 넣기
      this.users = this.$route.params
      console.log(this.users)
      console.log(this.users.id)
      console.log(this.users.userName)
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
