import { configureStore } from "@reduxjs/toolkit";
// Reducers
import authReducer from "./features/auth/authSlice";
import accountReducer from "./features/account/accountSlice";
// Api
import { authApi } from "./features/auth/authApi";
import { accountApi } from "./features/account/accountApi";
import { miscApi } from "./features/misc/miscApi";

const store = configureStore({
    reducer: {
        auth: authReducer,
        account: accountReducer,
        [authApi.reducerPath]: authApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [miscApi.reducerPath]: miscApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            accountApi.middleware,
            miscApi.middleware

        ),
})

export { store };