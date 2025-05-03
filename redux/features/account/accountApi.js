// Api
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../api/baseApi';

import { setUser } from './accountSlice';

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Partner'],
    endpoints: builder => ({
        // Partner specific endpoints
        getPartnerAccount: builder.query({
            providesTags: ['Partner'],
            query: () => '/account',
            pollingInterval: 5000, // 10 saniyede bir otomatik sorgu
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(setUser(data.partner));
                } catch (err) {
                    console.error('Partner fetch failed:', err);
                }
            },
        }),
        changePartnerPassword: builder.mutation({
            query: data => ({
                url: '/account/password',
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Partner'],
        }),
        editPartnerDetails: builder.mutation({
            query: data => ({
                url: '/account/details',
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Partner'],
        }),
    })
});

export const {
    // Export partner hooks
    useGetPartnerAccountQuery,
    useLazyGetPartnerAccountQuery,
    useChangePartnerPasswordMutation,
    useEditPartnerDetailsMutation,
} = accountApi;
