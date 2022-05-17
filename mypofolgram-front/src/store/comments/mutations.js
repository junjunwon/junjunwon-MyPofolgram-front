export default {
    setPostForComment : (state, payload) => {
        state.postForComment.id = payload.id
        state.postForComment.content = payload.content
        state.postForComment.createDate = payload.createDate,
        state.postForComment.hashtags = payload.hashtags
        state.postForComment.nickName = payload.nickName
        state.postForComment.userImgUrl = payload.userImgUrl
    }
}