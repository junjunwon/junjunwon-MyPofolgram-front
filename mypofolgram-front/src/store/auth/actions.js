
import http from "../../utils/http";

export default {
    login : function(context, payload) {
        let params = {
            username : payload.userId,
            password : payload.password
        }
        //동기식으로 처리하기 위해 promise 사용
        return new Promise((resolve, reject) => {
            http
                .post("/api/authenticate", params)
                .then(response => {
                    const { data } = response
                    context.commit("login", {
                        accessToken : data.accessToken,
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    logout: function(context, payload) {
        debugger
        return new Promise(resolve => {
            setTimeout(function () {
                context.commit("logout", payload)
                resolve({})
            }, 1000)
        })
    }
}