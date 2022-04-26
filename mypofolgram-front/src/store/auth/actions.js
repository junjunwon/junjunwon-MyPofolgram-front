
import http from "../../utils/http";

export default {
    login : function(context, payload) {
        let params = {
            userId : payload.userId,
            password : payload.password
        }
        return new Promise((resolve, reject) => {
            http
                .post("/api/authenticate", params)
                .then(response => {
                    const { data } = response
                    context.context("login", {
                        accessToken : data.accessToken
                    })
                    
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    logout: function(context, payload) {
        return new Promise(resolve => {
            setTimeout(function () {
                context.commit("logout", payload)
                resolve({})
            }, 1000)
        })
    }
}