export default {
    getAccessToken: function(state) {
        return state.token.accessToken
    },
    isAuthenticated: function(state) {
        return state.isAuthenticated
    }
    
}