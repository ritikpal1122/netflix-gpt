import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice ({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        removeUser: (state) => {
          return null
        }
    }
})
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;  //export the reducer to be used in the store