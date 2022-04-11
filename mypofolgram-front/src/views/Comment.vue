<template>
    <div>댓글창</div>
</template>

<script>
export default {
    data() {
        return {
            postId: "",
            rows: [],
        };
    },
    mounted() {
        this.postId = this.$route.params.id;
        // console.log("this.postId : "+this.postId);
        this.getComments();
    },
    methods: {
        // api 호출시 파라미터로 게시글 아이디 전달
        getComments() {
            let response = {
                content: "여기완전 맛집",
                rows: [
                    {
                        id: 1, //댓글 아이디
                        nickName: "eunjeong",
                        userImgUrl: "/images/example.jpeg",
                        comment: "인정인정",
                        createDate: "2022/04/10",
                    },
                    {
                        id: 2, //댓글 아이디
                        nickName: "nick",
                        userImgUrl: "/images/example.jpeg",
                        comment: "@eunjeong",
                        createDate: "2022/04/11",
                    },
                    {
                        id: 3, //댓글 아이디
                        nickName: "name",
                        userImgUrl: "/images/example.jpeg",
                        comment: "",
                        createDate: "2022/04/1",
                    },
                ],
            };
            this.rows = response.rows;
        },
    },
};
</script>
