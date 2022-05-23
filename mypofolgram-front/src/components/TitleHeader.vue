<template>
    <!-- <div class="header">{{userId}}</div> -->
    <div class="topBack">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <div>
            <p class="medium point3">{{userId}}</p>
            <p>{{userId}}</p>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name : 'TitleHeader',
    components : {
        
    },
    data() {
        return {
            userId : ''
        }
    },
    mounted() {
        this.userId = sessionStorage.getItem('userId')
    },
    computed : {
        ...mapGetters('userInfo', ['getterUserInfo']),
    },
    methods : {

    }
}
</script>