// import axios from 'axios'
import http from '../../utils/http'

export default {
    async getUserInfo ({state, commit}) {
        const response = await http.get('/api/user/getUserInfo', {params : {userId : state.userInfo.userId}})
        commit('setUserInfo', response.data.result)
    },
    async setProfile ({commit}, param) {
        const response = await http.post('/api/user/setUserInfo', param)
        commit('setUserInfo', response.data.result)
    }
}