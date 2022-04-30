import jwt from "../../utils/jwt"

export default {
    count : 0,
    token : {
        accessToken : jwt.getToken()
    },
    isAuthenticated : !!jwt.getToken()
}