import axios from 'axios'

export default {
    async getUserInfo ({state, commit}) {
        console.log("state.userInfo.userId : ")
        console.log(state.userInfo.userId)
        const response = await axios.get('/user/getProfileInfo', {params : {userId : state.userInfo.userId}}, {headers: {'Content-type': 'application/json;'}})

        commit('setUserInfo', response.data.result)
    },
    async setProfile ({commit}, param) {
        const response = await axios.post('/user/setProfile', param, {headers: {'Content-type': 'application/json;'}})
        commit('setUserInfo', response.data.result)
    }
}