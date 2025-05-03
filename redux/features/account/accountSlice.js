import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    }
})

export const { setUser, clearUser } = accountSlice.actions;

export default accountSlice.reducer;