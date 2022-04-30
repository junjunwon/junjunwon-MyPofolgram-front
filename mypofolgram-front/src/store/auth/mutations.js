import jwt from "../../utils/jwt"

export default {
    login: function(state, payload = {}) {
        state.token.accessToken = payload.accessToken
        state.isAuthenticated = true
        jwt.saveToken(payload.accessToken)
    },
    logout: function(state, payload = {}) {
        state.token.accessToken = ""
        state.isAuthenticated = false
        jwt.destroyToken()
    }
}