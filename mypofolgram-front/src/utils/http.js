import axios from "axios"
import store from "../store"

const http = axios.create({
    baseURL : "http://localhost:8080",
    // baseURL : "https://myportfoliogram.herokuapp.com",
    headers : {"content-type" : "application/json"}
})

http.interceptors.request.use(
    config => {
        const isAuthenticated = store.getters["auth/isAuthenticated"]
        if(isAuthenticated) {
            config.headers.common["Authorization"] = store.getters["auth/getAccessToken"]
        }        
        return config
    },
    error => {
        Promise.reject(error)
    }
)

http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

export default http