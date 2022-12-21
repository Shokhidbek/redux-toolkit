import {createSlice} from '@reduxjs/toolkit'



const users = createSlice({
    name:"users",
    initialState:{
        users:[
            {
                id:1,
                name:"phone"
            }
        ]
    },
    reducers:{
        getUsers:(state , {payload}) => {
          state.posts = payload
        }
    }
})
export const {getUsers}  = users.actions;
export const Users = users.reducer