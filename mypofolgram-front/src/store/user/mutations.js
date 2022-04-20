export default {
    setUserInfo : (state, payload) => {
        state.userInfo = payload
    },
    setUserId : (state, payload) => {
        state.userInfo.userId = payload
    }
}