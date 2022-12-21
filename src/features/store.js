import {configureStore} from '@reduxjs/toolkit'
import { Posts } from './postsSlice'
import { Users } from './userSlice';
const store = configureStore({
    reducer:{
      posts:Posts,
      users:Users
    }
})

export default store;