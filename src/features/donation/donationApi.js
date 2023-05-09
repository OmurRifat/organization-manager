import { apiSlice } from "../api/apiSlice";

const donationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        donationPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
              url: '/donationHistory',
              method: 'POST',
              body: data
            }),
            }),

        donationGet: builder.query({
            // note: an optional `queryFn` may be used in place of `query`
            query: () => ({
              url: '/donationHistory',
            }),
            }),
   
        // organizationsGetById: builder.query({
        //     // note: an optional `queryFn` may be used in place of `query`
        //     query: (id) => ({
        //       url: `/organizations/${id}`,
        //     }),
        //     })
    })
    })

export const {useDonationPostMutation, useDonationGetQuery} = donationApi;


