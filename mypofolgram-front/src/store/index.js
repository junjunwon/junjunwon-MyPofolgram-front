import { createStore } from "vuex";
import UserModule from './user'
import AuthModule from './auth'

export default createStore ({
    modules : {
        userInfo : UserModule,
        auth : AuthModule
    }
})