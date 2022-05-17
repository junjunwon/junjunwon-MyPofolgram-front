import { createStore } from "vuex";
import UserModule from './user'
import AuthModule from './auth'
import CommentModule from './comments'
// export default createStore({
//     modules : {
//         userInfo : UserModule,
//         auth : AuthModule
//     }    
// })

const store = createStore ({
    modules : {
        userInfo : UserModule,
        auth : AuthModule,
        comment : CommentModule
    }
})
export default store;