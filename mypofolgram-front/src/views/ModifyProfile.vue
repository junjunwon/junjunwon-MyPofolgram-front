<template>
    <div class="topWithButton">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <p class="bold">{{ title }}</p>
        <p class="point" @click="set">완료</p>
    </div>
    <div class="modifyProfile">
        <p class="medium">{{ title }}</p>
        <input type="text" v-model="value"/>
        <i class="fa-solid fa-circle-xmark right" @click="remove"></i>
        <div class="line"></div>
        <p class="small">{{ message }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    props: ['userId', 'userName', 'introduction', 'type', 'systemId'],
    data() {
        return {
            value: "",
            title: "",
            message: "",
            nickname: ""
        };
    },
    watch : {
    },
    created() {
        this.pageSetting(this.type);
        // store에서 페이지별 value값 가져와서 v-model로 넣기?
    },
    computed : {
        ...mapState('userInfo', ['userInfo']),
    },
    methods: {
        ...mapActions('userInfo', ['setProfile', 'getUserInfo']),
        pageSetting(type) {
            switch (type) {
                case "name":
                    (this.title = "이름"),
                        (this.message =
                            "사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여회원님의 ㅣ계정을 찾을 수 있도록 도와주세요. 이름은 14일 안에 두 번만 변경할 수 있습니다.");
                    this.value=this.userId
                    break;
                case "nickname":
                    this.title = "사용자 이름";
                    this.message = `대부분의 경우 이후 14일 동안 사용자 이름을 다시 {{this.nickname}}(으)로 변경할 수 있습니다.`;
                    this.value=this.userName
                    break;
                case "intro":
                    this.title = "소개";
                    this.value=this.introduction
                    break;
            }
        },
        remove(){
            this.value=""
        },
        async set() {
            await this.setProfile({'type' : this.type, 'value' : this.value, 'systemId' : this.systemId})
            // await this.getUserInfo()
            this.$router.go(-1)
            // this.$router.push({ name: 'modify'})
        }
    },
};
</script>
