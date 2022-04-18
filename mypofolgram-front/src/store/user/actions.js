import axios from 'axios'

export default {
    async getUserInfo ({commit}) {
        const response = await axios.get('/user/getProfileInfo', {params : {userId : 'woq2611'}}, {headers: {'Content-type': 'application/json;'}})

        commit('setUserInfo', response.data.result)
    },
    async setProfile ({commit}, param) {
        const response = await axios.post('/user/setProfile', param, {headers: {'Content-type': 'application/json;'}})
        commit('setUserInfo', response.data.result)
    }
}