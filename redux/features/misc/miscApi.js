// Api
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../api/baseApi';
import { accountApi } from '../account/accountApi';

export const miscApi = createApi({
    reducerPath: 'miscApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Misc'],
    endpoints: builder => ({
        // Create new report endpoint
        createReport: builder.mutation({
            query: data => ({
                url: '/misc/report',
                method: 'POST',
                body: data,
            }),
        }),

        // Get checkups with pagination
        getCheckups: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: '/misc/checkups',
                method: 'GET',
                params: { page, limit },
            }),
            providesTags: ['Misc'],
        }),
        demandPayment: builder.mutation({
            query: () => ({
                url: '/misc/demand-payment',
                method: 'POST',
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(accountApi.util.invalidateTags(['Partner']));
                } catch (err) {
                    console.error('Demand payment failed:', err);
                }
            },
        }),
    })
});

export const {
    useGetCheckupsQuery,
    useCreateReportMutation,
    useDemandPaymentMutation,
} = miscApi;
