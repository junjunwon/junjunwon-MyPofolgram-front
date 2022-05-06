<template>
    <div class="login">
        <div>
          <h1 class="logo">
                <img src="/images/logo.png" alt="" />
            </h1>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>
            <p>
                <input
                    class="formInput"
                    id="userId"
                    v-model="userId"
                    type="text"
                    name="userId"
                    placeholder="로그인 아이디"
                >
            </p>
            <p>
                <input
                class="formInput"
                id="password"
                v-model="password"
                type="password"
                name="password"
                placeholder="비밀번호"
                >
            </p>
            <p>
                <input
                class="button"
                style="margin-bottom : 2vh; font-size:small; font-weight: bolder; cursor:pointer;"
                value="비밀번호를 잊으셨나요?"
                >
            </p>
            <p>
                <input
                class="buttonBackground"
                style="width: 41vh; height : 4.5vh; cursor:pointer;"
                @click="checkLogin"
                value="로그인"
                >
            </p>
        </div>
    </div>
    
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            errors: [],
            userId: '',
            password: ''
        }
    },
    created() {

    },
    computed : {

    },
    methods: {
        ...mapActions('auth', ['login']),
        checkLogin() {
            this.login( { userId : this.userId, password : this.password })
            .then(response => {
                if (response.status ===200) {
                    this.$router.push({
                        name: "main"
                    })
                }
            })
            .catch(({ message }) => alert(message))            
        }
    }
}
</script>
 
<style>
    input::placeholder {
        font-size: 1.5vh;
        text-indent: 10px;
    }
</style>
