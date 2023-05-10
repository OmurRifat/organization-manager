import { apiSlice } from "../api/apiSlice";

const reviewApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        reviewPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
              url: '/reviews',
              method: 'POST',
              body: data
            }),
            }),

        reviewGet: builder.query({
            // note: an optional `queryFn` may be used in place of `query`
            query: () => ({
              url: '/reviews',
            }),
            }),
   
        // reviewGetById: builder.query({
        //     // note: an optional `queryFn` may be used in place of `query`
        //     query: (id) => ({
        //       url: `/organizations/${id}`,
        //     }),
        //     })
    })
    })

export const {useReviewPostMutation , useReviewGetQuery} = reviewApi;


