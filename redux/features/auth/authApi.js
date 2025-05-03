import { setTokens } from './authSlice';
import { API_URL } from '@constants/Api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/auth` }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            setTokens({
              accessToken: data.tokens.accessToken,
              refreshToken: data.tokens.refreshToken,
            }),
          );
        } catch (err) {
          console.error('Login failed:', err);
        }
      },
    }),
    refreshAccessToken: builder.mutation({
      query: (token) => ({
        method: 'POST',
        url: '/refresh-token',
        headers: {
          'Authorization': `Bearer ${token} type=refresh`
        }
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            setTokens({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            }),
          );

        } catch (err) {
          console.error('Refresh token failed:', err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshAccessTokenMutation
} = authApi;
