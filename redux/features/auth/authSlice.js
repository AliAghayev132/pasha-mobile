import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveItem, deleteItem } from "@utils/SecureStore";
import { clearUser } from "../account/accountSlice";

// Define constants for storage keys
const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

const initialState = {
    accessToken: null,
    refreshToken: null,
}

// Create a thunk that will clear both tokens and user
export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { dispatch }) => {
        dispatch(clearTokens());
        dispatch(clearUser());
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearTokens: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            // Also remove from secure storage
            deleteItem(ACCESS_TOKEN_KEY);
            deleteItem(REFRESH_TOKEN_KEY);
        },
        setTokens: (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;

            // Save tokens to secure storage
            if (refreshToken) saveItem(REFRESH_TOKEN_KEY, refreshToken);
        },
    },
})

export const { setTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;