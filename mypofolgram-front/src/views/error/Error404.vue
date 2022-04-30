<template>
    <div>
        <h1>error page 404</h1>
        <p @click="goToLogin">redirect to Login Page</p>
    </div>
</template>
<script>
export default ({
    name : 'Error404',
    methods: {
        goToLogin(){
            this.$router.push({
                path: '/login',
            });
        }
    }
})
</script>
