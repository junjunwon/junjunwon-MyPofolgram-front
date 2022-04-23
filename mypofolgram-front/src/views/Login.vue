<template>
    <div class="login">
        <h1 class="logo">
            <img src="/images/logo.png" alt="" />
        </h1>
        <form 
            action=""
            @submit="checkLogin"
            method="post"
        >
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
                >
            </p>
            <p>
                <input
                class="formInput"
                id="password"
                v-model="password"
                type="password"
                name="password"
                >
            </p>
            <p>
                <input
                class="button"
                style="margin-bottom : 1vh; font-size:small; font-weight: bolder;"
                value="비밀번호를 잊으셨나요?"
                >
            </p>
            <p>
                <input
                class="buttonBackground"
                type="submit"
                value="Submit"
                >
            </p>
        </form>
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            errors: [],
            name: null,
            email: null
        }
    },
}
</script>
