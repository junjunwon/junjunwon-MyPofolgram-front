
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
                    sessionStorage.setItem('userId', data.result.userId);
                    context.commit("login", {
                        accessToken : data.result.httpHeaders.Authorization
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
                sessionStorage.removeItem('clear');
                sessionStorage.clear();
                context.commit("logout", payload)
                resolve({})
            }, 1000)
        })
    }
}