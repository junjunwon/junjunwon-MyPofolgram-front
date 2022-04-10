<template>
    <div class="topWithButton">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <p class="bold">{{ title }}</p>
        <p class="point">완료</p>
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
export default {
    props: {
      users : {
        type : Object
      },
      type : {
        type : String
      }
    },
    data() {
        return {
            value: "value",
            title: "",
            message: "",
            nickname: "",
        };
    },

    created() {
        this.pageSetting(this.type);
        // store에서 페이지별 value값 가져와서 v-model로 넣기?
    },

    methods: {
        pageSetting(type) {
            switch (type) {
                case "name":
                    (this.title = "이름"),
                        (this.message =
                            "사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여회원님의 ㅣ계정을 찾을 수 있도록 도와주세요. 이름은 14일 안에 두 번만 변경할 수 있습니다.");
                    break;
                case "nickname":
                    this.title = "사용자 이름";
                    this.message = `대부분의 경우 이후 14일 동안 사용자 이름을 다시 {{this.nickname}}(으)로 변경할 수 있습니다.`;
                    break;
                case "intro":
                    this.title = "소개";
                    break;
            }
        },
        remove(){
            this.value="";
        }
    },
};
</script>
