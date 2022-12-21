import {createSlice} from '@reduxjs/toolkit'
const posts = createSlice({
    name:"posts",
    initialState:{
        posts:[]
    },
    reducers:{
        getPosts:(state , {payload}) => {
          state.posts = payload
        }
    }
})
export const {getPosts}  = posts.actions;
export const Posts = posts.reducer