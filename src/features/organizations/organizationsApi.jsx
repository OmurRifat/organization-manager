import { apiSlice } from "../api/apiSlice";

const organizationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        organizationsPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
              url: '/organizations',
              method: 'POST',
              body: data
            }),
            }),

        organizationsGet: builder.query({
            // note: an optional `queryFn` may be used in place of `query`
            query: () => ({
              url: '/organizations',
            }),
            })
    })
})
export const {useOrganizationsPostMutation, useOrganizationsGetQuery} = organizationsApi;


