<template>
    <div v-if="followingCount === 0" class="empty">
        <div>
            <i class="fa-solid fa-user-plus"></i>
            <p>팔로잉</p>
            <span>회원님이 팔로우하는 모든 사람이 여기에 표시됩니다.</span>
        </div>
    </div>
    <div v-else>
        <div v-for="(followee) in followeeList" v-bind:key="followee" class="people">
            <img src="/images/example.jpeg" alt="고양이" />
            <span>{{followee.follower}}</span>
            <div class="button right">팔로잉</div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['followeeList'],
    data() {
        return {
            followingCount: 3,
        };
    },

    mounted() {
        // followingCount
        // followingList
    },
};
</script>